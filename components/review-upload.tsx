"use client";

import { ChangeEvent, FormEvent, useEffect, useRef, useState } from "react";

type FlowState = "empty" | "ready" | "reviewing" | "failed" | "complete";

const stages = [
  "Preparing screenshot",
  "Identifying interface regions",
  "Evaluating visible criteria",
  "Prioritizing observations",
  "Building the Design Review",
];

export function ReviewUpload() {
  const inputRef = useRef<HTMLInputElement>(null);
  const [file, setFile] = useState<File | null>(null);
  const [preview, setPreview] = useState("");
  const [error, setError] = useState("");
  const [flow, setFlow] = useState<FlowState>("empty");
  const [stage, setStage] = useState(0);

  useEffect(() => {
    if (!file) return;
    const url = URL.createObjectURL(file);
    setPreview(url);
    return () => URL.revokeObjectURL(url);
  }, [file]);

  useEffect(() => {
    if (flow !== "reviewing") return;
    if (stage === stages.length - 1) {
      const completeTimer = window.setTimeout(() => setFlow("complete"), 900);
      return () => window.clearTimeout(completeTimer);
    }
    const timer = window.setTimeout(() => setStage((value) => value + 1), 750);
    return () => window.clearTimeout(timer);
  }, [flow, stage]);

  function reset() {
    setFile(null);
    setPreview("");
    setError("");
    setFlow("empty");
    setStage(0);
    if (inputRef.current) inputRef.current.value = "";
  }

  function validateFile(event: ChangeEvent<HTMLInputElement>) {
    const selected = event.target.files?.[0];
    setError("");
    if (!selected) return;
    setFile(null);
    setPreview("");
    setFlow("empty");
    setStage(0);
    if (!["image/png", "image/jpeg"].includes(selected.type)) {
      setError("Choose a PNG or JPG screenshot. Other file types cannot be previewed here.");
      event.target.value = "";
      return;
    }
    if (selected.size > 10 * 1024 * 1024) {
      setError("This file is larger than 10 MB. Export a smaller PNG or JPG and try again.");
      event.target.value = "";
      return;
    }

    const image = new Image();
    const objectUrl = URL.createObjectURL(selected);
    image.onload = () => {
      URL.revokeObjectURL(objectUrl);
      if (image.naturalWidth < 640 || image.naturalHeight < 480) {
        setError("This screenshot is too small. Use an image at least 640 × 480 px so details remain readable.");
        event.target.value = "";
        return;
      }
      setFile(selected);
      setFlow("ready");
    };
    image.onerror = () => {
      URL.revokeObjectURL(objectUrl);
      setError("We could not read this image. Export it again as a PNG or JPG and retry.");
      event.target.value = "";
    };
    image.src = objectUrl;
  }

  function startPreview(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!file) {
      setError("Choose a screenshot before previewing the review flow.");
      inputRef.current?.focus();
      return;
    }
    setStage(0);
    setFlow("reviewing");
  }

  return (
    <section className="upload-workspace" id="start-review" aria-labelledby="upload-title">
      <div className="upload-intro">
        <p className="section-label">Start with your work</p>
        <h2 id="upload-title">Start a new Design Review</h2>
        <p>Choose one interface screenshot. Context helps the review connect visible evidence to the user goal.</p>
        <ul className="upload-requirements">
          <li>PNG or JPG</li><li>10 MB maximum</li><li>At least 640 × 480 px</li>
        </ul>
        <p className="privacy-copy"><strong>Prototype privacy:</strong> your image stays in this browser tab and is not uploaded, stored, or used for model training. This demo does not connect to a review service.</p>
      </div>

      <form className="upload-form" onSubmit={startPreview}>
        <label className={`upload-control ${error ? "upload-control--error" : ""}`}>
          <span className="upload-control__icon" aria-hidden="true">↑</span>
          <span><strong>{file ? "Screenshot selected" : "Choose a screenshot"}</strong><small>{file ? `${file.name} · ${(file.size / 1024 / 1024).toFixed(1)} MB` : "Browse PNG or JPG files"}</small></span>
          <input ref={inputRef} type="file" accept="image/png,image/jpeg" onChange={validateFile} aria-describedby={error ? "upload-help upload-error" : "upload-help"} disabled={flow === "reviewing"} />
        </label>
        <p id="upload-help" className="sr-only">PNG or JPG, no larger than 10 MB, and at least 640 by 480 pixels.</p>
        {error && <p className="upload-error" id="upload-error" role="alert">{error}</p>}

        {file && preview && (
          <div className="selected-preview">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={preview} alt="Preview of the selected screenshot" />
            <button className="link-button" type="button" onClick={reset}>Remove screenshot</button>
          </div>
        )}

        <div className="context-fields">
          <label><span>Project title</span><input name="title" required defaultValue="Untitled interface" disabled={flow === "reviewing"} /></label>
          <label><span>Primary user goal</span><input name="goal" required placeholder="For example, start a workout" disabled={flow === "reviewing"} /></label>
        </div>

        <div className="upload-actions">
          <button className="primary-button" type="submit" disabled={flow === "reviewing"}>{flow === "reviewing" ? "Previewing review…" : "Preview the review flow"}</button>
          <span>This runs a local prototype only.</span>
        </div>

        <div className="review-state" aria-live="polite" aria-busy={flow === "reviewing"}>
          {flow === "empty" && <p><strong>No screenshot selected.</strong> Choose one screen to begin; multi-screen flows work best as separate versions.</p>}
          {flow === "ready" && <p><strong>Ready to preview.</strong> Your screenshot passed local format, size, and resolution checks.</p>}
          {flow === "reviewing" && (
            <div>
              <p><strong>{stages[stage]}</strong><span>Step {stage + 1} of {stages.length}</span></p>
              <ol>{stages.map((item, index) => <li key={item} className={index < stage ? "is-complete" : index === stage ? "is-active" : ""}>{index < stage ? "✓" : index + 1}. {item}</li>)}</ol>
              <button className="link-button" type="button" onClick={() => setFlow("failed")}>Preview an interrupted review</button>
            </div>
          )}
          {flow === "failed" && <div className="failed-state" role="alert"><p><strong>The prototype review was interrupted.</strong> Your screenshot is still selected. Retry from the first stage or choose a different image.</p><button className="secondary-button" type="button" onClick={() => { setStage(0); setFlow("reviewing"); }}>Retry preview</button></div>}
          {flow === "complete" && <p><strong>Review-flow preview complete.</strong> In a connected product, the Design Review would open here. No review was generated or saved in this demo. <a href="#latest-review">Explore the example review above.</a></p>}
        </div>
      </form>
    </section>
  );
}
