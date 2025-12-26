import Link from "next/link";

export default function Contact() {
  return (
    <main className="min-h-screen bg-[#0055aa] p-4 sm:p-12 font-[family-name:var(--font-press-start-2p)] text-white text-[10px] sm:text-xs">
      <div className="max-w-3xl mx-auto bg-[#ffffff] border-2 border-black p-1 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
        {/* Amiga Window Frame */}
        <div className="bg-[#aaaaaa] border-b-2 border-black p-2 flex items-center justify-between text-black mb-1">
          <div className="flex gap-2">
            <div className="w-6 h-4 bg-white border border-black flex items-center justify-center">
               <div className="w-4 h-0.5 bg-black"></div>
            </div>
          </div>
          <div className="uppercase font-bold tracking-widest">Workbench 1.3 - Contact</div>
          <div className="flex gap-2">
            <div className="w-6 h-4 bg-white border border-black"></div>
          </div>
        </div>

        <div className="bg-[#0055aa] p-6 sm:p-12 border border-black space-y-8">
          <div className="flex items-start gap-6">
            <div className="w-16 h-16 bg-[#ff8800] border-2 border-white flex-shrink-0 flex items-center justify-center text-4xl shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              !
            </div>
            <div className="space-y-4">
              <h1 className="text-xl sm:text-2xl text-[#ff8800] underline">COMMUNICATION LINK</h1>
              <p className="leading-relaxed">
                INITIATING CONNECTION TO IAN DAOUST...
              </p>
            </div>
          </div>

          <div className="space-y-6 pt-8">
            <div className="flex gap-4 items-center">
              <span className="text-[#ff8800]">EMAIL:</span>
              <span className="bg-white text-black px-2 py-1">HELLO@IANDAOUST.COM</span>
            </div>
            <div className="flex gap-4 items-center">
              <span className="text-[#ff8800]">GITHUB:</span>
              <span className="bg-white text-black px-2 py-1">/IANDAOUST</span>
            </div>
          </div>

          <div className="mt-12 flex justify-end">
            <Link href="/" className="bg-[#aaaaaa] border-2 border-black px-4 py-2 text-black hover:bg-white transition-colors flex items-center gap-2">
              <span className="w-4 h-4 bg-[#ff8800] rounded-full inline-block"></span>
              BACK TO MAIN
            </Link>
          </div>
        </div>
      </div>
      
      {/* Amiga Checkmark icons at bottom */}
      <div className="mt-8 flex gap-4 opacity-50 justify-center">
        <div className="w-8 h-8 border-2 border-white flex items-center justify-center italic font-bold">A</div>
        <div className="w-8 h-8 border-2 border-white flex items-center justify-center italic font-bold">V</div>
      </div>
    </main>
  );
}
