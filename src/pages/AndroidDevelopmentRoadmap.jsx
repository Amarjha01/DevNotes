import React, { useState, useEffect } from 'react';

const notes = [
  {
    title: 'Introduction to Android Development',
    description:
      'Android development involves creating applications for devices running the Android operating system. It uses Kotlin and Java as primary programming languages, supported by a robust ecosystem including Android Studio, Google Play Store, and Jetpack libraries. Android apps run on a wide variety of devices, from phones and tablets to wearables and TVs.',
    category: 'Introduction',
    difficulty: 'Beginner',
    icon: '🤖',
    code: `# Key Points:
- Official languages: Kotlin (preferred), Java
- Android Studio: Official IDE for development
- Apps distributed via Google Play Store
- Uses XML for UI design`,
    tips: [
      'Start by understanding Java or Kotlin basics.',
      'Familiarize yourself with Android Studio and emulator usage.',
      'Learn how to create simple user interfaces using XML.'
    ],
    additionalInfo: [
      'Android powers billions of devices worldwide.',
      'Strong community and extensive documentation available.'
    ],
    links: {
      androidStudio: 'https://developer.android.com/studio',
      youtubeIntro: 'https://www.youtube.com/watch?v=Og287zzOTEM'
    }
  },
  {
    title: 'Set Up Development Environment',
    description:
      'Download and install Android Studio, which includes all the necessary tools to build Android apps. Set up an Android Virtual Device (AVD) emulator to test your apps on different device configurations without needing physical devices.',
    category: 'Setup',
    difficulty: 'Beginner',
    icon: '💻',
    code: `# Steps:
1. Download Android Studio from the official site.
2. Install and launch Android Studio.
3. Configure SDK and required SDK tools.
4. Create AVD emulator for testing.`,
    tips: [
      'Ensure your system meets Android Studio’s requirements.',
      'Use the AVD manager to create multiple device profiles.',
      'Keep Android Studio and SDK tools updated.'
    ],
    links: {
      androidStudio: 'https://developer.android.com/studio'
    }
  },
  {
    title: 'Learn Kotlin and Java',
    description:
      'Master Kotlin as the primary language for Android development. Java knowledge is also valuable for legacy projects and broader JVM understanding.',
    category: 'Programming Languages',
    difficulty: 'Beginner to Intermediate',
    icon: '🧑‍💻',
    code: `// Kotlin Hello World example:
fun main() {
    println("Hello, Android!")
}`,
    tips: [
      'Start with Kotlin basics and syntax.',
      'Practice control structures, OOP concepts, and functional programming features.',
      'Explore interoperability with Java.'
    ],
    additionalInfo: [
      'Google officially recommends Kotlin for new Android projects.',
      'Both Kotlin and Java run on JVM and can be used together.'
    ],
    links: {
      kotlinOfficial: 'https://kotlinlang.org/docs/android-overview.html'
    }
  },
  {
    title: 'Understand Android Components & Architecture',
    description:
      'Learn about Android’s core app components: Activities, Services, Broadcast Receivers, and Content Providers. Study the app lifecycle and Android architecture principles like MVVM and Architecture Components (ViewModel, LiveData, Room).',
    category: 'Core Concepts',
    difficulty: 'Intermediate',
    icon: '🏗️',
    code: `// Simple Activity lifecycle overview:
onCreate() -> onStart() -> onResume()
// User interacts with the app
onPause() -> onStop() -> onDestroy()`,
    tips: [
      'Grasp how different components interact via intents.',
      'Use Jetpack components to build robust, maintainable apps.',
      'Focus on lifecycle-aware components for stability.'
    ],
    additionalInfo: [
      'Understanding lifecycle is crucial to avoid memory leaks.',
      'Architecture components simplify data management and UI updates.'
    ],
    links: {
      lifecycleDocs: 'https://developer.android.com/jetpack/androidx/releases/lifecycle',
      architectureGuide: 'https://developer.android.com/jetpack/guide'
    }
  },
  {
    title: 'Designing User Interfaces',
    description:
      'Learn XML-based UI layout design and how to manage user experience through Views, ViewGroups, ConstraintLayout, RecyclerView, and Fragments. Optionally explore Jetpack Compose for declarative UI building.',
    category: 'UI Design',
    difficulty: 'Intermediate',
    icon: '🎨',
    code: `<!-- Simple XML layout example -->
<LinearLayout 
  android:layout_width="match_parent"
  android:layout_height="match_parent"
  android:orientation="vertical">
  
  <TextView
    android:id="@+id/textView"
    android:layout_width="wrap_content"
    android:layout_height="wrap_content"
    android:text="Welcome to Android!" />
</LinearLayout>`,
    tips: [
      'Understand layout hierarchies and performance implications.',
      'Use ConstraintLayout for flexible, performant designs.',
      'Explore Jetpack Compose for modern UI development.'
    ],
    additionalInfo: [
      'UI/UX is key to app success, focus on usability and responsiveness.',
      'Follow Material Design guidelines for consistent interfaces.'
    ],
    links: {
      uiGuide: 'https://developer.android.com/guide/topics/ui',
      jetpackCompose: 'https://developer.android.com/jetpack/compose'
    }
  },
  {
    title: 'Networking and Data Persistence',
    description:
      'Implement data operations like API calls using Retrofit or OkHttp. Manage local data using Room database or SharedPreferences for key-value storage.',
    category: 'Data Management',
    difficulty: 'Intermediate',
    icon: '🌐',
    code: `// Retrofit example interface
interface ApiService {
  @GET("users")
  suspend fun getUsers(): List<User>
}`,
    tips: [
      'Handle network operations asynchronously with Kotlin Coroutines.',
      'Apply best practices for data caching and offline support.',
      'Secure sensitive data appropriately.'
    ],
    additionalInfo: [
      'APIs are critical for modern apps requiring remote data.',
      'Room integrates SQLite database with strong type safety and compile-time checks.'
    ],
    links: {
      retrofit: 'https://square.github.io/retrofit/',
      room: 'https://developer.android.com/training/data-storage/room'
    }
  },
  {
    title: 'Dependency Injection',
    description:
      'Use Dependency Injection frameworks like Hilt or Dagger 2 to manage class dependencies efficiently for better modularity and testability.',
    category: 'Advanced',
    difficulty: 'Advanced',
    icon: '🧩',
    code: `@HiltAndroidApp
class MyApplication : Application() {}

// Inject in Activity
@AndroidEntryPoint
class MainActivity : AppCompatActivity() {
  @Inject lateinit var repository: UserRepository
}`,
    tips: [
      'Helps with separating concerns and better testing.',
      'Hilt is built on top of Dagger and recommended by Google.',
      'Learn basic DI concepts before using these frameworks.'
    ],
    links: {
      hiltDocs: 'https://developer.android.com/training/dependency-injection/hilt-android'
    }
  },
  {
    title: 'Testing and Debugging',
    description:
      'Learn to write unit tests with JUnit and UI tests with Espresso. Use Android Studio debugging tools and memory profilers to optimize performance.',
    category: 'Testing',
    difficulty: 'Intermediate',
    icon: '🧪',
    code: `// Basic JUnit test example
@Test
fun addition_isCorrect() {
  assertEquals(4, 2 + 2)
}`,
    tips: [
      'Write tests to improve code reliability.',
      'Use mock objects to isolate test cases.',
      'Regularly profile app performance and memory usage.'
    ],
    additionalInfo: [
      'Testing ensures a bug-free user experience.',
      'Automate testing for continuous integration.'
    ],
    links: {
      testingGuide: 'https://developer.android.com/training/testing'
    }
  },
  {
    title: 'Publishing Your App',
    description:
      'Prepare your app for release by creating signed APKs or App Bundles. Set up Google Play Console, create a store listing, and manage app versions and user feedback.',
    category: 'Deployment',
    difficulty: 'Intermediate',
    icon: '🚀',
    code: `# Steps to release:
- Generate a signed APK or App Bundle
- Create developer account on Google Play Console
- Upload and configure your app listing
- Rollout and monitor crash reports and statistics`,
    tips: [
      'Test thoroughly before release.',
      'Follow Play Store policies to avoid rejections.',
      'Use Play Console features like staged rollout and A/B testing.'
    ],
    additionalInfo: [
      'User feedback is important for app improvement.',
      'Keep your app updated with security patches and improvements.'
    ],
    links: {
      playConsole: 'https://play.google.com/console/about/'
    }
  },
  {
    title: 'Continuous Learning',
    description:
      'Android development evolves rapidly; stay updated by following official Android developer blogs, community forums, and YouTube channels.',
    category: 'Learning',
    difficulty: 'All Levels',
    icon: '📚',
    code: `# Follow and learn from:
- Official Android Developer Blog
- GitHub open-source projects
- YouTube tutorials and conferences`,
    tips: [
      'Build projects regularly to apply new skills.',
      'Contribute to or study open-source projects.',
      'Join Android development communities for support.'
    ],
    additionalInfo: [
      'Android Jetpack and Kotlin updates are frequent.',
      'Explore cross-platform options like Kotlin Multiplatform and Flutter as well.'
    ],
    links: {
      androidBlog: 'https://android-developers.googleblog.com/',
      youtubeChannel: 'https://www.youtube.com/c/AndroidDevelopers'
    }
  }
];

