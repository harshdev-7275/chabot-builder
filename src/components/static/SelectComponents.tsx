// components/SelectComponents.tsx
import React, { useState } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import useBuilderStore from "@/store/builderStore";
import { Plus } from "lucide-react";

export default function SelectComponents() {
  const { selectedComponents, addComponent, removeComponent } =
    useBuilderStore();
  const [currentComponent, setCurrentComponent] = useState("");
  const [currentService, setCurrentService] = useState("");
  const components = [
    { value: "doc retrieval", label: "Document Retrieval" },
    { value: "NAN", label: "NAN" },
    { value: "NAN", label: "NAN" },
  ];
  const services = [
    { value: "doc retrieval_service", label: "Document Retrieval Service" },
    { value: "NAN", label: "NAN" },
    { value: "NAN", label: "NAN" },
  ];
  

  const handleAddComponent = () => {
    if (currentComponent && currentService) {
      addComponent({ type: currentComponent, service: currentService });
      setCurrentComponent("");
      setCurrentService("");
    }
  };

  return (
    <div className="w-full lg:w-1/3 p-4 border-r dark:border-gray-800">
      <h2 className="text-2xl font-bold mb-4">Build Your Chatbot</h2>
      <div className="space-y-4">
        <div>
          <label
            htmlFor="component-select"
            className="block text-sm font-medium mb-1"
          >
            Select Component
          </label>
          <Select
            onValueChange={(value) => setCurrentComponent(value)}
            value={currentComponent}
          >
            <SelectTrigger id="component-select">
              <SelectValue placeholder="Choose a component" />
            </SelectTrigger>
            <SelectContent>
              {components.map((component) => (
                <SelectItem key={component.value} value={component.value}>
                  {component.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        <div>
          <label
            htmlFor="service-select"
            className="block text-sm font-medium mb-1"
          >
            Select Service
          </label>
          <Select
            onValueChange={(value) => setCurrentService(value)}
            value={currentService}
          >
            <SelectTrigger id="service-select">
              <SelectValue placeholder="Choose a service" />
            </SelectTrigger>
            <SelectContent>
              {services.map((service) => (
                <SelectItem key={service.value} value={service.value}>
                  {service.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        <Button className="w-full" onClick={handleAddComponent}>
          <Plus className="mr-2 h-4 w-4" /> Add Component
        </Button>
      </div>
    </div>
  );
}
