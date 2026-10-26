# 🍽️ Menü Planer

PWA zur Menüplanung für die Crèche-Küche (Luxemburg). Version 1.3.

## Funktionen
- **Gerichte-Datenbank** in drei Ebenen: Suppe, Vorspeise, Hauptgericht
- **Sprachinput** (Speech-to-Text, 🎤-Button) zum schnellen Erfassen neuer Gerichte
- **Editierbare Kategorien** mit Emoji und Farbe
- **Regelbasierter 3-Monats-Plan (13 Wochen)**: wählt ausschließlich aus den eigenen Gerichten – Regeln je Ebene konfigurierbar (Kategorie n×/Woche, Monatsgerichte, Mindestabstand, Frische-Tage nach Lieferplan Di/Do, Aufwands-Tage)
- **Archiv „Nicht mehr"** mit Bemerkung, warum ein Gericht nicht mehr gemacht wird; jederzeit zurückholbar
- **Plan auf Deutsch und Lëtzebuergesch**, mit Druckansicht
- **Sicherungs-Funktion**: Export/Import als JSON-Datei
- Offline nutzbar (Service Worker), als App auf dem Handy installierbar

## Deployment
GitHub Pages: Repo → Settings → Pages → Branch `main` → Save.
Danach erreichbar unter `https://stefanjost78-commits.github.io/Menue-Planer/`

## Daten
Alle Daten liegen lokal im Browser (localStorage). Kein Server, kein Sync –
regelmäßig über den Tab „Sicherung" exportieren.
