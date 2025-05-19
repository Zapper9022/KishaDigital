
import { Button } from "@/components/ui/button";
import { Play } from "lucide-react";
import { Link } from "react-router-dom";

interface HeroProps {
  title: string;
  description: string;
  imageUrl: string;
  videoId: string;
}

const Hero = ({ title, description, imageUrl, videoId }: HeroProps) => {
  return (
    <div className="relative h-[60vh] w-full mb-4">
      {/* Background image with overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url(${imageUrl})`,
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-[#000529] via-[#000529]/80 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative h-full flex flex-col justify-end p-4 max-w-full">
        <h1 className="text-2xl font-bold mb-1 animate-fade-in line-clamp-2">{title}</h1>
        <p className="text-xs text-muted-foreground mb-3 line-clamp-2 max-w-full">
          {description}
        </p>
        <div className="flex space-x-3">
          <Button asChild size="sm" className="bg-white hover:bg-white/80 text-black">
            <Link to={`/watch/${videoId}`}>
              <Play className="mr-1 h-3 w-3" />
              Play
            </Link>
          </Button>
          <Button variant="outline" size="sm" asChild>
            <Link to={`/details/${videoId}`}>More Info</Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
