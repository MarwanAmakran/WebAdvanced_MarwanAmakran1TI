# 🎌 Anime Explorer

Anime Explorer is een interactieve single-page webapplicatie, gemaakt voor het vak **Web Advanced**. De app maakt gebruik van de [Jikan API](https://jikan.moe) en laat gebruikers toe om anime te verkennen, te zoeken, te sorteren en toe te voegen aan hun favorieten.

---

## 📋 Functionaliteiten

- 🔍 Zoek op titel
- ↕️ Sorteer op titel, score of jaar
- ⭐ Favorieten opslaan (blijft bewaard via `localStorage`)
- 🌙 Donker/licht thema (geheugen in localStorage)
- 🖼️ Visuele lijst met 6 kolommen:
  - Afbeelding
  - Titel
  - Score
  - Type
  - Jaar
  - Studio
- 📱 Responsive design (Flexbox/Grid)

---

## 🔌 Gebruikte API

**Jikan API** – publieke anime-API gebaseerd op MyAnimeList  
- Endpoint:  
  `https://api.jikan.moe/v4/anime?order_by=score&sort=desc&limit=20`

---

## ⚙️ Gebruikte technieken

| Techniek / concept                      | Toepassing in project             |
|----------------------------------------|-----------------------------------|
| DOM manipulatie                        | `renderList()` in `main.js`       |
| Events (click/input/change)            | Knoppen, zoekveld, filters        |
| Template literals                      | HTML renderen met backticks       |
| `fetch`, `async/await`, JSON           | API-data ophalen en verwerken     |
| Array methods: `map`, `filter`, `sort` | Filteren/sorteren van anime-data  |
| Conditional operator (`??`)            | Fallbacks bij lege waarden        |
| `localStorage`                         | Opslaan van thema + favorieten    |
| Modules en imports                     | Gescheiden JS via Vite            |
| CSS Grid & Flexbox                     | Layout van kaarten + responsive   |
| Icons en visuals                       | Emojis + vlaggen in header        |
| Project opzet met Vite                 | `npm run dev`, `build`, `preview` |

---

## 🛠 Installatiehandleiding

1. Clone dit project
```bash
git clone https://github.com/marwan/Anime-Explorer.git
cd my-project
```

2. Installeer dependencies
```bash
npm install
```

3. Start de dev server
```bash
npm run dev
```

4. Builden voor productie
```bash
npm run build
npm run preview
```

---

## 📸 Screenshots

### 🏠 Homepage
![Homepage](image/homePage.png)

### 🌙 Donkere modus
![Dark Mode](image/darkmode.png)

### ⭐ Favorieten geselecteerd
![Favorieten](image/favorieten.png)

### 🔍 Zoekopdracht actief
![Zoekfunctie](image/zoekopdracht.png)

---

## 📁 Projectstructuur

```
my-project/
├── index.html
├── package.json
├── package-lock.json
├── public/
├── src/
│   ├── main.js
│   ├── style.css
├── image/
│   ├── homePage.png
│   ├── darkmode.png
│   ├── favorieten.png
│   ├── zoekopdracht.png
├── .gitignore
├── README.md
```

---

## 📦 Commit geschiedenis

- ✅ Initial commit  
- ✅ vite en html basis  
- ✅ Create README.md  
- ✅ heel mijn opdracht  
- ✅ header stylen  
- ✅ titel  
- ✅ maan verandert naar zon  
- ✅ Update style.css  
- ✅ header en vite inorde gebracht  
- ✅ Merge met GitHub hoofdrepo  
- ✅ 📸 screenshots toegevoegd  

---

## 👤 Auteur

**Naam:** Marwan Amakran  
**Klas:** 1TI  
**School:** Erasmushogeschool Brussel  
**Vak:** Web Advanced  
**Academiejaar:** 2024–2025

