import ToolCard from "./Cards";

const androidai = [
  {
    title: 'ML Kit',
    description: 'Google’s on-device AI SDK for text recognition, face detection, and more.',
    path: 'https://developers.google.com/ml-kit',
    tags: ['ml', 'vision'],
    badge: 'Free',
    popularity: 'Popular'
  },
  {
    title: 'Firebase ML',
    description: 'Machine learning tools in Firebase for easy integration with Android apps.',
    path: 'https://firebase.google.com/products/ml',
    tags: ['ml', 'firebase'],
    badge: 'Free+Paid',
    popularity: 'Trending'
  },
  {
    title: 'Dialogflow',
    description: 'Build AI-powered chatbots and voice interfaces for Android apps.',
    path: 'https://cloud.google.com/dialogflow',
    tags: ['chatbot', 'nlp'],
    badge: 'Free+Paid',
    popularity: 'Popular'
  },
  {
    title: 'TensorFlow Lite',
    description: 'Run ML models on Android with this lightweight version of TensorFlow.',
    path: 'https://www.tensorflow.org/lite',
    tags: ['ml', 'on-device'],
    badge: 'Free',
    popularity: 'Popular'
  },
  {
    title: 'Houndify',
    description: 'Voice AI platform for adding natural speech interfaces in Android apps.',
    path: 'https://www.houndify.com/',
    tags: ['voice', 'ai'],
    badge: 'Free+Paid',
    popularity: 'Growing'
  },
  {
    title: 'Snips NLU',
    description: 'Open-source Natural Language Understanding for Android apps.',
    path: 'https://github.com/snipsco/snips-nlu',
    tags: ['nlu', 'offline'],
    badge: 'Free',
    popularity: 'Growing'
  },
  {
    title: 'Alan AI',
    description: 'Voice AI SDK to embed voice commands into Android apps easily.',
    path: 'https://alan.app/',
    tags: ['voice', 'sdk'],
    badge: 'Free+Paid',
    popularity: 'Trending'
  },
  {
    title: 'DeepAR',
    description: 'SDK for real-time face filters, lenses, and AR effects using AI.',
    path: 'https://www.deepar.ai/',
    tags: ['ar', 'vision'],
    badge: 'Free+Paid',
    popularity: 'Popular'
  },
  {
    title: 'ZEGOCLOUD AI Effects',
    description: 'Add beauty filters, background blur, and avatars to Android apps.',
    path: 'https://www.zegocloud.com/ai-effects',
    tags: ['filters', 'ai'],
    badge: 'Free+Paid',
    popularity: 'Growing'
  },
  {
    title: 'Pinecone + Android',
    description: 'Use vector search to power AI features like recommendations.',
    path: 'https://www.pinecone.io/',
    tags: ['vector', 'search'],
    badge: 'Paid',
    popularity: 'Trending'
  },
  {
    title: 'Lobe',
    description: 'Train custom image classification models without code for Android.',
    path: 'https://www.lobe.ai/',
    tags: ['image', 'ml'],
    badge: 'Free',
    popularity: 'Growing'
  },
  {
    title: 'Face++',
    description: 'AI-powered face detection, analysis, and landmarks in Android apps.',
    path: 'https://www.faceplusplus.com/',
    tags: ['face', 'recognition'],
    badge: 'Free+Paid',
    popularity: 'Popular'
  },
  {
    title: 'Edge Impulse',
    description: 'Build and deploy embedded AI for Android-powered devices.',
    path: 'https://www.edgeimpulse.com/',
    tags: ['embedded', 'ml'],
    badge: 'Free+Paid',
    popularity: 'Trending'
  },
  {
    title: 'Nanonets',
    description: 'AI API for object detection and OCR for Android apps.',
    path: 'https://www.nanonets.com/',
    tags: ['ocr', 'vision'],
    badge: 'Free+Paid',
    popularity: 'Popular'
  },
  {
    title: 'Turi Create',
    description: 'Create custom ML models for mobile apps without deep ML knowledge.',
    path: 'https://apple.github.io/turicreate/',
    tags: ['ml', 'custom'],
    badge: 'Free',
    popularity: 'Growing'
  },
  {
    title: 'Cortex Certifai',
    description: 'Explainability and fairness testing tool for ML models in Android apps.',
    path: 'https://www.cognitivecomputingfoundation.org/certifai.html',
    tags: ['explainability', 'ml'],
    badge: 'Free',
    popularity: 'Niche'
  },
  {
    title: 'Gradio + Android',
    description: 'Integrate simple ML UIs to Android for testing or demos.',
    path: 'https://www.gradio.app/',
    tags: ['ui', 'ml'],
    badge: 'Free',
    popularity: 'Growing'
  },
  {
    title: 'Neural.love API',
    description: 'Use AI-powered image generation and enhancement in Android apps.',
    path: 'https://neural.love/',
    tags: ['image', 'enhancement'],
    badge: 'Free+Paid',
    popularity: 'Growing'
  },
  {
    title: 'Wit.ai',
    description: 'Turn speech or text into structured data for Android voice apps.',
    path: 'https://wit.ai/',
    tags: ['voice', 'nlp'],
    badge: 'Free',
    popularity: 'Popular'
  },
  {
    title: 'Replicate + Android',
    description: 'Run open-source ML models in your Android app using API.',
    path: 'https://replicate.com/',
    tags: ['ml', 'api'],
    badge: 'Free+Paid',
    popularity: 'Trending'
  }
];


export default function AndroidDevTools() {
  return (
     <div className="px-4 sm:px-6 md:px-10 py-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 place-items-center">
      {androidai.map((tool, index) => (
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
