import React from "react";

const educationData = [
  {
    degree: "Bachelor's Degree",
    field: "Computer Science and Data Science",
    cgpa: "7.5",
    year: "2024",
    institution:
      "Mumbai University - Saraswati College of Engineering, Kharghar",
  },
  {
    degree: "12th HSC",
    field: "Science (PCMB)",
    percentage: "68.05%",
    year: "2020",
    institution: "HSC - Maharashtra Board - Bk Patil Jr College",
  },
  {
    degree: "10th SSC",
    field: "",
    percentage: "84.80%",
    year: "2018",
    institution: "SSC - Maharashtra Board - National Urdu High School",
  },
];

const EducationSection = () => {
  return (
    <section
      id="education"
      className="py-12 lg:px-12 bg-gradient-to-r from-gray-900 to-gray-800 text-white relative"
    >
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12">Education</h2>
        <div className="relative flex flex-col items-center">
          {/* Background shapes */}
          <div className="absolute inset-0 flex justify-center items-center pointer-events-none">
            <div className="w-2/3 h-full bg-gray-700 opacity-50 rounded-lg transform rotate-6"></div>
          </div>

          <div className="relative z-10 w-full md:w-3/4">
            {educationData.map((item, index) => (
              <div
                key={index}
                className={`flex flex-col md:flex-row items-center mb-12 transform transition-transform duration-500 ease-in-out hover:scale-105 ${
                  index % 2 === 0 ? "md:flex-row-reverse" : ""
                }`}
              >
                <div className="flex-shrink-0 w-20 h-20 rounded-full bg-gradient-to-r from-green-400 to-blue-500 text-white flex items-center justify-center font-bold text-xl shadow-xl">
                  {item.year}
                </div>
                <div className="bg-gray-800 p-8 rounded-lg shadow-lg mt-6 md:mt-0 md:mx-8 relative">
                  {/* Decorative icon */}
                  <div className="absolute top-0 left-0 w-6 h-6 bg-green-500 rounded-full transform -translate-y-3 -translate-x-3 shadow-md"></div>
                  <h3 className="text-2xl font-bold mb-2 flex items-center">
                    {item.degree}
                    <span className="ml-2 text-sm bg-gray-700 text-green-400 px-2 py-1 rounded">
                      New!
                    </span>
                  </h3>
                  <p className="text-gray-300 mb-2">{item.field}</p>
                  {item.cgpa ? (
                    <p className="text-gray-300 mb-2">CGPA: {item.cgpa}</p>
                  ) : (
                    <p className="text-gray-300 mb-2">
                      Percentage: {item.percentage}
                    </p>
                  )}
                  <p className="text-gray-400">{item.institution}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
