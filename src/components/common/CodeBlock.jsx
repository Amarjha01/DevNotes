// src/components/common/CodeBlock.jsx
import { useState } from "react";
import { PrismLight as SyntaxHighlighter } from "react-syntax-highlighter"; 
import { oneDark } from "react-syntax-highlighter/dist/cjs/styles/prism";
import { Copy } from "lucide-react";

// ✅ Import languages you want Prism to support
import js from "react-syntax-highlighter/dist/cjs/languages/prism/javascript";
import bash from "react-syntax-highlighter/dist/cjs/languages/prism/bash";
import yaml from "react-syntax-highlighter/dist/cjs/languages/prism/yaml";
import json from "react-syntax-highlighter/dist/cjs/languages/prism/json";

// ✅ Register them
SyntaxHighlighter.registerLanguage("javascript", js);
SyntaxHighlighter.registerLanguage("bash", bash);
SyntaxHighlighter.registerLanguage("yaml", yaml);
SyntaxHighlighter.registerLanguage("json", json);

const CodeBlock = ({ code, language = "javascript" }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    } catch (err) {
      console.error("Copy failed", err);
    }
  };

  return (
    <div className="relative group mb-4">
      
      <SyntaxHighlighter
        language={language}
        style={oneDark}
        wrapLines={true}
        wrapLongLines={true}
        customStyle={{
          borderRadius: "0.5rem",
          padding: "1rem",
          fontSize: "0.9rem",
          lineHeight: "1.5",
          whiteSpace: "pre-wrap",
        }}
        codeTagProps={{
          className: "text-cyan-300",
        }}
      >
        {code}
      </SyntaxHighlighter>

      <button
        onClick={handleCopy}
        className="absolute top-2 right-2 bg-gray-700 hover:bg-gray-600 px-2 py-1 rounded text-xs opacity-0 group-hover:opacity-100 transition"
      >
        {copied ? "✅ Copied" : <Copy size={14} />}
      </button>
    </div>
  );
};

export default CodeBlock;
