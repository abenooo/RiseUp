"use client";

import { useState, useRef, useEffect } from "react";
import { 
  ChevronLeft, 
  ChevronRight, 
  ArrowRight
} from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import ExpertCard from "@/components/experts/expert-card";
import { featuredExpertsData } from "@/data/experts-data";

export default function FeaturedExperts() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const handleScroll = () => {
    const el = scrollRef.current;
    if (!el) return;
    
    setCanScrollLeft(el.scrollLeft > 0);
    setCanScrollRight(el.scrollLeft < el.scrollWidth - el.clientWidth - 10);
  };

  useEffect(() => {
    const el = scrollRef.current;
    if (el) {
      el.addEventListener('scroll', handleScroll);
      handleScroll(); // Check initial state
      
      return () => el.removeEventListener('scroll', handleScroll);
    }
  }, []);

  const scroll = (direction: 'left' | 'right') => {
    const el = scrollRef.current;
    if (!el) return;
    
    const scrollAmount = 600; // Adjust this value as needed
    if (direction === 'left') {
      el.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
    } else {
      el.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <section className="py-16 bg-gradient-to-b from-zinc-900 to-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">Featured Experts</h2>
            <p className="text-zinc-400">Top-rated professionals ready to help</p>
          </div>
          
          <div className="hidden md:flex items-center gap-4">
            <Button 
              variant="outline" 
              size="icon" 
              onClick={() => scroll('left')}
              disabled={!canScrollLeft}
              className={`rounded-full border-zinc-700 bg-zinc-900 ${!canScrollLeft ? 'opacity-50 cursor-not-allowed' : 'hover:bg-zinc-800'}`}
            >
              <ChevronLeft className="h-5 w-5" />
            </Button>
            <Button 
              variant="outline" 
              size="icon" 
              onClick={() => scroll('right')}
              disabled={!canScrollRight}
              className={`rounded-full border-zinc-700 bg-zinc-900 ${!canScrollRight ? 'opacity-50 cursor-not-allowed' : 'hover:bg-zinc-800'}`}
            >
              <ChevronRight className="h-5 w-5" />
            </Button>
            <Link href="/talk-to-experts">
              <Button variant="link" className="text-fuchsia-400 hover:text-fuchsia-300">
                View All
                <ArrowRight className="ml-1 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
        
        {/* Mobile "View All" link */}
        <div className="md:hidden mb-4">
          <Link href="/talk-to-experts">
            <Button variant="link" className="text-fuchsia-400 hover:text-fuchsia-300 px-0">
              View All Experts
              <ArrowRight className="ml-1 h-4 w-4" />
            </Button>
          </Link>
        </div>
        
        {/* Scrollable Featured Experts */}
        <div 
          ref={scrollRef}
          className="flex space-x-5 overflow-x-auto pb-6 scrollbar-hide"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          onScroll={handleScroll}
        >
          {featuredExpertsData.map((expert) => (
            <div key={expert.id} className="min-w-[300px] max-w-[350px] flex-shrink-0">
              <ExpertCard expert={expert} />
            </div>
          ))}
        </div>
        
        {/* Mobile Scroll Buttons */}
        <div className="flex justify-center gap-4 mt-6 md:hidden">
          <Button 
            variant="outline" 
            size="icon" 
            onClick={() => scroll('left')}
            disabled={!canScrollLeft}
            className={`rounded-full border-zinc-700 bg-zinc-900 ${!canScrollLeft ? 'opacity-50 cursor-not-allowed' : 'hover:bg-zinc-800'}`}
          >
            <ChevronLeft className="h-5 w-5" />
          </Button>
          <Button 
            variant="outline" 
            size="icon" 
            onClick={() => scroll('right')}
            disabled={!canScrollRight}
            className={`rounded-full border-zinc-700 bg-zinc-900 ${!canScrollRight ? 'opacity-50 cursor-not-allowed' : 'hover:bg-zinc-800'}`}
          >
            <ChevronRight className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  );
}