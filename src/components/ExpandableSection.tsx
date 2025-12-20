import React, { useState } from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

interface ExpandableItem {
  text: string;
}

interface ExpandableSectionProps {
  items: ExpandableItem[];
}

export const ExpandableSection = ({ items }: ExpandableSectionProps) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="mt-6">
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className={cn(
          "group inline-flex items-center gap-2 px-6 py-3 rounded-full font-semibold text-white",
          "bg-gradient-to-r from-blue-500 to-blue-600",
          "hover:from-blue-600 hover:to-blue-700",
          "hover:shadow-[0_0_20px_rgba(59,130,246,0.5)]",
          "transition-all duration-300 ease-in-out",
          "focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2"
        )}
      >
        <span>Get More</span>
        <ChevronDown
          className={cn(
            "w-5 h-5 transition-transform duration-300 ease-in-out",
            isExpanded && "rotate-180"
          )}
        />
      </button>

      <div
        className={cn(
          "overflow-hidden transition-all duration-300 ease-in-out",
          isExpanded ? "max-h-[500px] opacity-100 mt-4" : "max-h-0 opacity-0"
        )}
      >
        <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 border border-blue-100 shadow-lg">
          <div className="space-y-3">
            {items.map((item, index) => (
              <p
                key={index}
                className="text-foreground/80 leading-relaxed"
                style={{
                  animation: isExpanded
                    ? `fadeSlideIn 0.3s ease-out ${index * 0.05}s both`
                    : "none",
                }}
              >
                {item.text}
              </p>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @keyframes fadeSlideIn {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
};
