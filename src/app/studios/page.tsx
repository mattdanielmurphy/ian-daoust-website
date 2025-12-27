import Link from "next/link";

export default function Studios() {
  return (
    <main className="min-h-screen bg-white p-4 sm:p-12 font-sans text-black" style={{ backgroundImage: 'radial-gradient(#ccc 1px, transparent 1px)', backgroundSize: '20px 20px' }}>
      <div className="max-w-2xl mx-auto bg-white border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
        {/* Title Bar */}
        <div className="border-b-2 border-black p-2 flex items-center justify-between bg-white">
          <div className="flex gap-1">
            <div className="w-4 h-4 border border-black"></div>
          </div>
          <div className="font-bold uppercase tracking-widest text-sm">Ian Daoust: Lost Fuzz Studios</div>
          <div className="w-4 h-4"></div>
        </div>

        {/* Menu Bar (Internal) */}
        <div className="border-b border-black flex gap-4 px-4 py-1 text-xs font-bold uppercase">
          <span>File</span>
          <span>Edit</span>
          <span>View</span>
          <span>Special</span>
        </div>

        {/* Content */}
        <div className="p-4 sm:p-8 space-y-6">
          <div className="flex flex-col items-center mb-8">
            <div className="w-16 h-16 sm:w-24 sm:h-24 border-2 border-black mb-4 flex items-center justify-center p-2">
               <div className="w-full h-full bg-black"></div>
            </div>
            <h1 className="text-xl sm:text-3xl font-bold uppercase tracking-tighter italic text-center">Ian Daoust: Lost Fuzz</h1>
          </div>

          <p className="text-xs sm:text-sm leading-relaxed text-center border-t border-b border-black py-4">
            A CREATIVE POWERHOUSE SPECIALIZING IN LO-FI AESTHETICS, 
            DISTORTED AUDIO, AND ANALOG NOSTALGIA.
          </p>

          <div className="grid grid-cols-2 gap-4 pt-4">
            <div className="border border-black p-4 text-center hover:bg-black hover:text-white transition-colors cursor-pointer">
              AUDIO PROD.
            </div>
            <div className="border border-black p-4 text-center hover:bg-black hover:text-white transition-colors cursor-pointer">
              VISUAL ART
            </div>
          </div>

          <div className="mt-12 text-center">
            <Link href="/" className="inline-block border-2 border-black px-6 py-2 font-bold hover:bg-black hover:text-white transition-all uppercase text-sm">
              Close Window
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
