// ResumePage.js
import React from "react";

const ResumePage = () => {
  return (
    <div className="bg-gray-900 text-white min-h-screen py-16">
      <div className="max-w-4xl mx-auto px-6">
        <h1 className="text-3xl font-bold mb-8">Resume Download</h1>
        <p className="mb-4">Download my resume by clicking the link below:</p>
        <a
          href="/path/to/your/resume.pdf"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded inline-block"
          download
        >
          Download Resume
        </a>
      </div>
    </div>
  );
};

export default ResumePage;
