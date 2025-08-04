# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a React + TypeScript application built with Vite, featuring Ant Design (antd) components and Lucide icons. The project follows a modern React development setup with ESLint for code quality.

## Development Commands

- `pnpm dev` - Start development server with hot module replacement
- `pnpm build` - Build for production (runs TypeScript compiler then Vite build)
- `pnpm lint` - Run ESLint to check code quality
- `pnpm preview` - Preview production build locally

## Project Structure

```
src/
├── App.tsx              # Main application component
├── main.tsx             # Application entry point
├── App.css              # Application styles
├── index.css            # Global styles
├── vite-env.d.ts        # Vite type definitions
├── components/          # Reusable UI components
│   └── AppSideNavBar.tsx    # Navigation sidebar component
├── layouts/             # Layout components
│   └── MainLayout.tsx       # Main application layout wrapper
├── pages/               # Page-level components
│   └── PageContents.tsx     # Main content area component
└── assets/              # Static assets (images, etc.)
```

## Key Dependencies

- **React 19** - Latest React version with modern features
- **Ant Design (antd)** - UI component library for professional interfaces
- **Lucide** - Icon library for consistent iconography
- **Vite** - Fast build tool and dev server
- **TypeScript** - Type safety and enhanced development experience

## Build & Development

- Uses Vite for fast development and optimized production builds
- TypeScript compilation happens before build step
- ESLint configured with React hooks and refresh plugins
- Supports hot module replacement (HMR) for fast development

## Code Quality

- ESLint configuration includes:
  - Standard JavaScript/TypeScript rules
  - React hooks linting
  - React refresh support for Vite
  - Global ignores for `dist` directory

## Architecture Notes

- Organized folder structure separating components, layouts, and pages
- **components/**: Reusable UI components (navigation, buttons, etc.)
- **layouts/**: Layout wrapper components that structure page content
- **pages/**: Page-level components containing main content areas
- Standard React 19 application with functional components and hooks
- Uses React's StrictMode for development checks
- Layout-based architecture with sidebar navigation and content areas