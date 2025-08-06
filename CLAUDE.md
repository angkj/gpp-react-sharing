# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a sophisticated React 19 + TypeScript educational application built with Vite, featuring a comprehensive design system, shared component library, and interactive learning platform for React concepts and hooks. The project follows modern React development practices with extensive standardization and reusable components.

## Development Commands

- `pnpm dev` - Start development server with hot module replacement
- `pnpm build` - Build for production (runs TypeScript compiler then Vite build)
- `pnpm lint` - Run ESLint to check code quality
- `pnpm preview` - Preview production build locally

## Project Structure

```
src/
├── App.tsx              # Main app component with ThemeProvider
├── main.tsx             # Application entry point with StrictMode
├── index.css            # Comprehensive Apple-inspired design system (193 lines)
├── App.css              # Empty (can be removed)
├── vite-env.d.ts        # Vite type definitions
├── assets/              # Static assets
│   └── react.svg        # React logo
├── components/          # Application-specific components
│   ├── AppSideNavBar.tsx    # Collapsible navigation with sections
│   ├── HookPageLayout.tsx   # Standardized hook documentation template
│   └── ThemeToggle.tsx      # Standalone theme toggle button
├── contexts/            # React Context implementations
│   ├── ThemeContext.tsx     # Theme context definition
│   └── ThemeContextProvider.tsx # Theme provider with persistence
├── hooks/               # Custom React hooks
│   └── useTheme.ts      # Theme management hook
├── layouts/             # Layout wrapper components
│   └── MainLayout.tsx   # Main layout with header, sidebar, content
├── pages/               # Page-level components organized by category
│   ├── HomePage.tsx     # Welcome page with animated cards
│   ├── PageContents.tsx # Legacy page content
│   ├── concepts/        # Core React concept demonstrations
│   │   ├── ConceptsPage.tsx
│   │   ├── IdempotentDemo.tsx
│   │   └── PropsDownCallBackUp.tsx
│   └── hooks/           # Hook-specific educational pages and demos
│       ├── UseEffectPage.tsx
│       ├── UseStatePage.tsx
│       ├── UseMemoPage.tsx
│       ├── UseCallbackPage.tsx
│       ├── UseRefPage.tsx
│       ├── UseContextPage.tsx
│       ├── UseImperativeHandlePage.tsx
│       ├── useCallbackPageComponents/
│       ├── useEffectPageComponents/
│       ├── useMemoPageComponents/
│       └── useStatePageComponents/
└── shared/              # Comprehensive shared component library
    ├── components/      # Reusable UI components with design system
    │   ├── Badge.tsx            # Status/variant badges
    │   ├── Button.tsx           # Multi-variant button system
    │   ├── CodeBlock.tsx        # Code display with monospace font
    │   ├── ComparisonCounter.tsx # Side-by-side comparison demos
    │   ├── CounterDisplay.tsx   # Styled counter with actions
    │   ├── DemoContainer.tsx    # Consistent demo wrapper
    │   ├── InfoBox.tsx          # Multi-variant info boxes
    │   ├── UniversalDemo.tsx    # Universal demo template
    │   └── index.ts             # Centralized exports
    ├── constants/       # Ready for shared constants
    ├── types/           # Ready for shared types
    └── utils/           # Ready for shared utilities
```

## Shared Components Library

The `/src/shared/components/` directory contains a sophisticated design system with 8 reusable components:

### Core Components

- **UniversalDemo** - Universal template for consistent educational demos with counter, info boxes, and flexible configuration
- **DemoContainer** - Apple-inspired container with shadows, borders, and consistent styling
- **Button** - Multi-variant system (primary, success, error, warning) with sizes (sm, md, lg)
- **InfoBox** - Color-coded information boxes (info, success, warning, error) with optional titles
- **CounterDisplay** - Interactive counter widget with monospace font and customizable colors
- **CodeBlock** - Formatted code display with monospace font and syntax-highlighting support
- **Badge** - Status indicators for demo states (success, error, warning, info)
- **ComparisonCounter** - Side-by-side educational comparisons with color-coded variants

### Usage Patterns

- Import from `'../shared/components'` for centralized access
- All components use CSS custom properties from the design system
- Consistent prop interfaces with TypeScript support
- Flexible styling through `style` and `className` props

## Design System & Styling

