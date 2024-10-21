// components/GreetingComponent.tsx
import React from "react";

const GreetingComponent: React.FC = () => {
  return (
    <div className="bg-blue-100 dark:bg-blue-800 p-4 rounded-md">
      <p className="text-blue-900 dark:text-blue-100">Hello! How can I assist you today?</p>
    </div>
  );
};

export default GreetingComponent;
