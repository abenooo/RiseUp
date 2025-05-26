"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import ExpertCard from "@/components/experts/expert-card";
import { ExpertType } from "@/data/experts-data";

interface ExpertsListProps {
  experts: ExpertType[];
}

export default function ExpertsList({ experts }: ExpertsListProps) {
  const [currentPage, setCurrentPage] = useState(1);
  const expertsPerPage = 9;
  
  // Calculate pagination
  const indexOfLastExpert = currentPage * expertsPerPage;
  const indexOfFirstExpert = indexOfLastExpert - expertsPerPage;
  const currentExperts = experts.slice(indexOfFirstExpert, indexOfLastExpert);
  const totalPages = Math.ceil(experts.length / expertsPerPage);
  
  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
    // Scroll to top of experts list
    window.scrollTo({
      top: document.getElementById('experts-list')?.offsetTop || 0,
      behavior: 'smooth'
    });
  };
  
  return (
    <div id="experts-list">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-semibold text-white">
          {experts.length} Expert{experts.length !== 1 ? 's' : ''} Available
        </h2>
        {/* Sort Dropdown can go here */}
      </div>
      
      {experts.length === 0 ? (
        <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-8 text-center">
          <h3 className="text-xl font-medium text-zinc-300 mb-2">No experts match your filters</h3>
          <p className="text-zinc-500">Try adjusting your filters or search query to find more results.</p>
        </div>
      ) : (
        <>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {currentExperts.map((expert) => (
              <ExpertCard key={expert.id} expert={expert} />
            ))}
          </div>
          
          {/* Pagination */}
          {totalPages > 1 && (
            <div className="mt-8 flex justify-center">
              <div className="flex items-center space-x-2">
                <Button
                  variant="outline"
                  size="icon"
                  onClick={() => handlePageChange(Math.max(1, currentPage - 1))}
                  disabled={currentPage === 1}
                  className="h-8 w-8 bg-zinc-900 border-zinc-700 text-zinc-400 hover:text-white hover:border-zinc-600"
                >
                  <ChevronLeft className="h-4 w-4" />
                </Button>
                
                {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                  <Button
                    key={page}
                    variant={page === currentPage ? "default" : "outline"}
                    size="sm"
                    onClick={() => handlePageChange(page)}
                    className={`h-8 w-8 ${
                      page === currentPage 
                        ? "bg-fuchsia-600 hover:bg-fuchsia-700 text-white" 
                        : "bg-zinc-900 border-zinc-700 text-zinc-400 hover:text-white hover:border-zinc-600"
                    }`}
                  >
                    {page}
                  </Button>
                ))}
                
                <Button
                  variant="outline"
                  size="icon"
                  onClick={() => handlePageChange(Math.min(totalPages, currentPage + 1))}
                  disabled={currentPage === totalPages}
                  className="h-8 w-8 bg-zinc-900 border-zinc-700 text-zinc-400 hover:text-white hover:border-zinc-600"
                >
                  <ChevronRight className="h-4 w-4" />
                </Button>
              </div>
            </div>
          )}
        </>
      )}
    </div>
  );
}