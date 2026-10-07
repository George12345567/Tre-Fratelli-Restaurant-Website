---
name: forward-architecture
description: Apply incremental software architecture guardrails when creating, modifying, extending, refactoring, or reviewing repository code. Use for features, services, components, APIs, state, database changes, tests, performance work, or architectural review; do not use for unrelated prose or non-software tasks.
metadata:
  short-description: Incremental architecture guardrails for code changes
---

# Forward Architecture

Preserve the past. Control the future. Improve what you touch.

Use this skill when working on software architecture through creation, modification, extension, refactoring, or review. It prevents technical debt from growing without turning stable legacy code into a risky rewrite project.

This is a user/global skill. Apply it across repositories, not only to one project or product domain.

## Primary Rule

PRESERVE THE PAST. CONTROL THE FUTURE. IMPROVE WHAT YOU TOUCH.

Prefer stability, correctness, security, maintainability, clear source of truth, and incremental improvement over broad aesthetic rewrites. Do not perform architecture work merely to make folders, names, or line counts prettier.

## Legacy Preservation

Existing large files are not automatically refactor targets. A legacy file may remain large when it is stable, working, not the current bottleneck, and not actively accumulating new responsibilities.

Do not split legacy files only because they exceed a line-count threshold. Never assume names such as legacy, old, deprecated, copy, backup, V1, V2, V3, V4, or V5 mean unused.

Before deletion or consolidation, prove reachability through the relevant evidence:

- imports and dynamic imports
- routes and runtime paths
- callers and tests
- public APIs and compatibility contracts
- database/RPC contracts
- scripts and background jobs

When uncertain, preserve compatibility.

## New Code Size Limits

For manually maintained new source files, use these limits as architecture guardrails:

- Target: about 300-600 lines where practical.
- Review threshold: 600-800 lines.
- Architecture warning: 800-1000 lines.
- Hard ceiling: 1000 lines.

A new manually maintained source file should not exceed 1000 lines unless there is a genuine engineering reason. 1000 lines is a ceiling, not a target.

Reasonable exceptions include generated files, generated database types, vendor code, large static fixtures/data, machine-generated schemas, and special declarative files where splitting reduces clarity. Do not abuse exceptions; make them explicit and narrow when they matter.

## Avoid File Explosion

The rule is not "every change must create a new file."

Use judgment:

- Small bug fix: edit the correct existing file.
- Small local behavior change: keep it local when appropriate.
- New substantial feature: prefer its own module or feature area.
- New substantial business logic: prefer a domain/model/service module.
- Large independent UI section: prefer a separate component.
- Complex data behavior: prefer hooks, services, selectors, state modules, or model functions as appropriate.

Create files because responsibilities differ, not merely to reduce line count.

## Architectural Ratchet

Legacy architecture should improve in one direction. If a tracked legacy file shrinks from 4000 lines to 3800, avoid casually growing it back to 4000 later.

For repositories that track legacy-size baselines, legacy files may remain above the new-file limit, but they should not materially grow. When a legacy file shrinks, prefer treating the smaller size as the new architectural ceiling.

This is the architectural ratchet.

## Legacy Integration Budget

A large legacy shell may receive small integration/glue changes, such as importing a new module, passing props, or delegating a call. Around 30-50 lines of integration glue can be reasonable.

Do not implement hundreds of lines of new feature logic directly inside a legacy God file when a separate module is practical.

## Extract On Touch

Do not run broad legacy refactors by default. Use extract on touch.

When substantial new work intersects a legacy area:

1. Identify the responsibility being changed.
2. Extract only that responsibility if doing so is safe.
3. Preserve the existing external interface.
4. Implement the new capability in the cleaner module.
5. Wire it back through the smallest stable interface.
6. Leave unrelated neighboring code alone.

## Legacy Shell Pattern

Large legacy components should gradually become shells/orchestrators, not be rewritten all at once.

A healthy direction is:

```text
LegacyGodComponent
  -> FeatureSection
  -> SubFeatureDialog
  -> useDomainData
  -> domainService
  -> selectors/model functions
```

Move responsibilities only when they are touched or when extraction provides clear measurable value.

## Feature Ownership

For substantial new domains/features, prefer cohesive feature ownership. The exact directory structure is repository-dependent; do not force one tree onto every codebase.

