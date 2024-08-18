"use client";

import React from "react";
import Navbar from "@/components/main/Navbar";
import Hero from "@/components/main/Hero";
import Skills from "@/components/main/Skills";
import Projects from "@/components/main/Projects";
import Footer from "@/components/main/Footer";

export default function Home() {
  return (
    <main className="h-full w-full">
      <Navbar />
      <Hero />
      <div className="flex flex-col gap-20 px-8">
        <Skills />
        <Projects />
      </div>
      <Footer />
    </main>
  );
}
