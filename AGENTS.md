# AGENTS.md - Development Guidelines for Workout Tracker

This file contains essential information for AI agents working on the workout-tracker codebase. It includes build commands, code style guidelines, and conventions to follow.

## Build, Lint, and Test Commands

### Development Server

```bash
npm run dev
```

Starts the Vite development server on port 3000.

### Build

```bash
npm run build
```

Runs TypeScript compilation followed by Vite build for production.

### Type Checking

```bash
npm run type-check
```

Runs TypeScript compiler with `--noEmit` flag to check types without generating output.

### Linting

```bash
npm run lint
```

Runs ESLint on the `./src` directory with the project's ESLint configuration.

```bash
npm run lint:fix
```

Runs ESLint with automatic fixing of fixable issues.

### Formatting

```bash
npm run format
```

Runs Prettier to format all TypeScript/JavaScript files in the `src/` directory.

```bash
npm run format:check
```

Checks if files are properly formatted with Prettier.

### Testing

**Note:** No test framework is currently configured. The project uses manual testing and CI builds.

When tests are added in the future, they would typically use:

```bash
npm test
```

For running a single test file (when configured):

```bash
npm test -- path/to/test/file.test.ts
```

## Code Style Guidelines

### Language and Framework

- **TypeScript** with strict mode enabled (`tsconfig.app.json`)
- **React 19** with modern hooks and functional components
- **Vite** as the build tool with SWC for fast compilation
- **Tailwind CSS v4** for styling with `@theme` directive
- **React Router DOM** for client-side routing
- **Context API** for global state management
- **localStorage** for data persistence
- **PWA** support with service workers

### File Structure

```
src/
├── components/     # React components
├── context/        # React context providers
├── hooks/          # Custom React hooks
├── pages/          # Page components for routing
├── global.d.ts     # Global type definitions
├── index.css       # Global styles
├── main.tsx        # Application entry point
└── vite-env.d.ts   # Vite environment types
```

### Naming Conventions

#### Files and Directories

- Components: `PascalCase.tsx` (e.g., `WorkoutContainer.tsx`)
- Hooks: `camelCase.tsx` (e.g., `useClickOutside.tsx`)
- Contexts: `PascalCaseContext.tsx` (e.g., `WorkoutsContext.tsx`)
- Pages: `PascalCase.tsx` (e.g., `Home.tsx`)

#### TypeScript

- Interfaces: `PascalCase` (e.g., `WORKOUTS`, `WORKOUTS_CONTEXT`)
- Types: `PascalCase` (e.g., `WorkoutType`)
- Functions: `camelCase`
- Variables: `camelCase`
- Constants: `UPPER_SNAKE_CASE` (e.g., `LOCAL_STORAGE_FIELD`)
- Generic type parameters: `T`, `U`, etc.

### Import Organization

Imports follow ESLint `import/order` rules:

1. **Builtin** (Node.js modules)
2. **External** (npm packages)
3. **Internal** (parent, sibling, index imports)
4. **Object** imports

React imports are prioritized within external packages. Example:

```typescript
import * as React from "react"
import { useState } from "react"

import { Command } from "akar-icons"
import { toast } from "sonner"

import WorkoutContainer from "./WorkoutContainer"
import { useWorkouts } from "src/context/WorkoutsContext"
```

### Component Patterns

#### Functional Components

Always use `React.FC<Props>` with explicit Props interface:

```typescript
interface Props {
  workout: WorkoutType
  onIncrement: () => void
}

const WorkoutContainer: React.FC<Props> = ({ workout, onIncrement }) => {
  // Component logic
}
```

#### Context Providers

- Define context interfaces with `PascalCase` names
- Use `React.createContext<Type | null>(null)`
- Provide custom hooks with error boundaries:

```typescript
export const useWorkouts = (): WORKOUTS_CONTEXT => {
  const context = React.useContext(WorkoutsContext)
  if (context === null)
    throw new Error("useWorkouts must be used within a WorkoutsProvider")
  return context
}
```

#### Event Handlers

