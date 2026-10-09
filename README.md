# DAIKO Portfolio

A modern, clean portfolio website built with **React**, **TypeScript**, **Tailwind CSS**, and **Vite**.

## 🚀 Quick Start

```bash
# Install dependencies
bun install

# Start development server
bun run dev
```

The site will be available at `http://localhost:5173`

## 📦 Build for Production

```bash
# Build the project
bun run build

# Preview production build
bun run preview
```

## 🏗️ Project Structure

```
.
├── package.json
├── packages/
│   └── web/
│       ├── src/
│       │   └── web/
│       │       ├── pages/          # File-based routes (en, es)
│       │       ├── components/     # Reusable UI components
│       │       ├── content/        # Localized content (EN, ES)
│       │       ├── lib/            # Utilities and helpers
│       │       ├── types/          # TypeScript type definitions
│       │       ├── app.tsx         # Main App component
│       │       └── styles.css      # Global styles
│       ├── public/
│       │   ├── images/             # Portfolio images
│       │   ├── fonts/              # Custom fonts
│       │   └── favicon.svg
│       ├── index.html
│       ├── package.json
│       ├── vite.config.ts
│       └── tsconfig.json
└── .gitignore
```

## 🎨 Features

- **Bilingual**: Spanish (ES) and English (EN) routes
- **Responsive**: Optimized for mobile, tablet, and desktop
- **File-based Routing**: Pages automatically become routes based on file structure
- **TypeScript**: Type-safe development
- **Tailwind CSS**: Modern styling with utility classes
- **Framer Motion**: Smooth animations and transitions

## 📝 Environment Variables

Create a `.env` file in the root with any necessary environment variables. Example:

```env
VITE_API_URL=https://api.example.com
```

Browser values must use the `VITE_` prefix to be accessible in the frontend.

## 📄 License

MIT
