# 🎬 Movie Explorer

Eine einfache, aber funktionale React-App zur Filmsuche mit Favoritenfunktion – ideal für dein Entwickler-Portfolio.

## 🚀 Features

- 🔍 **Live-Suche** nach Filmtiteln (OMDb API)
- ❤️ **Favoriten speichern** mit `localStorage`
- 🖼️ **Fallback-Bild**, wenn kein Poster verfügbar ist
- 🎨 **Responsive UI** mit Hover-Effekten und Animationen
- 🧠 **Duplikat-Erkennung** bei Filmen
- 🔐 **API-Key geschützt** über `.env`-Datei

## 🛠️ Technologien

- React (Create React App)
- OMDb API
- React Icons
- CSS (Custom Styling)
- LocalStorage

🧠 Warum dieses Projekt?
Dieses Projekt zeigt deine Fähigkeit, mit APIs zu arbeiten, State-Management umzusetzen und eine benutzerfreundliche Oberfläche zu gestalten – auch wenn du kein reiner Frontend-Entwickler bist. Es ist ein kompaktes, aber aussagekräftiges Beispiel für dein Portfolio.

📬 Kontakt
Bei Fragen oder Feedback:
👉 [GitHub-Profil von Yusuf](https://github.com/yukado)

## 📦 Installation

```bash
git clone https://github.com/YusufDeinBenutzername/movie-explorer.git
cd movie-explorer
npm install
🔑 API Key
Diese App verwendet die OMDb API. Erstelle eine .env-Datei im Projektstamm mit folgendem Inhalt: 
REACT_APP_OMDB_KEY=dein_api_key
▶️ Starten:
npm start
📁 Projektstruktur:
movie-explorer/
├── public/
├── src/
│   ├── App.js
│   ├── MovieCard.js
│   ├── App.css
│   └── ...
├── .env
├── .gitignore
├── README.md
└── package.json
