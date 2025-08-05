import ToolCard from './Cards';

const frontendTools = [
    {
        "title": "Uizard",
        "description": "Turn sketches and text prompts into UI designs using AI.",
        "path": "https://uizard.io/",
        "tags": ["design", "ui", "mockup"],
        "badge": "Free + Paid",
        "popularity": "Popular"
    },
    {
        "title": "Magician for Figma",
        "description": "An AI plugin to generate copy, images, and icons directly in Figma.",
        "path": "https://magician.design/",
        "tags": ["figma", "design", "assets"],
        "badge": "Free",
        "popularity": "Trending"
    },
    {
        "title": "Galileo AI",
        "description": "Creates beautiful, editable UI designs from simple text prompts.",
        "path": "https://www.usegalileo.ai/",
        "tags": ["mockup", "ui", "design"],
        "badge": "Paid",
        "popularity": "Popular"
    },
    {
        "title": "Builder.io",
        "description": "A visual development platform with AI tools for building websites and a headless CMS.",
        "path": "https://www.builder.io/",
        "tags": ["builder", "cms", "no-code"],
        "badge": "Free + Paid",
        "popularity": "Popular"
    },
    {
        "title": "Locofy",
        "description": "Convert Figma and Adobe XD designs to production-ready React, Next.js, and other code.",
        "path": "https://www.locofy.ai/",
        "tags": ["figma", "code", "design-to-code"],
        "badge": "Free + Paid",
        "popularity": "Trending"
    },
    {
        "title": "Relume",
        "description": "Generates full websites and sitemaps from a single prompt.",
        "path": "https://www.relume.io/",
        "tags": ["web", "react", "builder"],
        "badge": "Free + Paid",
        "popularity": "Popular"
    },
    {
        "title": "GPT Pilot",
        "description": "An open-source AI developer that builds web applications from a chat prompt.",
        "path": "https://github.com/Pythagora-io/gpt-pilot",
        "tags": ["code", "chat", "open-source"],
        "badge": "Free",
        "popularity": "New"
    },
    {
        "title": "Penpot + AI",
        "description": "Speed up prototyping and design exploration with AI in the open-source design tool Penpot.",
        "path": "https://penpot.app/",
        "tags": ["design", "prototyping"],
        "badge": "Free",
        "popularity": "Growing"
    },
    {
        "title": "Mintlify Writer",
        "description": "An AI tool to automatically generate and update documentation for your codebase.",
        "path": "https://writer.mintlify.com/",
        "tags": ["docs", "documentation"],
        "badge": "Free",
        "popularity": "Trending"
    },
    {
        "title": "Vercel v0",
        "description": "Generates elegant and production-ready React components with Tailwind CSS from prompts.",
        "path": "https://v0.dev/",
        "tags": ["tailwind", "react", "components"],
        "badge": "Free",
        "popularity": "Popular"
    },
    {
        "title": "GitHub Copilot",
        "description": "An AI pair programmer that provides real-time code suggestions and completions.",
        "path": "https://github.com/features/copilot",
        "tags": ["code", "assistant", "ide"],
        "badge": "Paid",
        "popularity": "Popular"
    },
    {
        "title": "Framer",
        "description": "An AI-powered tool for designing and building websites that are production-ready.",
        "path": "https://www.framer.com/",
        "tags": ["web", "builder", "design"],
        "badge": "Free + Paid",
        "popularity": "Popular"
    },
    {
        "title": "Visily",
        "description": "Turn screenshots, sketches, or text into editable, high-fidelity wireframes and designs.",
        "path": "https://www.visily.ai/",
        "tags": ["design", "wireframe", "prototyping"],
        "badge": "Free + Paid",
        "popularity": "Growing"
    },
    {
        "title": "Anima",
        "description": "Converts designs from Figma, Adobe XD, and Sketch into HTML, React, and Vue code.",
        "path": "https://www.animaapp.com/",
        "tags": ["design-to-code", "figma", "code"],
        "badge": "Free + Paid",
        "popularity": "Popular"
    },
    {
        "title": "DocuWriter.ai",
        "description": "Generates comprehensive code documentation, API docs, and test suites from your codebase.",
        "path": "https://docuwriter.ai/",
        "tags": ["docs", "documentation", "code"],
        "badge": "Free + Paid",
        "popularity": "New"
    },
    {
        "title": "Figma AI",
        "description": "An integrated set of AI features within Figma for intelligent layouts and generative design exploration.",
        "path": "https://www.figma.com/ai/",
        "tags": ["figma", "design", "ui"],
        "badge": "Paid",
        "popularity": "Trending"
    },
    {
        "title": "Cursor",
        "description": "An AI-powered code editor for writing, debugging, and understanding your codebase.",
        "path": "https://cursor.sh/",
        "tags": ["code", "ide", "assistant"],
        "badge": "Free + Paid",
        "popularity": "Trending"
    },
    {
        "title": "Tabnine",
        "description": "An AI code completion tool that provides context-aware suggestions based on your project's code.",
        "path": "https://www.tabnine.com/",
        "tags": ["code", "assistant", "ide"],
        "badge": "Free + Paid",
        "popularity": "Popular"
    },
    {
        "title": "UXPin Merge",
        "description": "Allows designers to use live, code-based components directly in their design environment.",
        "path": "https://www.uxpin.com/merge",
        "tags": ["design", "code", "prototyping"],
        "badge": "Paid",
        "popularity": "Growing"
    },
    {
        "title": "Reweb",
        "description": "A visual builder for Next.js and Tailwind that can instantly generate components using AI.",
        "path": "https://www.reweb.so/",
        "tags": ["builder", "react", "nextjs"],
        "badge": "Free + Paid",
        "popularity": "New"
    }
];

export default function FrontEndTools() {
  return (
    <div className="px-4 sm:px-6 md:px-10 py-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 place-items-center">
      {frontendTools.map((tool, index) => (
        <ToolCard
          key={index}
          title={tool.title}
          description={tool.description}
          path={tool.path}
          tags={tool.tags}
          badge={tool.badge}
          popularity={tool.popularity}
        />
      ))}
    </div>
  );
}
