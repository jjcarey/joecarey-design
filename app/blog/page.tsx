import Link from "next/link";

// This will be replaced with Notion data
const blogPosts = [
  {
    id: "1",
    title: "Example Blog Post",
    excerpt: "A short excerpt from the blog post to give readers a preview...",
    date: "2024-11-15",
    tags: ["Design", "Product"],
  },
];

export default function Blog() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-zinc-50 to-zinc-100 dark:from-zinc-900 dark:to-black">
      <main className="container mx-auto px-6 py-16 max-w-4xl">
        <h1 className="text-5xl md:text-6xl font-bold text-zinc-900 dark:text-zinc-50 mb-4">
          Blog
        </h1>
        <p className="text-xl text-zinc-600 dark:text-zinc-400 mb-12">
          Thoughts on design, product strategy, and lessons learned along the way.
        </p>

        <div className="space-y-8">
          {blogPosts.map((post) => (
            <Link
              key={post.id}
              href={`/blog/${post.id}`}
              className="group block"
            >
              <article className="bg-white dark:bg-zinc-800 rounded-xl border border-zinc-200 dark:border-zinc-700 hover:border-zinc-900 dark:hover:border-zinc-50 transition-all hover:shadow-lg p-8">
                <div className="mb-3">
                  <time className="text-sm text-zinc-500 dark:text-zinc-400">
                    {new Date(post.date).toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </time>
                </div>
                <h2 className="text-2xl font-semibold text-zinc-900 dark:text-zinc-50 mb-3 group-hover:text-zinc-700 dark:group-hover:text-zinc-200">
                  {post.title}
                </h2>
                <p className="text-zinc-600 dark:text-zinc-400 mb-4">
                  {post.excerpt}
                </p>
                <div className="flex flex-wrap gap-2">
                  {post.tags.map((tag) => (
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
            your blog posts. Update the Notion integration in{" "}
            <code className="bg-zinc-200 dark:bg-zinc-700 px-2 py-1 rounded">
              app/lib/notion.ts
            </code>
          </p>
        </div>
      </main>
    </div>
  );
}
