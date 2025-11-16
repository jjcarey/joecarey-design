import Link from "next/link";

// This will be replaced with Notion data
const caseStudies = [
  {
    id: "1",
    title: "Example Case Study 1",
    description: "A brief description of the project and its impact",
    tags: ["UX Design", "Product Strategy"],
    year: "2024",
  },
  {
    id: "2",
    title: "Example Case Study 2",
    description: "Another project showcasing design thinking and execution",
    tags: ["UI Design", "User Research"],
    year: "2024",
  },
];

export default function CaseStudies() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-zinc-50 to-zinc-100 dark:from-zinc-900 dark:to-black">
      <main className="container mx-auto px-6 py-16 max-w-6xl">
        <h1 className="text-5xl md:text-6xl font-bold text-zinc-900 dark:text-zinc-50 mb-4">
          Case Studies
        </h1>
        <p className="text-xl text-zinc-600 dark:text-zinc-400 mb-12 max-w-3xl">
          A collection of projects showcasing my design process, problem-solving approach,
          and the impact of strategic design decisions.
        </p>

        <div className="grid md:grid-cols-2 gap-8">
          {caseStudies.map((study) => (
            <Link
              key={study.id}
              href={`/case-studies/${study.id}`}
              className="group block"
            >
              <article className="bg-white dark:bg-zinc-800 rounded-xl border border-zinc-200 dark:border-zinc-700 hover:border-zinc-900 dark:hover:border-zinc-50 transition-all hover:shadow-lg p-8 h-full">
                <div className="flex justify-between items-start mb-4">
                  <span className="text-sm text-zinc-500 dark:text-zinc-400">
                    {study.year}
                  </span>
                </div>
                <h2 className="text-2xl font-semibold text-zinc-900 dark:text-zinc-50 mb-3 group-hover:text-zinc-700 dark:group-hover:text-zinc-200">
                  {study.title}
                </h2>
                <p className="text-zinc-600 dark:text-zinc-400 mb-4">
                  {study.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {study.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-zinc-100 dark:bg-zinc-700 text-zinc-700 dark:text-zinc-300 rounded-full text-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </article>
            </Link>
          ))}
        </div>

        <div className="mt-12 p-6 bg-zinc-100 dark:bg-zinc-800 rounded-lg">
          <p className="text-zinc-600 dark:text-zinc-400">
            <strong>Note:</strong> Connect this page to your Notion database to dynamically load
            your case studies. Update the Notion integration in{" "}
            <code className="bg-zinc-200 dark:bg-zinc-700 px-2 py-1 rounded">
              app/lib/notion.ts
            </code>
          </p>
        </div>
      </main>
    </div>
  );
}
