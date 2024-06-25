import React from "react";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "tailwindcss/tailwind.css";

library.add(fab);

const SocialLinks = () => {
  return (
    <div className="flex flex-wrap justify-center lg:justify-start space-x-8 lg:space-x-16 mt-4">
      <a
        href="https://www.linkedin.com/in/armaan-khan-434897226/"
        className="text-gray-100 hover:text-yellow-500 transform hover:scale-110 transition duration-300"
      >
        <FontAwesomeIcon icon={["fab", "linkedin"]} size="2x" />
      </a>
      <a
        href="https://github.com/armaankhan8270"
        className="text-gray-100 hover:text-yellow-500 transform hover:scale-110 transition duration-300"
      >
        <FontAwesomeIcon icon={["fab", "github"]} size="2x" />
      </a>
      <a
        href="https://www.facebook.com/profile.php?id=100014876116777"
        className="text-gray-100 hover:text-yellow-500 transform hover:scale-110 transition duration-300"
      >
        <FontAwesomeIcon icon={["fab", "facebook"]} size="2x" />
      </a>
      <a
        href="https://www.instagram.com/armaankhan8270/"
        className="text-gray-100 hover:text-yellow-500 transform hover:scale-110 transition duration-300"
      >
        <FontAwesomeIcon icon={["fab", "instagram"]} size="2x" />
      </a>
      <a
        href="https://twitter.com/armaankhan8270"
        className="text-gray-100 hover:text-yellow-500 transform hover:scale-110 transition duration-300"
      >
        <FontAwesomeIcon icon={["fab", "twitter"]} size="2x" />
      </a>
    </div>
  );
};

export default SocialLinks;