const categories = ['All', ...new Set(notes.map(note => note.category))];

const getDifficultyColor = (difficulty) => {
  switch (difficulty) {
    case 'Beginner':
      return 'text-green-400 bg-green-500/10';
    case 'Intermediate':
      return 'text-yellow-400 bg-yellow-500/10';
    case 'Advanced':
      return 'text-red-400 bg-red-500/10';
    default:
      return 'text-gray-400 bg-gray-500/10';
  }
};

const AndroidDevelopmentRoadmap = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [expandedCards, setExpandedCards] = useState(new Set());
  const [animateCards, setAnimateCards] = useState(false);

  useEffect(() => {
    setAnimateCards(true);
  }, []);

  const toggleCard = (index) => {
    const newExpanded = new Set(expandedCards);
    if (newExpanded.has(index)) {
      newExpanded.delete(index);
    } else {
      newExpanded.add(index);
    }
    setExpandedCards(newExpanded);
  };

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text);
  };

  const filteredNotes = notes.filter(
    (note) =>
      (note.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        note.description.toLowerCase().includes(searchTerm.toLowerCase())) &&
      (selectedCategory === 'All' || selectedCategory === note.category)
  );

  return (
    <div className="space-y-8 p-6 bg-[#1a0f2e] min-h-screen text-white mt-24">
      {/* Header Section */}
      <div className="text-center space-y-4">
        <div className="flex items-center justify-center gap-3">
          <div className="text-6xl">🤖</div>
          <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
            Android Development Roadmap
          </h1>
        </div>
        <p className="text-lg text-gray-300 max-w-3xl mx-auto">
          Step-by-step guide to becoming a proficient Android developer, covering setup, programming, UI design,
          architecture, testing, and publishing.
        </p>
      </div>

      {/* Search and Filter Section */}
      <div className="flex flex-col lg:flex-row gap-4 items-center justify-between">   
        <div className="flex flex-wrap gap-2">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                selectedCategory === category
                  ? 'bg-purple-500 text-white'
                  : 'bg-purple-500/10 text-purple-300 hover:bg-purple-500/20'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="flex items-center gap-2 text-sm text-gray-400">
          <span>
            {filteredNotes.length} concept{filteredNotes.length !== 1 ? 's' : ''}
          </span>
        </div>
      </div>

      {/* Notes Grid */}
      <div className="grid gap-6 lg:grid-cols-2 xl:grid-cols-1">
        {filteredNotes.map((note, index) => (
          <div
            key={index}
            className={`group bg-gradient-to-br from-[#2a1640] to-[#1a0f2e] border border-purple-800/30 rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-[1.02] ${
              animateCards ? 'animate-fade-in-up' : ''
            }`}
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            {/* Card Header */}
            <div className="p-6 border-b border-purple-800/20">
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-3">
                  <div className="text-3xl">{note.icon}</div>
                  <div>
                    <h2 className="text-xl font-semibold text-white group-hover:text-purple-300 transition-colors">{note.title}</h2>
                    <div className="flex items-center gap-2 mt-1">
                      <span className="text-xs text-blue-400 bg-blue-500/10 px-2 py-1 rounded-full">{note.category}</span>
                      <span className={`text-xs px-2 py-1 rounded-full ${getDifficultyColor(note.difficulty)}`}>{note.difficulty}</span>
                    </div>
                  </div>
                </div>
                {note.code && (
                  <button
                    onClick={() => toggleCard(index)}
                    className="text-purple-400 hover:text-purple-300 transition-colors"
                    aria-label="Toggle code snippet"
                  >
                    <svg
                      className={`w-5 h-5 transform transition-transform duration-200 ${expandedCards.has(index) ? 'rotate-180' : ''}`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                )}
              </div>
            </div>

            {/* Card Content */}
            <div className="p-6 space-y-4">
              <p className="text-gray-300 leading-relaxed">{note.description}</p>

              {note.additionalInfo && (
                <ul className="text-gray-400 text-sm list-disc list-inside space-y-1">
                  {note.additionalInfo.map((info, i) => (
                    <li key={i}>🔸 {info}</li>
                  ))}
                </ul>
              )}

              {note.code && (
                <div
                  className={`transition-all duration-300 ${
                    expandedCards.has(index) ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'
                  }`}
                >
                  <div className="relative">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-medium text-gray-400">Example Notes:</span>
                      <button
                        onClick={() => copyToClipboard(note.code)}
                        className="text-gray-400 hover:text-white transition-colors text-sm flex items-center gap-1"
                        aria-label="Copy code snippet"
                      >
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"
                          />
                        </svg>
                        Copy
                      </button>
                    </div>
                    <pre className="bg-black/50 border border-gray-700 rounded-lg p-4 text-sm overflow-x-auto whitespace-pre-wrap">
                      <code className="text-green-400">{note.code}</code>
                    </pre>
                  </div>
                </div>
              )}

              {note.tips && (
                <div className="mt-4">
                  <h3 className="text-sm font-semibold text-purple-400 mb-2">💡 Pro Tips:</h3>
                  <ul className="space-y-1 text-sm text-gray-400">
                    {note.tips.map((tip, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="text-purple-400 mt-1">•</span>
                        <span>{tip}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {note.links && (
                <div className="mt-4 flex flex-wrap gap-3">
                  {note.links.androidStudio && (
                    <a
                      href={note.links.androidStudio}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 rounded-lg bg-purple-700 hover:bg-purple-600 text-white text-sm shadow-md transition"
                    >
                      Download Android Studio
                    </a>
                  )}
                  {note.links.youtubeIntro && (
                    <a
                      href={note.links.youtubeIntro}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 rounded-lg bg-red-600 hover:bg-red-500 text-white text-sm shadow-md transition"
                    >
                      Watch Roadmap Video
                    </a>
                  )}
                  {note.links.kotlinOfficial && (
                    <a
                      href={note.links.kotlinOfficial}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 rounded-lg bg-indigo-700 hover:bg-indigo-600 text-white text-sm shadow-md transition"
                    >
                      Kotlin Docs
                    </a>
                  )}
                  {note.links.lifecycleDocs && (
                    <a
                      href={note.links.lifecycleDocs}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 rounded-lg bg-green-600 hover:bg-green-700 text-white text-sm shadow-md transition"
                    >
                      Android Lifecycle Docs
                    </a>
                  )}
                  {note.links.architectureGuide && (
                    <a
                      href={note.links.architectureGuide}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 rounded-lg bg-green-700 hover:bg-green-800 text-white text-sm shadow-md transition"
                    >
                      Android Architecture Guide
                    </a>
                  )}
                  {note.links.uiGuide && (
                    <a
                      href={note.links.uiGuide}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 rounded-lg bg-pink-600 hover:bg-pink-700 text-white text-sm shadow-md transition"
                    >
                      UI Design Guide
                    </a>
                  )}
                  {note.links.jetpackCompose && (
                    <a
                      href={note.links.jetpackCompose}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 rounded-lg bg-pink-700 hover:bg-pink-800 text-white text-sm shadow-md transition"
                    >
                      Jetpack Compose Docs
                    </a>
                  )}
                  {note.links.retrofit && (
                    <a
                      href={note.links.retrofit}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 rounded-lg bg-indigo-600 hover:bg-indigo-700 text-white text-sm shadow-md transition"
                    >
                      Retrofit Library
                    </a>
                  )}
                  {note.links.room && (
                    <a
                      href={note.links.room}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 rounded-lg bg-indigo-700 hover:bg-indigo-800 text-white text-sm shadow-md transition"
                    >
                      Room Database Docs
                    </a>
                  )}
                  {note.links.testingGuide && (
                    <a
                      href={note.links.testingGuide}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 rounded-lg bg-teal-600 hover:bg-teal-700 text-white text-sm shadow-md transition"
                    >
                      Testing Guide
                    </a>
                  )}
                  {note.links.playConsole && (
                    <a
                      href={note.links.playConsole}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 rounded-lg bg-yellow-600 hover:bg-yellow-700 text-white text-sm shadow-md transition"
                    >
                      Google Play Console
                    </a>
                  )}
                  {note.links.androidBlog && (
                    <a
                      href={note.links.androidBlog}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 rounded-lg bg-gray-600 hover:bg-gray-700 text-white text-sm shadow-md transition"
                    >
                      Android Developer Blog
                    </a>
                  )}
                  {note.links.youtubeChannel && (
                    <a
                      href={note.links.youtubeChannel}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 rounded-lg bg-red-700 hover:bg-red-800 text-white text-sm shadow-md transition"
                    >
                      Android Developers YouTube
                    </a>
                  )}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>

      {filteredNotes.length === 0 && (
        <div className="text-center py-12 text-gray-400">
          <div className="text-6xl mb-4">🔍</div>
          <h3 className="text-xl mb-2">No Android concepts found</h3>
          <p>Try adjusting your search terms or category filter.</p>
        </div>
      )}

      <style jsx>{`
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in-up {
          animation: fade-in-up 0.6s ease-out;
        }
      `}</style>
    </div>
  );
};

export default AndroidDevelopmentRoadmap;
