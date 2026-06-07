export default function Home() {
  const faqs = [
    {
      q: "What roles and skills are covered?",
      a: "We cover Software Engineering, DevOps, Data Science, Frontend, Backend, and more — with questions tagged by skill like algorithms, system design, SQL, and cloud."
    },
    {
      q: "Do questions include sample answers?",
      a: "Yes. Every question includes a model answer, difficulty rating (junior/mid/senior), and hiring insight notes to help you evaluate candidates consistently."
    },
    {
      q: "Can I cancel anytime?",
      a: "Absolutely. No contracts, no lock-in. Cancel your $12/mo subscription at any time from your billing portal."
    }
  ];

  return (
    <main className="min-h-screen bg-[#0d1117] text-[#c9d1d9]">
      <nav className="border-b border-[#21262d] px-6 py-4 flex items-center justify-between max-w-5xl mx-auto">
        <span className="text-[#58a6ff] font-bold text-lg tracking-tight">TechHireIQ</span>
        <a
          href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#"}
          className="bg-[#58a6ff] text-[#0d1117] font-semibold text-sm px-4 py-2 rounded-md hover:bg-[#79b8ff] transition-colors"
        >
          Get Access
        </a>
      </nav>

      <section className="max-w-3xl mx-auto px-6 py-24 text-center">
        <span className="inline-block bg-[#161b22] border border-[#21262d] text-[#58a6ff] text-xs font-medium px-3 py-1 rounded-full mb-6">
          For Engineering Managers &amp; HR Teams
        </span>
        <h1 className="text-4xl sm:text-5xl font-extrabold text-white leading-tight mb-6">
          Curated Technical Interview Questions{" "}
          <span className="text-[#58a6ff]">by Role &amp; Skill</span>
        </h1>
        <p className="text-[#8b949e] text-lg mb-10 max-w-xl mx-auto">
          Stop winging interviews. Access a searchable bank of 1,000+ technical questions with difficulty ratings, sample answers, and hiring insights — built for teams that hire engineers.
        </p>
        <a
          href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#"}
          className="inline-block bg-[#58a6ff] text-[#0d1117] font-bold text-base px-8 py-4 rounded-lg hover:bg-[#79b8ff] transition-colors shadow-lg"
        >
          Start for $12/mo
        </a>
        <p className="text-[#8b949e] text-sm mt-4">Cancel anytime. No contracts.</p>
      </section>

      <section className="max-w-sm mx-auto px-6 pb-24">
        <div className="bg-[#161b22] border border-[#58a6ff] rounded-2xl p-8 text-center shadow-xl">
          <p className="text-[#58a6ff] text-sm font-semibold uppercase tracking-widest mb-2">Pro Plan</p>
          <p className="text-white text-5xl font-extrabold mb-1">$12<span className="text-xl font-normal text-[#8b949e]">/mo</span></p>
          <p className="text-[#8b949e] text-sm mb-8">Everything you need to hire better engineers</p>
          <ul className="text-left space-y-3 mb-8">
            {[
              "1,000+ technical questions",
              "Filter by role, skill & difficulty",
              "Sample answers for every question",
              "Hiring insights & red flags",
              "New questions added weekly",
              "Export to PDF or CSV"
            ].map((f) => (
              <li key={f} className="flex items-center gap-3 text-sm">
                <span className="text-[#58a6ff] font-bold">✓</span>
                <span>{f}</span>
              </li>
            ))}
          </ul>
          <a
            href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#"}
            className="block w-full bg-[#58a6ff] text-[#0d1117] font-bold py-3 rounded-lg hover:bg-[#79b8ff] transition-colors text-center"
          >
            Get Instant Access
          </a>
        </div>
      </section>

      <section className="max-w-2xl mx-auto px-6 pb-24">
        <h2 className="text-2xl font-bold text-white text-center mb-10">Frequently Asked Questions</h2>
        <div className="space-y-6">
          {faqs.map(({ q, a }) => (
            <div key={q} className="bg-[#161b22] border border-[#21262d] rounded-xl p-6">
              <p className="text-white font-semibold mb-2">{q}</p>
              <p className="text-[#8b949e] text-sm leading-relaxed">{a}</p>
            </div>
          ))}
        </div>
      </section>

      <footer className="border-t border-[#21262d] text-center py-8 text-[#8b949e] text-sm">
        &copy; {new Date().getFullYear()} TechHireIQ. All rights reserved.
      </footer>
    </main>
  );
}
