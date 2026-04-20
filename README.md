<div align="center">
<img width="1200" height="475" alt="GHBanner" src="https://github.com/user-attachments/assets/0aa67016-6eaf-458a-adb2-6e31a0763ed6" />
</div>

# Web Project

A React-based web application built with Vite, TypeScript, and Tailwind CSS.

## Tech Stack

| Category | Technology |
|----------|------------|
| Framework | React 19 |
| Build Tool | Vite 6 |
| Language | TypeScript |
| Styling | Tailwind CSS 4 |
| Routing | React Router DOM 7 |
| Animation | Motion |
| Icons | Lucide React |
| API | Google GenAI |

## Project Structure

```
src/
├── App.tsx              # Main app with routing
├── main.tsx             # Entry point
├── index.css            # Global styles
├── components/
│   └── Navigation.tsx   # Navigation component
└── pages/
    ├── Pulse.tsx        # Home page
    ├── Engine.tsx       # Engine page
    ├── Tickets.tsx      # Tickets page
    ├── Vault.tsx        # Vault page
    └── EventDetails.tsx # Event details page
```

## Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server on port 3000 |
| `npm run build` | Build for production |
| `npm run preview` | Preview production build |
| `npm run lint` | Run TypeScript type checking |
| `npm run clean` | Remove dist folder |

## Run Locally

**Prerequisites:** Node.js

```bash
# Install dependencies
npm install

# Start development server
npm run dev
```

The app will be available at `http://localhost:3000`.

## Routes

- `/` - Pulse (Home)
- `/engine` - Engine
- `/tickets` - Tickets
- `/vault` - Vault
- `/event/:id` - Event Details
