// components/backend/Express.jsx
import React from 'react';

const notes = [
  {
    title: 'What is a String?',
    description: 'A string is a sequence of characters used to represent text. In most languages, it is treated like an array of characters.',
    category: 'String',
    difficulty: 'Beginner',
    icon: '🧵',
    code: `const str = "hello";
console.log(str[1]); // 'e'`,
    tips: [
      'Strings are immutable in JavaScript',
      'Use indexing to access characters',
      'Use string methods like slice, substr, etc.'
    ]
  },
  {
    title: 'Reverse a String',
    description: 'Reverse the characters of a string using split, reverse, and join.',
    category: 'String',
    difficulty: 'Beginner',
    icon: '🧵',
    code: `function reverseString(str) {
  return str.split('').reverse().join('');
}
console.log(reverseString("hello")); // "olleh"`,
    tips: [
      'Split converts string to array',
      'Reverse the array',
      'Join combines it back into a string'
    ]
  },
  {
    title: 'Check for Palindrome',
    description: 'A string is a palindrome if it reads the same forward and backward.',
    category: 'String',
    difficulty: 'Beginner',
    icon: '🧵',
    code: `function isPalindrome(str) {
  const reversed = str.split('').reverse().join('');
  return str === reversed;
}
console.log(isPalindrome("madam")); // true`,
    tips: [
      'Use string reverse to compare',
      'Ignore case or spaces if needed',
      'Used in many coding interviews'
    ]
  },
  {
    title: 'Count Vowels in a String',
    description: 'Count how many vowels (a, e, i, o, u) exist in a given string.',
    category: 'String',
    difficulty: 'Beginner',
    icon: '🧵',
    code: `function countVowels(str) {
  const vowels = 'aeiouAEIOU';
  let count = 0;
  for (let char of str) {
    if (vowels.includes(char)) count++;
  }
  return count;
}`,
    tips: [
      'Check against both upper and lowercase',
      'Use includes() for clean checking',
      'Loop over each character'
    ]
  },
  {
    title: 'Character Frequency Count',
    description: 'Find the frequency of each character in a string.',
    category: 'String',
    difficulty: 'Beginner',
    icon: '🧵',
    code: `function charFrequency(str) {
  const freq = {};
  for (let char of str) {
    freq[char] = (freq[char] || 0) + 1;
  }
  return freq;
}
console.log(charFrequency("hello"));`,
    tips: [
      'Use an object to store frequencies',
      'Initialize count if not present',
      'Useful for anagrams and hashing'
    ]
  },
  {
    title: 'Check Anagrams',
    description: 'Two strings are anagrams if they have the same characters in any order.',
    category: 'String',
    difficulty: 'Beginner',
    icon: '🧵',
    code: `function isAnagram(str1, str2) {
  const normalize = s => s.split('').sort().join('');
  return normalize(str1) === normalize(str2);
}
console.log(isAnagram("listen", "silent")); // true`,
    tips: [
      'Sort and compare both strings',
      'Ignore case and whitespace if needed',
      'Important in interview questions'
    ]
  }
];


const String = () => {
  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold text-white mb-4">🚀 String Basics</h1>
      {notes.map((note, index) => (
        <div key={index} className="bg-gradient-to-br from-[#1a1a2e] via-[#16213e] to-[#0f3460] text-white p-6 rounded-2xl shadow-md border border-gray-700/30">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-3">
              <span className="text-2xl">{note.icon}</span>
              <div>
                <h2 className="text-xl font-semibold">{note.title}</h2>
                <p className="text-sm text-gray-400 mt-1">{note.category} · {note.difficulty}</p>
              </div>
            </div>
          </div>
          <p className="text-gray-300 mb-4">{note.description}</p>

          {note.code && (
            <div className="mb-4">
              <div className="text-sm font-medium text-purple-400 mb-1">Example Code:</div>
              <pre className="bg-[#1e1e2f] text-sm text-emerald-500 rounded-md p-4 overflow-x-auto whitespace-pre-wrap">
                <code>{note.code}</code>
              </pre>
            </div>
          )}

          {note.tips?.length > 0 && (
            <div className="mt-2">
              <div className="text-sm font-medium text-pink-400 mb-1">Tips:</div>
              <ul className="list-disc list-inside space-y-1 text-sm text-gray-300">
                {note.tips.map((tip, i) => (
                  <li key={i}>👉 {tip}</li>
                ))}
              </ul>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default String;
