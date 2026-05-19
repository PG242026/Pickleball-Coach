# 📘 Uitgebreide Handleiding - Implementatiegids

## Overzicht

Dit document beschrijft hoe je een uitgebreide, automatisch vertaalde handleiding in je Pickleball Coach AI app implementeert.

## Bestanden

### 1. `handleiding-content.js`
Bevat alle handleidingsteksten in Nederlands (NL) en Engels (EN).

**Structuur:**
```javascript
const handleidingInhoud = {
  nl: {
    title: "...",
    toc: "...",
    sections: {
      intro: { title: "...", content: "..." },
      quickstart: { ... },
      // ... meer secties
    }
  },
  en: {
    // Dezelfde structuur in Engels
  }
}
```

**Secties:**
- `intro` - Introductie
- `quickstart` - Aan de slag
- `players` - Spelers beheren
- `video` - Video opnemen
- `youtube` - YouTube vergelijking
- `ai` - AI Analyse
- `moments` - Momenten markeren
- `save` - Sessies opslaan
- `tips` - Tips & Trucs
- `faq` - Veelgestelde vragen
- `exercises` - Oefeningen

### 2. `guide-modal.html`
Bevat HTML/CSS/JavaScript voor de interactieve modal met:
- Responsive design
- Zoekfunctie
- Navigatie tussen secties
- Automatische taalswitch
- Mooie styling

## Implementatiestappen

### Stap 1: Voeg de bestanden toe aan je project

```
project/
├── index.html
├── handleiding-content.js      ← Nieuw
├── guide-modal.html             ← Nieuw (extract JS & CSS)
└── styles.css
```

### Stap 2: Voeg content script toe aan index.html

```html
<!-- Voeg toe aan <head> -->
<script src="handleiding-content.js"></script>
```

### Stap 3: Voeg modal HTML en styles toe

Kopieer de HTML uit `guide-modal.html` naar je `index.html`:

```html
<!-- Voeg toe in <head> voor CSS -->
<style>
  /* Kopieer alle CSS van guide-modal.html */
</style>

<!-- Voeg toe in <body> -->
<!-- Enhanced Guide Modal with Multi-language Support -->
<div id="guideModal" class="guide-modal">
  <!-- ... modal HTML ... -->
</div>

<!-- Voeg toe in <script> -->
<script>
  // Kopieer alle JavaScript van guide-modal.html
</script>
```

### Stap 4: Update de handleiding button

Zorg dat je bestaande "📘 Handleiding" knop `openHandleiding()` aanroept:

```html
<button onclick="openHandleiding()">📘 Handleiding</button>
```

## Automatische Taalswitch

De handleiding wisselt automatisch van taal wanneer je de app-taal wijzigt:

1. **Nederlands** (NL) - Via `setTaal('nl')`
2. **Engels** (EN) - Via `setTaal('en')`

De handleiding haalt automatisch de gekozen taal op uit:
```javascript
localStorage.getItem('pickleballTaal')
```

## Functionaliteiten

### 🔍 Zoeken
Gebruikers kunnen in de handleiding zoeken via het zoekveld:
```
🔍 Zoeken in handleiding...
```

### 📑 Inhoudsopgave
Klikbare links naar alle secties

### ⌨️ Keyboard Shortcuts
- `ESC` - Handleiding sluiten
- `Enter` - Zoeken

### 📱 Responsive Design
- Desktop: Volledige layout
- Tablet: Aangepast grid
- Mobile: 1-kolom layout

### 🎨 Styling
- Groen thema (aanpassing aan app)
- Goud accenten voor highlights
- Transparante overlays
- Smooth animaties

## Taalstring Vertaalbeheer

### Nederlands (NL) - Volledig
- ✅ 10 grote secties
- ✅ Subsecties en tips
- ✅ Voorbeelden en scenario's

### Engels (EN) - Volledig
- ✅ 10 grote secties
- ✅ Professionele vertaling
- ✅ Consistent met NL

## Toevoegen van nieuwe content

### Stap 1: Voeg sectie toe aan beide talen

```javascript
// In handleiding-content.js
const handleidingInhoud = {
  nl: {
    sections: {
      // ... bestaande secties ...
      nieuw: {
        title: "🎯 Nieuwe Sectie",
        content: `
          <h4>Inhoud hier:</h4>
          <p>...</p>
        `
      }
    }
  },
  en: {
    sections: {
      // ... bestaande secties ...
      nieuw: {
        title: "🎯 New Section",
        content: `
          <h4>Content here:</h4>
          <p>...</p>
        `
      }
    }
  }
}
```

### Stap 2: Update Inhoudsopgave

De inhoudsopgave wordt automatisch gegenereerd uit de `sections` object.

## Styling Customization

### Kleuren aanpassen:
```css
.guide-content {
  background: linear-gradient(135deg, #1f5f3b 0%, #2d7d52 100%);
}

.guide-section h2 {
  color: #ffd700;  /* Goudkleur headers */
}

.guide-section strong {
  color: #ffd700;  /* Gouden accenten */
}
```

### Lettertype aanpassen:
```css
.guide-content {
  font-family: 'Your Font', Arial, sans-serif;
}
```

## Performance Tips

1. **Lazy Loading**: Content wordt alleen geladen bij opening
2. **Caching**: Taal voorkeur opgeslagen in localStorage
3. **Search**: Eenvoudige tekstzoekfunctie
4. **Mobile**: Geoptimaliseerde media queries

## Browser Compatibility

- ✅ Chrome/Edge 90+
- ✅ Firefox 88+
- ✅ Safari 14+
- ✅ Mobile browsers (iOS Safari, Chrome Mobile)

## Toekomstige Verbeteringen

- [ ] Video's toevoegen aan handleiding
- [ ] Interactive tutorials
- [ ] Filteren per niveau (Beginner/Intermediair/Gevorderd)
- [ ] Context-sensitive help (hulp op exacte locatie)
- [ ] Offline modus
- [ ] PDF export
- [ ] Social sharing (delen met spelers)
- [ ] Feedback/rating systeem

## Troubleshooting

### Handleiding toont niet:
1. Controleer dat `handleiding-content.js` geladen is
2. Check browser console op errors
3. Zorg dat `openHandleiding()` correct wordt aangeroepen

### Taal wisselt niet:
1. Controleer `localStorage` in dev tools
2. Zorg dat `setTaal()` wordt aangeroepen vóór `openHandleiding()`
3. Clear browser cache

### Styling is stuk:
1. Controleer CSS in `<head>`
2. Zorg dat geen CSS conflicts zijn met hoofd-app
3. Check `z-index` waarden

## Support

Voor vragen over de handleiding implementatie:
- Check deze gids
- Controleer console logs
- Review de bestandscode

---

**Versie:** 1.0  
**Laatst bijgewerkt:** Mei 2025  
**Auteur:** Pickleball Coach AI Team
