import { Client } from "@notionhq/client";

// Initialize Notion client
// You'll need to add NOTION_API_KEY to your .env.local file
const notion = new Client({
  auth: process.env.NOTION_API_KEY,
});

// Database IDs - Add these to your .env.local file
const CASE_STUDIES_DB_ID = process.env.NOTION_CASE_STUDIES_DB_ID || "";
const BLOG_POSTS_DB_ID = process.env.NOTION_BLOG_POSTS_DB_ID || "";
const VIBES_DB_ID = process.env.NOTION_VIBES_DB_ID || "";

// Type definitions
export interface CaseStudy {
  id: string;
  title: string;
  description: string;
  tags: string[];
  year: string;
  coverImage?: string;
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

// Fetch case studies from Notion
export async function getCaseStudies(): Promise<CaseStudy[]> {
  if (!CASE_STUDIES_DB_ID) {
    console.warn("NOTION_CASE_STUDIES_DB_ID not set");
    return [];
  }

  try {
    // @ts-ignore - Notion SDK types issue
    const response = await notion.databases.query({
      database_id: CASE_STUDIES_DB_ID,
      sorts: [
        {
          property: "Year",
          direction: "descending",
        },
      ],
    });

    return response.results.map((page: any) => ({
      id: page.id,
      title: page.properties.Title?.title?.[0]?.plain_text || "Untitled",
      description: page.properties.Description?.rich_text?.[0]?.plain_text || "",
      tags: page.properties.Tags?.multi_select?.map((tag: any) => tag.name) || [],
      year: page.properties.Year?.number?.toString() || new Date().getFullYear().toString(),
      coverImage: page.properties.Cover?.files?.[0]?.file?.url || page.properties.Cover?.files?.[0]?.external?.url,
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
