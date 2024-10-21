// components/FAQComponent.tsx
import React from "react";

const FAQComponent: React.FC = () => {
  return (
    <div className="bg-green-100 dark:bg-green-800 p-4 rounded-md">
      <p className="text-green-900 dark:text-green-100">Here are some frequently asked questions:</p>
      <ul className="list-disc ml-4">
        <li>What is your return policy?</li>
        <li>How can I track my order?</li>
        <li>Do you offer international shipping?</li>
      </ul>
    </div>
  );
};

export default FAQComponent;
