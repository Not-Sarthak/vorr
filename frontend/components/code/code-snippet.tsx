import React, { useState } from "react";
import { Check, Copy } from "lucide-react";

const CodeSnippet = () => {
  const [copied, setCopied] = useState(false);

  const codeSnippet = `// Function to simulate being on ore or not
function isOnOre() {
    return Math.random() < 0.5; // 50% chance of being on ore
}

// Function to attempt mining
function attemptMining() {
    if (isOnOre()) {
        console.log("mine ore");
    } else {
        console.log("Cannot mine. Not on ore.");
    }
}

// Simulate mining attempts
function simulateMining(attempts) {
    for (let i = 0; i < attempts; i++) {
        console.log("Attempt");
        attemptMining();
        console.log("---");
    }
}

simulateMining(5);
`;

  const copyToClipboard = () => {
    navigator.clipboard.writeText(codeSnippet).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  return (
    <div className="max-w-2xl p-4 rounded-lg bg-gradient-to-b from-[#E5DDF8]/60 to-[#E5DDF8]/0">
      <div className="relative">
        <pre className="text-sm overflow-x-auto p-4 bg-transparent text-black rounded-lg">
          <code>{codeSnippet}</code>
        </pre>
        <button
          onClick={copyToClipboard}
          className="absolute top-2 right-2 p-2 bg-white/10 rounded-md hover:bg-white/20 transition-colors"
        >
          {copied ? (
            <Check className="w-5 h-5 text-green-400" />
          ) : (
            <Copy className="w-5 h-5 text-gray-400" />
          )}
        </button>
      </div>
    </div>
  );
};

export default CodeSnippet;
