import React from "react";
import { FaEnvelopeOpenText, FaCheckCircle, FaRegBell } from "react-icons/fa";

export default function DigestInfo() {
  return (
    <div className="max-w-2xl mx-auto bg-gradient-to-br from-purple-900/80 to-indigo-900/80 shadow-xl rounded-2xl p-8 mt-10 text-white border border-purple-700/40 animate-fadein">
      <div className="flex items-center gap-3 mb-4">
        <FaEnvelopeOpenText className="text-purple-400 text-3xl animate-bounce" />
        <h1 className="text-3xl font-bold text-purple-200">About the Weekly Email Digest</h1>
      </div>
      <p className="mb-4 text-lg">
        The <b>DevNotes Weekly Email Digest</b> is a personalized summary delivered to your inbox every week. It helps you stay consistent in your learning and never miss out on new topics, updates, or community highlights.
      </p>
      <ul className="mb-4 list-disc pl-6 space-y-2">
        <li><b>Personalized Suggestions:</b> Get recommendations based on your selected interests and progress.</li>
        <li><b>New Topics:</b> Be the first to know about the latest guides and tutorials added to DevNotes.</li>
        <li><b>Top Contributors:</b> See who’s making an impact in the community each week.</li>
        <li><b>Useful Tips:</b> Receive hand-picked tips to boost your learning and productivity.</li>
      </ul>
      <div className="flex items-center gap-2 mb-4">
        <FaRegBell className="text-yellow-400 text-xl animate-pulse" />
        <span className="text-purple-100 font-semibold">You can opt in or out at any time from the Home page.</span>
      </div>
      <div className="flex items-center gap-2 mb-2">
        <FaCheckCircle className="text-green-400 text-xl" />
        <span className="text-green-200">Your email is kept private and only used for sending digests.</span>
      </div>
      <p className="mt-6 text-center text-purple-300 font-medium">
        Want to suggest a feature or have questions? <a href="mailto:support@devnotes.com" className="underline text-pink-300 hover:text-pink-400">Contact us</a>!
      </p>
    </div>
  );
}
