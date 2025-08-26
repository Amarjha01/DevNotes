import { useState } from "react";
import { motion } from "framer-motion";
import { ChevronDown, ChevronUp } from "lucide-react";

export default function AndroidPrepSheet() {
  const [filter, setFilter] = useState("All");
  const [expandedTopic, setExpandedTopic] = useState(null);
  const [solved, setSolved] = useState({});

  const topics = [
    {
      title: "Kotlin Basics",
      color: "from-orange-500 to-red-500",
      description: "Learn the fundamentals of Kotlin, the primary language for Android development.",
      questions: [
        { name: "Kotlin Playground Practice", link: "https://play.kotlinlang.org/", difficulty: "Easy" },
        { name: "Variables & Data Types", link: "https://developer.android.com/courses/kotlin-bootcamp/overview", difficulty: "Easy" },
        { name: "Functions & Null Safety", link: "https://kotlinlang.org/docs/null-safety.html", difficulty: "Medium" },
        { name: "Kotlin Coroutines Basics", link: "https://developer.android.com/kotlin/coroutines", difficulty: "Medium" },
        { name: "OOP in Kotlin", link: "https://kotlinlang.org/docs/classes.html", difficulty: "Medium" },
        { name: "Advanced Kotlin Features", link: "https://kotlinlang.org/docs/reference/", difficulty: "Hard" }
      ]
    },
    {
      title: "Android UI",
      color: "from-blue-500 to-indigo-500",
      description: "Practice building layouts, activities, fragments, and Jetpack Compose.",
      questions: [
        { name: "Hello World App", link: "https://developer.android.com/training/basics/firstapp", difficulty: "Easy" },
        { name: "Layouts & Views", link: "https://developer.android.com/guide/topics/ui/declaring-layout", difficulty: "Easy" },
        { name: "RecyclerView Implementation", link: "https://developer.android.com/guide/topics/ui/layout/recyclerview", difficulty: "Medium" },
        { name: "Navigation Component", link: "https://developer.android.com/guide/navigation", difficulty: "Medium" },
        { name: "Jetpack Compose Basics", link: "https://developer.android.com/jetpack/compose/tutorial", difficulty: "Medium" },
        { name: "Animations in Compose", link: "https://developer.android.com/jetpack/compose/animation", difficulty: "Hard" }
      ]
    },
    {
      title: "Networking",
      color: "from-yellow-500 to-amber-500",
      description: "Learn to work with APIs, Retrofit, and background tasks.",
      questions: [
        { name: "Fetching Data with Retrofit", link: "https://square.github.io/retrofit/", difficulty: "Easy" },
        { name: "Parsing JSON with Moshi/Gson", link: "https://developer.android.com/kotlin/parse-json", difficulty: "Easy" },
        { name: "REST API Integration", link: "https://developer.android.com/training/volley", difficulty: "Medium" },
        { name: "OkHttp Interceptors", link: "https://square.github.io/okhttp/interceptors/", difficulty: "Medium" },
        { name: "GraphQL with Apollo", link: "https://www.apollographql.com/docs/android/", difficulty: "Hard" },
        { name: "WebSockets in Android", link: "https://developer.android.com/training/connect-devices-wirelessly/wifi-direct", difficulty: "Hard" }
      ]
    },
    {
      title: "Databases & Storage",
      color: "from-green-500 to-emerald-500",
      description: "Work with local storage, Room DB, shared preferences, and caching.",
      questions: [
        { name: "SharedPreferences Demo", link: "https://developer.android.com/training/data-storage/shared-preferences", difficulty: "Easy" },
        { name: "SQLite Basics", link: "https://developer.android.com/training/data-storage/sqlite", difficulty: "Easy" },
        { name: "Room Database Implementation", link: "https://developer.android.com/training/data-storage/room", difficulty: "Medium" },
        { name: "Offline Caching with Room", link: "https://developer.android.com/topic/libraries/architecture/room", difficulty: "Medium" },
        { name: "DataStore API", link: "https://developer.android.com/topic/libraries/architecture/datastore", difficulty: "Medium" },
        { name: "Advanced DB Design", link: "https://developer.android.com/training/articles/perf-sql", difficulty: "Hard" }
      ]
    },
    {
      title: "Projects & System Design",
      color: "from-purple-500 to-pink-500",
      description: "End-to-end Android projects to strengthen problem solving and architecture.",
      questions: [
        { name: "Todo App (Room + RecyclerView)", link: "https://github.com/android/sunflower", difficulty: "Easy" },
        { name: "News App (API + Retrofit)", link: "https://github.com/android/architecture-components-samples", difficulty: "Medium" },
        { name: "Chat App (Firebase)", link: "https://firebase.google.com/docs/android/setup", difficulty: "Medium" },
        { name: "Weather App (MVVM + API)", link: "https://developer.android.com/jetpack/guide", difficulty: "Medium" },
        { name: "E-Commerce App (Cart + Payment)", link: "https://github.com/android/architecture-samples", difficulty: "Hard" },
        { name: "Instagram Clone (Compose + Firebase)", link: "https://developer.android.com/jetpack/compose", difficulty: "Hard" }
      ]
    }
  ];

  const difficulties = ["All", "Easy", "Medium", "Hard"];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white px-6 md:px-20 py-20">
      {/* Header */}
      <div className="max-w-5xl mx-auto text-center mb-12">
        <h1 className="text-5xl font-extrabold bg-gradient-to-r from-green-300 to-blue-400 bg-clip-text text-transparent">
          🤖 Android Prep Sheet
        </h1>
        <p className="mt-3 text-gray-400">
          Practice Android development with structured Kotlin, Jetpack, and project-based challenges.
        </p>
      </div>

      {/* Filters */}
      <div className="flex justify-center gap-4 mb-8">
        {difficulties.map((d) => (
          <button
            key={d}
            onClick={() => setFilter(d)}
            className={`px-4 py-2 rounded-xl border transition ${
              filter === d
                ? "bg-green-600 border-green-400 text-white"
                : "bg-gray-800 border-gray-600 text-gray-300 hover:bg-gray-700"
            }`}
          >
            {d}
          </button>
        ))}
      </div>

      {/* Topics */}
      <div className="space-y-6">
        {topics.map((topic, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: i * 0.2 }}
            className="bg-gray-900/60 border border-gray-700/50 rounded-2xl overflow-hidden shadow-lg"
          >
            {/* Topic Header */}
            <div
              onClick={() =>
                setExpandedTopic(expandedTopic === i ? null : i)
              }
              className={`cursor-pointer p-6 flex items-center justify-between bg-gradient-to-r ${topic.color}`}
            >
              <h2 className="text-2xl font-bold">{topic.title}</h2>
              {expandedTopic === i ? <ChevronUp /> : <ChevronDown />}
            </div>

            {/* Expanded Section */}
            {expandedTopic === i && (
              <div className="p-6 space-y-4">
                <p className="text-gray-400 mb-4">{topic.description}</p>

                {topic.questions
                  .filter(
                    (q) => filter === "All" || q.difficulty === filter
                  )
                  .map((q, idx) => (
                    <div
                      key={idx}
                      className="flex items-center justify-between p-3 rounded-lg bg-gray-800 hover:bg-gray-700 transition"
                    >
                      <div>
                        <a
                          href={q.link}
                          target="_blank"
                          rel="noreferrer"
                          className="text-lg font-medium text-green-300 hover:text-blue-400"
                        >
                          {q.name}
                        </a>
                        <span
                          className={`ml-3 px-2 py-1 text-xs rounded-lg ${
                            q.difficulty === "Easy"
                              ? "bg-green-600/30 text-green-400"
                              : q.difficulty === "Medium"
                              ? "bg-yellow-600/30 text-yellow-400"
                              : "bg-red-600/30 text-red-400"
                          }`}
                        >
                          {q.difficulty}
                        </span>
                      </div>

                      {/* Solved Toggle */}
                      <button
                        onClick={() =>
                          setSolved((prev) => ({
                            ...prev,
                            [q.name]: !prev[q.name]
                          }))
                        }
                        className={`px-3 py-1 rounded-lg text-sm font-medium transition ${
                          solved[q.name]
                            ? "bg-green-600 text-white"
                            : "bg-gray-700 text-gray-300 hover:bg-gray-600"
                        }`}
                      >
                        {solved[q.name] ? "Solved" : "Unsolved"}
                      </button>
                    </div>
                  ))}
              </div>
            )}
          </motion.div>
        ))}
      </div>
    </div>
  );
}
