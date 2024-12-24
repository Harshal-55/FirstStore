import React from "react";
import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";

const Card = ({ image, name, post, text }) => {
  return (
    <div className="w-64 mx-auto p-3 bg-white shadow-md rounded-lg border border-gray-200">
      {/* Image */}
      <img
        src={image}
        alt={`${name}'s profile`}
        className="rounded-lg mx-auto object-cover"
      />

      {/* Name and Post */}
      <div className="mt-4">
        <h3 className="text-lg font-bold text-gray-800">{name}</h3>
        <p className="text-sm text-[#081d6e] font-semibold">{post}</p>
      </div>

      {/* Short Text */}
      <p className="mt-4 text-gray-700">{text}</p>
      <div className="flex mt-2 text-gray-400 text-sm gap-2">
        <FaFacebook />
        <FaGithub />
        <FaLinkedin />
      </div>
    </div>
  );
};

export default Card;