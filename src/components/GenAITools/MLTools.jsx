import ToolCard from "./Cards";


const mlTools = [
  {
    title: 'Weights & Biases',
    description: 'Experiment tracking, model versioning, dataset management, and visualizations for ML teams.',
    path: 'https://wandb.ai/',
    tags: ['experiment', 'tracking'],
    badge: 'Free+Paid',
    popularity: 'Trending'
  },
  {
    title: 'Gradio',
    description: 'Quickly build shareable UIs for your ML models. Great for demos and prototyping.',
    path: 'https://gradio.app/',
    tags: ['ui', 'demo'],
    badge: 'Free',
    popularity: 'Popular'
  },
  {
    title: 'Hugging Face',
    description: 'Hub of pre-trained models and datasets. Offers tools like Transformers, Spaces, and Inference API.',
    path: 'https://huggingface.co/',
    tags: ['nlp', 'api', 'models'],
    badge: 'Free+Paid',
    popularity: 'Trending'
  },
  {
    title: 'Replicate',
    description: 'Run open-source machine learning models in the cloud via simple APIs without setup.',
    path: 'https://replicate.com/',
    tags: ['model-hosting', 'api'],
    badge: 'Free+Paid',
    popularity: 'Trending'
  },
  {
    title: 'RunPod',
    description: 'GPU cloud compute platform for training, inference, and hosting AI workloads.',
    path: 'https://www.runpod.io/',
    tags: ['gpu', 'cloud', 'deployment'],
    badge: 'Paid',
    popularity: 'Growing'
  },
  {
    title: 'Vercel AI SDK',
    description: 'Framework-agnostic SDK to connect your frontend to AI APIs like OpenAI or Hugging Face easily.',
    path: 'https://sdk.vercel.ai/',
    tags: ['sdk', 'api', 'frontend'],
    badge: 'Free',
    popularity: 'Trending'
  },
  {
    title: 'LangChain',
    description: 'Framework for building LLM-powered apps with memory, agents, tools, and chaining logic.',
    path: 'https://www.langchain.com/',
    tags: ['llm', 'agents', 'orchestration'],
    badge: 'Free',
    popularity: 'Popular'
  },
  {
    title: 'Flowise',
    description: 'Drag & drop UI tool to build LLM agents using LangChain visually.',
    path: 'https://flowiseai.com/',
    tags: ['low-code', 'llm', 'workflow'],
    badge: 'Free+Paid',
    popularity: 'Trending'
  },
  {
    title: 'TruLens',
    description: 'Open-source framework for evaluating and debugging LLM-powered apps.',
    path: 'https://www.trulens.org/',
    tags: ['debugging', 'evaluation', 'llm'],
    badge: 'Free',
    popularity: 'Growing'
  },
  {
    title: 'OpenPipe',
    description: 'Fine-tune LLMs using production data and deploy them efficiently.',
    path: 'https://www.openpipe.ai/',
    tags: ['llm', 'fine-tune', 'pipeline'],
    badge: 'Free+Paid',
    popularity: 'Growing'
  },
  {
    title: 'OctoML',
    description: 'Optimizes and deploys ML models for different environments and hardware.',
    path: 'https://octoml.ai/',
    tags: ['deployment', 'optimization'],
    badge: 'Paid',
    popularity: 'Growing'
  },
  {
    title: 'BentoML',
    description: 'Build, ship, and serve machine learning models using Python. Great for production ML services.',
    path: 'https://bentoml.com/',
    tags: ['serving', 'deployment'],
    badge: 'Free',
    popularity: 'Popular'
  },
  {
    title: 'LoRA',
    description: 'Parameter-efficient fine-tuning technique for large models. Widely supported across tools.',
    path: 'https://github.com/microsoft/LoRA',
    tags: ['fine-tune', 'efficient', 'llm'],
    badge: 'Free',
    popularity: 'Popular'
  },
  {
    title: 'PromptLayer',
    description: 'Track, manage, and version AI prompts for OpenAI and other LLMs.',
    path: 'https://www.promptlayer.com/',
    tags: ['prompt', 'tracking', 'llm'],
    badge: 'Free+Paid',
    popularity: 'Trending'
  },
  {
    title: 'Comet ML',
    description: 'Track experiments, compare models, log metrics, and collaborate with teams.',
    path: 'https://www.comet.com/',
    tags: ['experiment', 'tracking', 'collab'],
    badge: 'Free+Paid',
    popularity: 'Popular'
  },
  {
    title: 'DagsHub',
    description: 'Version control for data, models, and experiments using Git & DVC.',
    path: 'https://dagshub.com/',
    tags: ['version-control', 'data', 'mlops'],
    badge: 'Free',
    popularity: 'Growing'
  },
  {
    title: 'Roboflow',
    description: 'Helps you label, train, and deploy computer vision models with ease.',
    path: 'https://roboflow.com/',
    tags: ['computer-vision', 'deployment', 'training'],
    badge: 'Free+Paid',
    popularity: 'Trending'
  },
  {
    title: 'AssemblyAI',
    description: 'Powerful speech-to-text API with AI features like summarization, sentiment, and topic detection.',
    path: 'https://www.assemblyai.com/',
    tags: ['speech', 'text', 'api'],
    badge: 'Free+Paid',
    popularity: 'Popular'
  },
  {
    title: 'Lamini',
    description: 'Platform to build private LLMs using your own data. Enterprise-ready.',
    path: 'https://www.lamini.ai/',
    tags: ['enterprise', 'llm', 'private'],
    badge: 'Paid',
    popularity: 'Growing'
  },
  {
    title: 'NeMo by NVIDIA',
    description: 'Toolkit for training and deploying large-scale language models with pre-trained modules.',
    path: 'https://developer.nvidia.com/nemo',
    tags: ['nvidia', 'llm', 'training'],
    badge: 'Free+Paid',
    popularity: 'Growing'
  }
];


export default function MLTools() {
  return (
     <div className="px-4 sm:px-6 md:px-10 py-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 place-items-center">
      {mlTools.map((tool, index) => (
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
