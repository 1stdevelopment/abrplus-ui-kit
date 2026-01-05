# Abrplus UI Kit

**Version:** 0.1.3

A modular React UI component library with Tailwind support, designed for building modern and consistent interfaces. Supports both **Tailwind v3 and v4** setups and provides separate global and theme CSS for maximum flexibility.

---

## Features

- Fully typed with TypeScript.
- Ready-to-use **atoms, molecules, and Ant Design overrides**.
- Tailwind-compatible styles with auto-generated colors and fonts.
- Separate **theme CSS** for Tailwind v4 consumers.
- Built with **Vite**, **Storybook**, and **Vitest** for fast development and testing.
- Optional peer dependencies for integration flexibility.

---

## Installation

```bash
# Using pnpm
pnpm add github:1stdevelopment/abrplus-ui-kit

# Using npm
npm install github:1stdevelopment/abrplus-ui-kit

# Using yarn
yarn add github:1stdevelopment/abrplus-ui-kit
```

### Peer Dependencies

Ensure your project includes compatible peer dependencies:

- `react >= 18`
- `react-dom >= 18`
- `antd ^5` (optional)
- `i18next ^23` (optional)
- `react-i18next ^13` (optional)
- `react-router-dom ^6` (optional)
- `tailwind-merge ^1.14` (optional)
- `starkstring` (optional)

---

## Usage

### 1. Import components

```tsx
import { Button } from 'abrplus-ui-kit/atoms';
import { Card } from 'abrplus-ui-kit/molecules';
import React from 'react';
```

### 2. Import styles

For **global CSS**:

```ts
import 'abrplus-ui-kit/style.css';
```

For **Tailwind v4 theme CSS**:

```ts
import 'abrplus-ui-kit/theme.css';
```

### 3. Ant Design overrides (optional)

```ts
import 'abrplus-ui-kit/ant-overrides';
```

---

## Available Modules

- **Atoms:** `abrplus-ui-kit/atoms`
- **Molecules:** `abrplus-ui-kit/molecules`
- **Ant Design Overrides:** `abrplus-ui-kit/ant-overrides`
- **Global CSS:** `abrplus-ui-kit/style.css`
- **Theme CSS:** `abrplus-ui-kit/theme.css` (Tailwind v4 `@theme`)

---

## Scripts

| Command                | Description                                   |
| ---------------------- | --------------------------------------------- |
| `pnpm build`           | Lints, formats, tests, and builds the library |
| `pnpm lint`            | Run ESLint across the project                 |
| `pnpm format`          | Format code with Prettier                     |
| `pnpm test`            | Run all Vitest tests                          |
| `pnpm test:watch`      | Watch mode for tests                          |
| `pnpm test:ui`         | Run Vitest in UI mode                         |
| `pnpm test:coverage`   | Generate coverage report                      |
| `pnpm storybook`       | Run Storybook in dev mode                     |
| `pnpm build-storybook` | Build Storybook static site                   |
| `pnpm gen:icon`        | Generate icon components                      |
| `pnpm gen:tw`          | Generate Tailwind theme CSS                   |

---

## Development

1. Clone the repository and install dependencies:

```bash
pnpm install
```

2. Run Storybook to preview components:

```bash
pnpm storybook
```

3. Build the library for local testing:

```bash
pnpm build
```

4. Run tests and coverage:

```bash
pnpm test
pnpm test:coverage
```

---

## Tailwind Integration

- The library ships **two CSS files** for Tailwind:

1. `style.css` → global classes & default Tailwind utilities
2. `theme.css` → `@theme` variables for Tailwind v4

**Usage in Tailwind v4 app:**

```css
@import 'abrplus-ui-kit/style.css';
@import 'abrplus-ui-kit/theme.css';
```

- Your Tailwind config can now use the `@theme` variables for consistent theming.

---

## Contributing

- Follow ESLint and Prettier rules (`pnpm lint` / `pnpm format`)
- Add tests for new components using Vitest
- Use Storybook to visualize and document UI changes
