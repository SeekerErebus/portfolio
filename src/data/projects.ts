export interface Project {
  id: string;
  name: string;
  tagline: string;
  description: string;
  category: "business" | "content" | "app" | "dataviz";
  tags: string[];
  demoUrl: string;
  repoUrl: string;
  screenshot: string;
  featured: boolean;
}

export const projects: Project[] = [
  {
    id: "craft-table",
    name: "The Craft Table",
    tagline: "Restaurant website template",
    description:
      "Full-featured restaurant site with menu, reservation CTA, gallery, and testimonials. Mobile-first responsive design with warm, inviting visuals.",
    category: "business",
    tags: ["Astro", "Tailwind CSS", "Responsive"],
    demoUrl: "https://small-business-template-beta.vercel.app",
    repoUrl: "https://github.com/SeekerErebus/small-business-template",
    screenshot: "/screenshots/craft-table.png",
    featured: true,
  },
  {
    id: "summit-plumbing",
    name: "Summit Plumbing & Heating",
    tagline: "Service business template",
    description:
      "Professional service business site with service pages, contact form, testimonials, and service area map. Built for local SEO and lead generation.",
    category: "business",
    tags: ["Astro", "Tailwind CSS", "Formspree"],
    demoUrl: "https://service-business-template.vercel.app",
    repoUrl: "https://github.com/SeekerErebus/service-business-template",
    screenshot: "/screenshots/summit-plumbing.png",
    featured: true,
  },
  {
    id: "byte-sized",
    name: "Byte-Sized",
    tagline: "Developer blog template",
    description:
      "Content-driven blog with Astro content collections, RSS feed, sitemap, syntax highlighting, and tag-based filtering. Fast, accessible, SEO-ready.",
    category: "content",
    tags: ["Astro", "Content Collections", "RSS", "MDX"],
    demoUrl: "https://blog-template-plum-eta.vercel.app",
    repoUrl: "https://github.com/SeekerErebus/blog-template",
    screenshot: "/screenshots/byte-sized.png",
    featured: true,
  },
  {
    id: "flowdesk",
    name: "FlowDesk",
    tagline: "Project management dashboard",
    description:
      "Kanban-style project dashboard with task boards, timeline views, and team workload tracking. Clean UI with drag-and-drop functionality.",
    category: "app",
    tags: ["Astro", "TypeScript", "Tailwind CSS"],
    demoUrl: "https://project-dashboard-amber.vercel.app",
    repoUrl: "https://github.com/SeekerErebus/project-dashboard",
    screenshot: "/screenshots/flowdesk.png",
    featured: true,
  },
  {
    id: "btc-dashboard",
    name: "BTC Dashboard",
    tagline: "Bitcoin analytics & visualization",
    description:
      "Real-time Bitcoin price tracking with historical charts, key metrics, and fiat debasement modeling. Built on domain expertise in monetary economics.",
    category: "dataviz",
    tags: ["Astro", "Chart.js", "API Integration"],
    demoUrl: "https://btc-dashboard-beige.vercel.app",
    repoUrl: "https://github.com/SeekerErebus/btc-dashboard",
    screenshot: "/screenshots/btc-dashboard.png",
    featured: true,
  },
];
