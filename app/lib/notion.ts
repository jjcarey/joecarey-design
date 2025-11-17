import { Client } from "@notionhq/client";

// Initialize Notion client
// You'll need to add NOTION_API_KEY to your .env.local file
function getNotionClient() {
  if (!process.env.NOTION_API_KEY) {
    console.warn("NOTION_API_KEY is not set in environment variables");
  }

  return new Client({
    auth: process.env.NOTION_API_KEY,
  });
}

const notion = getNotionClient();

// Database IDs - Add these to your .env.local file
const ABOUT_DB_ID = process.env.NOTION_ABOUT_DB_ID || "";
const CASE_STUDIES_DB_ID = process.env.NOTION_CASE_STUDIES_DB_ID || "";
const BLOG_POSTS_DB_ID = process.env.NOTION_BLOG_POSTS_DB_ID || "";
const VIBES_DB_ID = process.env.NOTION_VIBES_DB_ID || "";

// Type definitions
export interface NotionBlock {
  type: string;
  content: string;
}

export interface About {
  id: string;
  title: string;
  blocks: NotionBlock[]; // Structured blocks from Resume Web page
  status: string;
}

export interface CaseStudy {
  id: string;
  title: string;
  tags: string[];
  slug: string;
  description: string;
  status: string;
}

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  tags: string[];
  coverImage?: string;
}

export interface VibesProject {
  id: string;
  title: string;
  description: string;
  tags: string[];
  coverImage?: string;
}

