
import React, { useState, useEffect } from 'react';
import { FaEnvelopeOpenText, FaCheckCircle, FaRegBell, FaSpinner } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const DIGEST_TOPICS = [
  'Frontend',
  'DSA',
  'Backend',
  'Machine Learning',
  'DevOps',
  'Miscellaneous',
];


export default function DigestPreferences({ userEmail }) {
  const [optIn, setOptIn] = useState(false);
  const [interests, setInterests] = useState([]);
  const [status, setStatus] = useState('');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function fetchPrefs() {
      setLoading(true);
      try {
        const res = await fetch(`/api/user/digest-preferences?email=${encodeURIComponent(userEmail)}`);
        if (res.ok) {
          const data = await res.json();
          setOptIn(data.optIn);
          setInterests(data.interests || []);
        }
      } catch {}
      setLoading(false);
    }
    if (userEmail) fetchPrefs();
  }, [userEmail]);

  const handleInterestChange = (topic) => {
    setInterests((prev) =>
      prev.includes(topic)
        ? prev.filter((t) => t !== topic)
        : [...prev, topic]
    );
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus('');
    try {
      const res = await fetch('/api/user/digest-preferences', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: userEmail, optIn, interests }),
      });
      if (res.ok) setStatus('success');
      else setStatus('error');
    } catch {
      setStatus('network');
    }
    setLoading(false);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-gradient-to-br from-purple-900/80 to-indigo-900/80 shadow-xl rounded-2xl p-6 max-w-md mx-auto flex flex-col gap-4 border border-purple-700/40 animate-fadein"
      style={{ minWidth: 320 }}
    >
      <div className="flex items-center gap-3 mb-2">
        <FaEnvelopeOpenText className="text-purple-400 text-2xl animate-bounce" />
        <h3 className="text-xl font-bold text-purple-200">Weekly Email Digest</h3>
      </div>
      <label className="flex items-center gap-2 cursor-pointer text-purple-100 hover:text-purple-300 transition-colors">
        <input
          type="checkbox"
          checked={optIn}
          onChange={e => setOptIn(e.target.checked)}
          className="accent-purple-500 w-5 h-5"
        />
        <span className="font-medium">Receive a personalized weekly digest</span>
        <FaRegBell className={optIn ? 'text-yellow-400 animate-pulse' : 'text-gray-500'} />
      </label>
      {optIn && (
        <div className="mt-2">
          <div className="mb-1 text-purple-200 font-semibold">Select your interests:</div>
          <div className="flex flex-wrap gap-2">
            {DIGEST_TOPICS.map(topic => (
              <label
                key={topic}
                className={`px-3 py-1 rounded-full border-2 cursor-pointer transition-all text-sm font-semibold ${interests.includes(topic)
                  ? 'bg-purple-600/80 border-purple-400 text-white shadow-md scale-105'
                  : 'bg-gray-800/60 border-gray-600 text-purple-200 hover:bg-purple-700/30'}`}
              >
                <input
                  type="checkbox"
                  checked={interests.includes(topic)}
                  onChange={() => handleInterestChange(topic)}
                  className="hidden"
                />
                {topic}
                {interests.includes(topic) && <FaCheckCircle className="inline ml-1 text-green-300 animate-pop" />}
              </label>
            ))}
          </div>
        </div>
      )}
      <button
        type="submit"
        className="mt-2 py-2 px-6 rounded-lg bg-gradient-to-r from-purple-500 to-pink-500 text-white font-bold shadow-lg hover:scale-105 transition-all flex items-center justify-center gap-2 disabled:opacity-60"
        disabled={loading}
      >
        {loading ? <FaSpinner className="animate-spin" /> : 'Save Preferences'}
      </button>
      <div className="min-h-[24px] mt-1 text-center">
        {status === 'success' && (
          <span className="text-green-400 flex items-center gap-1 justify-center"><FaCheckCircle /> Preferences saved!</span>
        )}
        {status === 'error' && (
          <span className="text-red-400">Error saving preferences.</span>
        )}
        {status === 'network' && (
          <span className="text-yellow-400">Network error.</span>
        )}
      </div>
      <div className="flex justify-center mt-2">
        <Link
          to="/digest-info"
          className="inline-block px-4 py-2 rounded-lg bg-gradient-to-r from-indigo-500 to-purple-500 text-white font-semibold shadow hover:scale-105 transition-all mt-2"
        >
          Learn more about the Weekly Digest
        </Link>
      </div>
    </form>
  );
}
