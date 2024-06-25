import React from "react";

const experienceData = [
  {
    position: "Web Developer",
    company: "Freelancing",
    duration: "Mar 2023 – Apr 2023",
    responsibilities: [
      "Made a Frontend Part of Website – HTML, CSS, JavaScript, Tailwind",
    ],
    description:
      "Developed the frontend for a client's website using modern web technologies to ensure responsiveness and user-friendly interface.",
  },
  {
    position: "ReactJS Developer",
    company: "Freelancing",
    duration: "Apr 2023 – May 2023",
    responsibilities: [
      "Made a Weather Web-App Using React.js and Weather API and Bootstrap",
    ],
    description:
      "Created a dynamic weather web application utilizing React.js and integrated it with a weather API, ensuring real-time data updates.",
  },
  {
    position: "MERN Developer",
    company: "Freelancing",
    duration: "Nov 2023 – Dec 2023",
    responsibilities: [
      "Made a Full Stack Project Carbon Emission – MongoDB, Express, Node, React",
    ],
    description:
      "Developed a full-stack carbon emission tracking application, handling both frontend and backend, with MongoDB, Express, Node, and React.",
  },
  {
    position: "Intern",
    company: "Xzect OpenSource",
    duration: "Jan 2024 – Present",
    responsibilities: ["Currently working on open-source projects"],
    description:
      "Engaged in various open-source projects, contributing to codebases and collaborating with other developers in the community.",
  },
];

const ExperienceSection = () => {
  return (
    <section
      // style={{
      //   background: `url("https://img.freepik.com/free-vector/dark-paper-layers-background-with-golden-details_23-2148395104.jpg?t=st=1718116324~exp=1718119924~hmac=07dc5b9583447f390d1314648e9a925ef136bbd3cbdfea4e3b3fa2a6a3a4b46d&w=996")`,
      //   backgroundClip: "fit",
      //   backgroundPosition: "fix",
      // }}
      id="experience"
      className="py-12 lg:px-12 bg-gray-900 text-white"
    >
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12">Experience</h2>
        <div className="relative">
          {/* Removed the vertical line */}
          {experienceData.map((item, index) => (
            <div
              key={index}
              className={`flex flex-col md:flex-row items-center mb-8 transform transition-transform duration-500 ease-in-out hover:scale-105 ${
                index % 2 === 0 ? "md:flex-row-reverse" : ""
              }`}
            >
              <div className="flex-shrink-0 w-16 h-16 rounded-full bg-white text-slate-900 flex items-center justify-center font-bold text-xl shadow-lg">
                {2020 + index}
              </div>
              <div className="bg-gray-800 p-6 rounded-lg shadow-lg mt-4 md:mt-0 md:mx-4">
                <h3 className="text-2xl font-bold mb-2">{item.position}</h3>
                <p className="text-gray-400 mb-2">{item.company}</p>
                <p className="text-gray-400 mb-2">{item.duration}</p>
                <p className="text-gray-300 mb-4">{item.description}</p>
                <ul className="list-disc list-inside text-gray-300">
                  {item.responsibilities.map((resp, idx) => (
                    <li key={idx}>{resp}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
