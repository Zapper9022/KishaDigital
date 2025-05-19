
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
    <div className={cn("mb-8", className)}>
      <h2 className="text-xl font-semibold mb-4">{title}</h2>
      
      <div className="relative group">
        {/* Left scroll button */}
        {showLeftArrow && (
          <button
            onClick={() => scroll("left")}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-black/50 rounded-full p-1 opacity-0 group-hover:opacity-100 transition-opacity"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>
        )}
        
        {/* Content scroll area */}
        <div
          ref={scrollRef}
          onScroll={handleScroll}
          className="flex overflow-x-auto space-x-4 no-scrollbar scroll-smooth p-1"
        >
          {items.map((item) => (
            <Link
              key={item.id}
              to={`/details/${item.id}`}
              className="content-card flex-shrink-0 aspect-video h-32 md:h-40"
            >
              <img
                src={item.imageUrl}
                alt={item.title}
                className="w-full h-full object-cover rounded-md"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-black/30 opacity-0 hover:opacity-100 flex items-center justify-center transition-opacity">
                <p className="text-white text-center p-2">{item.title}</p>
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
            <ChevronRight className="h-6 w-6" />
          </button>
        )}
      </div>
    </div>
  );
};

export default ContentRow;
