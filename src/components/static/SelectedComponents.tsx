import useBuilderStore from "@/store/builderStore";
import React from "react";
import { Button } from "../ui/button";
import { X } from "lucide-react";

const SelectedComponents = () => {
  const {
    selectedComponents,
    theme,
    addComponent,
    removeComponent,
    toggleTheme,
  } = useBuilderStore();
  return (
    <div>
      {" "}
      <h2 className="text-2xl font-bold mb-4">Selected Components</h2>
      <div className="space-y-4">
        {selectedComponents.map((component, index) => (
          <div
            key={index}
            className="flex justify-between items-center bg-gray-100 dark:bg-gray-800 p-2 rounded"
          >
            <span>
              {component.type} - {component.service}
            </span>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => removeComponent(index)}
            >
              <X className="h-4 w-4" />
            </Button>
          </div>
        ))}
        {selectedComponents.length === 0 && (
          <p className="text-gray-500 dark:text-gray-400">
            No components selected yet.
          </p>
        )}
      </div>
    </div>
  );
};

export default SelectedComponents;