Use arrow functions or `useCallback` for event handlers:

```typescript
const handleIncrement = (): void => {
  // handler logic
}
```

### TypeScript Guidelines

#### Strict Mode

- All TypeScript strict checks are enabled (`strict: true`)
- Explicit types required for function parameters and return values
- `noUnusedLocals` and `noUnusedParameters` enabled
- `noFallthroughCasesInSwitch` enabled
- `noUncheckedSideEffectImports` enabled

#### Interface vs Type

- Use `interface` for object shapes that may be extended
- Use `type` for unions and primitive type aliases
- Global types defined in `global.d.ts`

#### Generic Types

Use generics for reusable components and utilities:

```typescript
interface Props<T> {
  items: T[]
  renderItem: (item: T) => React.ReactNode
}
```

### Styling Conventions

#### Tailwind CSS v4

- Use utility-first approach with `@import "tailwindcss"`
- Custom CSS properties for theme variables defined in `@theme` directive
- Responsive design with `md:`, `lg:` prefixes
- Consistent spacing using Tailwind scale
- Custom animations defined in `@theme` block

#### CSS Custom Properties

Defined in `index.css` for theme consistency:

```css
@theme {
  --color-primary: #your-color;
  --color-dark: #your-color;
  --color-light: #your-color;
}
```

#### Component Styles

- Use `@layer components` for reusable component classes
- Hover states with `hover:` prefix
- Transition effects with `transition-all`
- Active states with `active:scale-95` for button feedback

### Error Handling

- Custom hooks throw descriptive errors when used outside providers
- Use `sonner` for user-facing toast notifications
- Graceful fallbacks for localStorage operations (check for null)
- Type-safe error boundaries where appropriate

### State Management

- React Context for global application state
- localStorage for data persistence with JSON serialization
- useState for local component state
- Custom hooks encapsulate stateful logic and side effects

### Performance Considerations

- Use `React.memo` for expensive components when needed
- Optimize context consumers with `useMemo`/`useCallback`
- Avoid unnecessary re-renders with proper dependency arrays
- Lazy loading for route-based code splitting

### Git Workflow

- Pre-commit hooks run `lint-staged` (ESLint on staged files via Husky)
- Commit messages should be descriptive and follow conventional format
- CI runs build on push/PR to master branch

### Code Quality Tools

- **ESLint**: Comprehensive rules including React, TypeScript, accessibility, promises
- **Prettier**: Code formatting with Tailwind plugin and custom config
- **TypeScript**: Strict type checking with custom compiler options
- **Husky**: Git hooks for quality gates
- **lint-staged**: Run linters only on staged files
- **Tailwind CSS v4**: Modern CSS framework with `@theme` directive

### Accessibility

- JSX a11y ESLint rules enabled (comprehensive accessibility checking)
- Semantic HTML elements
- Proper ARIA attributes where needed
- Keyboard navigation support
- Screen reader friendly markup

### Browser Support

- Modern browsers (ES2022 target)
- PWA support with service workers (vite-plugin-pwa)
- Responsive design for mobile and desktop
- Touch and pointer event handling

## Development Workflow

1. **Start development**: `npm run dev`
2. **Make changes**: Edit files following style guidelines
3. **Check code**: `npm run type-check` and `npm run lint`
4. **Format code**: `npm run format` (or let Prettier auto-format)
5. **Build**: `npm run build` to verify production build
6. **Commit**: Pre-commit hooks will run linting automatically

## Project Architecture Notes

- **SPA** with client-side routing using React Router DOM
- **Context-based** state management with custom provider components
- **localStorage** for data persistence with error handling
- **PWA** capabilities with auto-updating service worker
- **Icon library**: Akar Icons
- **Toast notifications**: Sonner
- **Build optimization**: Vite with SWC for fast builds and hot reloading
- **CSS framework**: Tailwind CSS v4 with custom theme and component layers

This guide should be updated when new tools, patterns, or conventions are introduced to the codebase.</content>
<parameter name="filePath">/Users/nirnejak/Code/jscode/workout-tracker/AGENTS.md
