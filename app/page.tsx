import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-zinc-50 to-zinc-100 dark:from-zinc-900 dark:to-black">
      <main className="container mx-auto px-6 py-16 max-w-6xl">
        {/* Hero Section */}
        <section className="min-h-[80vh] flex flex-col justify-center">
          <div className="space-y-6">
            <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold text-zinc-900 dark:text-zinc-50 tracking-tight">
              Joe Carey
            </h1>
            <h2 className="text-2xl md:text-3xl lg:text-4xl text-zinc-600 dark:text-zinc-400">
              Principle Product Designer
            </h2>
            <p className="text-lg md:text-xl text-zinc-600 dark:text-zinc-400 max-w-2xl">
              Crafting intuitive and impactful digital experiences through user-centered design and strategic thinking.
            </p>

            <div className="flex flex-wrap gap-4 pt-8">
              <Link
                href="/case-studies"
                className="px-8 py-4 bg-zinc-900 dark:bg-zinc-50 text-zinc-50 dark:text-zinc-900 rounded-lg hover:bg-zinc-800 dark:hover:bg-zinc-200 transition-colors font-medium"
              >
                View Case Studies
              </Link>
              <Link
                href="/about"
                className="px-8 py-4 border-2 border-zinc-900 dark:border-zinc-50 text-zinc-900 dark:text-zinc-50 rounded-lg hover:bg-zinc-900 hover:text-zinc-50 dark:hover:bg-zinc-50 dark:hover:text-zinc-900 transition-colors font-medium"
              >
                About Me
              </Link>
            </div>
          </div>
        </section>

        {/* Quick Links Section */}
        <section className="py-16 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <LinkCard
            href="/case-studies"
            title="Case Studies"
            description="Explore my featured design projects and problem-solving approaches"
          />
          <LinkCard
            href="/blog"
            title="Blog"
            description="Thoughts on design, product strategy, and industry insights"
          />
          <LinkCard
            href="/vibes"
            title="Vibes"
            description="Fun experimental projects and creative explorations"
          />
          <LinkCard
            href="/resume"
            title="Resume"
            description="Professional experience and background"
          />
          <LinkCard
            href="/about"
            title="About"
            description="Learn more about my journey and approach to design"
          />
        </section>
      </main>
    </div>
  );
}

function LinkCard({ href, title, description }: { href: string; title: string; description: string }) {
  return (
    <Link
      href={href}
      className="group p-6 bg-white dark:bg-zinc-800 rounded-xl border border-zinc-200 dark:border-zinc-700 hover:border-zinc-900 dark:hover:border-zinc-50 transition-all hover:shadow-lg"
    >
      <h3 className="text-xl font-semibold text-zinc-900 dark:text-zinc-50 mb-2 group-hover:text-zinc-700 dark:group-hover:text-zinc-200">
        {title}
      </h3>
      <p className="text-zinc-600 dark:text-zinc-400">
        {description}
      </p>
    </Link>
  );
}
