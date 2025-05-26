"use client";

import { useState } from "react";
// import Navbar from "@/components/navbar";
import ExpertsList from "@/components/experts/experts-list";
import ExpertFilters from "@/components/experts/expert-filters";
import FeaturedExperts from "@/components/experts/featured-experts";
import HowItWorks from "@/components/experts/how-it-works";
import SearchBar from "@/components/experts/search-bar";
// import Footer from "@/components/footer";
import { ExpertType, expertData } from "@/data/experts-data";

export default function TalkToExperts() {
  const [experts, setExperts] = useState<ExpertType[]>(expertData);
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 200]);
  const [searchQuery, setSearchQuery] = useState<string>("");

  // Filter experts based on selected criteria
  const filteredExperts = expertData.filter((expert) => {
    // Filter by category
    const categoryMatch = 
      selectedCategory === "all" || 
      expert.categories.includes(selectedCategory);
    
    // Filter by price range
    const priceMatch = 
      expert.pricePerHour >= priceRange[0] && 
      expert.pricePerHour <= priceRange[1];
    
    // Filter by search query
    const searchMatch = 
      searchQuery === "" ||
      expert.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      expert.specialties.some(specialty => 
        specialty.toLowerCase().includes(searchQuery.toLowerCase())
      );
    
    return categoryMatch && priceMatch && searchMatch;
  });

  const handleSearch = (query: string) => {
    setSearchQuery(query);
  };

  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
  };

  const handlePriceChange = (range: [number, number]) => {
    setPriceRange(range);
  };

  return (
    <main className="min-h-screen bg-black text-white">
      {/* <Navbar /> */}
      
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-16 pb-20 md:pt-20 md:pb-24">
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-gradient-to-b from-black to-zinc-900">
          <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg')] opacity-10 bg-center bg-cover"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/90 to-transparent"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-fuchsia-300 bg-clip-text text-transparent animate-fade-in">
            Talk to Verified Mental Health Experts
          </h1>
          <p className="text-lg md:text-xl text-zinc-300 max-w-3xl mx-auto mb-8 animate-fade-in-delayed">
            Connect with licensed therapists, psychologists, counselors, and coaches who can help you navigate life's challenges.
          </p>
          
          {/* Search Bar */}
          <div className="max-w-3xl mx-auto mb-8 animate-slide-up">
            <SearchBar onSearch={handleSearch} />
          </div>
          
          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 max-w-3xl mx-auto pt-6 border-t border-zinc-800 animate-slide-up-delayed">
            <div className="flex flex-col items-center">
              <span className="text-2xl md:text-3xl font-bold text-white mb-1">500+</span>
              <span className="text-sm text-zinc-400">Verified Experts</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-2xl md:text-3xl font-bold text-white mb-1">24/7</span>
              <span className="text-sm text-zinc-400">Availability</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-2xl md:text-3xl font-bold text-white mb-1">15k+</span>
              <span className="text-sm text-zinc-400">Sessions Completed</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-2xl md:text-3xl font-bold text-white mb-1">4.8/5</span>
              <span className="text-sm text-zinc-400">User Rating</span>
            </div>
          </div>
        </div>
      </section>
      
      {/* Featured Experts Section */}
      <FeaturedExperts />
      
      {/* How It Works Section */}
      <HowItWorks />
      
      {/* Main Content - Experts Listing */}
      <section className="bg-zinc-950 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Sidebar with Filters */}
            <div className="lg:w-1/4">
              <ExpertFilters 
                selectedCategory={selectedCategory}
                priceRange={priceRange}
                onCategoryChange={handleCategoryChange}
                onPriceChange={handlePriceChange}
              />
            </div>
            
            {/* Experts List */}
            <div className="lg:w-3/4">
              <ExpertsList experts={filteredExperts} />
            </div>
          </div>
        </div>
      </section>
      
 
    </main>
  );
}