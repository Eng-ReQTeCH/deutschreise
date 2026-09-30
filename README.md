# Deutschreise

A private, beginner German web app with original English explanations and a transparent 70-hour active-study plan.

## Run

Requires Node.js 20 or newer. No package installation or build needed.

```
npm start
```

Open http://127.0.0.1:4173. Deploy `dist` as static assets.

## Content

- 12 units, 48 lessons; each lesson has three explanation sections, six bilingual examples, four contextual grammar questions, vocabulary recall, three written translations, three listening dictations, speaking prompts and writing models.
- 291 vocabulary entries including articles and plural forms where applicable.
- 12 original graded reading passages, 12 dialogues and practical missions, and 12 mixed checkpoints with 36 additional reading questions.
- Plan: 48 × 70-minute workshops + 12 × 40-minute missions + 36 × 10-minute spaced reviews = 4,200 minutes. These are suggested active-practice budgets, not 70 hours of recordings or guaranteed CEFR certification.
- Units 1–6 use the broad topic progression from the supplied Netzwerk neu A1.1 contents, printed pp. 4–5 (Klett, 2024). All instruction and exercises are original. Units 7–12 independently extend everyday A1 coverage. Source links and limitations appear in the app’s course guide.

## Learning data and audio

Progress, writing, notes, cards, mistakes and active time use browser-local storage. Export/import JSON backups from My progress. There is no server account sync. Private hosting access is separate from learning data.

German playback requires a German speech-synthesis voice installed on the device. All transcripts remain available without audio. Optional recording uses MediaRecorder and microphone permission, keeps audio in the current tab and provides a download. There is no automatic pronunciation or free-writing grammar assessment.

The app exposes feature-detected WebMCP progress-reading and lesson-navigation tools. Unsupported browsers work normally.

## Validation

`npm test` validates curriculum structure, answer options, topic coverage counts and independently totals the study plan. `scripts/browser-test.cjs` exercises the main flows using the bundled Playwright runtime on this host; change the require path for another environment. Screenshots are test artifacts, not shipped site assets.

## Scope

The app is a structured self-study foundation, not an official A1 certificate, a reproduction of Netzwerk neu, or a substitute for independent speaking/writing assessment. Use the linked official Goethe practice materials for an external readiness check.
