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

### Formatting

```bash
npm run format
```

Runs Prettier to format all TypeScript/JavaScript files in the `src/` directory.

### Testing

**Note:** No test framework is currently configured. The project uses manual testing and CI builds.

### Single Test File

**Not applicable** - No test framework is set up. When tests are added, they would typically use:

```bash
npm test -- path/to/test/file.test.ts
```

## Code Style Guidelines

### Language and Framework

- **TypeScript** with strict mode enabled
- **React 19** with modern hooks and functional components
- **Vite** as the build tool
- **Tailwind CSS** for styling
- **React Router DOM** for routing

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

### TypeScript Guidelines

#### Strict Mode

- All TypeScript strict checks are enabled
- Explicit types required for function parameters and return values
- No `any` types allowed (ESLint rule disabled but prefer explicit typing)

#### Interface vs Type

- Use `interface` for object shapes that may be extended
- Use `type` for unions and primitive type aliases

#### Generic Types

Use generics for reusable components:

```typescript
interface Props<T> {
  items: T[]
  renderItem: (item: T) => React.ReactNode
}
```

### Styling Conventions

#### Tailwind CSS

- Use utility-first approach
- Custom CSS properties for theme variables: `--color-primary`, `--color-dark`, etc.
- Responsive design with `md:` prefixes
- Consistent spacing with Tailwind scale

#### CSS Custom Properties

Defined in global styles for theme consistency:

```css
--color-primary: #your-color;
--color-dark: #your-color;
--color-light: #your-color;
```

### Error Handling

- Custom hooks throw errors when used outside providers
- Use `sonner` for user-facing toast notifications
- Graceful fallbacks for localStorage operations

### State Management

- React Context for global state
- localStorage for persistence
- useState for local component state
- Custom hooks encapsulate stateful logic

### Performance Considerations

- Use `React.memo` for expensive components when needed
- Optimize context consumers with `useMemo`/`useCallback`
- Avoid unnecessary re-renders with proper dependency arrays

### Git Workflow

- Pre-commit hooks run `lint-staged` (ESLint on staged files)
- Commit messages should be descriptive and follow conventional format
- CI runs build on push/PR to master branch

### Code Quality Tools

- **ESLint**: Comprehensive rules including React, TypeScript, accessibility
- **Prettier**: Code formatting with Tailwind plugin
- **TypeScript**: Strict type checking
- **Husky**: Git hooks for quality gates
- **lint-staged**: Run linters only on staged files

### Accessibility

- JSX a11y ESLint rules enabled
- Semantic HTML elements
- Proper ARIA attributes where needed
- Keyboard navigation support

### Browser Support

- Modern browsers (ESNext target)
- PWA support with service workers
- Responsive design for mobile and desktop

## Development Workflow

1. **Start development**: `npm run dev`
2. **Make changes**: Edit files following style guidelines
3. **Check code**: `npm run type-check` and `npm run lint`
4. **Format code**: `npm run format` (or let Prettier auto-format)
5. **Build**: `npm run build` to verify production build
6. **Commit**: Pre-commit hooks will run linting automatically

## Project Architecture Notes

- **SPA** with client-side routing
- **Context-based** state management
- **localStorage** for data persistence
- **PWA** capabilities with auto-updating service worker
- **Icon library**: Akar Icons
- **Toast notifications**: Sonner
- **Build optimization**: Vite with SWC for fast builds

This guide should be updated when new tools, patterns, or conventions are introduced to the codebase.</content>
<parameter name="filePath">/Users/nirnejak/Code/jscode/workout-tracker/AGENTS.md
