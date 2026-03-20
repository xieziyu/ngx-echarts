# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

ngx-echarts is an Angular directive library that wraps Apache ECharts for Angular applications. The library is published as `ngx-echarts` on npm. Current version targets Angular 21 and ECharts 6+.

## Commands

| Task | Command |
|------|---------|
| Install dependencies | `yarn` |
| Serve demo app (port 4202) | `yarn start` |
| Build library + serve demo | `yarn demo` |
| Build library (dev) | `yarn build:lib` |
| Build library (prod) | `yarn build:lib:prod` |
| Run demo app tests | `yarn test` |
| Run library tests | `yarn test:lib` |
| Lint | `yarn lint` |
| Lint with auto-fix | `yarn fix` |
| Format (Prettier) | `yarn format` |
| Full release build | `yarn release` |

## Architecture

### Workspace Layout

- **`projects/ngx-echarts/`** — The publishable Angular library (built with ng-packagr)
- **`src/`** — Demo/documentation Angular app (standalone components, uses ng-zorro-antd)

### Library Source (`projects/ngx-echarts/src/lib/`)

- **`ngx-echarts.directive.ts`** — Core standalone directive (`echarts` / `[echarts]` selector). Uses Angular signals API (`input()`, `output()`). Handles chart lifecycle, auto-resize via ResizeObserver, lazy event binding, and 40+ ECharts event outputs.
- **`ngx-echarts.module.ts`** — NgModule wrapper providing `NgxEchartsModule.forRoot(config)` for non-standalone usage.
- **`config.ts`** — `NgxEchartsConfig` interface and `NGX_ECHARTS_CONFIG` injection token.
- **`provide.ts`** — `provideEchartsCore()` function for standalone Angular apps.
- **`change-filter-v2.ts`** — RxJS-based change detection helper used by the directive.
- **Public API**: `projects/ngx-echarts/src/public-api.ts`

### Demo App (`src/app/`)

- Pages in `src/app/pages/` (welcome, demo-basic, demo-advanced, demo-series)
- Uses ng-zorro-antd for UI, ngx-markdown + Prism.js for code rendering
- Routing in `src/app/app-routing.module.ts`

## Code Style

- ESLint flat config (`eslint.config.mjs`) with Angular ESLint + Prettier integration
- Prettier: single quotes, 2-space indent, 100 char print width, trailing commas (es5), no parens on single arrow params
- Directive selectors: `echarts` prefix, camelCase, attribute type
- Component selectors: `app`/`echarts` prefix, kebab-case, element type

## Publishing

Manual publish flow: `yarn dist` to build, then `cd dist/ngx-echarts && npm publish`.

## CI/CD

GitHub Actions (`.github/workflows/ci.yaml`): triggers on push to `master`, runs `yarn release`, deploys docs to gh-pages.
