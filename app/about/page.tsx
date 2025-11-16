export default function About() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-zinc-50 to-zinc-100 dark:from-zinc-900 dark:to-black">
      <main className="container mx-auto px-6 py-16 max-w-4xl">
        <h1 className="text-5xl md:text-6xl font-bold text-zinc-900 dark:text-zinc-50 mb-8">
          About Me
        </h1>

        <div className="space-y-8 text-lg text-zinc-700 dark:text-zinc-300">
          <section>
            <h2 className="text-3xl font-semibold text-zinc-900 dark:text-zinc-50 mb-4">
              Hello, I'm Joe Carey
            </h2>
            <p className="mb-4">
              I'm a Principle Product Designer with a passion for creating meaningful digital experiences
              that solve real problems for real people.
            </p>
            <p>
              My approach combines strategic thinking with hands-on design work, ensuring that every
              decision is grounded in user needs and business objectives.
            </p>
          </section>

          <section>
            <h2 className="text-3xl font-semibold text-zinc-900 dark:text-zinc-50 mb-4">
              My Approach
            </h2>
            <ul className="space-y-3 list-disc list-inside">
              <li>User-centered design thinking</li>
              <li>Data-driven decision making</li>
              <li>Collaborative cross-functional partnerships</li>
              <li>Iterative design and continuous improvement</li>
              <li>Strategic product vision</li>
            </ul>
          </section>

          <section>
            <h2 className="text-3xl font-semibold text-zinc-900 dark:text-zinc-50 mb-4">
              Skills & Expertise
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-semibold text-zinc-900 dark:text-zinc-50 mb-2">Design</h3>
                <ul className="space-y-1 text-base">
                  <li>Product Strategy</li>
                  <li>UX/UI Design</li>
                  <li>Design Systems</li>
                  <li>Prototyping</li>
                  <li>User Research</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-zinc-900 dark:text-zinc-50 mb-2">Tools</h3>
                <ul className="space-y-1 text-base">
                  <li>Figma</li>
                  <li>Sketch</li>
                  <li>Adobe Creative Suite</li>
                  <li>Principle</li>
                  <li>Framer</li>
                </ul>
              </div>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}
