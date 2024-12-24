import React, { useEffect, useState } from "react";
import { IoIosArrowForward } from "react-icons/io";

const IndexSidebar = ({ sections, onSectionChange, className, activeClassName }) => {
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 65; // Adjust offset for better accuracy
      let currentSection = "";

      sections.forEach(({ id }) => {
        const element = document.getElementById(id);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            currentSection = id;
          }
        }
      });

      if (currentSection !== activeSection) {
        setActiveSection(currentSection);
        if (onSectionChange) {
          onSectionChange(currentSection); // Callback for parent to know active section
        }
      }
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [sections, activeSection, onSectionChange]);

  return (
    <div className={`fixed left-0 top-0 ${className}`}>
      <ul className="space-y-4 bg-gray-100 p-8 rounded-2xl w-[110%]">
        {sections.map(({ id, label }) => (
          <li
            key={id}
            className={`cursor-pointer font-semibold ${
              activeSection === id
                ? `text-white bg-[#081d6e] rounded-full ${activeClassName || ""}`
                : "text-[#081d6e] bg-white rounded-full w-full"
            }`}
          >
            <a
              href={`#${id}`}
              className="flex items-center py-3 px-4 justify-between"
              onClick={(e) => {
                e.preventDefault(); // Prevent default anchor behavior
                const element = document.getElementById(id);
                if (element) {
                  element.scrollIntoView({ behavior: "smooth" });
                }
              }}
            >
              {label}
              <div className="text-black bg-gray-50 rounded-full p-1">
                <IoIosArrowForward />
              </div>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default IndexSidebar;