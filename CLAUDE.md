# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is the marketing website for Bushel, a macOS virtual machine app for developers. The site is built with Eleventy (11ty) static site generator, uses Nunjucks templates, and includes TailwindCSS for styling.

## Build Commands

### Development
```bash
npm start              # Start dev server with live reload (http://localhost:8080)
npm run watch          # Watch files and rebuild on changes
npm run dev            # Single development build
```

The development workflow uses nodemon to watch for file changes and automatically rebuilds. The `npm start` command runs both the build watcher and a live-server in parallel.

### Production
```bash
npm run build          # Production build with minification and compression
```

Production builds include gzip and brotli compression for .js, .css, .html, and .xml files.

### Styling
```bash
cd components/Styling
npm run publish        # Build webpack bundle (output: public/js/main.js)
```

The styling directory has its own package.json and build process. The parent npm scripts automatically handle building styles as part of the main build process.

### Testing
```bash
npm test              # (No test script defined currently)
htmlhint public/**/*.html  # Lint HTML output
```

## Architecture

### Directory Structure

- **site/**: Eleventy source files (Nunjucks templates and Markdown)
  - `_includes/`: Reusable template components (layout, head, body, header, footer)
  - `_data/`: Global data (site.json with site metadata)
  - `release-notes/`: Version-specific release note pages
  - `support/`: FAQ, tips, and terminology pages organized hierarchically
  - `index.njk`: Homepage template

- **components/**:
  - `Styling/`: Frontend build system (separate npm package)
    - `scripts/`: TypeScript source (analytics, form handlers)
    - `styles/`: CSS with TailwindCSS
    - Uses Webpack + Babel + PostCSS pipeline
  - `Assets/`: Static assets organized by type
    - `svg/`: SVG files for sprite generation
    - `zips/`: Files to be bundled into downloadable zips
  - `Resources/`: Static files copied directly to output (favicons, robots.txt, etc.)

- **public/**: Production output directory
- **.tmp/**: Development output directory

### Build Pipeline

1. **Static Resources**: Files from `components/Resources/` are copied to output
2. **Eleventy**: Processes Nunjucks templates and Markdown from `site/` directory
3. **Webpack**: Bundles TypeScript/CSS from `components/Styling/`
   - Entry: `components/Styling/scripts/index.ts`
   - Includes Tailwind CSS processing via PostCSS
   - ESLint validation during build
4. **Post-processing**:
   - SVG sprite generation from `components/Assets/svg/`
   - Zip file creation from `components/Assets/zips/` subdirectories
   - Compression (production only)

### Key Eleventy Configuration

The `.eleventy.js` file configures:

- **Output directory**: Switches between `.tmp` (dev) and `public` (prod) based on NODE_ENV
- **Custom collections**: `support` collection auto-generates hierarchical navigation for FAQ/tips pages
- **Markdown enhancements**: Image sizing and attribute support via markdown-it plugins
- **Custom shortcodes**:
  - `{% youtube id %}`: Embed YouTube videos
  - `{% yta id, alt %}`: YouTube link with icon
  - `{% picture src, alt %}`: Responsive picture element with WebP support
- **Post-build hook**: Creates downloadable zip files from Assets/zips subdirectories

### Support Section Architecture

The support section uses a custom collection that:
- Auto-tags pages based on directory structure (faq, tips, terms)
- Builds parent-child relationships (index pages get `children` array)
- Supports custom ordering via frontmatter `order` field
- Filters and sorts content for hierarchical navigation

### Styling System

- **TailwindCSS**: Custom color palette (water, apple, sandy variants)
- **Custom fonts**: Raleway as primary typeface
- **Plausible Analytics**: Privacy-focused analytics integration
- **Form tracking**: Signup form submissions tracked with custom events

## Development Notes

### Content Updates

- Release notes: Add new Markdown files to `site/release-notes/{version}/index.md`
- Support docs: Add Markdown files to `site/support/{faq|tips|terms}/` with optional `order` frontmatter
- The support index pages automatically discover and link to child pages

### Template System

- Base layout: `site/_includes/layout.njk`
- Templates use Nunjucks syntax
- Frontmatter controls page metadata (title, description, layout)
- Set `pure: true` in frontmatter to prevent automatic layout wrapping

### HTML Validation

The project uses HTMLHint with strict rules (see `.htmlhintrc`):
- No inline styles or scripts
- Alt text required on images
- Proper HTML5 doctype and structure

### Node Version

Node 20.x required (see `.nvmrc`)
