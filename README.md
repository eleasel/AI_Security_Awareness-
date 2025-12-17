# AI-Enabled Cyber Attacks Awareness Presentation

A modern, interactive presentation built with Next.js 15 for bank staff cyber awareness training.

![Next.js](https://img.shields.io/badge/Next.js-15-black?logo=next.js)
![React](https://img.shields.io/badge/React-19-blue?logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5.7-blue?logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4-38bdf8?logo=tailwindcss)

## Overview

This presentation covers **Identifying and Preventing AI-Enabled Attacks** in a 45-minute cyber awareness session tailored for banking professionals. It features 24 slides with modern design, smooth animations, and interactive elements.

## Features

- 🎨 **Professional Dark Theme** - Navy blue gradients with gold accents
- 📱 **Fully Responsive** - Works on desktop, tablet, and mobile
- ⌨️ **Keyboard Navigation** - Use arrow keys to navigate
- 🖱️ **Click Navigation** - Bottom navigation bar with slide dots
- 💬 **Interactive Speaker Notes** - Click any highlighted point to see detailed notes
- ✨ **Smooth Animations** - Subtle transitions and floating illustrations
- 🎭 **AI-Themed Visuals** - Neural networks, robots, circuit patterns, and security icons

## Topics Covered

1. **Introduction** - Session objectives and overview
2. **AI Threat Landscape** - How AI changes cyber attacks
3. **Key Threats** - Deepfakes, AI phishing, synthetic identity, social engineering
4. **Real-World Cases** - $25M deepfake fraud and other incidents
5. **Staff AI Risks** - Dangers of unauthorized AI tool usage
6. **Countermeasures** - 5 actionable steps for staff
7. **Do's and Don'ts** - Quick reference guide
8. **Key Takeaways** - Summary and closing

## Getting Started

### Prerequisites

- Node.js 18.17 or later
- npm, yarn, or pnpm

### Installation

```bash
# Clone the repository
git clone <repository-url>
cd FBN

# Install dependencies
npm install

# Start development server
npm run dev
```

### Running the Presentation

Open [http://localhost:3000](http://localhost:3000) in your browser.

**Navigation:**
- Use `←` `→` arrow keys to navigate between slides
- Click the navigation dots at the bottom
- Click any card or bullet point to view speaker notes
- Press `Escape` to close speaker note modals

## Project Structure

```
FBN/
├── app/
│   ├── globals.css     # Global styles and animations
│   ├── layout.tsx      # Root layout with fonts
│   └── page.tsx        # Main presentation component
├── public/             # Static assets
├── package.json        # Dependencies
├── tailwind.config.ts  # Tailwind configuration
└── tsconfig.json       # TypeScript configuration
```

## Customization

### Changing Colors

Edit `app/globals.css` to modify the color scheme:

```css
:root {
  --navy-900: #0a1628;
  --gold-400: #d4af37;
  --coral-500: #ff6b6b;
  --teal-500: #20c997;
}
```

### Adding/Editing Slides

Slides are defined in `app/page.tsx` in the `slides` array. Each slide has:
- `id`: Unique identifier
- `type`: Slide type (title, content, case, summary, etc.)
- `render`: JSX function that returns the slide content

### Speaker Notes

Use the `<ClickablePoint>` component to add interactive speaker notes:

```tsx
<ClickablePoint 
  title="Topic Title" 
  note="Detailed speaker note text..."
>
  <div>Content to click</div>
</ClickablePoint>
```

## Scripts

```bash
npm run dev      # Start development server
npm run build    # Build for production
npm run start    # Start production server
npm run lint     # Run ESLint
```

## Tech Stack

- **Framework**: Next.js 16 with App Router
- **UI**: React 19 with TypeScript
- **Styling**: Tailwind CSS 3.4
- **Fonts**: Playfair Display (headings), DM Sans (body)
- **Animations**: CSS animations with custom keyframes

## Browser Support

- Chrome (recommended)
- Firefox
- Safari
- Edge

## License

This presentation is for internal training purposes.

---

**Created for First Bank of Nigeria Cyber Awareness Training**

