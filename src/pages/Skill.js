import React, { useState } from "react";

const allSkills = {
  "Programming Languages": [
    { name: "C++", level: 85 },
    { name: "JavaScript", level: 90 },
    { name: "Python", level: 80 },
    { name: "Java", level: 75 },
  ],
  "Frontend Technologies": [
    { name: "HTML", level: 95 },
    { name: "CSS", level: 90 },
    { name: "React", level: 85 },
    { name: "Next.js", level: 80 },
    { name: "Flutter", level: 70 },
    { name: "Tailwind", level: 75 },
    { name: "Bootstrap", level: 70 },
  ],
  "Backend Technologies": [
    { name: "Node.js", level: 80 },
    { name: "Express.js", level: 75 },
    { name: "REST API", level: 85 },
  ],
  Databases: [
    { name: "MongoDB", level: 80 },
    { name: "Firebase", level: 75 },
    { name: "MySQL", level: 70 },
  ],
  "Data Analytics": [
    { name: "Excel", level: 90 },
    { name: "Tableau", level: 85 },
    { name: "Machine Learning", level: 80 },
  ],
  "App Technologies": [
    { name: "Flutter", level: 75 },
    { name: "Dart", level: 70 },
  ],
  AIML: [
    { name: "Statistics", level: 80 },
    { name: "Deep Learning", level: 75 },
    { name: "NLP", level: 70 },
    { name: "TensorFlow", level: 80 },
    { name: "Keras", level: 75 },
    { name: "Pandas", level: 85 },
    { name: "NumPy", level: 80 },
    { name: "Scikit-Learn", level: 85 },
  ],
};

const SkillsSection = () => {
  const [selectedDomain, setSelectedDomain] = useState("Programming Languages");

  return (
    <section id="skills" className="py-12 px-4 lg:px-12 bg-gray-900 text-white">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold mb-4">My Skills</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {Object.keys(allSkills).map((domain) => (
            <button
              key={domain}
              className={`bg-gray-800 hover:bg-gray-700 text-white py-3 px-6 rounded-lg focus:outline-none ${
                selectedDomain === domain ? "bg-green-500" : ""
              }`}
              onClick={() => setSelectedDomain(domain)}
            >
              {domain}
            </button>
          ))}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {allSkills[selectedDomain].map((skill, index) => (
            <div key={index} className="text-left">
              <h3 className="text-xl font-bold mb-2">{skill.name}</h3>
              <div className="w-full bg-gray-800 rounded-full h-4 mb-4">
                <div
                  className="bg-green-500 h-4 rounded-full"
                  style={{ width: `${skill.level}%` }}
                ></div>
              </div>
              <p className="text-right text-gray-400">{skill.level}%</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
