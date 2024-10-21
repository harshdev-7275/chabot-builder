import useBuilderStore from "@/store/builderStore";
import React from "react";
import SelectedComponents from "./SelectedComponents";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@radix-ui/react-tabs";

const ChatBotSkeleton = () => {
  const {
    selectedComponents,
    theme,
    sidebarColor,
    buttonColor,
    inputColor,
    backgroundColor,
  } = useBuilderStore();

  return (
    <div
      className="w-full lg:w-1/2 p-4"
   
    >
      <Tabs defaultValue="preview" className="w-full">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="preview" className="">
            Preview
          </TabsTrigger>
          <TabsTrigger value="code">Code</TabsTrigger>
        </TabsList>
        <TabsContent
          value="preview"
          className="border rounded-md p-4 h-[calc(100vh-200px)] overflow-auto dark:border-gray-700"
        >
          <div className="flex flex-col space-y-4">
            {selectedComponents.length > 0 ? (
              selectedComponents.map((component, index) => (
                <div
                  key={index}
                  className="p-3 rounded-md"
                  style={{
                    backgroundColor: sidebarColor,
                    border: `1px solid ${theme === "dark" ? "#444" : "#ddd"}`,
                  }}
                >
                  <p className="font-semibold">Component: {component.type}</p>
                  <p>Service: {component.service}</p>
                </div>
              ))
            ) : (
              <p>
                No components added yet. Add some components to see the preview.
              </p>
            )}
          </div>
          <div className="mt-auto pt-4 border-t">
            <input
              type="text"
              placeholder="Type a message..."
              className="w-full p-2 rounded-md"
              style={{ backgroundColor: inputColor, borderColor: "#ccc" }}
            />
            <button
              className="mt-2 w-full p-2 rounded-md"
              style={{ backgroundColor: buttonColor, color: "#fff" }}
            >
              Send
            </button>
          </div>
        </TabsContent>
        <TabsContent
          value="code"
          className="border rounded-md p-4 h-[calc(100vh-200px)] overflow-auto dark:border-gray-700"
        >
          <pre className="bg-gray-100 dark:bg-gray-800 rounded-lg p-4 h-full">
            <code className="text-sm">
              {selectedComponents.length > 0
                ? `// Code for your chatbot with ${
                    selectedComponents.length
                  } component(s)\n${selectedComponents
                    .map((c) => `// ${c.type} using ${c.service}`)
                    .join("\n")}`
                : "// Add components to generate code"}
            </code>
          </pre>
        </TabsContent>
      </Tabs>
    </div>
  );
};
export default ChatBotSkeleton;
