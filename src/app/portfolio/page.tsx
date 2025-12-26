import Link from "next/link";

export default function Portfolio() {
  return (
    <main className="min-h-screen bg-black p-8 font-[family-name:var(--font-vt323)] text-[#33ff33] text-2xl uppercase">
      <div className="max-w-4xl mx-auto">
        <header className="mb-12 border-b-2 border-[#33ff33] pb-4">
          <h1 className="text-5xl mb-2">APPLE ][ PORTFOLIO</h1>
          <p>VERSION 1.0 (C) 1982 IAN DAOUST</p>
        </header>

        <section className="space-y-8">
          <div>
            <h2 className="text-3xl underline mb-4">PROJECTS</h2>
            <ul className="list-disc list-inside space-y-4">
              <li>
                <span className="font-bold">PIXEL ART ENGINE</span> - A HIGH PERFORMANCE RENDERING ENGINE FOR RETRO GRAPHICS.
              </li>
              <li>
                <span className="font-bold">RETRO OS SIM</span> - EMULATING CLASSIC OPERATING SYSTEMS IN THE BROWSER.
              </li>
              <li>
                <span className="font-bold">8-BIT SYNTH</span> - A FM SYNTHESIZER INSPIRED BY THE YAMAHA YM2151.
              </li>
            </ul>
          </div>

          <div className="mt-12">
            <Link href="/" className="hover:bg-[#33ff33] hover:text-black p-2 transition-colors">
              &lt; CATALOG
            </Link>
          </div>
        </section>

        <footer className="mt-20 opacity-50">
          ] _
        </footer>
      </div>
    </main>
  );
}
