export default function Vibes() {
  const projects = [
    {
      title: "Fun Project 1",
      description: "An experimental creative project",
      tags: ["Experiment", "Creative"],
    },
    {
      title: "Fun Project 2",
      description: "Just for fun exploration",
      tags: ["Interactive", "Fun"],
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-zinc-50 to-zinc-100 dark:from-zinc-900 dark:to-black">
      <main className="container mx-auto px-6 py-16 max-w-6xl">
        <h1 className="text-5xl md:text-6xl font-bold text-zinc-900 dark:text-zinc-50 mb-4">
          Vibes
        </h1>
        <p className="text-xl text-zinc-600 dark:text-zinc-400 mb-12 max-w-3xl">
          A collection of experimental projects, creative explorations, and just-for-fun side projects.
          This is where I play, experiment, and push creative boundaries.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <article
              key={index}
              className="bg-white dark:bg-zinc-800 rounded-xl border border-zinc-200 dark:border-zinc-700 hover:border-zinc-900 dark:hover:border-zinc-50 transition-all hover:shadow-lg p-6"
            >
              {/* Placeholder for project thumbnail/image */}
              <div className="w-full h-48 bg-gradient-to-br from-zinc-200 to-zinc-300 dark:from-zinc-700 dark:to-zinc-600 rounded-lg mb-4" />

              <h2 className="text-xl font-semibold text-zinc-900 dark:text-zinc-50 mb-2">
                {project.title}
              </h2>
              <p className="text-zinc-600 dark:text-zinc-400 mb-4">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 bg-zinc-100 dark:bg-zinc-700 text-zinc-700 dark:text-zinc-300 rounded-full text-sm"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>

        <div className="mt-12 p-6 bg-zinc-100 dark:bg-zinc-800 rounded-lg">
          <p className="text-zinc-600 dark:text-zinc-400">
            <strong>Tip:</strong> This section is perfect for showcasing experimental work,
            side projects, or creative explorations that don't fit into traditional case studies.
          </p>
        </div>
      </main>
    </div>
  );
}
