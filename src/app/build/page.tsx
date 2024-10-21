"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { MessageSquare, Moon, Sun, Plus, X } from "lucide-react";
import useBuilderStore from "@/store/builderStore";
import GreetingComponent from "@/components/templates/GreetingComponent";
import FAQComponent from "@/components/templates/FAQComponent";
import ProductInfoComponent from "@/components/templates/ProductInfoComponent";
import SelectComponents from "@/components/static/SelectComponents";
import ChatBotSkeleton from "@/components/static/ChatBotSkeleton";
import SelectedComponents from "@/components/static/SelectedComponents";

export default function BuildPage() {
  const {
    selectedComponents,
    theme,
    addComponent,
    removeComponent,
    toggleTheme,
  } = useBuilderStore();

  const [currentComponent, setCurrentComponent] = useState("");
  const [currentService, setCurrentService] = useState("");

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") || "light";
    if (savedTheme !== theme) {
      toggleTheme(); // Ensure theme sync with local storage
    }
  }, [theme, toggleTheme]);

  return (
    <div className="flex flex-col min-h-screen bg-white dark:bg-gray-900 text-black dark:text-white transition-colors duration-200">
      <header className="px-4 lg:px-6 h-14 flex items-center justify-between border-b dark:border-gray-800">
        <div className="flex items-center justify-center">
          <MessageSquare className="h-6 w-6 mr-2" />
          <span className="font-bold">ChatBuilder</span>
        </div>
        <Button variant="ghost" size="icon" onClick={toggleTheme}>
          {theme === "light" ? (
            <Moon className="h-5 w-5" />
          ) : (
            <Sun className="h-5 w-5" />
          )}
          <span className="sr-only">Toggle theme</span>
        </Button>
      </header>
      <main className="flex-1 flex flex-col lg:flex-row">
        <SelectComponents />
        <div className="w-full flex flex-col lg:flex-row">
          <ChatBotSkeleton />
          <SelectedComponents />
        </div>
      </main>

      {/* <main className="flex-1 flex flex-col lg:flex-row">
      
       
       
      </main> */}

      {/* Theme Toggle Button */}
    </div>
  );
}
