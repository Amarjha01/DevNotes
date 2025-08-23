import { useState } from "react";
import { motion } from "framer-motion";
import { ChevronDown, ChevronUp } from "lucide-react";

export default function SystemDesignPrepSheet() {
  const [filter, setFilter] = useState("All");
  const [expandedTopic, setExpandedTopic] = useState(null);
  const [solved, setSolved] = useState({});

  const topics = [
    {
      title: "System Design Basics",
      color: "from-indigo-500 to-blue-500",
      description: "Core building blocks: requirements, CAP, SLAs, and back-of-the-envelope estimations.",
      questions: [
        { name: "Functional vs Non-Functional Reqs", link: "https://www.geeksforgeeks.org/functional-vs-non-functional-requirements/", difficulty: "Easy" },
        { name: "Latency vs Throughput", link: "https://www.geeksforgeeks.org/difference-between-throughput-and-latency/", difficulty: "Easy" },
        { name: "Capacity Estimation (RPS, Storage)", link: "https://github.com/donnemartin/system-design-primer#how-to-approach-a-system-design-interview", difficulty: "Medium" },
        { name: "CAP & PACELC Theorems", link: "https://www.geeksforgeeks.org/cap-theorem-in-distributed-systems/", difficulty: "Medium" },
        { name: "SLA/SLO/SLI Fundamentals", link: "https://sre.google/sre-book/service-level-objectives/", difficulty: "Medium" },
        { name: "Back-of-the-Envelope Guide", link: "https://github.com/donnemartin/system-design-primer#back-of-the-envelope-estimation", difficulty: "Hard" }
      ]
    },
    {
      title: "Networking & Communication",
      color: "from-cyan-500 to-teal-500",
      description: "Protocols, load balancers, proxies, and API paradigms.",
      questions: [
        { name: "HTTP/1.1 vs HTTP/2 vs HTTP/3", link: "https://www.geeksforgeeks.org/difference-between-http1-1-http2-and-http3/", difficulty: "Easy" },
        { name: "REST vs gRPC vs GraphQL", link: "https://www.geeksforgeeks.org/difference-between-rest-and-grpc/", difficulty: "Medium" },
        { name: "Load Balancing (L4/L7)", link: "https://www.geeksforgeeks.org/load-balancing-techniques/", difficulty: "Medium" },
        { name: "Reverse Proxy & CDN Basics", link: "https://www.geeksforgeeks.org/what-is-cdn-content-delivery-network/", difficulty: "Medium" },
        { name: "WebSockets & SSE", link: "https://www.interviewbit.com/websocket-interview-questions/", difficulty: "Medium" },
        { name: "API Gateway Pattern", link: "https://microservices.io/patterns/apigateway.html", difficulty: "Hard" }
      ]
    },
    {
      title: "Data Storage & Databases",
      color: "from-amber-500 to-orange-500",
      description: "SQL vs NoSQL, replication, sharding, indexing, and consistency.",
      questions: [
        { name: "SQL vs NoSQL Trade-offs", link: "https://www.geeksforgeeks.org/sql-vs-nosql-difference-between-sql-and-nosql/", difficulty: "Easy" },
        { name: "Indexes & Query Optimization", link: "https://www.geeksforgeeks.org/indexes-in-sql/", difficulty: "Medium" },
        { name: "Replication Strategies", link: "https://www.geeksforgeeks.org/replication-in-dbms/", difficulty: "Medium" },
        { name: "Sharding & Partitioning", link: "https://www.geeksforgeeks.org/sharding-in-databases/", difficulty: "Medium" },
        { name: "Consistency Models", link: "https://www.geeksforgeeks.org/consistency-models-in-distributed-systems/", difficulty: "Hard" },
        { name: "Schema Design for Scale", link: "https://github.com/donnemartin/system-design-primer#database", difficulty: "Hard" }
      ]
    },
    {
      title: "Caching & Scalability",
      color: "from-emerald-500 to-green-600",
      description: "Caching patterns, eviction, CDNs, and performance strategies.",
      questions: [
        { name: "Caching Basics (TTL, Eviction)", link: "https://www.geeksforgeeks.org/cache-memory-in-computer-organization/", difficulty: "Easy" },
        { name: "Redis Fundamentals", link: "https://redis.io/docs/latest/develop/", difficulty: "Medium" },
        { name: "Cache Aside vs Write-Through", link: "https://www.geeksforgeeks.org/cache-aside-pattern/", difficulty: "Medium" },
        { name: "CDN Caching Strategy", link: "https://www.geeksforgeeks.org/how-cdn-works/", difficulty: "Medium" },
        { name: "Consistent Hashing", link: "https://www.geeksforgeeks.org/consistent-hashing/", difficulty: "Hard" },
        { name: "Hot Key & Thundering Herd", link: "https://github.com/donnemartin/system-design-primer#performance", difficulty: "Hard" }
      ]
    },
    {
      title: "Distributed Systems Patterns",
      color: "from-fuchsia-500 to-rose-500",
      description: "Queues, streams, rate limiting, id generation, and reliability.",
      questions: [
        { name: "Message Queues (RabbitMQ/Kafka)", link: "https://www.geeksforgeeks.org/what-is-message-queue/", difficulty: "Easy" },
        { name: "Event-Driven Architecture", link: "https://www.geeksforgeeks.org/event-driven-architecture/", difficulty: "Medium" },
        { name: "Exactly-Once vs At-Least-Once", link: "https://www.interviewbit.com/distributed-systems-interview-questions/", difficulty: "Medium" },
        { name: "Rate Limiter (Token/Leaky Bucket)", link: "https://www.geeksforgeeks.org/rate-limiting-algorithms/", difficulty: "Medium" },
        { name: "Unique ID Generation (Snowflake)", link: "https://www.geeksforgeeks.org/snowflake-algorithm-for-generating-unique-ids/", difficulty: "Hard" },
        { name: "Leader Election & Heartbeats", link: "https://www.geeksforgeeks.org/bully-algorithm-in-distributed-systems/", difficulty: "Hard" }
      ]
    },
    {
      title: "Case Studies & Designs",
      color: "from-purple-500 to-pink-500",
      description: "Apply patterns to real systems: URL shortener, feeds, chat, search, file storage.",
      questions: [
        { name: "Design URL Shortener", link: "https://leetcode.com/discuss/interview-question/system-design/124676/system-design-url-shortener", difficulty: "Easy" },
        { name: "Design Rate Limiter", link: "https://leetcode.com/discuss/interview-question/system-design/124720/system-design-rate-limiter", difficulty: "Medium" },
        { name: "Design News Feed", link: "https://github.com/donnemartin/system-design-primer#design-a-news-feed-system", difficulty: "Medium" },
        { name: "Design Chat/Messaging", link: "https://leetcode.com/discuss/interview-question/system-design/124777/system-design-chat-messaging-service", difficulty: "Medium" },
        { name: "Design Search Autocomplete", link: "https://github.com/donnemartin/system-design-primer#design-a-search-suggestions-system", difficulty: "Hard" },
        { name: "Design File Storage (Drive/S3)", link: "https://github.com/donnemartin/system-design-primer#design-a-file-storage--sharing-service", difficulty: "Hard" }
      ]
    }
  ];

  const difficulties = ["All", "Easy", "Medium", "Hard"];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white px-6 md:px-20 py-20">
      {/* Header */}
      <div className="max-w-5xl mx-auto text-center mb-12">
        <h1 className="text-5xl font-extrabold bg-gradient-to-r from-indigo-300 to-pink-400 bg-clip-text text-transparent">
          🏗️ System Design Prep Sheet
        </h1>
        <p className="mt-3 text-gray-400">
          Practice fundamentals, distributed patterns, and real-world case studies with structured links.
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
                ? "bg-indigo-600 border-indigo-400 text-white"
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
              onClick={() => setExpandedTopic(expandedTopic === i ? null : i)}
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
                  .filter((q) => filter === "All" || q.difficulty === filter)
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
                          className="text-lg font-medium text-indigo-300 hover:text-pink-400"
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
                            [q.name]: !prev[q.name],
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
