# Execution Policy nur für diese Sitzung umgehen
Set-ExecutionPolicy -Scope Process -ExecutionPolicy Bypass -Force

# Port und URL deiner App
$port = 3000
$url = "http://localhost:$port"

# Dev-Server starten, aber Browser-Öffnen unterdrücken
# Für Create React App: BROWSER=none
# Für Vite: --open false
$env:BROWSER = "none"
Start-Process powershell -ArgumentList "npm start -- --open false"

# Warten, bis der Port erreichbar ist
Write-Host "Warte, bis Port $port erreichbar ist..."
while (-not (Test-NetConnection -ComputerName "localhost" -Port $port -InformationLevel Quiet)) {
    Start-Sleep -Seconds 1
}

# Edge starten (Pfad an dein System angepasst)
$edgePath = "C:\Program Files (x86)\Microsoft\Edge\Application\msedge.exe"
& "$edgePath" --inprivate $url