Conceptually, related feature logic should be easy to locate together:

```text
features/
  pricing/
    quotes/
      ui/
      hooks/
      api/
      model/
      types/
```

Respect existing architecture when it is already coherent.

## UI Is Not The Domain Engine

Avoid new components that combine presentation, database access, network calls, business calculations, permissions, state machines, formatting, mutations, and event orchestration.

When complexity warrants separation, move responsibilities to appropriate hooks, domain/model functions, services/API modules, selectors, types, or state modules. Do not over-engineer trivial components.

## Source Of Truth Beats Line Count

Preventing duplicate business logic is more important than achieving small files.

Prefer one canonical business rule for pricing, discounts, payment state, contract state, project status, permission decisions, client derived state, notification state, and similar high-value logic.

Multiple UI surfaces may exist. Multiple sources of truth should not.

## Duplication Policy

Do not consolidate code merely because it looks similar. Distinguish exact duplication, structural similarity, legitimate variants, compatibility implementations, and different business semantics.

Consolidate only when semantics are genuinely shared. When existing contracts must remain stable, prefer a canonical implementation plus compatibility wrapper or re-export.

## Correctness Before Cleanliness

Use this priority order:

1. correctness
2. data safety
3. security
4. authorization
5. business semantics
6. compatibility
7. performance
8. maintainability
9. architecture aesthetics

Never break behavior simply to satisfy architecture rules.

## Database And Backend Work

Database architecture follows different rules from application source files. Do not apply source-file size limits mechanically to SQL migrations, PostgreSQL functions, generated database types, schema dumps, database fixtures, or declarative schema files. Database quality is not measured by line count.

Treat a mature working database as a stable product contract. Do not reorganize it merely for aesthetic cleanliness, naming consistency, policy count, schema diagrams, or migration history cosmetics.

Do not casually:

- merge tables because their names look similar
- rename schemas merely for consistency
- combine RPCs merely because multiple versions exist
- delete functions because they look old
- collapse RLS policies simply to reduce policy count
- drop indexes merely because an advisor calls them unused
- rewrite historical migrations
- mass-normalize schema naming
- move tables between schemas without a real product reason

Database refactoring requires stronger justification than ordinary code cleanup. Change database architecture only for demonstrated needs involving correctness, data integrity, security, authorization, performance, scale, concurrency, product capability, operational reliability, or migration reproducibility.

For production-backed databases, use forward-only evolution:

- never edit historical applied migrations merely to make history cleaner
- prefer new forward-only migrations
- prefer backward-compatible transitions
- use expand -> migrate -> contract when a breaking change is needed
- use compatibility RPC wrappers when callers need transition time
- use temporary compatibility columns or views when necessary
- avoid irreversible transitions until compatibility is proven

### Hosted Migration Drift Gate

Before any hosted `db push`, compare repository and hosted migration histories.
Treat every difference as an explicit investigation item:

1. Run `supabase migration list` and classify each mismatch as `EXACT_MATCH`,
   `SEMANTIC_MATCH_DIFFERENT_VERSION`, `REPO_ONLY`, `HOSTED_ONLY`, or `UNKNOWN`.
2. For a `HOSTED_ONLY` migration, restore its exact versioned source from Git or
   inspect the hosted schema before proceeding. Do not invent a replacement file.
3. For a `REPO_ONLY` migration that predates the newest hosted migration, preview
   the ordered plan with `supabase db push --dry-run --include-all`; do not use
   `migration repair` just to silence the CLI.
4. Stop when the target project or resulting schema is uncertain. Never ignore
   history drift, skip migrations by timestamp, or apply a new baseline over a
   live database without a reviewed compatibility plan.
5. Record the resolved history in Git, rerun the dry-run, and only then use the
   controlled deployment path authorized for that environment.

This gate is mandatory for database work and applies before schema, RPC, RLS,
trigger, grant, index, or `search_path` changes are applied to a hosted target.

No direct production database changes. Every intended database change should originate from a versioned migration file in the repository and then follow the repository's controlled deployment path.

This includes schema changes, tables, columns, constraints, indexes, RLS, policies, functions/RPCs, triggers, grants, and `search_path` changes. Do not execute ad hoc schema-changing SQL directly on production and leave it undocumented. If an emergency production SQL change is truly unavoidable, capture the exact resulting change back into a migration before continuing normal development.

