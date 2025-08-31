const qaData = [
    // ===== ABOUT DEVNOTES =====
    {
        question: "Who created DevNotes?",
        keywords: ["creator", "founder", "who made devnotes"],
        answer: "DevNotes was created by students and developers passionate about sharing knowledge in a structured way. It is maintained as a collaborative learning project.",
        link: "/",
    },
    {
        question: "What topics can I learn on DevNotes?",
        keywords: ["topics", "learn", "subjects", "categories"],
        answer: "On DevNotes, you can learn Frontend (HTML, CSS, JavaScript, React, Tailwind), Backend (Node.js, Express, MongoDB), DSA, Machine Learning/AI, System Design, Android Development, DevOps, Git, and even explore Gen-AI tools and projects.",
        link: "/",
    },
    {
        question: "Does DevNotes provide interview prep?",
        keywords: ["interview prep", "prep sheet", "interview questions"],
        answer: "Yes! DevNotes provides curated Prep Sheets for Frontend, Backend, ML/AI, System Design, and DSA, making it easier for you to prepare for technical interviews.",
        link: "/",
    },
    {
        question: "What is DevNotes?",
        keywords: ["devnotes", "about devnotes", "what is devnotes"],
        answer: "DevNotes is an online learning platform that provides structured notes, guides, and resources for Web Development, Machine Learning, Android, System Design, DevOps, and more. It is designed to help students and developers learn, code, and share knowledge in one place.",
        link: "/",
    },
    {
        question: "Can I practice quizzes on DevNotes?",
        keywords: ["quiz", "quizzes", "practice", "mock test"],
        answer: "Yes, DevNotes offers quizzes for different domains like Backend, ML/AI, and more to help you test your knowledge.",
        link: "/",
    },
    {
        question: "Does DevNotes provide project ideas?",
        keywords: ["projects", "project ideas", "build projects"],
        answer: "Yes, DevNotes has a dedicated Projects section where you can explore real-world project ideas to build your portfolio.",
        link: "/projects",
    },
    {
        question: "Is DevNotes free to use?",
        keywords: ["free", "pricing", "cost"],
        answer: "Yes, DevNotes is completely free to use. All notes, prep sheets, and tools are open for learners.",
        link: "/",
    },
    {
        question: "How can I navigate DevNotes?",
        keywords: ["navigate", "navigation", "where to find"],
        answer: "You can use the navigation bar at the top of the website to explore categories like Frontend, Backend, ML/AI, DSA, System Design, Android, DevOps, and more. The homepage also provides quick access to each section.",
        link: "/",
    },
    // ===== FRONTEND =====
  {
    question: "What is HTML?",
    keywords: ["html", "hypertext", "markup"],
    answer: "HTML (HyperText Markup Language) is the standard language for structuring web pages.",
    link: "/frontend/html",
  },
  {
    question: "What is CSS?",
    keywords: ["css", "styling", "style"],
    answer: "CSS (Cascading Style Sheets) is used to style and design web pages.",
    link: "/frontend/css",
  },
  {
    question: "What is JavaScript?",
    keywords: ["javascript", "js", "scripting"],
    answer: "JavaScript is a programming language used to add interactivity to websites.",
    link: "/frontend/js",
  },
  {
    question: "What is React?",
    keywords: ["react", "reactjs", "components", "hooks"],
    answer: "React.js is a JavaScript library for building user interfaces using components.",
    link: "/frontend/reactjs",
  },
  {
    question: "What is Tailwind CSS?",
    keywords: ["tailwind", "tailwindcss", "utility"],
    answer: "Tailwind CSS is a utility-first CSS framework for rapidly building custom designs.",
    link: "/frontend/tailwind",
  },
  {
    question: "Where can I find Frontend Prep Sheet?",
    keywords: ["frontend prep", "frontend preparation", "prep sheet"],
    answer: "The Frontend Prep Sheet contains curated resources for frontend interviews.",
    link: "/frontend/frontendprepsheet",
  },

  // ===== BACKEND =====
  {
    question: "What is Node.js?",
    keywords: ["node", "nodejs", "server"],
    answer: "Node.js is a JavaScript runtime built on Chrome's V8 engine for backend development.",
    link: "/backend/nodejs",
  },
  {
    question: "What is Express?",
    keywords: ["express", "expressjs"],
    answer: "Express.js is a web application framework for Node.js to build APIs and web apps.",
    link: "/backend/express",
  },
  {
    question: "What is MongoDB?",
    keywords: ["mongodb", "database", "nosql"],
    answer: "MongoDB is a NoSQL database that stores data in flexible, JSON-like documents.",
    link: "/backend/mongodb",
  },
  {
    question: "What is REST API?",
    keywords: ["rest", "api", "backend"],
    answer: "REST API is an architectural style for designing networked applications using HTTP.",
    link: "/backend/restapi",
  },
  {
    question: "What is JWT authentication?",
    keywords: ["jwt", "json web token", "authentication"],
    answer: "JWT (JSON Web Token) is used for secure authentication between client and server.",
    link: "/backend/jwt",
  },
  {
    question: "Where can I find Backend Prep Sheet?",
    keywords: ["backend prep", "backend preparation", "prep sheet"],
    answer: "The Backend Prep Sheet contains curated backend interview resources.",
    link: "/backend/backendprepsheet",
  },
  // ===== MACHINE LEARNING / AI =====
  {
    question: "What is AI?",
    keywords: ["ai/ml", "artificial intelligence"],
    answer: "Artificial Intelligence enables machines to mimic human intelligence.",
    link: "/machine-learning/ai",
  },
  {
    question: "What is Supervised Learning?",
    keywords: ["supervised", "supervised learning"],
    answer: "Supervised learning uses labeled data to train models for predictions.",
    link: "/machine-learning/supervised",
  },
  {
    question: "What is Unsupervised Learning?",
    keywords: ["unsupervised", "unsupervised learning"],
    answer: "Unsupervised learning finds patterns in data without labels, like clustering.",
    link: "/machine-learning/unsupervised",
  },
  {
    question: "What is Reinforcement Learning?",
    keywords: ["reinforcement", "rl"],
    answer: "Reinforcement learning trains agents using rewards and penalties.",
    link: "/machine-learning/reinforcement",
  },
  {
    question: "What is Model Evaluation?",
    keywords: ["evaluation", "metrics", "accuracy"],
    answer: "Evaluation in ML measures model performance using metrics like accuracy, precision, and recall.",
    link: "/machine-learning/evaluation",
  },
  {
    question: "Where can I find ML/AI Prep Sheet?",
    keywords: ["ml prep", "ai prep", "machine learning prep sheet"],
    answer: "The ML/AI Prep Sheet contains curated resources for machine learning interviews.",
    link: "/machine-learning/mlaiprepsheet",
  },
  // ===== SYSTEM DESIGN =====
  {
    question: "What is API design?",
    keywords: ["api design", "api", "system design"],
    answer: "API design defines how different software components interact.",
    link: "/system-design/api-design",
  },
  {
    question: "What is caching?",
    keywords: ["cache", "caching"],
    answer: "Caching temporarily stores data for faster access in future requests.",
    link: "/system-design/caching",
  },
  {
    question: "What is a load balancer?",
    keywords: ["load balancer", "balancing"],
    answer: "Load balancers distribute incoming traffic across multiple servers for efficiency.",
    link: "/system-design/load-balancers",
  },
  {
    question: "What is database design?",
    keywords: ["database design", "db design"],
    answer: "Database design is the process of structuring a database to efficiently store and query data.",
    link: "/system-design/database-design",
  },
  {
    question: "What is scalability in system design?",
    keywords: ["scalability", "scalable system"],
    answer: "Scalability ensures that a system can handle increased load by adding resources.",
    link: "/system-design/scalability",
  },
  {
    question: "Where can I find System Design Prep Sheet?",
    keywords: ["system design prep", "prep sheet"],
    answer: "The System Design Prep Sheet provides interview resources and design examples.",
    link: "/system-design/systemdesignprepsheet",
  },

  // ===== DSA =====
  {
    question: "What is an array?",
    keywords: ["array", "list", "dsa"],
    answer: "An array is a data structure that stores elements in a contiguous block of memory.",
    link: "/dsa/array",
  },
  {
    question: "What is a stack?",
    keywords: ["stack", "lifo"],
    answer: "A stack is a linear data structure that follows Last In, First Out (LIFO) principle.",
    link: "/dsa/stack",
  },
  {
    question: "What is a queue?",
    keywords: ["queue", "fifo"],
    answer: "A queue is a linear data structure that follows First In, First Out (FIFO) principle.",
    link: "/dsa/queue",
  },
  {
    question: "What is a greedy algorithm?",
    keywords: ["greedy", "greedy algorithm"],
    answer: "Greedy algorithms build solutions step by step by choosing the best option at each step.",
    link: "/dsa/greedy",
  },
  {
    question: "What is string manipulation in DSA?",
    keywords: ["string", "dsa string"],
    answer: "String manipulation involves operations like searching, pattern matching, and transformations.",
    link: "/dsa/string",
  },
  {
    question: "Where can I find DSA Prep Sheet?",
    keywords: ["dsa prep", "dsa preparation", "prep sheet"],
    answer: "The DSA Prep Sheet contains important problems and resources for interview prep.",
    link: "/dsa/dsaprepsheet",
  },

  // ===== ANDROID DEVELOPMENT =====
  {
    question: "What is Android Development?",
    keywords: ["android", "android development", "mobile development"],
    answer: "Android Development is the process of creating mobile applications for devices running the Android operating system.",
    link: "/android",
  },
  {
    question: "What language is used in Android Development?",
    keywords: ["java", "kotlin", "android language"],
    answer: "Android apps are commonly built using Java and Kotlin programming languages.",
    link: "/android",
  },
  {
    question: "What is Android Studio?",
    keywords: ["android studio", "ide"],
    answer: "Android Studio is the official IDE for Android app development, built on JetBrains IntelliJ IDEA.",
    link: "/android",
  },
  {
    question: "What is an APK?",
    keywords: ["apk", "android package", "app file"],
    answer: "An APK (Android Package) is the file format used to distribute and install applications on Android devices.",
    link: "/android",
  },
  {
    question: "What is an Activity in Android?",
    keywords: ["activity", "android activity"],
    answer: "An Activity is a single screen with a user interface in an Android app. Each screen is usually one Activity.",
    link: "/android",
  },
  {
    question: "What is a Fragment in Android?",
    keywords: ["fragment", "android fragment"],
    answer: "A Fragment represents a reusable portion of the user interface in an Activity. They help build flexible UIs.",
    link: "/android",
  },
  {
    question: "What is an Intent in Android?",
    keywords: ["intent", "android intent"],
    answer: "An Intent in Android is a messaging object used to request an action from another app component, like opening a new screen.",
    link: "/android",
  },
  {
    question: "What is the Android Manifest file?",
    keywords: ["manifest", "androidmanifest.xml"],
    answer: "The AndroidManifest.xml file provides essential information about your app, including permissions, components, and services.",
    link: "/android",
  },
  {
    question: "What is Gradle in Android?",
    keywords: ["gradle", "build system", "android gradle"],
    answer: "Gradle is the build automation system used in Android Studio to compile, package, and manage dependencies for your app.",
    link: "/android",
  },
]

export default qaData;