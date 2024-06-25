import React from "react";
import SocialLinks from "../Components/SocialLinks";

const Header = () => {
  return (
    <div
    // style={{
    //   background: `url("https://img.freepik.com/free-vector/dark-paper-layers-background-with-golden-details_23-2148395104.jpg?t=st=1718116324~exp=1718119924~hmac=07dc5b9583447f390d1314648e9a925ef136bbd3cbdfea4e3b3fa2a6a3a4b46d&w=996")`,
    // }}
    >
      <section className="bg-slate-900 py-12">
        <div className="container mx-auto flex flex-col md:flex-row items-center md:space-x-14 space-x-20">
          <div className="md:w-1/2 px-8 mb-8 md:mb-0">
            <h2 className="text-4xl font-bold text-white">
              Hi, I Am Armaan Khan Tufail,
            </h2>
            <h3 className="text-2xl font-semibold text-orange-600">
              Full Stack Developer
            </h3>
            <p className="mt-4 text-gray-100">
              I am a dedicated software developer proficient in frontend and
              backend development. Passionate about continuous learning, he
              enjoys exploring new technologies and improving his skills. With a
              keen interest in sports and self-improvement literature, Armaan
              brings a well-rounded approach to his work and life.
            </p>

            <div className="mt-6">
              <a
                href="/projects"
                className="bg-orange-500 text-white px-4 py-2 rounded-md hover:bg-orange-600"
              >
                See My Projects
              </a>
            </div>
            <div className="mt-8 sm:h-32">
              {/* Show social links only on mobile */}
              <SocialLinks />
            </div>
          </div>
          <div className="md:w-1/2 w-full">
            <img
              src="https://img.freepik.com/premium-photo/there-is-person-sitting-desk-with-computer-generative-ai_1034973-46057.jpg?w=740"
              alt="Armaan Khan Tufail"
              className="rounded-lg shadow-lg lg:h-[500px] w-full"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Header;
