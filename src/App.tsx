import { useRef, useState } from "react";
import ametrineOs from "./assets/ametrine-os.png";
import astriaBrand from "./assets/astria-brand.png";

type Project = {
  title: string;
  category: string;
  year: string;
  image: string;
  alt: string;
};

const projects: Project[] = [
  {
    title: "Astria",
    category: "Identity",
    year: "2025",
    image: astriaBrand,
    alt: "Astria logo in white on a purple and blue gradient",
  },
  {
    title: "AmetrineOS",
    category: "Digital",
    year: "2025",
    image: ametrineOs,
    alt: "AmetrineOS wordmark and geometric purple logo on a sculpted white background",
  },
];

const filters = ["All", "Identity", "Digital"];

function Arrow({ diagonal = false }: { diagonal?: boolean }) {
  return (
    <svg
      aria-hidden="true"
      className={diagonal ? "size-4 -rotate-45" : "size-4"}
      fill="none"
      viewBox="0 0 20 20"
    >
      <path d="M3 10h14M12 5l5 5-5 5" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  );
}

export default function App() {
  const [activeFilter, setActiveFilter] = useState("All");
  const galleryRef = useRef<HTMLDivElement>(null);
  const visibleProjects = projects.filter(
    (project) => activeFilter === "All" || project.category === activeFilter,
  );

  const moveGallery = (direction: number) => {
    galleryRef.current?.scrollBy({
      left: direction * galleryRef.current.clientWidth,
      behavior: "smooth",
    });
  };

  return (
    <div className="min-h-screen overflow-hidden bg-[#f2f0e9] text-[#171714] selection:bg-[#ff4f2e] selection:text-white">
      <header className="absolute inset-x-0 top-0 z-20 mx-auto flex max-w-[1600px] items-center justify-between px-5 py-6 text-white md:px-10 md:py-8">
        <a className="flex items-center gap-3" href="#top">
          <svg
            aria-hidden="true"
            className="size-8"
            fill="none"
            viewBox="0 0 32 32"
          >
            <path
              d="M3 22.5c4.3 0 4.3-13 8.7-13s4.3 13 8.6 13 4.4-13 8.7-13"
              stroke="currentColor"
              strokeLinecap="round"
              strokeWidth="2.5"
            />
          </svg>
          <span className="text-sm font-semibold tracking-[-0.02em]">MINIMA GRAPHICS</span>
        </a>
        <a
          aria-label="Contact Minima Graphics"
          className="flex size-11 items-center justify-center transition-transform hover:scale-110"
          href="mailto:hello@studiomare.design"
        >
          <svg aria-hidden="true" className="size-6" fill="none" viewBox="0 0 24 24">
            <rect
              height="11"
              rx="2"
              stroke="currentColor"
              strokeLinejoin="round"
              strokeWidth="1.75"
              width="17"
              x="3.5"
              y="6.5"
            />
            <path
              d="m4.5 7.5 7.5 6 7.5-6"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.75"
            />
          </svg>
        </a>
      </header>

      <main id="top">
        <section className="relative flex min-h-screen items-end overflow-hidden bg-[#171714] text-white">
          <img
            alt="Astria logo in white on a purple and blue gradient"
            className="absolute inset-0 h-full w-full object-cover"
            src={astriaBrand}
          />
        </section>

        <section className="mx-auto max-w-[1600px] px-5 py-20 md:px-10 md:py-28">
          <div className="grid gap-10 border-t border-[#171714]/20 pt-6 md:grid-cols-12">
            <p className="text-xs uppercase leading-relaxed tracking-[0.12em] text-[#6d6c65] md:col-span-2">
              Selected work
              <br />
              2023—2025
            </p>
            <p className="max-w-md text-lg leading-snug tracking-[-0.02em] md:col-span-5 md:col-start-7 md:text-2xl">
              A design studio shaping bold identities, thoughtful publications, and cultural
              experiences.
            </p>
          </div>
        </section>

        <section id="work" className="py-20 md:py-28">
          <div className="mx-auto mb-12 flex max-w-[1600px] flex-col justify-between gap-8 px-5 md:mb-16 md:flex-row md:items-end md:px-10">
            <div>
              <p className="mb-3 text-xs uppercase tracking-[0.16em] text-[#6d6c65]">01 / Work</p>
              <h2 className="font-serif text-5xl tracking-[-0.05em] md:text-7xl">Selected projects</h2>
            </div>
            <div className="flex flex-col gap-6 md:items-end">
              <div className="flex flex-wrap gap-x-6 gap-y-3">
                {filters.map((filter) => (
                  <button
                    className={`border-b pb-1 text-xs uppercase tracking-[0.12em] transition-colors ${
                      activeFilter === filter
                        ? "border-[#171714] text-[#171714]"
                        : "border-transparent text-[#6d6c65] hover:text-[#171714]"
                    }`}
                    key={filter}
                    onClick={() => {
                      setActiveFilter(filter);
                      galleryRef.current?.scrollTo({ left: 0, behavior: "smooth" });
                    }}
                    type="button"
                  >
                    {filter}
                  </button>
                ))}
              </div>
              <div className="flex items-center gap-2">
                <button
                  aria-label="Previous project"
                  className="flex size-10 rotate-180 items-center justify-center rounded-full border border-[#171714]/30 transition-colors hover:border-[#171714]"
                  onClick={() => moveGallery(-1)}
                  type="button"
                >
                  <Arrow />
                </button>
                <button
                  aria-label="Next project"
                  className="flex size-10 items-center justify-center rounded-full border border-[#171714]/30 transition-colors hover:border-[#171714]"
                  onClick={() => moveGallery(1)}
                  type="button"
                >
                  <Arrow />
                </button>
              </div>
            </div>
          </div>

          <div
            aria-label="Selected projects"
            className="no-scrollbar flex snap-x snap-mandatory overflow-x-auto overscroll-x-contain"
            ref={galleryRef}
          >
            {visibleProjects.map((project) => (
              <article className="group w-full shrink-0 snap-start" key={project.title}>
                <a className="block" href={`#${project.title.toLowerCase().replace(" ", "-")}`}>
                  <div className="h-[64vh] min-h-[30rem] w-full overflow-hidden bg-[#dedbd1] md:h-[78vh]">
                    <img
                      alt={project.alt}
                      className="h-full w-full object-cover transition duration-1000 ease-out group-hover:scale-[1.02]"
                      loading="lazy"
                      src={project.image}
                    />
                  </div>
                  <div className="mx-5 mt-4 flex items-start justify-between border-t border-[#171714] pt-3 md:mx-10">
                    <div>
                      <h3 className="text-xl font-medium tracking-[-0.03em] md:text-2xl">{project.title}</h3>
                      <p className="mt-1 text-xs uppercase tracking-[0.12em] text-[#6d6c65]">
                        {project.category}
                      </p>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="text-xs text-[#6d6c65]">{project.year}</span>
                      <span className="transition-transform duration-300 group-hover:translate-x-1">
                        <Arrow />
                      </span>
                    </div>
                  </div>
                </a>
              </article>
            ))}
          </div>
        </section>

        <section id="about" className="mt-12 bg-[#171714] text-[#f2f0e9]">
          <div className="mx-auto max-w-[1600px] px-5 py-20 md:px-10 md:py-28">
            <div className="grid gap-16 md:grid-cols-12">
              <p className="text-xs uppercase tracking-[0.16em] text-[#aaa89f] md:col-span-3">
                02 / About
              </p>
              <div className="md:col-span-8">
                <h2 className="max-w-4xl font-serif text-5xl leading-[0.95] tracking-[-0.045em] md:text-7xl">
                  Small studio,
                  <br />
                  <span className="italic text-[#ff4f2e]">big point of view.</span>
                </h2>
                <div className="mt-12 grid gap-8 border-t border-white/20 pt-6 md:grid-cols-2">
                  <p className="max-w-sm text-base leading-relaxed text-[#d4d1c8]">
                    We partner with ambitious people and organizations to turn complex ideas into
                    clear, memorable design.
                  </p>
                  <div className="text-sm leading-relaxed text-[#aaa89f]">
                    <p>Strategy &amp; art direction</p>
                    <p>Brand identities</p>
                    <p>Editorial design</p>
                    <p>Digital experiences</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-[#ff4f2e] px-5 py-20 text-[#171714] md:px-10 md:py-28">
          <a className="group mx-auto flex max-w-[1600px] flex-col justify-between gap-12 md:flex-row md:items-end" href="mailto:hello@studiomare.design">
            <div>
              <p className="mb-6 text-xs uppercase tracking-[0.16em]">Have a project in mind?</p>
              <h2 className="font-serif text-[clamp(4rem,10vw,9rem)] leading-[0.8] tracking-[-0.06em]">
                Let&apos;s make
                <br />
                it matter.
              </h2>
            </div>
            <span className="flex size-20 items-center justify-center rounded-full border border-[#171714] transition-transform duration-300 group-hover:-rotate-45 md:size-28">
              <Arrow diagonal />
            </span>
          </a>
        </section>
      </main>

      <footer className="flex flex-col gap-5 bg-[#ff4f2e] px-5 pb-8 text-xs uppercase tracking-[0.12em] md:flex-row md:items-center md:justify-between md:px-10">
        <p>© 2025 Minima Graphics</p>
        <div className="flex gap-6">
          <a className="hover:underline" href="mailto:hello@studiomare.design">Email</a>
          <a className="hover:underline" href="#">Instagram</a>
          <a className="hover:underline" href="#">LinkedIn</a>
        </div>
      </footer>
    </div>
  );
}
