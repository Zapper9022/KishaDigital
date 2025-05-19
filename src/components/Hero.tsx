
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
    <div className="relative h-[60vh] md:h-[70vh] w-full mb-8">
      {/* Background image with overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url(${imageUrl})`,
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-kisah-dark via-kisah-dark/70 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-kisah-dark to-transparent" />
      </div>

      {/* Content */}
      <div className="relative h-full flex flex-col justify-end p-6 md:p-12 max-w-3xl">
        <h1 className="text-3xl md:text-5xl font-bold mb-3 animate-fade-in">{title}</h1>
        <p className="text-sm md:text-base text-muted-foreground mb-6 line-clamp-3 md:line-clamp-4 max-w-xl">
          {description}
        </p>
        <div className="flex flex-wrap gap-4">
          <Button asChild className="bg-white hover:bg-white/80 text-black">
            <Link to={`/watch/${videoId}`}>
              <Play className="mr-2 h-4 w-4" />
              Play
            </Link>
          </Button>
          <Button variant="outline" asChild>
            <Link to={`/details/${videoId}`}>More Info</Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