The normal flow is:

```text
create migration file
-> test locally
-> verify
-> commit to Git
-> apply through controlled deployment
```

Never run `db reset` on production, never run destructive database commands without proving the target is local, never run migration repair blindly, never rewrite applied migration history casually, never modify production migration tracking just to silence CLI warnings, and never execute schema-changing SQL against an uncertain project. Before destructive database commands, prove the target is localhost/local containers. If environment identity is uncertain, stop.

Repositories may intentionally use a canonical baseline migration as a new starting point. Do not reopen or reconstruct archived historical migrations unless specifically required. Do not rewrite the accepted canonical baseline casually; continue forward from it.

Prefer one canonical database source of truth for each business concept. Before adding a new table, status field, RPC, trigger, or materialized representation, check whether an existing canonical database object already owns that concept. Multiple presentation/query surfaces may exist; multiple competing business truths should not.

RPC version names such as `_v1`, `_v2`, `_v3`, or `legacy` do not mean the RPC is safe to remove. Before changing or removing an RPC, identify frontend callers, backend callers, Edge Function callers, cron/background callers, public callers, client callers, admin callers, and compatibility requirements. Prefer a canonical implementation plus a compatibility wrapper over abrupt removal.

Do not consolidate tables based on naming similarity. Similar tables may represent lifecycle stages, audit history, compatibility, product variants, authorization boundaries, schemas, or ownership models. Understand semantics first. When uncertain, preserve them.

RLS correctness comes before RLS neatness. Never simplify policies merely to reduce policy count. Before changing RLS, establish the role, resource, action, allowed case, and denied case. Test both positive and negative authorization behavior. A policy change succeeds only when legitimate access remains functional, unauthorized access remains blocked, and performance does not materially regress.

`SECURITY DEFINER` is not automatically a vulnerability. Classify privileged functions by intended access before hardening:

- `PUBLIC_GUEST`
- `CLIENT_AUTH`
- `TEAM`
- `ADMIN`
- `OWNER`
- `INTERNAL`
- `CRON_INTERNAL`

Harden only after understanding the contract. Do not broadly revoke access from intentionally public flows.

Use explicit safe `search_path` for privileged PostgreSQL functions where appropriate, but do not mass-modify hundreds of functions merely to satisfy a static rule. Prioritize externally callable, privileged, security-sensitive, and actively used functions. Test callers before and after.

Indexes are an engineering tradeoff. Do not add every advisor-recommended index or remove every supposedly unused index. Use query patterns, `EXPLAIN`, `EXPLAIN ANALYZE` in safe environments, table growth, join behavior, foreign keys, write frequency, and storage cost. Change indexes only when evidence supports it.

Optimize actual database workload. Look for unbounded history queries, N+1 application patterns, repeated identical queries, unnecessary writes, full-table scans on growing tables, poor pagination, expensive aggregation, high-frequency RPCs, and connection pressure. Measure before changing when practical.

Do not redesign database tables merely because Realtime workload is high. First inspect application subscription behavior: duplicate channels, missing cleanup, wide subscriptions, reconnect leaks, hidden-view subscriptions, and multiple consumers of identical streams. Fix workload amplification at its source.

For cron, queue, and background database workflows, prioritize idempotency, atomic claiming, locking, retry, backoff, duplicate prevention, dead-letter behavior, transaction boundaries, and observability. Do not rewrite stable workers solely to modernize style.

If repository migration history and hosted migration history differ, do not blindly run migration repair, rewrite history, or assume migrations are identical based only on filenames. Classify differences as `EXACT_MATCH`, `SEMANTIC_MATCH_DIFFERENT_VERSION`, `REPO_ONLY`, `HOSTED_ONLY`, or `UNKNOWN`. Actual resulting schema semantics are more important than timestamp cosmetics.

The database version of the architectural ratchet is not about line count. New database changes should not weaken integrity or authorization, introduce obvious unbounded growth, duplicate existing business truth unnecessarily, break reproducibility, weaken concurrency safety, or lose backward compatibility when compatibility is practical.

When a frontend/UI feature can use the existing database contract correctly, do not redesign the database. When a code refactor can preserve the current database contract, preserve it. When the database is stable and no correctness, security, performance, or product problem has been demonstrated, leave it alone.

