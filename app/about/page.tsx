import { getAbout, NotionBlock } from "../lib/notion";

function renderBlock(block: NotionBlock, index: number) {
  const key = `${block.type}-${index}`;

  switch (block.type) {
    case "heading_1":
      return (
        <h2 key={key} className="text-3xl font-semibold text-zinc-900 dark:text-zinc-50 mb-6">
          {block.content}
        </h2>
      );
    case "heading_2":
      return (
        <h3 key={key} className="text-2xl font-semibold text-zinc-900 dark:text-zinc-50 mb-4">
          {block.content}
        </h3>
      );
    case "heading_3":
      return (
        <h4 key={key} className="text-xl font-semibold text-zinc-900 dark:text-zinc-50 mb-3">
          {block.content}
        </h4>
      );
    case "paragraph":
      return (
        <p key={key} className="text-zinc-700 dark:text-zinc-300 mb-3 leading-relaxed">
          {block.content}
        </p>
      );
    case "bulleted_list_item":
      return (
        <li key={key} className="text-zinc-700 dark:text-zinc-300">
          {block.content}
        </li>
      );
    case "numbered_list_item":
      return (
        <li key={key} className="text-zinc-700 dark:text-zinc-300">
          {block.content}
        </li>
      );
    case "quote":
      return (
        <blockquote key={key} className="border-l-4 border-zinc-400 dark:border-zinc-600 pl-4 italic text-zinc-600 dark:text-zinc-400 my-4">
          {block.content}
        </blockquote>
      );
    case "code":
      return (
        <pre key={key} className="bg-zinc-100 dark:bg-zinc-700 p-4 rounded-lg overflow-x-auto mb-4">
          <code className="text-sm text-zinc-800 dark:text-zinc-200">{block.content}</code>
        </pre>
      );
    default:
      return null;
  }
}

function groupBlocks(blocks: NotionBlock[]) {
  const grouped: JSX.Element[] = [];
  let bulletedListItems: JSX.Element[] = [];
  let numberedListItems: JSX.Element[] = [];

  blocks.forEach((block, index) => {
    if (block.type === "bulleted_list_item") {
      bulletedListItems.push(renderBlock(block, index) as JSX.Element);
    } else {
      if (bulletedListItems.length > 0) {
        grouped.push(
          <ul key={`ul-${index}`} className="list-disc space-y-2 ml-6 mb-4">
            {bulletedListItems}
          </ul>
        );
        bulletedListItems = [];
      }
      if (block.type === "numbered_list_item") {
        numberedListItems.push(renderBlock(block, index) as JSX.Element);
      } else {
        if (numberedListItems.length > 0) {
          grouped.push(
            <ol key={`ol-${index}`} className="list-decimal space-y-2 ml-6 mb-4">
              {numberedListItems}
            </ol>
          );
          numberedListItems = [];
        }
        const rendered = renderBlock(block, index);
        if (rendered) grouped.push(rendered);
      }
    }
  });

  // Add any remaining list items
  if (bulletedListItems.length > 0) {
    grouped.push(
      <ul key="ul-final" className="list-disc space-y-2 ml-6 mb-4">
        {bulletedListItems}
      </ul>
    );
  }
  if (numberedListItems.length > 0) {
    grouped.push(
      <ol key="ol-final" className="list-decimal space-y-2 ml-6 mb-4">
        {numberedListItems}
      </ol>
    );
  }

  return grouped;
}

export default async function About() {
  const aboutData = await getAbout();

  return (
    <div className="min-h-screen bg-gradient-to-br from-zinc-50 to-zinc-100 dark:from-zinc-900 dark:to-black">
      <main className="container mx-auto px-6 py-16 max-w-4xl">
        <h1 className="text-5xl md:text-6xl font-bold text-zinc-900 dark:text-zinc-50 mb-8">
          About
        </h1>

        {aboutData ? (
          <div className="bg-white dark:bg-zinc-800 rounded-xl border border-zinc-200 dark:border-zinc-700 p-8">
            {groupBlocks(aboutData.blocks)}
          </div>
        ) : (
          <div className="bg-white dark:bg-zinc-800 rounded-xl border border-zinc-200 dark:border-zinc-700 p-8">
            <p className="text-zinc-600 dark:text-zinc-400">
              No about content found. Make sure your Notion database is properly configured.
            </p>
          </div>
        )}
      </main>
    </div>
  );
}
