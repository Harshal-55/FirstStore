import React, { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

const FAQCard = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
  className={`w-full p-4 sm:p-6 rounded-lg shadow-md border ${
    isOpen ? "bg-[#081d6e] text-white" : "bg-white text-[#081d6e]"
  } transition-all duration-300`}
>
  {/* Question Section */}
  <div
    className="flex justify-between items-center cursor-pointer"
    onClick={() => setIsOpen(!isOpen)}
  >
    <h3 className="text-base sm:text-lg font-semibold">{question}</h3>
    {isOpen ? (
      <FaChevronUp className="bg-blue-200 p-2 sm:p-3 h-8 w-8 sm:h-10 sm:w-10 rounded-full text-[#081d6e] transition-transform duration-300" />
    ) : (
      <FaChevronDown className="bg-blue-200 p-2 sm:p-3 h-8 w-8 sm:h-10 sm:w-10 rounded-full text-[#081d6e] transition-transform duration-300" />
    )}
  </div>

  {/* Answer Section */}
  {isOpen && <p className="mt-2 sm:mt-4 text-sm sm:text-base">{answer}</p>}
</div>

  );
};

export default FAQCard;