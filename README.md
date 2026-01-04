# مكتب خالد الدرعاني للمحاماة - Website Documentation

## Project Structure
- `src/components`: UI components (Hero, Header, Footer, etc.).
- `src/pages`: Main page views (Home, About, Services, Articles, etc.).
- `src/styles`: Global styles (if any specific modules).
- `src/index.css`: Global Tailwind directives and custom animations.
- `src/data`: Static data content for articles and services.

## Key Visual Effects
1.  **Mouse Spotlight**: Controlled by `components/MouseSpotlight.tsx`. Adds a torchlight effect.
2.  **Shimmer**: Defined in `index.css` as `.animate-shimmer`. Applied to buttons.
3.  **Fireflies**: Controlled by `components/BackgroundEffects.tsx`.
4.  **Reveal**: Reusable entrance animation component in `components/Reveal.tsx`.

## Maintenance Tips
- **Colors**: Defined in `tailwind.config` (in `index.html` script currently, can be moved to `tailwind.config.js`).
    - `saudi-navy`: Primary background.
    - `saudi-gold`: Primary accent.
- **Icons**: Using `lucide-react`.
- **Animations**: Using `framer-motion` for complex moves, and Tailwind CSS for simple pulses/shimmers.

## Scripts
- `npm run dev`: Start development server.
- `npm run build`: Build for production.