### Apple-Inspired Design System (`/src/index.css`)
- **40+ CSS Custom Properties** for colors, typography, spacing
- **Complete Light/Dark Mode** support with automatic switching
- **Typography Scale**: 9-tier font system with Apple system fonts
- **Spacing Scale**: 7-tier spacing (4px to 64px)
- **Color Palette**: Comprehensive Apple-inspired colors with variants
- **Animations**: 3-tier transition system (0.15s to 0.35s)

### Font Standardization
- **Primary Font**: `--font-family-primary` (Apple system fonts)
- **Monospace Font**: `--font-family-mono` (SF Mono, Monaco, etc.)
- **Consistent Usage**: All counters use monospace, all UI text uses system font
- **Cross-Platform**: Proper fallbacks for Windows, Linux, and mobile

## Theme System

### Architecture
- **ThemeContext.tsx**: Type-safe context definition
- **ThemeContextProvider.tsx**: Provider with localStorage persistence
- **useTheme.ts**: Custom hook with error boundaries
- **Dynamic Updates**: CSS custom properties update automatically

### Features
- **Persistence**: Saves to localStorage
- **System Detection**: Respects OS color scheme preference  
- **Floating Toggle**: Ant Design FloatButton with custom styling
- **20+ Variables**: Comprehensive color system that updates dynamically

## Key Dependencies

- **React 19.1.0** - Latest React with modern features and concurrent rendering
- **Ant Design 5.26.7** - FloatButton component for theme toggle
- **Lucide React 0.536.0** - Consistent icon system (Home, Code, BookOpen, Sun, Moon, ChevronDown)
- **Vite 7.0.4** - Fast build tool with HMR support
- **TypeScript 5.8.3** - Type safety with strict configuration

## Development & Build

### Modern Build Pipeline
- **Vite**: Fast development server with instant HMR
- **TypeScript Compilation**: Happens before Vite build step
- **ESLint**: React hooks plugin with modern flat config
- **Production Optimization**: Tree shaking, code splitting, minification

### Code Quality Standards
- **TypeScript Strict Mode**: Full type checking enabled
- **ESLint Rules**: React hooks linting, refresh plugin integration
- **Consistent Formatting**: Standardized across all components
- **Import Patterns**: Centralized exports from shared components

## Architecture Patterns

### Component Organization
- **Page Components**: Route-level components in `/pages/`
- **Feature Components**: Page-specific components in subdirectories
- **Shared Library**: Reusable UI components in `/shared/components/`
- **Layout System**: Structural components in `/layouts/`

### Educational Focus
- **Interactive Demos**: Every concept has hands-on demonstrations
- **Comparison Components**: Side-by-side right vs wrong examples
- **Console Integration**: Educational logging for learning purposes
- **Progressive Complexity**: From basic concepts to advanced patterns

### Navigation System
- **Client-Side Routing**: URL parameter-based navigation
- **State Synchronization**: URL sync with component state
- **Expandable Sections**: Collapsible navigation groups (Hooks, Concepts)
- **Auto-Expansion**: Smart section opening based on current page

## Best Practices

### Component Development
- **Always use shared components** when possible instead of creating new ones
- **Import from shared/components index** for centralized access
- **Use CSS custom properties** instead of hardcoded values
- **Follow TypeScript patterns** established in existing components

### Styling Guidelines
- **Use design system variables** for consistency
- **Prefer CSS custom properties** over hardcoded colors/sizes
- **Monospace font for counters/code**, system font for UI text
- **Follow Apple design principles** for spacing and typography

### Demo Creation
- **Use UniversalDemo** for standard interactive demonstrations
- **Use ComparisonCounter** for side-by-side comparisons
- **Include console logging** for educational value
- **Add InfoBox components** for key learning points

## Educational Purpose & Teaching Objectives

This application serves as a comprehensive interactive learning platform for React concepts, designed with modern pedagogical principles and structured curriculum progression.

### Core Learning Philosophy
- **Experiential Learning**: Students learn by doing and seeing immediate results
- **Problem-First Approach**: Demonstrates why patterns matter by showing problems they solve
- **Gradual Complexity**: Builds from basic concepts to advanced optimization patterns
- **Practical Focus**: Every concept tied to real-world development scenarios
- **Error Prevention**: Teaches common mistakes before students encounter them

### Teaching Curriculum Structure

