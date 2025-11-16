# Joe Carey - Portfolio Website

A modern portfolio website for a Principle Product Designer, built with Next.js, Notion CMS, Chart.js, and deployed on Netlify.

## Features

- **Next.js 15** - React framework with App Router
- **TypeScript** - Type-safe development
- **Tailwind CSS** - Utility-first styling
- **Notion CMS** - Content management with Notion databases
- **Chart.js** - Data visualizations on the resume page
- **Netlify** - Deployment and hosting
- **Responsive Design** - Mobile-first approach
- **Dark Mode** - Built-in dark mode support

## Project Structure

```
portfolio/
├── app/
│   ├── about/              # About page
│   ├── blog/               # Blog listing and posts
│   ├── case-studies/       # Case studies listing
│   ├── components/         # Reusable components
│   │   └── Navigation.tsx  # Site navigation
│   ├── lib/                # Utilities and helpers
│   │   └── notion.ts       # Notion API integration
│   ├── resume/             # Resume with Chart.js visualizations
│   ├── vibes/              # Fun/experimental projects
│   ├── layout.tsx          # Root layout
│   └── page.tsx            # Home page
├── public/                 # Static assets
├── netlify.toml           # Netlify configuration
└── .env.local.example     # Environment variables template
```

## Sections

1. **Home** - Hero section with quick links
2. **About** - Personal bio, approach, and skills
3. **Case Studies** - Featured design projects (powered by Notion)
4. **Resume** - Professional experience with Chart.js visualizations
5. **Blog** - Articles and thoughts (powered by Notion)
6. **Vibes** - Experimental and fun projects

## Getting Started

### Prerequisites

- Node.js 20 or higher
- npm or yarn
- A Notion account
- A Netlify account (for deployment)

### Installation

1. **Clone the repository**
   ```bash
   cd c:\Users\joesa\Dev\joecarey-design\portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   - Copy `.env.local.example` to `.env.local`
   ```bash
   copy .env.local.example .env.local
   ```
   - Fill in your Notion API credentials (see Notion Setup below)

4. **Run the development server**
   ```bash
   npm run dev
   ```

5. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## Notion Setup

### 1. Create a Notion Integration

1. Go to [https://www.notion.so/my-integrations](https://www.notion.so/my-integrations)
2. Click "New integration"
3. Name it "Portfolio Website"
4. Select the workspace where you'll create your databases
5. Click "Submit"
6. Copy the "Internal Integration Token" - this is your `NOTION_API_KEY`

### 2. Create Notion Databases

Create three databases in Notion with the following properties:

#### Case Studies Database
- **Title** (title)
- **Description** (rich text)
- **Tags** (multi-select)
- **Year** (number)
- **Cover** (files & media) - optional

#### Blog Posts Database
- **Title** (title)
- **Excerpt** (rich text)
- **Date** (date)
- **Tags** (multi-select)
- **Cover** (files & media) - optional

#### Vibes Projects Database
- **Title** (title)
- **Description** (rich text)
- **Tags** (multi-select)
- **Cover** (files & media) - optional

### 3. Share Databases with Integration

1. Open each database in Notion
2. Click the "..." menu in the top right
3. Click "Connections" or "Add connections"
4. Select your "Portfolio Website" integration

### 4. Get Database IDs

1. Open each database in Notion
2. Click "Share" and "Copy link"
3. The URL will look like: `https://notion.so/workspace/DATABASE_ID?v=...`
4. Extract the `DATABASE_ID` portion and add to your `.env.local`:
   - `NOTION_CASE_STUDIES_DB_ID`
   - `NOTION_BLOG_POSTS_DB_ID`
   - `NOTION_VIBES_DB_ID`

## Deploying to Netlify

### Option 1: Deploy with Git (Recommended)

1. **Initialize Git and push to GitHub**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin YOUR_GITHUB_REPO_URL
   git push -u origin main
   ```

2. **Connect to Netlify**
   - Go to [netlify.com](https://netlify.com)
   - Click "Add new site" → "Import an existing project"
   - Connect your GitHub repository
   - Configure build settings:
     - Build command: `npm run build`
     - Publish directory: `.next`
   - Add environment variables in Netlify dashboard:
     - `NOTION_API_KEY`
     - `NOTION_CASE_STUDIES_DB_ID`
     - `NOTION_BLOG_POSTS_DB_ID`
     - `NOTION_VIBES_DB_ID`
   - Click "Deploy"

### Option 2: Deploy with Netlify CLI

1. **Install Netlify CLI**
   ```bash
   npm install -g netlify-cli
   ```

2. **Login to Netlify**
   ```bash
   netlify login
   ```

3. **Initialize and deploy**
   ```bash
   netlify init
   netlify deploy --prod
   ```

4. **Add environment variables**
   - Go to your site in the Netlify dashboard
   - Navigate to Site settings → Environment variables
   - Add your Notion credentials

## Customization

### Update Personal Information

1. **Home Page** - Edit [app/page.tsx](app/page.tsx)
   - Update name, title, and description

2. **About Page** - Edit [app/about/page.tsx](app/about/page.tsx)
   - Add your bio, skills, and approach

3. **Resume** - Edit [app/resume/page.tsx](app/resume/page.tsx)
   - Add your experience and education
   - Customize Chart.js visualizations

4. **Metadata** - Edit [app/layout.tsx](app/layout.tsx)
   - Update site title and description for SEO

### Styling

- The project uses Tailwind CSS with a custom color scheme based on zinc colors
- Global styles are in [app/globals.css](app/globals.css)
- Tailwind config is in [tailwind.config.ts](tailwind.config.ts)

### Adding New Sections

1. Create a new folder in `app/` (e.g., `app/contact/`)
2. Add a `page.tsx` file
3. Update the navigation in [app/components/Navigation.tsx](app/components/Navigation.tsx)

## Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint

## Technologies Used

- [Next.js 15](https://nextjs.org/) - React framework
- [TypeScript](https://www.typescriptlang.org/) - Type safety
- [Tailwind CSS](https://tailwindcss.com/) - Styling
- [Notion API](https://developers.notion.com/) - Content management
- [Chart.js](https://www.chartjs.org/) - Data visualization
- [react-chartjs-2](https://react-chartjs-2.js.org/) - React wrapper for Chart.js
- [Netlify](https://www.netlify.com/) - Hosting and deployment

## License

This project is open source and available under the MIT License.

## Support

For issues or questions, please create an issue in the repository.
