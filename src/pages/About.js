import React from "react";

const About = () => {
  return (
    <div>
      <div className="min-h-screen bg-white flex flex-col items-center justify-center py-10">
        <div className="max-w-4xl w-full flex flex-col items-center">
          <div className="flex items-center justify-between w-full px-10">
            <div className="flex space-x-4">
              <a href="#work" className="text-gray-700 hover:text-yellow-500">
                Work
              </a>
              <a href="#about" className="text-gray-700 hover:text-yellow-500">
                About Me
              </a>
              <a
                href="#contact"
                className="text-gray-700 hover:text-yellow-500"
              >
                Contact
              </a>
            </div>
          </div>
          <div className="flex flex-col md:flex-row items-center mt-10">
            <img
              src="https://png.pngtree.com/png-vector/20231015/ourmid/pngtree-professional-web-developer-3d-illustration-png-image_10165437.png"
              alt="Bob the Minion"
              className="w-48 h-48 rounded-full"
            />
            <div className="text-center md:text-left md:ml-10">
              <h1 className="text-4xl font-bold text-gray-900 mt-4 md:mt-0">
                Hello, I'm Armaan Khan
              </h1>
              <h2 className="text-2xl text-yellow-500">UI/UX Designer</h2>
              <p className="mt-4 text-gray-700">
                Hey everyone! Recently, I've been using Framer to enhance my
                portfolio website. I wanted to share a closer look at the "about
                me" section, which I think turned out pretty cool. Hope you like
                it.
              </p>
              <button className="mt-4 px-4 py-2 bg-yellow-500 text-white rounded hover:bg-yellow-600">
                Let's Connect
              </button>
              <div className="flex space-x-4 mt-4">
                <a
                  href="https://linkedin.com"
                  className="text-gray-700 hover:text-yellow-500"
                >
                  LinkedIn
                </a>
                <a
                  href="https://gmail.com"
                  className="text-gray-700 hover:text-yellow-500"
                >
                  Gmail
                </a>
                <a
                  href="https://facebook.com"
                  className="text-gray-700 hover:text-yellow-500"
                >
                  Facebook
                </a>
                <a
                  href="https://instagram.com"
                  className="text-gray-700 hover:text-yellow-500"
                >
                  Instagram
                </a>
                <a
                  href="https://twitter.com"
                  className="text-gray-700 hover:text-yellow-500"
                >
                  Twitter
                </a>
              </div>
            </div>
          </div>
          <div className="mt-10 text-left">
            <h3 className="text-2xl font-bold text-gray-900">Summary</h3>
            <p className="text-gray-700">
              Dedicated software developer proficient in frontend and backend
              development. Passionate about continuous learning and enjoys
              exploring new technologies. With a keen interest in sports and
              self-improvement literature, I bring a well-rounded approach to my
              work and life.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
