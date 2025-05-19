
import { useState, useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";

export interface ContentItem {
  id: string;
  title: string;
  type: "movie" | "series";
  imageUrl: string;
}

interface ContentRowProps {
  title: string;
  items: ContentItem[];
  className?: string;
}

const ContentRow = ({ title, items, className }: ContentRowProps) => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const [showRightArrow, setShowRightArrow] = useState(true);

  const scroll = (direction: "left" | "right") => {
    if (!scrollRef.current) return;

    const container = scrollRef.current;
    const scrollAmount = container.clientWidth * 0.75;
    
    if (direction === "left") {
      container.scrollLeft -= scrollAmount;
    } else {
      container.scrollLeft += scrollAmount;
    }
  };

  const handleScroll = () => {
    if (!scrollRef.current) return;
    
    const container = scrollRef.current;
    setShowLeftArrow(container.scrollLeft > 0);
    setShowRightArrow(
      container.scrollLeft < container.scrollWidth - container.clientWidth - 10
    );
  };

  return (
    <div className={cn("mb-6", className)}>
      <h2 className="text-lg font-medium mb-2 px-2">{title}</h2>
      
      <div className="relative group">
        {/* Left scroll button */}
        {showLeftArrow && (
          <button
            onClick={() => scroll("left")}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-black/50 rounded-full p-1 opacity-0 group-hover:opacity-100 transition-opacity"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
        )}
        
        {/* Content scroll area */}
        <div
          ref={scrollRef}
          onScroll={handleScroll}
          className="flex overflow-x-auto space-x-3 no-scrollbar scroll-smooth px-2 py-1"
        >
          {items.map((item) => (
            <Link
              key={item.id}
              to={`/details/${item.id}`}
              className="content-card flex-shrink-0 aspect-[9/16] w-28"
            >
              <img
                src={item.imageUrl}
                alt={item.title}
                className="w-full h-full object-cover rounded-md"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end opacity-0 hover:opacity-100 transition-opacity">
                <p className="text-white text-xs p-2 line-clamp-2">{item.title}</p>
              </div>
            </Link>
          ))}
        </div>
        
        {/* Right scroll button */}
        {showRightArrow && (
          <button
            onClick={() => scroll("right")}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-black/50 rounded-full p-1 opacity-0 group-hover:opacity-100 transition-opacity"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        )}
      </div>
    </div>
  );
};

export default ContentRow;
