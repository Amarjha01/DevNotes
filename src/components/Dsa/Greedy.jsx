// components/backend/Express.jsx
import React from 'react';

const notes = [
  {
    title: 'What is a Greedy Algorithm?',
    description: 'Greedy algorithms make the locally optimal choice at each step with the hope of finding the global optimum.',
    category: 'Greedy',
    difficulty: 'Beginner',
    icon: '💰',
    code: `// Basic greedy logic
// Always choose best option at each step
// Ex: Choose largest coin that fits into amount`,
    tips: [
      'Fast and simple to implement',
      'Does not always give optimal result',
      'Used in problems like activity selection, coin change, etc.'
    ]
  },
  {
    title: 'Minimum Coins to Make Change',
    description: 'Use the fewest number of coins to make up a target amount.',
    category: 'Greedy',
    difficulty: 'Beginner',
    icon: '💰',
    code: `function minCoins(coins, amount) {
  coins.sort((a, b) => b - a);
  let count = 0;
  for (let coin of coins) {
    while (amount >= coin) {
      amount -= coin;
      count++;
    }
  }
  return amount === 0 ? count : -1;
}`,
    tips: [
      'Sort coins in descending order',
      'Doesn’t always work with arbitrary coin values',
      'Works well with standard denominations like [1, 2, 5, 10, ...]'
    ]
  },
  {
    title: 'Activity Selection Problem',
    description: 'Select maximum number of non-overlapping activities based on end time.',
    category: 'Greedy',
    difficulty: 'Beginner',
    icon: '💰',
    code: `function maxActivities(activities) {
  activities.sort((a, b) => a[1] - b[1]);
  let count = 1, end = activities[0][1];
  for (let i = 1; i < activities.length; i++) {
    if (activities[i][0] >= end) {
      count++;
      end = activities[i][1];
    }
  }
  return count;
}
// activities = [[start1, end1], [start2, end2], ...]`,
    tips: [
      'Sort by earliest end time',
      'Pick activity only if it doesn’t overlap',
      'Classic example of greedy strategy'
    ]
  },
  {
    title: 'Fractional Knapsack',
    description: 'Maximize profit by picking fractions of items based on value/weight ratio.',
    category: 'Greedy',
    difficulty: 'Beginner',
    icon: '💰',
    code: `function fractionalKnapsack(items, capacity) {
  items.sort((a, b) => (b.value / b.weight) - (a.value / a.weight));
  let profit = 0;
  for (let item of items) {
    if (capacity >= item.weight) {
      capacity -= item.weight;
      profit += item.value;
    } else {
      profit += item.value * (capacity / item.weight);
      break;
    }
  }
  return profit;
}
// items = [{ value, weight }, ...]`,
    tips: [
      'Sort items by value/weight ratio',
      'Take full item if space allows, else take a fraction',
      'Greedy works because problem allows fractions'
    ]
  },
  {
    title: 'Job Sequencing Problem',
    description: 'Schedule jobs to maximize total profit with given deadlines.',
    category: 'Greedy',
    difficulty: 'Beginner',
    icon: '💰',
    code: `function jobScheduling(jobs) {
  jobs.sort((a, b) => b.profit - a.profit);
  const maxDeadline = Math.max(...jobs.map(j => j.deadline));
  const slots = Array(maxDeadline).fill(false);
  let profit = 0;

  for (let job of jobs) {
    for (let j = job.deadline - 1; j >= 0; j--) {
      if (!slots[j]) {
        slots[j] = true;
        profit += job.profit;
        break;
      }
    }
  }
  return profit;
}
// jobs = [{ id, deadline, profit }]`,
    tips: [
      'Sort jobs by profit descending',
      'Assign job to latest available slot before its deadline',
      'Greedy works because we try to use least time for most profit'
    ]
  },
  {
    title: 'Maximize Number of Meetings in One Room',
    description: 'Select maximum meetings that can happen without overlapping.',
    category: 'Greedy',
    difficulty: 'Beginner',
    icon: '💰',
    code: `function maxMeetings(start, end) {
  const meetings = start.map((s, i) => ({ start: s, end: end[i] }));
  meetings.sort((a, b) => a.end - b.end);

  let count = 1, lastEnd = meetings[0].end;
  for (let i = 1; i < meetings.length; i++) {
    if (meetings[i].start > lastEnd) {
      count++;
      lastEnd = meetings[i].end;
    }
  }
  return count;
}`,
    tips: [
      'Same as activity selection logic',
      'Sort by end times',
      'Choose next meeting that starts after last meeting ends'
    ]
  }
];



const Greedy = () => {
  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold text-white mb-4">🚀 Greedy Basics</h1>
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

export default Greedy;
