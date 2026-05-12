# Plateo Web

Sito web di Plateo — landing page per utenti e manager del ristorante.  
Costruito con **Next.js 15**, **TypeScript** e **Tailwind CSS**.

---

## Prerequisiti

Assicurati di avere installato sul tuo computer:

- [Node.js](https://nodejs.org/) versione **18 o superiore**
- [npm](https://www.npmjs.com/) (incluso con Node.js)
- [Git](https://git-scm.com/)

Per verificare che tutto sia a posto:

```bash
node -v   # deve essere >= 18
npm -v
git -v
```

---

## Clonare il repository

```bash
git clone https://github.com/Ste-Fano98/Plateo-Web.git
cd Plateo-Web
```

---

## Installare le dipendenze

```bash
npm install
```

---

## Avviare il server di sviluppo

```bash
npm run dev
```

Apri il browser su [http://localhost:3000](http://localhost:3000).  
La pagina principale reindirizzerà automaticamente a `/UserLanding`.

---

## Struttura del progetto

```
Plateo-Web/
├── app/
│   ├── layout.tsx          # Layout globale (font, metadata)
│   ├── globals.css         # Stili globali
│   ├── page.tsx            # Redirect a /UserLanding
│   ├── UserLanding/        # Landing page per gli utenti
│   └── ManagerLanding/     # Landing page per i manager
├── public/
│   ├── logo/               # Logo Plateo
│   ├── hero/               # Immagini hero (desktop e mobile)
│   ├── benefits/           # Immagini sezione vantaggi
│   └── cards/              # Immagini delle feature card
├── next.config.ts          # Configurazione Next.js
├── tailwind.config.ts      # Configurazione Tailwind CSS
└── package.json
```

---

## Script disponibili

| Comando | Descrizione |
|---|---|
| `npm run dev` | Avvia il server di sviluppo con hot reload |
| `npm run build` | Compila il progetto per la produzione |
| `npm start` | Avvia il server in modalità produzione (dopo il build) |
| `npm run lint` | Controlla il codice con ESLint |

---

## Stack tecnologico

- **Next.js 15** — framework React con routing App Router
- **React 18** — libreria UI
- **TypeScript** — tipizzazione statica
- **Tailwind CSS** — stili utility-first
- **Google Fonts** — Poppins e Bodoni Moda

---

## Note

- Il dominio di produzione è `www.plateo.es` (configurato in `next.config.ts` per le immagini remote).
- Il branch principale è `main`; crea sempre un branch separato per le tue modifiche.
