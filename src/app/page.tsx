"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { MessageSquare, Moon, Sun } from "lucide-react";
import Link from "next/link";

export default function Component() {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") || "light";
    setTheme(savedTheme);
    document.documentElement.classList.toggle("dark", savedTheme === "dark");
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
    document.documentElement.classList.toggle("dark", newTheme === "dark");
  };

  return (
    <div className="flex flex-col min-h-screen bg-white dark:bg-gray-900 text-black dark:text-white transition-colors duration-200">
      <header className="px-4 lg:px-6 h-14 flex items-center border-b dark:border-gray-700">
        <Link className="flex items-center justify-center" href="#">
          <MessageSquare className="h-6 w-6 mr-2" />
          <span className="font-bold">ChatBuilder</span>
        </Link>
        <nav className="ml-auto flex items-center space-x-4">
          <Link
            className="text-sm font-medium hover:underline underline-offset-4"
            href="#"
          >
            Learn More
          </Link>
          <Button variant="ghost" size="icon" onClick={toggleTheme}>
            {theme === "light" ? (
              <Moon className="h-5 w-5" />
            ) : (
              <Sun className="h-5 w-5" />
            )}
            <span className="sr-only">Toggle theme</span>
          </Button>
        </nav>
      </header>
      <main className="flex-1 flex flex-col items-center justify-center p-4">
        <div className="max-w-3xl w-full space-y-8 text-center">
          <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
            Build Intelligent Chatbots
          </h1>
          <p className="text-xl text-gray-500 dark:text-gray-400 max-w-2xl mx-auto">
            Create and deploy powerful chatbots without coding. Enhance your
            customer experience with AI-driven conversations.
          </p>
          <Link href={"/build"}>
            <Button size="lg" className="text-lg px-8">
              Get Started
            </Button>
          </Link>
        </div>
      </main>
      <footer className="py-6 px-4 border-t dark:border-gray-700 text-center text-sm text-gray-500 dark:text-gray-400">
        © 2024 ChatBuilder. All rights reserved.
      </footer>
    </div>
  );
}
