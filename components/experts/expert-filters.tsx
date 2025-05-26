"use client";

import { useState } from "react";
import { Check, X, ChevronDown, ChevronUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Slider } from "@/components/ui/slider";
import { Switch } from "@/components/ui/switch";

interface ExpertFiltersProps {
  selectedCategory: string;
  priceRange: [number, number];
  onCategoryChange: (category: string) => void;
  onPriceChange: (range: [number, number]) => void;
}

export default function ExpertFilters({
  selectedCategory,
  priceRange,
  onCategoryChange,
  onPriceChange,
}: ExpertFiltersProps) {
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);
  const [isAvailableToday, setIsAvailableToday] = useState(false);
  const [selectedSpecialties, setSelectedSpecialties] = useState<string[]>([]);
  
  const categories = [
    { id: "all", name: "All Experts" },
    { id: "therapist", name: "Therapists" },
    { id: "psychologist", name: "Psychologists" },
    { id: "counselor", name: "Counselors" },
    { id: "coach", name: "Life Coaches" },
    { id: "relationship", name: "Relationship Experts" },
  ];
  
  const specialties = [
    "Anxiety",
    "Depression",
    "Stress Management",
    "Trauma",
    "Relationships",
    "Self-Esteem",
    "Grief",
    "Career",
    "Addiction",
    "Anger Management",
  ];
  
  const toggleSpecialty = (specialty: string) => {
    if (selectedSpecialties.includes(specialty)) {
      setSelectedSpecialties(selectedSpecialties.filter(s => s !== specialty));
    } else {
      setSelectedSpecialties([...selectedSpecialties, specialty]);
    }
  };
  
  const clearAllFilters = () => {
    onCategoryChange("all");
    onPriceChange([0, 200]);
    setIsAvailableToday(false);
    setSelectedSpecialties([]);
  };

  return (
    <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-5">
      <div className="flex justify-between items-center mb-5">
        <h3 className="text-xl font-semibold text-white">Filters</h3>
        {/* Clear Filters Button */}
        <Button
          variant="ghost"
          size="sm"
          onClick={clearAllFilters}
          className="h-8 px-2 text-zinc-400 hover:text-white"
        >
          <X className="h-4 w-4 mr-1" />
          Clear All
        </Button>
      </div>
      
      {/* Mobile Toggle */}
      <Button
        variant="outline"
        onClick={() => setMobileFiltersOpen(!mobileFiltersOpen)}
        className="w-full mb-4 flex items-center justify-between lg:hidden border-zinc-700"
      >
        <span>
          {mobileFiltersOpen ? "Hide Filters" : "Show Filters"}
        </span>
        {mobileFiltersOpen ? (
          <ChevronUp className="h-4 w-4 ml-2" />
        ) : (
          <ChevronDown className="h-4 w-4 ml-2" />
        )}
      </Button>
      
      {/* Filters Content */}
      <div className={`space-y-6 ${mobileFiltersOpen ? "block" : "hidden lg:block"}`}>
        {/* Expert Type */}
        <div>
          <h4 className="text-sm font-medium text-zinc-300 mb-3">Expert Type</h4>
          <div className="space-y-2">
            {categories.map((category) => (
              <button
                key={category.id}
                className={`w-full flex items-center justify-between px-3 py-2 rounded-lg text-sm ${
                  selectedCategory === category.id
                    ? "bg-fuchsia-600/20 text-fuchsia-400 border border-fuchsia-600/50"
                    : "text-zinc-400 hover:bg-zinc-800 hover:text-zinc-200"
                }`}
                onClick={() => onCategoryChange(category.id)}
              >
                {category.name}
                {selectedCategory === category.id && (
                  <Check className="h-4 w-4 text-fuchsia-400" />
                )}
              </button>
            ))}
          </div>
        </div>
        
        {/* Price Range Slider */}
        <div>
          <h4 className="text-sm font-medium text-zinc-300 mb-3">Price Range</h4>
          <div className="px-2">
            <Slider
              defaultValue={[0, 200]}
              max={200}
              step={10}
              value={priceRange}
              onValueChange={(value) => onPriceChange(value as [number, number])}
              className="my-4"
            />
            <div className="flex justify-between text-sm text-zinc-400">
              <span>${priceRange[0]}</span>
              <span>${priceRange[1]}+</span>
            </div>
          </div>
        </div>
        
        {/* Available Today */}
        <div>
          <div className="flex items-center justify-between">
            <h4 className="text-sm font-medium text-zinc-300">Available Today</h4>
            <Switch
              checked={isAvailableToday}
              onCheckedChange={setIsAvailableToday}
            />
          </div>
        </div>
        
        {/* Specialties */}
        <Accordion type="single" collapsible defaultValue="specialties">
          <AccordionItem value="specialties" className="border-b-0">
            <AccordionTrigger className="text-sm font-medium text-zinc-300 hover:text-white py-2">
              Specialties
            </AccordionTrigger>
            <AccordionContent>
              <div className="flex flex-wrap gap-2 pt-2">
                {specialties.map((specialty) => (
                  <Badge
                    key={specialty}
                    variant={selectedSpecialties.includes(specialty) ? "default" : "outline"}
                    className={`cursor-pointer py-1 px-2 ${
                      selectedSpecialties.includes(specialty)
                        ? "bg-fuchsia-600 hover:bg-fuchsia-700 text-white"
                        : "bg-transparent hover:bg-zinc-800 text-zinc-400 hover:text-zinc-200 border-zinc-700"
                    }`}
                    onClick={() => toggleSpecialty(specialty)}
                  >
                    {specialty}
                  </Badge>
                ))}
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
        
        {/* Session Type */}
        <Accordion type="single" collapsible defaultValue="session-type">
          <AccordionItem value="session-type" className="border-b-0">
            <AccordionTrigger className="text-sm font-medium text-zinc-300 hover:text-white py-2">
              Session Type
            </AccordionTrigger>
            <AccordionContent>
              <div className="space-y-2 pt-2">
                <div className="flex items-center">
                  <Checkbox id="video" />
                  <label
                    htmlFor="video"
                    className="text-sm text-zinc-400 ml-2 cursor-pointer hover:text-zinc-200"
                  >
                    Video
                  </label>
                </div>
                <div className="flex items-center">
                  <Checkbox id="chat" />
                  <label
                    htmlFor="chat"
                    className="text-sm text-zinc-400 ml-2 cursor-pointer hover:text-zinc-200"
                  >
                    Chat
                  </label>
                </div>
                <div className="flex items-center">
                  <Checkbox id="in-person" />
                  <label
                    htmlFor="in-person"
                    className="text-sm text-zinc-400 ml-2 cursor-pointer hover:text-zinc-200"
                  >
                    In-person
                  </label>
                </div>
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
        
        {/* Languages */}
        <Accordion type="single" collapsible>
          <AccordionItem value="languages" className="border-b-0">
            <AccordionTrigger className="text-sm font-medium text-zinc-300 hover:text-white py-2">
              Languages
            </AccordionTrigger>
            <AccordionContent>
              <div className="space-y-2 pt-2">
                <div className="flex items-center">
                  <Checkbox id="english" defaultChecked />
                  <label
                    htmlFor="english"
                    className="text-sm text-zinc-400 ml-2 cursor-pointer hover:text-zinc-200"
                  >
                    English
                  </label>
                </div>
                <div className="flex items-center">
                  <Checkbox id="spanish" />
                  <label
                    htmlFor="spanish"
                    className="text-sm text-zinc-400 ml-2 cursor-pointer hover:text-zinc-200"
                  >
                    Spanish
                  </label>
                </div>
                <div className="flex items-center">
                  <Checkbox id="french" />
                  <label
                    htmlFor="french"
                    className="text-sm text-zinc-400 ml-2 cursor-pointer hover:text-zinc-200"
                  >
                    French
                  </label>
                </div>
                <div className="flex items-center">
                  <Checkbox id="german" />
                  <label
                    htmlFor="german"
                    className="text-sm text-zinc-400 ml-2 cursor-pointer hover:text-zinc-200"
                  >
                    German
                  </label>
                </div>
                <div className="flex items-center">
                  <Checkbox id="chinese" />
                  <label
                    htmlFor="chinese"
                    className="text-sm text-zinc-400 ml-2 cursor-pointer hover:text-zinc-200"
                  >
                    Chinese
                  </label>
                </div>
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  );
}

// Simple Checkbox Component
function Checkbox({ id, defaultChecked = false }: { id: string, defaultChecked?: boolean }) {
  const [checked, setChecked] = useState(defaultChecked);
  
  return (
    <div className="relative flex items-center justify-center">
      <input
        type="checkbox"
        id={id}
        checked={checked}
        onChange={() => setChecked(!checked)}
        className="sr-only peer"
      />
      <div className="h-5 w-5 rounded border border-zinc-700 bg-zinc-900 peer-checked:bg-fuchsia-600 peer-checked:border-fuchsia-600 transition-colors"></div>
      {checked && (
        <Check className="absolute h-3 w-3 text-white pointer-events-none" />
      )}
    </div>
  );
}