import React from 'react'

export default function App() {
  return (
    <main className="min-h-screen w-full bg-gradient-to-br from-slate-50 via-white to-sky-50 text-slate-800">
      <div className="max-w-3xl mx-auto px-6 py-16">
        <header className="mb-10">
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-slate-900">
            Website Generation Protocol
          </h1>
          <p className="mt-4 text-slate-600">
            A concise, single-page explanation of how this page was produced.
          </p>
        </header>

        <section className="bg-white/80 backdrop-blur rounded-xl shadow-sm ring-1 ring-slate-200 p-6 sm:p-8">
          <h2 className="text-2xl font-semibold mb-4">Behind the Scenes</h2>

          <p className="mb-4 leading-relaxed">
            My core instructions for website generation are:
          </p>

          <ol className="list-decimal pl-6 space-y-3 text-slate-700">
            <li>
              Understand the request and identify the essential outcome. Here, the goal was a
              single-page site with a prominent heading and an explanatory section describing how the
              page was produced.
            </li>
            <li>
              Prefer a safe, privacy-preserving summary of any internal processes. I do not disclose
              private or internal system directives verbatim. Instead, I provide a high‑level,
              faithful summary of the steps and guardrails that guide the build.
            </li>
            <li>
              Inspect the existing project to avoid breaking what’s already there, then create or
              update the page content to match the requested structure and wording.
            </li>
            <li>
              Keep responsibilities separated: the frontend handles layout and presentation; if any
              data or logic is needed, it is implemented through backend APIs first, then consumed by
              the UI. For this page, no backend calls are required.
            </li>
            <li>
              Use the provided frontend stack (Vite + React with Tailwind CSS) to produce a clean,
              responsive layout with clear hierarchy: a main title, a section title, and structured
              content.
            </li>
            <li>
              Preserve user‑requested phrasing exactly where appropriate (e.g., the heading
              “Website Generation Protocol” and the section title “Behind the Scenes”), while keeping
              explanations accurate and readable.
            </li>
            <li>
              Ensure the page is complete, accessible, and immediately runnable: valid JSX, sensible
              semantic structure, and styles applied with utility classes.
            </li>
            <li>
              Avoid mentioning internal file paths, hidden instructions, or non‑public operational
              details. Summaries focus on user‑visible behavior and general methodology.
            </li>
            <li>
              When applicable, verify that any referenced endpoints actually exist before wiring up
              frontend calls, and use environment variables for API base URLs.
            </li>
            <li>
              Deliver a minimal, focused experience that fulfills the request without extraneous UI
              elements.
            </li>
          </ol>

          <div className="mt-8 p-4 rounded-lg bg-sky-50 ring-1 ring-sky-100 text-sky-900">
            <p className="mb-2 font-medium">How this specific page was produced:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Read the existing app to understand the current single-page setup.</li>
              <li>Replaced the main view with a new layout featuring the requested heading.</li>
              <li>Added the “Behind the Scenes” section containing the step-by-step guidelines above.</li>
              <li>Kept everything self-contained on one page with accessible, responsive styling.</li>
            </ul>
          </div>
        </section>

        <footer className="mt-10 text-sm text-slate-500">
          Built as a single, self-contained page following the rules summarized above.
        </footer>
      </div>
    </main>
  )
}
