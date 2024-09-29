import React, { useState } from 'react';

function FeedbackForm() {
  const [feedback, setFeedback] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Feedback submitted: ' + feedback);
    setFeedback(''); // Clear feedback after submission
  };

  return (
    <div className="container mx-auto py-6">
      <h2 className="text-xl font-bold mb-4">Provide Feedback</h2>
      <form onSubmit={handleSubmit}>
        <textarea
          className="w-full p-4 border border-gray-300 rounded-md"
          value={feedback}
          onChange={(e) => setFeedback(e.target.value)}
          placeholder="Enter your feedback"
        ></textarea>
        <button 
          type="submit" 
          className="mt-4 bg-blue-500 text-white px-6 py-2 rounded-md"
        >
          Submit Feedback
        </button>
      </form>
    </div>
  );
}

export default FeedbackForm;
