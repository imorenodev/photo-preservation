# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a static website for "Denville Photo Preservation" - a local in-home photo scanning and digitization service. The project consists of a single-page HTML website with embedded CSS styling that showcases photo preservation services.

## Project Structure

- `index.html` - Main landing page with embedded CSS (single-page application)
- `assets/` - Static assets directory
  - `images/` - All image assets for the website
    - `gallery/` - Service demonstration images
    - `services/` - Service-specific images
    - Company logo and promotional badges
- `flyer.png` - Marketing flyer asset
- `README.md` - Project documentation (currently has encoding issues)

## Development Commands

This is a static HTML website with no build process, package.json, or development dependencies. To work with this project:

- **Local Development**: Open `index.html` directly in a browser or serve with a simple HTTP server
- **Testing**: Manual testing by opening the HTML file in different browsers
- **Deployment**: Direct deployment of static files to any web hosting service

## Architecture Notes

- **Single-file architecture**: All HTML, CSS, and structure are contained in `index.html`
- **Embedded CSS**: All styling is defined in a `<style>` block within the HTML head
- **No JavaScript**: The website is purely HTML/CSS with no client-side scripting
- **Responsive design**: Uses CSS Grid and media queries for mobile compatibility
- **Image-heavy design**: Relies on local image assets in the `assets/` directory

## Key Components

1. **Header Section** (`index.html:271-275`): Company branding with logo and tagline
2. **Hero Section** (`index.html:277-284`): Main value proposition and description
3. **Services Grid** (`index.html:287-305`): Three-column service showcase
4. **Experience Section** (`index.html:307-323`): Digital frame demo and features list
5. **CTA Section** (`index.html:325-332`): Contact information and call-to-action

## Styling Architecture

- **CSS Reset**: Universal reset applied to all elements
- **Color Scheme**: Warm, vintage-inspired palette (#f5f0e8, #8B4513, #4A90E2)
- **Typography**: Georgia serif font for body text, decorative fonts for headings
- **Grid System**: CSS Grid used for responsive service cards layout
- **Responsive Breakpoints**: Mobile-first approach with 768px breakpoint

## Content Management

- Service information is hardcoded in HTML
- Images are referenced with relative paths from `assets/` directory
- Contact information is embedded in the CTA section
- No content management system or dynamic content generation

## Deployment Considerations

- Ensure all assets in `assets/` directory are deployed with the HTML file
- Verify image paths are correct for the deployment environment
- Test responsive behavior across different screen sizes
- No server-side processing required - can be hosted on any static hosting service