#### **Beginner Level: React Fundamentals**
1. **Component Basics** - Reusable UI pieces with props and state
2. **JSX Syntax** - HTML-like syntax in JavaScript for intuitive development
3. **Props vs State** - Data flow patterns and when to use each
4. **useState Hook** - State management fundamentals and re-render triggers
5. **Props Down, Callbacks Up** - Component communication patterns

#### **Intermediate Level: Side Effects & Lifecycle**
6. **useEffect Hook** - Side effect management and component lifecycle
   - Three dependency array patterns (none, empty, with deps)
   - DOM updates and render timing
   - Cleanup functions and memory leak prevention
7. **Component Purity** - Pure vs impure components (Good/Bad Clock demo)
8. **useRef Hook** - DOM access and mutable values without re-renders

#### **Advanced Level: Performance & Optimization**
9. **useMemo Hook** - Expensive calculation memoization
10. **useCallback Hook** - Function reference stability
11. **Memory Management** - Timer cleanup, subscription management
12. **useContext Hook** - Global state patterns
13. **useImperativeHandle** - Advanced ref forwarding patterns

### Specific Learning Objectives by Hook

#### **useState Teaching Goals**
- **State vs Variables**: Why regular variables don't trigger re-renders
- **Initialization Patterns**: Direct vs functional initialization for performance
- **Update Patterns**: Direct updates vs functional updates for rapid changes
- **Asynchronous Nature**: Understanding setState timing and batching
- **Common Pitfalls**: Lost updates, stale state, performance traps

#### **useEffect Teaching Goals** 
- **Lifecycle Understanding**: After DOM updates, not during render
- **Dependency Mastery**: When effects run based on dependency arrays
- **Cleanup Prevention**: Memory leaks with timers, subscriptions, listeners
- **Side Effect Management**: Proper handling of external interactions

#### **Performance Hook Goals (useMemo/useCallback)**
- **Optimization Timing**: When memoization actually helps performance
- **Reference Equality**: Why object/function recreation causes issues
- **Dependency Management**: Controlling when recalculation occurs
- **Child Component Impact**: Preventing unnecessary re-renders

### Interactive Learning Patterns

#### **Visual Learning Aids**
- **Color-coded Comparisons**: Red (❌ BAD) vs Green (✅ GOOD) patterns
- **Side-by-Side Demos**: Simultaneous good/bad practice comparisons
- **Status Badges**: Immediate visual feedback on approach quality
- **Console Integration**: Real-time logging for behind-the-scenes understanding

#### **Hands-On Demonstrations**
- **Interactive Counters**: Click-based state change demonstrations
- **Timer Cleanups**: Mount/unmount lifecycle visualization
- **Performance Comparisons**: Visible performance impact demonstrations
- **Memory Leak Examples**: Show problems and solutions in real-time

#### **Progressive Disclosure**
- **Basic → Advanced**: Start with simple concepts, build complexity
- **Problem → Solution**: Show the issue first, then demonstrate the fix
- **Why → How → What**: Explain reasoning before implementation details
- **Practice → Apply**: Interactive demos followed by explanation

### Common Pitfalls Prevention

#### **State Management Anti-Patterns**
- **Direct Mutation**: Why `state.push()` doesn't work
- **Stale State**: Rapid updates with direct state access
- **Expensive Initialization**: Performance impact without functional init
- **Missing Cleanup**: Memory leaks from uncleaned effects

#### **Performance Anti-Patterns**
- **Unnecessary Re-renders**: Object/function recreation issues
- **Missing Memoization**: When optimization is actually needed
- **Dependency Issues**: Stale closures and infinite loops
- **Memory Leaks**: Proper cleanup of subscriptions and timers

### Learning Assessment Features

#### **Immediate Feedback Systems**
- **Console Logging**: Shows internal React behavior during interactions
- **Visual State Changes**: Counter updates demonstrate re-render triggers
- **Performance Impact**: Visible lag demonstrates optimization benefits
- **Error Demonstrations**: Shows actual problems, not just theory

#### **Reinforcement Patterns**
- **Repetition with Variation**: Same concepts in different contexts
- **Comparative Analysis**: Always show good and bad approaches
- **Real-World Scenarios**: Form handling, data fetching, DOM manipulation
- **Progressive Complexity**: Build understanding layer by layer

This comprehensive educational framework transforms abstract React concepts into tangible, interactive learning experiences that prepare students for real-world React development challenges.