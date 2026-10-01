# MUSTANG // NEXUS

A flagship conceptual digital automotive experience. Engineered for speed, cinematic storytelling, and digital performance. 

This project explores a premium intersection of 3D WebGL (React Three Fiber), procedural audio, and aggressive, tech-forward UI architecture.

> **Disclaimer:** MUSTANG // NEXUS is a conceptual digital experience created for demonstration and portfolio purposes. It is not an official Ford product, nor does it use proprietary/copyrighted assets from Ford Motor Company. Specifications displayed are demonstrative.

## Features

- **Interactive 3D Abstraction:** A low-poly, performant 3D vehicle canvas that responds directly to scroll velocity and cursor movement.
- **Cinematic Choreography:** Powered by GSAP and Lenis, sections fade, scrub, and pin elegantly to guide the narrative.
- **Procedural Sound Engine:** Integrated Web Audio API produces an authentic V8 idle hum mapped to a low-pass filter, activated solely by user intent.
- **Context-Aware Camera Rig:** Uses Intersection Observers to shift focal planes smoothly (e.g. zooming in during the Configurator phase).
- **Asset Abstraction Layer:** Engineered to accept a production-ready `.glb` file at a moment's notice with zero refactoring of the scene logic.

## Tech Stack

- **Framework:** React 18 / TypeScript / Vite
- **3D Environment:** Three.js / React Three Fiber / Drei
- **Animation:** GSAP (ScrollTrigger) / Lenis
- **Styling:** Tailwind CSS (v3)
- **State:** React Context API

## Quick Start

Ensure you have Node.js installed, then:

```bash
# Install dependencies
npm install

# Start the development server
npm run dev

# Build for production
npm run build
```

## How to Replace the 3D Asset

The project is currently using an optimized geometric placeholder. To upgrade to a production model:

1. Obtain a high-quality `.glb` or `.gltf` 3D model.
2. Place it in `src/assets/models/mustang_production.glb`.
3. Open `src/components/3d/CarModel.tsx`.
4. Uncomment the `useGLTF` hook and the associated `primitive` object return.
5. Remove or comment out the `PLACEHOLDER ABSTRACT VEHICLE SILHOUETTE` mesh group.

Your new model will automatically inherit the environment lighting, camera rig parallax, and configurator color-change state.

## Architecture Guidelines

- **Animations:** Keep heavy calculations off the main thread. Always leverage `gsap.to` over React state changes for scroll-bound visual effects.
- **3D Render Loop:** Do not trigger React re-renders from within `useFrame` unless absolutely necessary.
- **Accessibility:** Ensure `prefers-reduced-motion` blocks are respected for users sensitive to parallax and pinning.

---
*Built to be unleashed.*
