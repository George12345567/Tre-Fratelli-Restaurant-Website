# Tre Fratelli Restaurant Website - Architecture & Engineering Rules

## 1. Absolute Architecture Guardrail: `forward-architecture` (MANDATORY)
- **ALWAYS LOAD AND STRICTLY ENFORCE `forward-architecture`**:
  Every coding task, component creation, feature addition, refactoring, and code review in this project MUST strictly follow the `forward-architecture` rules.
- **Core Principles**:
  - *Preserve the past. Control the future. Improve what you touch.*
  - Never perform whole-file rewrites or break working code for arbitrary aesthetic reasons.
  - **File Size Guardrails**:
    - Target for new source files: 300–600 lines.
    - Review threshold: 600–800 lines.
    - Warning threshold: 800–1000 lines.
    - **Hard ceiling: 1000 lines** (strictly enforced; narrow exceptions only for static data/generated assets).
  - **Extract-On-Touch**:
    - When modifying existing code, extract only the touched responsibility into dedicated modules (`components/`, `hooks/`, `services/`, `utils/`).
    - Do not allow files to balloon into monolithic God files.
    - Keep integration glue in caller files minimal (~30–50 lines).
  - **Single Source of Truth**:
    - Centralize state, domain logic, localized content, and menu/order configurations.
    - Never duplicate business calculations or data models across multiple places.
  - **Architectural Ratchet**:
    - Refactored or cleaned files must never regress in size or complexity.

## 2. Project Stack & Quality Standards
- **Framework & Stack**: Next.js (App Router), React 19, TypeScript, Tailwind CSS v4, Motion, `next-intl`.
- **Modularity**:
  - Separate UI presentation components from data/logic hooks and domain services.
  - Maintain internationalization consistency across English, Arabic, and Italian locales.
- **Verification Gates**:
  - Always verify changes with `pnpm run lint` and `pnpm run typecheck` or `pnpm run build`.
  - Zero TypeScript errors and zero ESLint warnings (`--max-warnings=0`).
