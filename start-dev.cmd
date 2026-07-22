@echo off
cd /d "C:\Users\amand\Desktop\Web App Bootcamp - S26"
call npm.cmd run dev > "dev-server.log" 2> "dev-server-error.log"
