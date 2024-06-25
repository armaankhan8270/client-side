import React, { useState } from "react";
import voteImage from "./images/vote1.png";
import carbonImage from "./images/carbon1.png";
import blogImage from "./images/blog (2).png";
import movieImage from "./images/movie1.png";
import hospitalImage from "./images/hospital2.png";
import attendanceImage from "./images/attandance2.png";
import portfolioImage from "./images/portfolio.png";
import todoImage from "./images/dash5.png";
import communityImage from "./images/Screenshot 2024-05-23 225329.png";
import movieDashboardImage from "./images/Screenshot 2024-05-25 121938.png";
import netflixCloneImage from "./images/netfli1.png";
import amazonCloneImage from "./images/amzon2.png";
// import emailClassifierImage from "./images/default.png"; // You need to replace this with actual image path
import sentimentAnalysisImage from "./images/sentimnt1.png";
import textSummarizationImage from "./images/sentiment2.png";
import bookSummaryImage from "./images/book1.png";
import weatherAppImage from "./images/dash1.png";
import recipeAppImage from "./images/book2.png";

import { Fade } from "react-awesome-reveal";
const projects = [
  {
    title: "E-Vote System",
    description:
      "Revolutionize voting with our secure online platform built on the MERN stack. Our system ensures efficient and transparent elections with features like encrypted ballots, voter verification, and real-time results tracking. Voters can participate from anywhere, providing accessibility and convenience while maintaining the integrity and security of the election process.",
    domain: "Web Development",
    frontend: "React.js, Tailwind, Redux, Context API",
    backend: "Firebase",
    github: "https://github.com/armaankhan8270/SmartVotingSystem",
    image: voteImage,
    viewProject: "https://smartevoting.netlify.app/",
  },
  {
    title: "Carbon Emission Tracker",
    description:
      "Track and manage carbon emissions effortlessly with our MERN stack application. It provides users with insights to monitor and reduce their carbon footprint, contributing to a greener future. Features include detailed analytics, personalized recommendations, and a user-friendly dashboard to visualize emissions data over time.",
    domain: "Web Development",
    frontend: "React.js, Tailwind, Context API, REST API, React-Router",
    backend: "Node.js, Express.js, MongoDB",
    github: "https://github.com/armaankhan8270/CarbonEmissonWeb",
    image: carbonImage,
    viewProject: "https://attendance8270.netlify.app/",
  },
  {
    title: "Blog Website",
    description:
      "Share your thoughts with the world on our dynamic blog platform. Enjoy features like user authentication, search functionality, and social sharing to engage your audience. The platform supports multimedia content, comments, and categorization to enhance user experience and content discoverability.",
    domain: "Web Development",
    frontend: "Tailwind, JavaScript, React.js",
    backend: "Node.js, Express.js, REST API",
    database: "MongoDB",
    github: "https://github.com/armaankhan8270/BlogApp-Mern-",
    image: blogImage,
    viewProject: "https://armaanblog.netlify.app/",
  },
  {
    title: "Film Finder Website",
    description:
      "Discover your next favorite movie with personalized recommendations. Our machine learning-powered system analyzes your viewing preferences and habits to suggest the perfect watch. The platform also provides detailed information on movies, including ratings, reviews, and trailers.",
    domain: "Machine Learning",
    frontend: "Streamlit, Python",
    github: "https://github.com/armaankhan8270/MovieRecommendation-Nlp",
    image: movieImage,
    viewProject: "#",
  },
  {
    title: "Hospital Management System",
    description:
      "Streamline hospital operations with our comprehensive management system. From patient records to staff management, the system covers all aspects to ensure efficient hospital administration. Features include appointment scheduling, billing, and inventory management, all integrated into a user-friendly interface.",
    domain: "Web Development",
    techUsed: "Node.js, Express.js, MongoDB, React.js, JSON Web Token",
    github: "https://github.com/armaankhan8270/hospital-management-system",
    image: hospitalImage,
    viewProject: "#",
  },
  {
    title: "Attendance Management System",
    description:
      "Effortlessly track attendance with our web application. Features include user authentication, attendance recording, and detailed reporting. The system is designed to be scalable and secure, providing real-time data and analytics to help manage attendance efficiently.",
    domain: "Web Development",
    techUsed: "MERN stack (MongoDB, Express.js, React.js, Node.js)",
    github: "https://github.com/armaankhan8270/AttandaceManeger",
    image: attendanceImage,
    viewProject: "https://attendance8270.netlify.app/",
  },
  {
    title: "Portfolio Website",
    description:
      "Showcase your projects and skills elegantly with our responsive portfolio website. The clean and modern design ensures easy navigation, allowing visitors to explore your work and get to know your professional background effortlessly. Customize the layout and content to reflect your personal style.",
    domain: "Web Development",
    techUsed: "React.js, Tailwind CSS",
    github: "https://github.com/armaankhan8270/Portfolio",
    image: portfolioImage,
    viewProject: "https://armaankhan82700.netlify.app",
  },
  {
    title: "Todo Application",
    description:
      "Stay organized with our todo application. Manage tasks efficiently with features like RESTful API integration, user authentication, and seamless deployment. The application provides a clear and intuitive interface for task management, helping users to prioritize and track their daily activities.",
    domain: "Web Development",
    techUsed:
      "Next.js, React.js, Node.js, Express.js, MongoDB, Tailwind CSS, JWT, Axios, Vercel",
    github: "https://github.com/armaankhan8270/NextJsTodoApp",
    image: todoImage,
    viewProject: "#",
  },
  {
    title: "Community Connect",
    description:
      "An innovative mobile application designed to streamline the management of community projects. Developed using Flutter and Dart, the app features a user-friendly interface with seamless navigation, project tracking, member communication, and resource management to enhance community engagement and productivity.",
    domain: "App Development",
    frontend: "Flutter, Dart",
    backend: "Firebase",
    github: "https://github.com/armaankhan8270/CommunityApp",
    image:
      "https://img.freepik.com/free-vector/social-network-media-global-people-communication-information-sharing_126523-1151.jpg?w=740&t=st=1719312094~exp=1719312694~hmac=45018f4335d27b7fa038d56ad8ac487c550586f12f76621ff37d4c3c23f84948",
    viewProject: "#",
  },
  {
    title: "Movie Dashboard",
    description:
      "A comprehensive movie dashboard utilizing Tableau for data visualization and analysis. The dashboard provides insights into movie trends, box office performance, and viewer ratings. Users can explore various datasets and gain valuable information through interactive charts and graphs.",
    domain: "Data Analytics",
    techUsed: "Tableau, Python, pandas, Numpy",
    github: "https://github.com/armaankhan8270/movie-dashboard",
    image: movieDashboardImage,
    viewProject: "#",
  },
  {
    title: "Netflix Clone",
    description:
      "Developed a Netflix clone to emulate the features and user experience of the popular streaming platform. The application provides a seamless entertainment experience with a user-friendly interface, movie browsing, and video streaming capabilities. The project demonstrates advanced front-end development skills using React.js and REST APIs.",
    domain: "App Development",
    techUsed: "React.js, REST API",
    github: "https://github.com/armaankhan8270/Netflix-Clone",
    image: netflixCloneImage,
    viewProject: "#",
  },
  {
    title: "Amazon Clone",
    description:
      "Created an Amazon clone, mirroring the functionalities of the renowned e-commerce platform. The application enables users to browse products, add items to the cart, and complete purchases. This project showcases skills in creating a complex web application with features like product search, user authentication, and payment integration.",
    domain: "App Development",
    techUsed: "React.js, REST API",
    github: "https://github.com/armaankhan8270/Amazon-Clone",
    image: amazonCloneImage,
    viewProject: "#",
  },
  {
    title: "Email Classifier Website",
    description:
      "A web application designed to classify emails into spam or not spam using machine learning. The application features a Streamlit-based web interface for user interaction, allowing users to submit email content and receive classification results. The underlying model utilizes advanced NLP techniques for accurate classification.",
    domain: "Machine Learning",
    frontend: "Streamlit, Python",
    machineLearning: "NumPy, Pandas, Matplotlib, Scikit-Learn",
    github: "https://github.com/armaankhan8270/email-classifier",
    image: "https://editor.analyticsvidhya.com/uploads/43445output22.png",
    viewProject: "#",
  },
  {
    title: "Sentiment Analysis Website",
    description:
      "A website created for analyzing the sentiment of text data. Users can input text and receive sentiment analysis results indicating whether the sentiment is positive, negative, or neutral. The application leverages machine learning techniques to provide accurate sentiment analysis, with a user-friendly interface developed using Streamlit.",
    domain: "Machine Learning",
    frontend: "Streamlit, Python",
    machineLearning: "NumPy, Pandas, Matplotlib, Scikit-Learn",
    github: "https://github.com/armaankhan8270/",
    image: sentimentAnalysisImage,
    viewProject: "#",
  },
  {
    title: "Text Summarization and Keyword Extraction Website",
    description:
      "A web application designed to summarize text documents and extract key phrases or keywords. The application employs advanced machine learning and NLP techniques for accurate text summarization and keyword extraction. Users can input text documents and receive concise summaries and key phrases, enhancing their ability to quickly grasp the content.",
    domain: "Machine Learning",
    frontend: "Streamlit, Python",
    machineLearning:
      "NumPy, Pandas, Matplotlib, Scikit-Learn, NLTK, Spacy, TFIDF Algorithm",
    github: "https://github.com/armaankhan8270/",
    image: "https://medevel.com/content/images/2023/04/webapp.png",
    viewProject: "#",
  },
  {
    title: "Book Summary App",
    description:
      "A mobile app for reading book summaries. Users can access summaries of popular books, search for specific titles, and save their favorites for later reading. The app provides a convenient way to stay informed and engaged with new books, all through an intuitive interface developed using Flutter.",
    domain: "App Development",
    frontend: "Flutter",
    backend: "Custom API/Third-party API",
    github: "https://github.com/armaankhan8270/Book-Recommendations-",
    image: bookSummaryImage,
    viewProject: "#", // Add your view project link here
  },
  {
    title: "Weather App",
    description:
      "Mobile app for weather information. Features: current conditions, forecasts, alerts.",
    domain: "App Development",
    frontend: "Flutter",
    backend: "Weather API",
    github: "https://github.com/armaankhan8270/WeatherApp",
    image: weatherAppImage,
    viewProject: "#", // Add your view project link here
  },
  {
    title: "Recipe App",
    description:
      "Mobile app for discovering recipes. Features: search, save favorites, create shopping lists.",
    domain: "App Development",
    frontend: "Flutter",
    backend: "Custom API/Third-party API",
    github: "https://github.com/armaankhan8270/recipe-app",
    image: recipeAppImage,
    viewProject: "#", // Add your view project link here
  },

  // Add more projects here...
];
const Projects = () => {
  const [selectedDomain, setSelectedDomain] = useState("Web Development");
  const handleDomainChange = (domain) => {
    setSelectedDomain(domain);
  };

  // Filter projects based on selected domain
  const filteredProjects = projects.filter(
    (project) => project.domain === selectedDomain
  );

  return (
    <div
      style={{ fontFamily: "Mukata, sans-serif", fontWeight: 400 }}
      className="bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 text-white min-h-screen py-10"
    >
      <h1 className="text-5xl font-extrabold text-center mb-12 font-poppins text-gray-100">
        My Projects
      </h1>
      {/* Domain selection buttons */}
      <div className="flex justify-center space-x-4 mb-8">
        <button
          onClick={() => handleDomainChange("Web Development")}
          className={`font-roboto text-base px-4 py-2 rounded-lg focus:outline-none transition-colors duration-200 ${
            selectedDomain === "Web Development"
              ? "bg-teal-600 text-white"
              : "bg-gray-700 text-gray-200 hover:bg-teal-600 hover:text-white"
          }`}
        >
          Web Development
        </button>
        <button
          onClick={() => handleDomainChange("Machine Learning")}
          className={`font-roboto text-base px-4 py-2 rounded-lg focus:outline-none transition-colors duration-200 ${
            selectedDomain === "Machine Learning"
              ? "bg-teal-600 text-white"
              : "bg-gray-700 text-gray-200 hover:bg-teal-600 hover:text-white"
          }`}
        >
          Machine Learning
        </button>
        <button
          onClick={() => handleDomainChange("App Development")}
          className={`font-roboto text-base px-4 py-2 rounded-lg focus:outline-none transition-colors duration-200 ${
            selectedDomain === "App Development"
              ? "bg-teal-600 text-white"
              : "bg-gray-700 text-gray-200 hover:bg-teal-600 hover:text-white"
          }`}
        >
          App Development
        </button>
        <button
          onClick={() => handleDomainChange("Data Analytics")}
          className={`font-roboto text-base px-4 py-2 rounded-lg focus:outline-none transition-colors duration-200 ${
            selectedDomain === "Data Analytics"
              ? "bg-teal-600 text-white"
              : "bg-gray-700 text-gray-200 hover:bg-teal-600 hover:text-white"
          }`}
        >
          Data Analytics
        </button>
      </div>

      {/* Project cards */}
      <div className="max-w-6xl mx-auto px-6 space-y-10">
        {filteredProjects.map((project, index) => (
          <Fade key={index} direction="left" triggerOnce="false">
            <div
              className={`relative flex flex-col md:flex-row bg-gray-800 rounded-3xl shadow-xl overflow-hidden transition-transform transform hover:scale-105 ${
                index % 2 === 0 ? "md:flex-row-reverse" : ""
              }`}
            >
              <img
                src={project.image} // Ensure the correct image path
                alt={project.title}
                className="w-full hover:object-contain md:w-1/2 object-contain object-hover:object-contain filter brightness-70"
                onError={(e) => {
                  console.error("Error loading image:", e.target.src);
                  e.target.src = "https://via.placeholder.com/300"; // Placeholder image
                }}
              />
              <div className="p-6 mr-2 rounded-md flex flex-col justify-between bg-gray-900 text-gray-100">
                <div>
                  <h3
                    style={{
                      fontFamily: "Ubuntu, sans-serif",
                      fontWeight: 400,
                    }}
                    className="text-4xl font-bold mb-4 text-teal-400 font-poppins"
                  >
                    {project.title}
                  </h3>
                  <ol className="text-gray-300 mb-6 leading-relaxed font-roboto">
                    {project.description}
                  </ol>
                  <ul className="mb-6 space-y-2 font-roboto">
                    <li className="text-teal-300 font-semibold">
                      Technologies Used:
                    </li>
                    {project.frontend && <li>Frontend: {project.frontend}</li>}
                    {project.backend && <li>Backend: {project.backend}</li>}
                    {project.database && <li>Database: {project.database}</li>}
                    {project.machineLearning && (
                      <li>Machine Learning: {project.machineLearning}</li>
                    )}
                    {project.techUsed && (
                      <li>Other Tech: {project.techUsed}</li>
                    )}
                  </ul>
                </div>
                <a
                  target="blank"
                  href={project.github}
                  className="self-start font-sans bg-teal-600 text-white py-2 px-6 rounded-lg hover:bg-teal-500 transition-all duration-200 font-roboto"
                >
                  View on GitHub
                </a>
                <a
                  target="blank"
                  href={project.viewProject}
                  className="self-start my-3 font-sans bg-teal-600 text-white py-2 px-6 rounded-lg hover:bg-teal-500 transition-all duration-200 font-roboto"
                >
                  View
                </a>
              </div>
              <div className="absolute inset-0 bg-gradient-to-br from-transparent to-gray-900 opacity-50 pointer-events-none"></div>
            </div>
          </Fade>
        ))}
      </div>
    </div>
  );
};

export default Projects;
