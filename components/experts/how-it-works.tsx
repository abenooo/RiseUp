"use client";

import { useState } from "react";
import Image from "next/image";
import { 
  Search, 
  Calendar, 
  Video, 
  ThumbsUp,
  ArrowRight
} from "lucide-react";

export default function HowItWorks() {
  const [activeStep, setActiveStep] = useState(0);
  
  const steps = [
    {
      id: 0,
      icon: <Search className="h-12 w-12 text-fuchsia-400" />,
      title: "Find the Right Expert",
      description: "Browse our wide range of mental health professionals and find someone who specializes in your area of concern.",
      image: "https://images.pexels.com/photos/7176305/pexels-photo-7176305.jpeg"
    },
    {
      id: 1,
      icon: <Calendar className="h-12 w-12 text-fuchsia-400" />,
      title: "Book Your First Session",
      description: "Choose a convenient time and book your session. Our flexible scheduling works around your availability.",
      image: "https://images.pexels.com/photos/5699456/pexels-photo-5699456.jpeg"
    },
    {
      id: 2,
      icon: <Video className="h-12 w-12 text-fuchsia-400" />,
      title: "Connect and Share",
      description: "Meet with your expert via video, chat, or in-person. Our secure platform ensures privacy and confidentiality.",
      image: "https://images.pexels.com/photos/3769021/pexels-photo-3769021.jpeg"
    },
    {
      id: 3,
      icon: <ThumbsUp className="h-12 w-12 text-fuchsia-400" />,
      title: "Feel Better",
      description: "Continue your journey with regular sessions and start seeing positive changes in your mental wellbeing.",
      image: "https://images.pexels.com/photos/7176336/pexels-photo-7176336.jpeg"
    }
  ];

  return (
    <section className="py-16 bg-black overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">How It Works</h2>
          <p className="text-zinc-400 max-w-2xl mx-auto">
            Our simple process makes it easy to connect with the mental health support you need, when you need it.
          </p>
        </div>
        
        {/* Desktop Version */}
        <div className="hidden md:grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Left: Steps */}
          <div className="space-y-6">
            {steps.map((step, index) => (
              <div
                key={step.id}
                className={`rounded-xl p-5 cursor-pointer transition-all duration-300 ${
                  activeStep === index
                    ? "bg-zinc-800/50 border border-fuchsia-500/30 shadow-lg"
                    : "bg-zinc-900/30 hover:bg-zinc-800/30 border border-zinc-800"
                }`}
                onClick={() => setActiveStep(index)}
              >
                <div className="flex items-start">
                  <div className={`p-3 rounded-full ${
                    activeStep === index 
                      ? "bg-fuchsia-600/20" 
                      : "bg-zinc-800"
                  }`}>
                    {step.icon}
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold text-white mb-1">
                      {step.title}
                    </h3>
                    <p className="text-zinc-400 text-sm">
                      {step.description}
                    </p>
                  </div>
                  <div className="ml-auto">
                    <ArrowRight className={`h-5 w-5 transition-opacity ${
                      activeStep === index
                        ? "opacity-100 text-fuchsia-400"
                        : "opacity-0"
                    }`} />
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {/* Right: Image */}
          <div className="relative h-[500px] rounded-xl overflow-hidden">
            {steps.map((step, index) => (
              <div
                key={step.id}
                className={`absolute inset-0 transition-opacity duration-500 ${
                  activeStep === index ? "opacity-100" : "opacity-0"
                }`}
                aria-hidden={activeStep !== index}
              >
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent z-10"></div>
                <Image
                  src={step.image}
                  alt={step.title}
                  fill
                  className="object-cover"
                />
              </div>
            ))}
          </div>
        </div>
        
        {/* Mobile Version - Vertical Cards */}
        <div className="md:hidden space-y-6">
          {steps.map((step) => (
            <div key={step.id} className="bg-zinc-900 border border-zinc-800 rounded-xl overflow-hidden">
              <div className="relative h-48 w-full">
                <Image
                  src={step.image}
                  alt={step.title}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent"></div>
              </div>
              <div className="p-5">
                <div className="flex items-center mb-3">
                  <div className="p-2 bg-fuchsia-600/20 rounded-full">
                    {step.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-white ml-3">
                    {step.title}
                  </h3>
                </div>
                <p className="text-zinc-400">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}