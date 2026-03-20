# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

ngx-echarts is an Angular directive library that wraps Apache ECharts for Angular applications. Published as `ngx-echarts` on npm. Targets Angular 21 and ECharts 6+.

## Commands

| Task | Command |
|------|---------|
| Install dependencies | `yarn` |
| Serve demo app (port 4202) | `yarn start` |
| Build library (dev) | `yarn build:lib` |
| Build library (prod) | `yarn build:lib:prod` |
| Build library + serve demo | `yarn demo` |
| Run demo app tests | `yarn test` |
| Run library tests | `yarn test:lib` |
| Lint | `yarn lint` |
| Lint with auto-fix | `yarn fix` |
| Format (Prettier) | `yarn format` |
| Full release build | `yarn release` |
| Distribution build | `yarn dist` |

## Architecture

### Workspace Layout

- **`projects/ngx-echarts/`** — Publishable Angular library (built with ng-packagr)
- **`src/`** — Demo/documentation Angular app

### Library Source (`projects/ngx-echarts/src/lib/`)

- **`ngx-echarts.directive.ts`** — Core standalone directive (`echarts` / `[echarts]` selector). Uses Angular signals API (`input()`, `output()`). Handles chart lifecycle, auto-resize via ResizeObserver, lazy event binding, and 30+ ECharts event outputs.
- **`ngx-echarts.module.ts`** — NgModule wrapper providing `NgxEchartsModule.forRoot()` / `forChild()` for non-standalone usage.
- **`config.ts`** — `NgxEchartsConfig` interface and `NGX_ECHARTS_CONFIG` injection token.
- **`provide.ts`** — `provideEchartsCore()` function for standalone Angular apps.
- **`change-filter-v2.ts`** — RxJS ReplaySubject-based change detection helper used by the directive.
- **Public API**: `projects/ngx-echarts/src/public-api.ts`

### Demo App (`src/app/`)

- **App shell** (`app.component.ts`): Standalone component using **Angular Material 21** (toolbar, sidenav, menu, buttons, icons)
- **Routing** (`app-routing.module.ts`): Lazy-loaded feature modules
- **Pages**: `welcome`, `demo-basic` (8 demos), `demo-advanced` (2 demos), `demo-series` (graph/tree/heatmap with child routes)
- **Shared**: `code-block` component (Material Tabs), `theme.service.ts` (dark/light theme with signals + CSS variables)
- **UI**: Angular Material 21 (M3) throughout — toolbar, sidenav, menu, buttons, tabs
- **Code rendering**: ngx-markdown + Prism.js

## Code Style

- ESLint flat config (`eslint.config.mjs`) with Angular ESLint + Prettier integration
- Prettier (`.prettierrc.json`): single quotes, 2-space indent, 100 char print width, trailing commas (es5), bracket same line
- Directive selectors: `app`/`echarts` prefix, camelCase, attribute type
- Component selectors: `app`/`echarts` prefix, kebab-case, element type
- `@angular-eslint/prefer-standalone` is turned off

## Key Dependencies

- Angular 21, TypeScript ~5.9, RxJS ~7.5
- Angular Material 21 (M3, full demo app UI)
- ngx-markdown ^20, Prism.js ^1.28
- compodoc for API documentation

## Publishing

Manual publish: `yarn dist` → `cd dist/ngx-echarts && npm publish`.

## CI/CD

GitHub Actions (`.github/workflows/ci.yaml`): triggers on push to `master`, runs `yarn release`, deploys docs to gh-pages from `dist/docs/browser`.
