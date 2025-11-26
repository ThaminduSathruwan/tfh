# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

TFH is a modern React-based e-commerce clothing store application showcasing various clothing items with images, prices, and available colors. The application is built with Create React App, TypeScript, and styled with Tailwind CSS. The design follows a minimal, clean aesthetic with the DM Sans font family.

## Development Commands

### Running the Development Server
```bash
npm start
```
Opens the app at http://localhost:3000 with hot reload enabled.

### Running Tests
```bash
npm test
```
Launches Jest in interactive watch mode.

### Building for Production
```bash
npm run build
```
Creates optimized production build in the `build/` directory.

## Architecture

### Application Structure

- **Component-Based Architecture**: The application uses a modular component structure
  - `src/App.tsx` - Main application container with layout and data
  - `src/components/ClothingCard.tsx` - Reusable product card component
  - `src/types/index.ts` - Shared TypeScript interfaces
- **Entry Point**: `src/index.tsx` renders the App component into the DOM root using React 19's createRoot API
- **Styling**: Tailwind CSS with DM Sans font family configured via `tailwind.config.js`

### Data Model

The application centers around a `ClothingItem` interface (defined in `src/types/index.ts`):
```typescript
interface ClothingItem {
    id: number;
    name: string;
    price: number;
    colors: string[];
    images: string[];
}
```

All clothing data is stored in a static array `clothes` in `src/App.tsx` (starting around line 36). Each item can have multiple images and colors.

### Component: ClothingCard

The `ClothingCard` component manages:
- **Local State**: Each card maintains its own `selectedImageIndex` and `isHovered` state
- **Image Navigation**: Dot indicators appear on hover for items with multiple images
- **Interactive Elements**:
  - "New" badge on all items
  - Hover effects showing color availability
  - Smooth transitions and animations
- **Responsive Design**: Adapts to different screen sizes with proper image scaling

### Image Management

All product images are imported statically from `src/assets/` at the top of `src/App.tsx` (lines 3-32). Images follow naming patterns like:
- `IMG_8136.jpg` - Product photos
- Variable names describe the product (e.g., `FullKitImg`, `CropTopPradaImg`)

## Key Implementation Details

### Adding New Products

To add a new clothing item:
1. Add the image(s) to `src/assets/`
2. Import the image(s) at the top of `src/App.tsx`
3. Add a new object to the `clothes` array with the ClothingItem structure
4. Ensure the `id` is unique

### Layout & Design

The application follows a minimal, clean e-commerce design:

**Header**:
- Sticky navigation with brand name and menu links
- White background with subtle border
- Responsive navigation (hidden on mobile)

**Grid Layout**:
- Mobile: 1 column
- Tablet (sm): 2 columns
- Desktop (lg): 3 columns
- Large Desktop (xl): 4 columns
- 8px gap between cards

**Product Cards**:
- Clean white background with minimal shadows
- 400px tall images
- "New" badge positioned top-left
- Centered product name and price
- Hover effects:
  - Enhanced shadow
  - Dot navigation indicators for multiple images
  - Color availability display
- No rounded corners (squared design)

**Footer**:
- Light gray background (bg-gray-50)
- Four-column layout with links and social media
- Copyright information centered at bottom

## TypeScript Configuration

- **Target**: ES5
- **Strict Mode**: Enabled
- **JSX**: react-jsx (new JSX transform)
- **Image Imports**: Configured via `src/react-app-env.d.ts` to support `.jpg`, `.png`, `.svg`, etc.
- TypeScript is configured to check all files in the `src/` directory

## Styling System

**Font Family**: DM Sans (imported from Google Fonts)
- Applied globally via Tailwind config
- Set as default sans-serif font

**Tailwind CSS**:
- Configuration: `tailwind.config.js` with DM Sans font family extension
- PostCSS: Configured with autoprefixer in `postcss.config.js`
- Main styles: `src/index.css` contains Tailwind directives and font import

**Design Philosophy**:
- Minimal and clean aesthetic
- Focus on product imagery
- Subtle interactions and hover effects
- Professional gray-scale color palette
- Ample white space