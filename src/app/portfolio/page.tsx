import Link from "next/link";
import Image from "next/image";

const releases = [
  {
    name: "Beyond the Signal",
    link: "https://lostfuzz.bandcamp.com/album/beyond-the-signal",
    image: "/images/Beyond_the_Signal.jpg",
  },
  {
    name: "Lunar - (LP)",
    link: "https://lostfuzz.bandcamp.com/album/lunar-lp",
    image: "/images/Lunar_-_(LP).jpg",
  },
  {
    name: "Whispers in the Shadows - (Single)",
    link: "https://lostfuzz.bandcamp.com/track/whispers-in-the-shadows-single",
    image: "/images/Whispers_in_the_Shadows_-_(Single).jpg",
  },
  {
    name: "Nine - (Single)",
    link: "https://lostfuzz.bandcamp.com/track/nine-single",
    image: "/images/Nine_-_(Single).jpg",
  },
  {
    name: "28 Ghosts IV - (Remix)",
    artist: "Nine Inch Nails",
    link: "https://lostfuzz.bandcamp.com/track/28-ghosts-iv-remix",
    image: "/images/28_Ghosts_IV_-_(Remix)_Nine_Inch_Nails.jpg",
  },
  {
    name: "Silhouette - (LP)",
    link: "https://lostfuzz.bandcamp.com/album/silhouette-lp",
    image: "/images/Silhouette_-_(LP).jpg",
  },
  {
    name: "Far Away - (Single)",
    link: "https://lostfuzz.bandcamp.com/track/far-away-single",
    image: "/images/Far_Away_-_(Single).jpg",
  },
  {
    name: "Moonlight - (Single)",
    link: "https://lostfuzz.bandcamp.com/track/moonlight-single",
    image: "/images/Moonlight_-_(Single).jpg",
  },
  {
    name: "Dark - (Single)",
    link: "https://lostfuzz.bandcamp.com/track/dark-single",
    image: "/images/Dark_-_(Single).jpg",
  },
  {
    name: "Friend - (Single)",
    link: "https://lostfuzz.bandcamp.com/track/friend-single",
    image: "/images/Friend_-_(Single).jpg",
  },
  {
    name: "Maxnive - (EP)",
    link: "https://lostfuzz.bandcamp.com/album/maxnive-ep",
    image: "/images/Maxnive_-_(EP).jpg",
  },
  {
    name: "Someday (Versions)",
    link: "https://lostfuzz.bandcamp.com/album/someday-versions",
    image: "/images/Someday_(Versions).jpg",
  },
  {
    name: "Breathless - (Single)",
    link: "https://lostfuzz.bandcamp.com/track/breathless-single",
    image: "/images/Breathless_-_(Single).jpg",
  },
  {
    name: "Midnight - (LP)",
    link: "https://lostfuzz.bandcamp.com/album/midnight-lp",
    image: "/images/Midnight_-_(LP).jpg",
  },
  {
    name: "Lily - (Single)",
    link: "https://lostfuzz.bandcamp.com/track/lily-single",
    image: "/images/Lily_-_(Single).jpg",
  },
];

export default function Portfolio() {
  return (
    <main className="min-h-screen bg-black p-8 font-[family-name:var(--font-vt323)] text-[#33ff33] text-xl uppercase overflow-y-auto">
      <div className="max-w-6xl mx-auto">
        <header className="mb-12 border-b-2 border-[#33ff33] pb-4">
          <h1 className="text-5xl mb-2">IAN DAOUST: PORTFOLIO</h1>
          <p>MUSIC RELEASES - (C) 1982-2025 IAN DAOUST</p>
        </header>

        <section className="space-y-12">
          <div>
            <h2 className="text-3xl underline mb-8">CATALOG_RELEASES</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {releases.map((release, index) => (
                <Link 
                  key={index} 
                  href={release.link} 
                  target="_blank" 
                  className="group block border border-[#33ff33] p-4 hover:bg-[#33ff33] hover:text-black transition-all"
                >
                  <div className="aspect-square relative mb-4 border border-[#33ff33] overflow-hidden">
                    <Image
                      src={release.image}
                      alt={release.name}
                      fill
                      className="object-cover grayscale group-hover:grayscale-0 transition-all duration-500 opacity-70 group-hover:opacity-100"
                    />
                    {/* Scanline overlay for image */}
                    <div className="absolute inset-0 pointer-events-none bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] z-10 bg-[length:100%_2px,3px_100%]"></div>
                  </div>
                  <div className="space-y-1">
                    <div className="font-bold truncate">{release.name}</div>
                    {release.artist && (
                      <div className="text-sm opacity-80">{release.artist}</div>
                    )}
                    <div className="text-xs mt-2 border-t border-current pt-1">
                      LINK: BANDCAMP.EXE
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>

          <div className="mt-12">
            <Link href="/" className="hover:bg-[#33ff33] hover:text-black p-2 border border-[#33ff33] transition-colors">
              &lt; RETURN TO MAIN
            </Link>
          </div>
        </section>

        <footer className="mt-20 opacity-50 pb-8">
          ] _
        </footer>
      </div>
    </main>
  );
}