// Fetch about data from Notion using direct API call
export async function getAbout(): Promise<About | null> {
  if (!ABOUT_DB_ID) {
    console.warn("NOTION_ABOUT_DB_ID not set");
    return null;
  }

  if (!process.env.NOTION_API_KEY) {
    console.warn("NOTION_API_KEY not set");
    return null;
  }

  try {
    // Use fetch directly to call Notion API (workaround for Next.js bundling issue)
    const response = await fetch(
      `https://api.notion.com/v1/databases/${ABOUT_DB_ID}/query`,
      {
        method: "POST",
        headers: {
          "Authorization": `Bearer ${process.env.NOTION_API_KEY}`,
          "Notion-Version": "2022-06-28",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({}),
      }
    );

    if (!response.ok) {
      const errorText = await response.text();
      console.error("Notion API error:", response.status, errorText);
      return null;
    }

    const data = await response.json();

    if (data.results.length === 0) {
      return null;
    }

    // Get the first page from the database (this is the database entry)
    const dbEntry = data.results[0];
    const pageId = dbEntry.id;

    // Now fetch the blocks (content) from that page
    const blocksResponse = await fetch(
      `https://api.notion.com/v1/blocks/${pageId}/children`,
      {
        method: "GET",
        headers: {
          "Authorization": `Bearer ${process.env.NOTION_API_KEY}`,
          "Notion-Version": "2022-06-28",
        },
      }
    );

    if (!blocksResponse.ok) {
      const errorText = await blocksResponse.text();
      console.error("Notion blocks API error:", blocksResponse.status, errorText);
      return null;
    }

    const blocksData = await blocksResponse.json();

    // Extract structured blocks
    const blocks: NotionBlock[] = [];
    for (const block of blocksData.results) {
      if (block.type === "paragraph" && block.paragraph?.rich_text) {
        const text = block.paragraph.rich_text
          .map((item: any) => item.plain_text)
          .join("");
        if (text.trim()) {
          blocks.push({ type: "paragraph", content: text });
        }
      } else if (block.type === "heading_1" && block.heading_1?.rich_text) {
        const text = block.heading_1.rich_text
          .map((item: any) => item.plain_text)
          .join("");
        blocks.push({ type: "heading_1", content: text });
      } else if (block.type === "heading_2" && block.heading_2?.rich_text) {
        const text = block.heading_2.rich_text
          .map((item: any) => item.plain_text)
          .join("");
        blocks.push({ type: "heading_2", content: text });
      } else if (block.type === "heading_3" && block.heading_3?.rich_text) {
        const text = block.heading_3.rich_text
          .map((item: any) => item.plain_text)
          .join("");
        blocks.push({ type: "heading_3", content: text });
      } else if (block.type === "bulleted_list_item" && block.bulleted_list_item?.rich_text) {
        const text = block.bulleted_list_item.rich_text
          .map((item: any) => item.plain_text)
          .join("");
        blocks.push({ type: "bulleted_list_item", content: text });
      } else if (block.type === "numbered_list_item" && block.numbered_list_item?.rich_text) {
        const text = block.numbered_list_item.rich_text
          .map((item: any) => item.plain_text)
          .join("");
        blocks.push({ type: "numbered_list_item", content: text });
      } else if (block.type === "quote" && block.quote?.rich_text) {
        const text = block.quote.rich_text
          .map((item: any) => item.plain_text)
          .join("");
        blocks.push({ type: "quote", content: text });
      } else if (block.type === "code" && block.code?.rich_text) {
        const text = block.code.rich_text
          .map((item: any) => item.plain_text)
          .join("");
        blocks.push({ type: "code", content: text });
      }
    }

    return {
      id: pageId,
      title: dbEntry.properties.title?.title?.[0]?.plain_text ||
             dbEntry.properties.Title?.title?.[0]?.plain_text || "About",
      blocks: blocks,
      status: dbEntry.properties.status?.status?.name ||
              dbEntry.properties.Status?.status?.name || "Published",
    };
  } catch (error) {
    console.error("Error fetching about data:", error);
    return null;
  }
}

// Fetch case studies from Notion using direct API call
export async function getCaseStudies(): Promise<CaseStudy[]> {
  if (!CASE_STUDIES_DB_ID) {
    console.warn("NOTION_CASE_STUDIES_DB_ID not set");
    return [];
  }

  if (!process.env.NOTION_API_KEY) {
    console.warn("NOTION_API_KEY not set");
    return [];
  }

  try {
    // Use fetch directly to call Notion API (workaround for Next.js bundling issue)
    const response = await fetch(
      `https://api.notion.com/v1/databases/${CASE_STUDIES_DB_ID}/query`,
      {
        method: "POST",
        headers: {
          "Authorization": `Bearer ${process.env.NOTION_API_KEY}`,
          "Notion-Version": "2022-06-28",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({}),
      }
    );

    if (!response.ok) {
      const errorText = await response.text();
      console.error("Notion API error:", response.status, errorText);
      return [];
    }

    const data = await response.json();

    return data.results.map((page: any) => ({
      id: page.id,
      title: page.properties.title?.title?.[0]?.plain_text ||
             page.properties.Title?.title?.[0]?.plain_text || "Untitled",
      description: page.properties.description?.rich_text?.[0]?.plain_text ||
                   page.properties.Description?.rich_text?.[0]?.plain_text || "",
      tags: page.properties.tags?.multi_select?.map((tag: any) => tag.name) ||
            page.properties.Tags?.multi_select?.map((tag: any) => tag.name) || [],
      slug: page.properties.slug?.rich_text?.[0]?.plain_text ||
            page.properties.Slug?.rich_text?.[0]?.plain_text || "",
      status: page.properties.status?.status?.name ||
              page.properties.Status?.status?.name || "Published",
    }));
  } catch (error) {
    console.error("Error fetching case studies:", error);
    return [];
  }
}

// Fetch a single case study by ID
export async function getCaseStudy(id: string) {
  try {
    const page = await notion.pages.retrieve({ page_id: id });
    const blocks = await notion.blocks.children.list({ block_id: id });

    return {
      page,
      blocks: blocks.results,
    };
  } catch (error) {
    console.error("Error fetching case study:", error);
    return null;
  }
}

// Fetch blog posts from Notion
export async function getBlogPosts(): Promise<BlogPost[]> {
  if (!BLOG_POSTS_DB_ID) {
    console.warn("NOTION_BLOG_POSTS_DB_ID not set");
    return [];
  }

  try {
    // @ts-ignore - Notion SDK types issue
    const response = await notion.databases.query({
      database_id: BLOG_POSTS_DB_ID,
      sorts: [
        {
          property: "Date",
          direction: "descending",
        },
      ],
    });

    return response.results.map((page: any) => ({
      id: page.id,
      title: page.properties.Title?.title?.[0]?.plain_text || "Untitled",
      excerpt: page.properties.Excerpt?.rich_text?.[0]?.plain_text || "",
      date: page.properties.Date?.date?.start || new Date().toISOString(),
      tags: page.properties.Tags?.multi_select?.map((tag: any) => tag.name) || [],
      coverImage: page.properties.Cover?.files?.[0]?.file?.url || page.properties.Cover?.files?.[0]?.external?.url,
    }));
  } catch (error) {
    console.error("Error fetching blog posts:", error);
    return [];
  }
}

// Fetch a single blog post by ID
export async function getBlogPost(id: string) {
  try {
    const page = await notion.pages.retrieve({ page_id: id });
    const blocks = await notion.blocks.children.list({ block_id: id });

    return {
      page,
      blocks: blocks.results,
    };
  } catch (error) {
    console.error("Error fetching blog post:", error);
    return null;
  }
}

// Fetch vibes projects from Notion
export async function getVibesProjects(): Promise<VibesProject[]> {
  if (!VIBES_DB_ID) {
    console.warn("NOTION_VIBES_DB_ID not set");
    return [];
  }

  try {
    // @ts-ignore - Notion SDK types issue
    const response = await notion.databases.query({
      database_id: VIBES_DB_ID,
    });

    return response.results.map((page: any) => ({
      id: page.id,
      title: page.properties.Title?.title?.[0]?.plain_text || "Untitled",
      description: page.properties.Description?.rich_text?.[0]?.plain_text || "",
      tags: page.properties.Tags?.multi_select?.map((tag: any) => tag.name) || [],
      coverImage: page.properties.Cover?.files?.[0]?.file?.url || page.properties.Cover?.files?.[0]?.external?.url,
    }));
  } catch (error) {
    console.error("Error fetching vibes projects:", error);
    return [];
  }
}

export { notion };
