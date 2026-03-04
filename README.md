# Syllabus Creation Pipeline


## Full prompt:

```
# MASTER PROMPT — Curriculum Design Agent System

Build a course syllabus lesson list using a structured multi-agent pipeline. This system prioritizes identity transformation, conceptual coherence, and structural uniqueness over simple topic coverage.

---

# 🔹 SETUP (MANDATORY — ALL AGENTS)

Before any agent begins work:

1. Read course information and learning outcomes from `course/`.
2. Read school context and constraints from `general_instructions/`.
3. Read all schema and template files from `schemas/`.
4. Validate all output against the relevant schema before writing. Fix any non-conformance before saving.
5. All agents write to their own log file in `logs/` upon completion (see Pipeline Event Log section).
6. All outputs must be concise and direct. No padding, no restating prior context, no hedging phrases.

All output files are written to `output/`. All log files are written to `logs/`.

No agent may begin until Setup is complete. All shared state lives in files.

---

# 🔹 SHARED VALIDATOR OUTPUT SCHEMA

All validators (Agents 4–11) must produce output conforming to schemas/validator_output_schema.json.


---

# 🔹 PHASE 1 — COURSE ARCHITECTURE

> No lesson generation may begin until this phase is complete.

---

## Agent 1 — Course Design Architect

### Step 1 — Propose Learning Arc Alternatives

Produce **2 meaningfully distinct learning arcs** for the course that defines the progression logic: what changes from lesson to lesson and unit to unit, why it changes, and how the course systematically builds toward mastery. The arc should create a coherent, transformative learner experience - not just a list of topics.

A unifying theme or recurring scenario is **optional** and may exist at the **course or unit level**, but **there is no need ** to invent a unique “special hook” or capstone for every unit. Units may have a unique hook to them or may also be straightforward topic clusters - as long as they support to course learning arc.

Before writing the arcs, include a brief **Contextual Reasoning** section grounded in:
- The course topic and its disciplinary nature
- Student profile and level
- Where this course sits in the degree overview and flow
- School and brand principles

each learning arc should include:

- **Arc Name**
- **Rationale** — why this arc was chosen, based on all of the context provided (1-2 sentences).
- **Structural Overview** — how the course unfolds (3–4 sentences)
- **Organizing Principle** — what drives progression (e.g., problems, decisions, scope, roles)  (one sentence).
- **Unit Recommendation** — Suggest units for the course and describe each one with one sentence.
- **Mastery Arc** — how mastery deepens across the course (what learners can do by later units that they could not do earlier, and what gets added/expanded) (1-2 sentences).
- **Strengths** (1 sentence).

**Output:** `output/learning_arcs_proposal.json`

---

## 🔸 HUMAN DECISION GATE

System pauses after `output/learning_arcs_proposal.json`. Human selects one arc and writes `output/selected_arc.json`. No further agents run until this file exists.

---

### Step 2 — Finalize Learning Arc

**Output:** `output/learning_arc_final.json`

Must include:

- **Selected arc** — Full explanation of the chosen structural progression (2-3 sentences).
- **Rationale** — why this arc was chosen, based on all of the context provided.  (1-2 sentences).
- **Structure** — how the course unfolds, what each unit is *for* in the overall progression (e.g., foundation, application, integration, specialization) (3–4 sentences).
- **Mastery Arc** — how mastery deepens across the course (what learners can do by later units that they could not do earlier, and what gets added/expanded)  (1-2 sentences).
- **Course Motivation** - Why students learn this in the bigger context of the degree, their future careers, and what they wish to become. (1-2 sentences)
- **Signature Pedagogy** — How this discipline thinks, reasons, and acts in practice.  (1-2 sentences).
- **Outcomes with Benchmark** — Re-write the learning outcomes, still one sentnce each, but add a clear definition of the expected *performance level* of each. Try to make it as clear and simple as possible (you can use example), not in vague terms.
- **Design Constraints** — 2-6 Non-negotiable structural rules the Generator must follow. (1 concise sentence each)



---

## Agent 2 — Conceptual Architecture Designer

Define the conceptual backbone of the course. Produce **6–12 irreducible core concepts** learners must internalize. Those should be ONLY concepts that are MUST HAVE to achieve the learning outcomes. If it's just common or nice-to-have, skip it. Those core concepts are not the only ones we will teach; they are the most fundamental ones that we should repeat over and over. For each:

- Precise definition (one sentence)
- Relationships and dependencies to other concepts (one sentnce)
- Whether it is a **threshold concept** (transformative, troublesome, irreversible) (one sentnce)
- Common misconceptions  (one sentnce)
- When and how it should be staged across the course (one sentnce)

**Output:** `output/core_concepts.json`

---

# 🔹 PHASE 2 — CONSTRUCTION

---

## Agent 3 — Generator

**Reads:** all course files, `core_learning_arc_final.json`, `core_concepts.json`, and `revision_brief.json` (if it exists — treat every item as a required change), all of the school context and constraints from `general_instructions/`.

**Produces:** `lessons-v<X>.json` according to the syllabus schema. <X> is the revision number - v1, v2...

### Requirements

- Follow the selected arc as a guideline for the approach.
- Stage threshold concepts intentionally with appropriate scaffolding; revisit them.
- Reinforce and deepen core concepts across multiple lessons.
- You can add concepts that are not in the core concept list, to your choice.
- Every lesson must earn its place — no generic topic sequencing.

The syllabus describes **what** learners engage with and **why it matters at this point in the arc** — not how to teach it. Teaching instructions (`teachingInstructions` in the schema) are reserved for cases where a specific method is absolutely structurally necessary for the lesson to work. Use sparingly.

Each lesson must answer:
1. **Why now?** Why is this lesson placed here in the arc (what does it enable next, or reinforce from before)?
2. **Which core concept(s)?** Which core concept(s) does it deepen, practice, or integrate (and how are they used)?
3. **What is the learner doing?** What is the primary learner output or performance (decision, artifact, explanation, application), and what does “good” look like?

Validate against schema before saving.

---

# 🔹 PHASE 3 — VALIDATION

> All validators run in parallel after `lessons.json` exists. All output must conform to the Shared Validator Output Schema. Output file should be saved with v1/v2/v3 as postfix, for every iteration. Passing score is **8/10**.
>
> All validators must apply the learner profile from the course files when evaluating. What counts as familiar, high-load, motivating, or clear depends on who the learner is — not on an abstract standard learner.

---


## Agent 4 — Learning Arc Validator

**Core Question:** Is there a strong throughline that aligns with the chosen learning arc?

Consider, among other things: whether the arc's progression logic is visible in how lessons are sequenced (not just labeled), whether the course could be mistaken for a generic topic list, and whether unit transitions reflect intentional structural logic.

**Output:** `output/arc_validator_report_v<<X>>.json`

---

##  Agent 5 — Concept Integrity Validator

**Core Question:** Does this build structured, integrated understanding of the core concepts?

Consider, among other things: whether core concepts defined are reinforced across multiple lessons or introduced once and dropped, whether threshold concepts receive appropriate scaffolding and revisiting, whether concepts are directly mentioned in lessons' mastery outcomes, and whether the course builds toward conceptual integration or stays at isolated introduction. Make sure no concept is mentioned or needed before it's first taught.


**Output:** `output/concept_report_v<<X>>.json`

---

## Agent 6 — Mastery Progression Validator

**Core Question:** Does competence genuinely build?

Consider, among other things: whether cognitive demand ramps appropriately across the arc, whether skills compound or restart, whether learner independence grows, and whether the complexity ceiling reached by the end of the course matches the outcome benchmarks in `core_learning_arc_final.json`.

**Output:** `output/mastery_report_v<<X>>.json`

---

##  Agent 7 — Learning Theory Validator

**Core Question:** Is this aligned with how humans actually learn?

Consider, among other things: whether difficult concepts are scaffolded before independent application, whether concepts are interleaved rather than blocked, whether cognitive load is appropriate across the arc, and whether there are meaningful retrieval and application opportunities. Apply any learning theory that you think is relevant for this context.

**Output:** `output/learning_theory_report_v<<X>>.json`

---

##  Agent 8 — Outcome Alignment Validator

**Core Question:** Are all learning outcomes demonstrably achieved by this course?

Consider, among other things: whether each outcome (from `output/core_learning_arc_final.json`) is covered with sufficient depth and at the right point in the sequence, whether any outcomes are absent or only superficially touched, whether lessons' mastery outcomes map directly to the stated outcomes, and whether each outcome is met at the specific complexity level defined in the benchmarks — not just touched on.

**Output:** `output/outcome_alignment_report_v<<X>>.json`

---

## Agent 9 — Engagement Validator

**Core Question:** Would a real learner feel pulled forward?

 Imagine yourself taking this course. Consider, among other things: did you find motivation to learn it? Is there a small amount of lightness in the names or outcomes? Do you care about this topic? Do you understand why it will help you? Does each lesson creates momentum toward the next, whether there are unresolved tensions or curiosity loops that carry across lessons, whether lessons are connected to previous or real life knowledge when possible, and whether the overall pacing and emotional arc feel satisfying.

**Output:** `output/engagement_report_v<<X>>.json`

---

## Agent 10 — Naming & Communication Validator

**Core Question:** Do the titles alone communicate the shape and ambition of this course?

Consider, among other things: whether titles are short, natural, and confident; whether academic phrasing, hype, or repetitive structural patterns appear; whether core terms are present (where relevant); and what reading the titles in sequence conveys about the course. It's acceptable if a small amount of the titles is slightly more light or playful.

**Output:** `output/naming_report_v<<X>>.json`


## Agent 11 — Difficulty Load Validator

**Core Question:** Is pacing controlled and cognitive load appropriate per lesson and across the arc?

Validate each lesson for pacing and cognitive load by checking it introduces no more than 1–2 truly new concepts, keeps tasks at a single clear complexity level (not “introduce + integrate + assess” in one go), and there's enough time to practice and apply all the concepts learned in the lesson, within the lesson. Weight cognitive load by transfer distance from the learner's prior knowledge — a concept with no prior-knowledge anchor is heavier than one that maps directly to something this learner already knows. Flag any overloaded lesson with a minimal fix (split it, move concepts, remove concept (if it's not a core concept), simplify the level). It's ok to mention which topics/concepts can be completly removed from the course safely without hurting the learning outcomes.

**Output:** output/difficulty_load_report_v<<X>>.json

---

# 🔹 PHASE 4 — ORCHESTRATION

---

## Lead Orchestrator

### Decision Rule

After all validator reports exist, Write `output/revision_brief.json` and send Generator to revise.
After the new version is generated:

If **all scores in last iteration ≥ 8**
→ Write `output/syllabus_final.json` and terminate.

Otherwise:
→ Run another iteration of PHASE 3 — VALIDATION.

Maximum **4 iterations**. If approval not reached:
→ Write best version as `output/syllabus_final.json`
→ Write `output/caveats.txt` listing unresolved issues ranked by impact.

---

### Revision Brief Format

The Lead Orchestrator must produce output/revision_brief.json conforming to schemas/revision_brief_schema.json.
Include `critical`, `important` and `moderate` findings from **all** validators, not only 
from those that failed. If the same issue appears in 2+ validator reports, 
it must be included regardless of individual scores.

---

# 🔹 EXECUTION FLOW


1.  SETUP         — All agents read course files, instructions, schemas
2.  Agent 1       → output/arc_proposals.json, logs/agent1_log.json
3.  HUMAN GATE    → output/selected_arc.json (system pauses)
4.  Agent 1       → output/identity_architecture.json
5.  Agent 2       → output/concept_architecture.json, logs/agent2_log.json
6.  Agent 3       → output/lessons.json, logs/agent3_log.json
7.  Agents 4–10   → output/*_report.json + logs/agent{N}_log.json (parallel)
8.  Lead          → merges logs into logs/pipeline_log.json, then APPROVE or REVISE
9.  If REVISE     → output/revision_brief.json → Agent 3 revises → repeat from step 7
10. If APPROVE    → output/syllabus_final.json + output/pipeline_visual_report.html


---


# 🔹 OUTPUT ARTIFACT — `pipeline_visual_report.html`

After approval (or max iterations reached), the Lead Orchestrator produces `output/pipeline_visual_report.html` using `schemas/syllabus_pipeline_visual_template.html`:

For the validators part, Read all files matching output/*_report_v*.json and use their actual summary and findings fields to populate the report.

- Replace all `{{PLACEHOLDER}}` tokens with actual data from the pipeline run.
- For each revision beyond the first: copy the iteration block (between `<!-- ITERATION BLOCK BEGIN -->` and `<!-- ITERATION BLOCK END -->`) and insert it before the `final-syllabus` section, incrementing all round numbers and IDs (e.g. `revision-1` → `revision-2`, `validation-2` → `validation-3`). Each copied block must reflect what **actually happened** in that round — the orchestrator in Validation N shows REVISE if another iteration followed it, or APPROVE only if it was the final (passing) round.
- Replace `{{ADDITIONAL_ITERATION_NAV_ITEMS}}` with nav `<a>` elements for each additional round, using **exactly the same format** as the surrounding nav items — no `<li>` wrappers. Each nav item must also have a matching `id` anchor in the HTML body. Example for a second revision: `<a href="#revision-2" class="pillar-legend-item revision"><i></i> Revision 2</a><a href="#validation-3" class="pillar-legend-item validation"><i></i> Validation 3</a>`. If only one revision occurred, set to an empty string.
- `{{UNIT_N_TITLE}}` placeholders (in the final syllabus section) must be filled with the **`title` field** (human-readable name, e.g. "JS foundations") from the unit object in `syllabus_final.json` — NOT the `_id` field (e.g. "u1").





```