For database work, use this priority order:

1. data safety
2. correctness
3. authorization
4. compatibility
5. security
6. reliability
7. performance
8. scale
9. maintainability
10. aesthetic cleanliness

Never reverse this order merely to produce a cleaner schema diagram.

## Performance

Do not refactor stable code simply because it looks inefficient. Measure when practical.

Focus on actual duplicate calls, N+1 behavior, unbounded fetching, subscription leaks, render cascades, expensive queries, bundle hotspots, queue contention, and connection pressure. Architecture changes should solve real problems.

## Technical Debt Register

When significant legacy debt is discovered but does not justify immediate refactoring, do not silently ignore it and do not automatically fix it.

If the repository has an architecture or technical-debt registry, record it concisely with:

- Area
- Risk
- Reason
- Recommended strategy
- Trigger for future refactor

Use EXTRACT_ON_TOUCH as the usual strategy for stable legacy debt.

## Optional Project Guard

When explicitly asked to enforce Forward Architecture in a repository, Antigravity may create a project-level architecture guard. Do not add this automatically just because the skill is active.

A project guard may include files such as:

```text
architecture/legacy-large-files.json
architecture/exceptions.json
scripts/check-architecture.*
```

It should conceptually enforce:

- New manually maintained file over 1000 lines: fail.
- New file over 800 lines: warn.
- Grandfathered legacy-large file: allowed to remain large.
- Legacy-large file materially exceeding its recorded ceiling: fail or strong warning according to project policy.
- Legacy file shrinking: encourage ratchet baseline update.
- Generated/vendor files: ignored.
- Exceptions: explicit, narrow, documented.

## Before Adding A Large Feature

Before placing substantial new logic into an existing file, check:

1. Is this file already legacy-large?
2. Does the new behavior represent a distinct responsibility?
3. Is there already a canonical module for this domain?
4. Would adding here create another source of truth?
5. Can the capability safely live in a separate module?
6. Can the old file integrate it through a small stable interface?

If yes, prefer the separate module.

## Modifying Old Code

Use this decision model:

- Small bug: fix locally.
- Small change: modify existing code when appropriate.
- New substantial feature: create or extend a proper feature module.
- New business rule: use a canonical domain implementation.
- Touching a God file: extract the touched responsibility when safe.
- Unrelated legacy mess: leave it alone and optionally register debt.
- Uncertain refactor: preserve behavior.

## Testing

Architectural extraction must preserve behavior. Use the evidence proportional to risk:

- existing tests
- focused characterization
- type checking
- relevant guards
- build checks

Do not run massive full-suite verification after every trivial edit unless repository policy requires it. Do run broader verification at meaningful checkpoints. Never weaken tests just to make a refactor pass.

For database changes, test migrations locally, verify expected schema/contracts, test authorization when applicable, and verify there was no unintended production mutation.

## Agent Behavior

When this skill applies, work directly. Do not spend excessive time producing architecture essays unless the user requests analysis.

For implementation tasks: inspect, implement, run focused tests, verify, and continue. Do not automatically turn a feature request into a repository-wide refactor. Do not expand scope unnecessarily.

## Final Check

Before completing a material structural change, internally check:

- Did behavior stay preserved?
- Did substantial new logic avoid unnecessary placement in a legacy God file?
- Did the change avoid creating another source of truth?
- Did new manually maintained source files stay under the hard ceiling or document a real exception?
- Did the change avoid needless file fragmentation?
- Did public/API/database compatibility contracts remain intact?
- Did intended database changes start as versioned migrations?
- Did the work avoid direct undocumented production database modification?
- Did touched legacy architecture stay the same size or improve where practical?
- Was the changed behavior tested appropriately?

## Short Memory

Preserve stable legacy. Do not refactor for aesthetics. New substantial code is modular. 1000 lines is a hard ceiling for normal new source files, not a target, and does not apply mechanically to database artifacts. Legacy large files are grandfathered but should not materially grow. Improve touched responsibilities incrementally. One business rule should have one canonical source of truth. Do not redesign a strong database for aesthetics. Every intended production database change starts as a versioned migration and is tested locally first. For database work, preserve mature contracts, use forward-only migrations, prove RLS/RPC/index changes, and prioritize data safety over schema cleanliness. Correctness, safety, and compatibility beat cleanliness.
