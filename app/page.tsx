export default function Page() {
  return (
    <main className="min-h-screen bg-[#0d1117] text-[#c9d1d9] font-sans">
      {/* Hero */}
      <section className="max-w-4xl mx-auto px-6 pt-24 pb-16 text-center">
        <span className="inline-block bg-[#161b22] border border-[#30363d] text-[#58a6ff] text-xs font-semibold px-3 py-1 rounded-full mb-6 uppercase tracking-widest">
          Database Tools
        </span>
        <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight mb-6">
          Visualize Database Relationships
          <span className="text-[#58a6ff]"> from SQL Exports</span>
        </h1>
        <p className="text-lg text-[#8b949e] max-w-2xl mx-auto mb-10">
          Upload any SQL dump file and instantly generate interactive relationship diagrams.
          Trace foreign keys, spot orphaned tables, and finally understand that legacy schema.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
          <a
            href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#"}
            className="bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold px-8 py-4 rounded-lg text-lg transition-colors"
          >
            Start Mapping — $15/mo
          </a>
          <a
            href="#how-it-works"
            className="border border-[#30363d] hover:border-[#58a6ff] text-[#c9d1d9] px-8 py-4 rounded-lg text-lg transition-colors"
          >
            See How It Works
          </a>
        </div>
        {/* Feature grid */}
        <div id="how-it-works" className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-left">
          {[
            { icon: "⬆️", title: "Upload SQL Dump", desc: "Supports MySQL, PostgreSQL, and SQLite export formats." },
            { icon: "🔗", title: "Auto-detect Relationships", desc: "Parses FOREIGN KEY constraints and infers implicit links." },
            { icon: "🗺️", title: "Interactive Diagram", desc: "Drag, zoom, and pan a live graph of your entire schema." }
          ].map(f => (
            <div key={f.title} className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
              <div className="text-3xl mb-3">{f.icon}</div>
              <h3 className="text-white font-semibold mb-2">{f.title}</h3>
              <p className="text-[#8b949e] text-sm">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section className="max-w-md mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold text-white text-center mb-10">Simple Pricing</h2>
        <div className="bg-[#161b22] border-2 border-[#58a6ff] rounded-2xl p-8 text-center">
          <p className="text-[#58a6ff] font-semibold uppercase tracking-widest text-sm mb-2">Pro</p>
          <div className="text-5xl font-bold text-white mb-1">$15</div>
          <p className="text-[#8b949e] mb-8">per month, cancel anytime</p>
          <ul className="text-left space-y-3 mb-8">
            {[
              "Unlimited SQL file uploads",
              "Interactive drag-and-drop diagrams",
              "Foreign key & orphan detection",
              "Export diagrams as PNG or SVG",
              "Priority email support"
            ].map(item => (
              <li key={item} className="flex items-center gap-3 text-[#c9d1d9]">
                <span className="text-[#58a6ff] font-bold">✓</span> {item}
              </li>
            ))}
          </ul>
          <a
            href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#"}
            className="block w-full bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold py-4 rounded-lg text-lg transition-colors"
          >
            Get Started
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-2xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold text-white text-center mb-10">FAQ</h2>
        <div className="space-y-6">
          {[
            {
              q: "Which SQL formats are supported?",
              a: "We support MySQL, PostgreSQL, and SQLite dump files. Simply export your schema using your database's native dump tool and upload the .sql file."
            },
            {
              q: "Is my data stored on your servers?",
              a: "No. SQL files are parsed in-memory and never persisted. Your schema data is processed client-side and discarded after your session ends."
            },
            {
              q: "Can I export the generated diagrams?",
              a: "Yes. Pro subscribers can export relationship diagrams as high-resolution PNG or SVG files, ready for documentation or presentations."
            }
          ].map(({ q, a }) => (
            <div key={q} className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
              <h3 className="text-white font-semibold mb-2">{q}</h3>
              <p className="text-[#8b949e] text-sm leading-relaxed">{a}</p>
            </div>
          ))}
        </div>
      </section>

      <footer className="text-center text-[#8b949e] text-sm py-10 border-t border-[#21262d]">
        © {new Date().getFullYear()} DB Relationship Mapper. All rights reserved.
      </footer>
    </main>
  )
}
