import React, { useState } from "react";
import itemsData from "../accordionData.json";
import { ChevronUpIcon, ChevronDownIcon } from "@heroicons/react/20/solid";

interface AccordionItem {
  itemNumb: number;
  title: string;
  content: string[];
}

const Accordion: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const handleToggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="p-4">
      {itemsData.map((item: AccordionItem, index: number) => (
        <div key={item.itemNumb} className="mb-2 border-b">
          <h2>
            <button
              type="button"
              onClick={() => handleToggle(index)}
              aria-expanded={openIndex === index}
              aria-controls={`accordion-content-${item.itemNumb}`}
              className="flex items-center justify-between w-full p-4 text-lg font-semibold text-gray-900"
            >
              <span className="text-left">{item.title}</span>
              {openIndex === index ? (
                <ChevronUpIcon className="w-5 h-5 text-gray-600" />
              ) : (
                <ChevronDownIcon className="w-5 h-5 text-gray-600" />
              )}
            </button>
          </h2>
          <div
            id={`accordion-content-${item.itemNumb}`}
            className={`pl-4 transition-all duration-300 ease-in-out ${openIndex === index ? "block" : "hidden"}`}
            aria-labelledby={`accordion-heading-${item.itemNumb}`}
          >
            <ul className="list-none pl-0">
              {item.content.map((contentItem, idx) => (
                <li key={idx} className="text-lg mb-2 text-left">
                  {contentItem}
                </li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Accordion;
