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
  {
    id: "groundwork-coffee",
    name: "Groundwork Coffee Co.",
    tagline: "Cafe & coffee shop template",
    description:
      "Specialty coffee shop site with menu, events calendar, Instagram grid, and location info. Warm earthy tones with a modern, editorial feel.",
    category: "business",
    tags: ["Astro", "Tailwind CSS", "Responsive"],
    demoUrl: "https://cafe-template.vercel.app",
    repoUrl: "https://github.com/SeekerErebus/cafe-template",
    screenshot: "/screenshots/groundwork-coffee.png",
    featured: false,
  },
  {
    id: "ember-thread",
    name: "Ember & Thread",
    tagline: "E-commerce storefront template",
    description:
      "Artisan goods e-commerce storefront with product grid, category filtering, cart sidebar, and checkout flow. Clean, minimal design focused on product imagery.",
    category: "business",
    tags: ["Astro", "Tailwind CSS", "E-commerce", "Responsive"],
    demoUrl: "https://ecommerce-template.vercel.app",
    repoUrl: "https://github.com/SeekerErebus/ecommerce-template",
    screenshot: "/screenshots/ember-thread.png",
    featured: false,
  },
  {
    id: "wedding-event",
    name: "Sarah & James",
    tagline: "Wedding & event template",
    description:
      "Elegant wedding invitation site with countdown timer, RSVP form, event timeline, venue details, photo gallery, and gift registry. Soft botanical aesthetic.",
    category: "business",
    tags: ["Astro", "Tailwind CSS", "Responsive", "Formspree"],
    demoUrl: "https://event-template.vercel.app",
    repoUrl: "https://github.com/SeekerErebus/event-template",
    screenshot: "/screenshots/wedding-event.png",
    featured: false,
  },
  {
    id: "iron-flow",
    name: "Iron & Flow",
    tagline: "Fitness & gym template",
    description:
      "Modern gym and yoga studio site with class schedules, trainer profiles, pricing tables, gallery, and contact form. Bold, energetic design.",
    category: "business",
    tags: ["Astro", "Tailwind CSS", "Responsive"],
    demoUrl: "https://fitness-template.vercel.app",
    repoUrl: "https://github.com/SeekerErebus/fitness-template",
    screenshot: "/screenshots/iron-flow.png",
    featured: false,
  },
  {
    id: "bridger-associates",
    name: "Bridger & Associates",
    tagline: "Law firm template",
    description:
      "Professional law firm site with practice areas, attorney profiles, client testimonials, and consultation CTA. Authoritative navy and gold design.",
    category: "business",
    tags: ["Astro", "Tailwind CSS", "Responsive"],
    demoUrl: "https://law-firm-template.vercel.app",
    repoUrl: "https://github.com/SeekerErebus/law-firm-template",
    screenshot: "/screenshots/bridger-associates.png",
    featured: false,
  },
  {
    id: "wasatch-dental",
    name: "Wasatch Family Dental",
    tagline: "Medical & dental practice template",
    description:
      "Family dental practice site with services overview, provider profiles, patient testimonials, insurance info, and appointment booking. Clean, trustworthy design.",
    category: "business",
    tags: ["Astro", "Tailwind CSS", "Responsive"],
    demoUrl: "https://medical-template.vercel.app",
    repoUrl: "https://github.com/SeekerErebus/medical-template",
    screenshot: "/screenshots/wasatch-dental.png",
    featured: false,
  },
  {
    id: "wasatch-wildlife",
    name: "Wasatch Wildlife Alliance",
    tagline: "Nonprofit organization template",
    description:
      "Wildlife conservation nonprofit site with programs, donation CTAs, volunteer signups, events calendar, and impact stats. Nature-inspired forest and amber palette.",
    category: "business",
    tags: ["Astro", "Tailwind CSS", "Responsive"],
    demoUrl: "https://nonprofit-template.vercel.app",
    repoUrl: "https://github.com/SeekerErebus/nonprofit-template",
    screenshot: "/screenshots/wasatch-wildlife.png",
    featured: false,
  },
  {
    id: "alex-rivera",
    name: "Alex Rivera",
    tagline: "Creative portfolio template",
    description:
      "UX designer portfolio with project case studies using content collections, about section, and contact page. Minimal, modern design with accent color theming.",
    category: "content",
    tags: ["Astro", "Tailwind CSS", "Content Collections", "Responsive"],
    demoUrl: "https://portfolio-template.vercel.app",
    repoUrl: "https://github.com/SeekerErebus/portfolio-template",
    screenshot: "/screenshots/alex-rivera.png",
    featured: false,
  },
  {
    id: "crestline-realty",
    name: "Crestline Realty",
    tagline: "Real estate agency template",
    description:
      "Real estate agency site with property listings, neighborhood guides, agent profiles, and search functionality. Professional blue-toned design.",
    category: "business",
    tags: ["Astro", "Tailwind CSS", "Responsive"],
    demoUrl: "https://real-estate-template.vercel.app",
    repoUrl: "https://github.com/SeekerErebus/real-estate-template",
    screenshot: "/screenshots/crestline-realty.png",
    featured: false,
  },
  {
    id: "flowstack",
    name: "FlowStack",
    tagline: "SaaS landing page template",
    description:
      "Project management SaaS landing page with feature showcase, social proof, pricing tiers, FAQ accordion, and signup CTAs. Modern, conversion-focused design.",
    category: "app",
    tags: ["Astro", "Tailwind CSS", "Responsive"],
    demoUrl: "https://saas-landing.vercel.app",
    repoUrl: "https://github.com/SeekerErebus/saas-landing",
    screenshot: "/screenshots/flowstack.png",
    featured: false,
  },
];
