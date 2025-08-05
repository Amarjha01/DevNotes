import ToolCard from "./Cards";

const backendTools = [
  {
    title: 'GitHub Copilot',
    description: 'The most popular AI pair programmer that provides real-time code suggestions and completions across a wide range of languages.',
    path: 'https://github.com/features/copilot',
    tags: ['code-gen', 'completion', 'intellisense'],
    badge: 'Free + Paid',
    popularity: 'Trending'
  },
  {
    title: 'Amazon CodeWhisperer',
    description: 'An AI coding companion by AWS that provides code suggestions and security scanning, with a strong focus on AWS APIs and best practices.',
    path: 'https://aws.amazon.com/codewhisperer/',
    tags: ['aws', 'codegen', 'security-scan'],
    badge: 'Free',
    popularity: 'Popular'
  },
  {
    title: 'CodiumAI',
    description: 'Generate meaningful tests for your functions with AI. It supports multiple backend languages and focuses on code integrity.',
    path: 'https://www.codium.ai/',
    tags: ['unit-testing', 'python', 'javascript'],
    badge: 'Free',
    popularity: 'Popular'
  },
  {
    title: 'Tabnine',
    description: 'An advanced AI code completion tool that works with over 80 programming languages and can be run offline for enhanced privacy.',
    path: 'https://www.tabnine.com/',
    tags: ['code-completion', 'privacy', 'offline'],
    badge: 'Free',
    popularity: 'Popular'
  },
  {
    title: 'Bloop',
    description: 'An AI code search engine that allows you to search your entire codebase using natural language. Ideal for large backend projects.',
    path: 'https://bloop.ai/',
    tags: ['search', 'codebase', 'devtools'],
    badge: 'Free + Paid',
    popularity: 'Growing'
  },
  {
    title: 'Kern AI',
    description: 'Build smart data pipelines and labeling workflows for backend ML and NLP applications.',
    path: 'https://www.kern.ai/',
    tags: ['nlp', 'backend', 'pipelines'],
    badge: 'Free',
    popularity: 'Niche'
  },
  {
    title: 'Mutable AI',
    description: 'Refactor, document, and optimize backend code automatically with AI suggestions.',
    path: 'https://www.mutable.ai/',
    tags: ['refactor', 'autodoc', 'optimization'],
    badge: 'Free + Paid',
    popularity: 'Growing'
  },
  {
    title: 'OpenDevin',
    description: 'An open-source AI agent designed to automate complex backend tasks like setting up APIs or writing scripts.',
    path: 'https://github.com/OpenDevin/OpenDevin',
    tags: ['open-source', 'agent', 'automation'],
    badge: 'Free',
    popularity: 'Trending'
  },
  {
    title: 'Phind',
    description: 'An AI search engine fine-tuned for backend developers that provides instant, relevant code answers.',
    path: 'https://www.phind.com/',
    tags: ['search', 'answers', 'backend'],
    badge: 'Free',
    popularity: 'Popular'
  },
  {
    title: 'Stack AI',
    description: 'Build LLM-powered backend workflows and APIs with a visual interface and no code required.',
    path: 'https://www.stack-ai.com/',
    tags: ['workflow', 'backend', 'llm'],
    badge: 'Free + Paid',
    popularity: 'Niche'
  },
  {
    title: 'Flowise',
    description: 'A visual LLM flow builder that you can self-host to connect backend logic to various LLM providers.',
    path: 'https://flowiseai.com/',
    tags: ['visual', 'llm', 'self-host'],
    badge: 'Free',
    popularity: 'Growing'
  },
  {
    title: 'Replit Ghostwriter',
    description: 'A built-in AI coding assistant for Replit, an all-in-one IDE for writing, debugging, and deploying backend code faster.',
    path: 'https://replit.com/site/ghostwriter',
    tags: ['IDE', 'debugging', 'fullstack'],
    badge: 'Free + Paid',
    popularity: 'Popular'
  },
  {
    title: 'Snyk Code',
    description: 'An AI-driven security tool that scans your code for vulnerabilities and provides real-time fixes, integrating directly into your IDE and CI/CD pipeline.',
    path: 'https://snyk.io/product/snyk-code/',
    tags: ['security', 'vulnerability', 'analysis'],
    badge: 'Free',
    popularity: 'Popular'
  },
  {
    title: 'Sourcery',
    description: 'An AI tool for Python that focuses on refactoring and improving code quality, suggesting clean, readable, and efficient changes.',
    path: 'https://sourcery.ai/',
    tags: ['refactoring', 'python', 'quality'],
    badge: 'Free',
    popularity: 'Niche'
  },
  {
    title: 'Devin',
    description: 'The first AI "software engineer" designed to autonomously handle complex engineering tasks from a single prompt.',
    path: 'https://devin.ai/',
    tags: ['agent', 'automation', 'devops'],
    badge: 'Paid',
    popularity: 'Trending'
  },
  {
    title: 'CodeRabbit',
    description: 'An AI agent that automates pull request summaries and provides line-by-line code reviews, helping teams improve code quality.',
    path: 'https://coderabbit.ai/',
    tags: ['code-review', 'collaboration'],
    badge: 'Paid',
    popularity: 'Growing'
  },
  {
    title: 'Hugging Face',
    description: 'A leading platform for machine learning, offering thousands of pre-trained models and tools for developers to build, train, and deploy AI features.',
    path: 'https://huggingface.co/',
    tags: ['ml', 'nlp', 'models'],
    badge: 'Paid',
    popularity: 'Popular'
  },
  {
    title: 'Cursor',
    description: 'An AI-first code editor built on Visual Studio Code that integrates deeply with AI to write, debug, and understand code faster.',
    path: 'https://www.cursor.so/',
    tags: ['IDE', 'debug', 'codegen'],
    badge: 'Free',
    popularity: 'Trending'
  },
  {
    title: 'Gemini Code Assist',
    description: 'Google’s AI coding assistant that provides contextual code generation and assistance, powered by the Gemini model.',
    path: 'https://cloud.google.com/gemini-code-assist',
    tags: ['google', 'codegen', 'cloud'],
    badge: 'Paid',
    popularity: 'Growing'
  },
  {
    title: 'GitLab Duo',
    description: 'An AI assistant built into the GitLab platform that assists across the entire software development lifecycle, from coding to deployment and security.',
    path: 'https://about.gitlab.com/gitlab-duo/',
    tags: ['fullstack', 'ci/cd', 'devops'],
    badge: 'Paid',
    popularity: 'Growing'
  }
];

export default function BackEndTools() {
  return (
     <div className="px-4 sm:px-6 md:px-10 py-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 place-items-center">
      {backendTools.map((tool, index) => (
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
