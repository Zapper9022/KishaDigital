
import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Play, Plus, ThumbsUp } from "lucide-react";
import ContentRow, { ContentItem } from "@/components/ContentRow";

// Mock content details
const mockContentDetails = {
  "moon-knight-1": {
    title: "Moon Knight",
    description: "When Steven Grant, a mild-mannered gift-shop employee, becomes plagued with blackouts and memories of another life, he discovers he has dissociative identity disorder and shares a body with mercenary Marc Spector. As Steven/Marc's enemies converge upon them, they must navigate their complex identities while thrust into a deadly mystery among the powerful gods of Egypt.",
    imageUrl: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    year: "2022",
    rating: "TV-14",
    duration: "6 episodes",
    genres: ["Action", "Adventure", "Fantasy"],
    starring: ["Oscar Isaac", "Ethan Hawke", "May Calamawy"],
    videoId: "moon-knight-1",
  },
  "trend-1": {
    title: "The Mandalorian",
    description: "After the fall of the Empire, a lone gunfighter makes his way through the lawless galaxy with his trusty sidekick, The Child.",
    imageUrl: "https://images.unsplash.com/photo-1518877593221-1f28583780b4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    year: "2019",
    rating: "TV-14",
    duration: "2 seasons",
    genres: ["Action", "Adventure", "Sci-Fi"],
    starring: ["Pedro Pascal", "Carl Weathers", "Giancarlo Esposito"],
    videoId: "mandalorian-1",
  },
};

// Mock similar content
const mockSimilarContent: ContentItem[] = [
  {
    id: "similar-1",
    title: "The Falcon and the Winter Soldier",
    type: "series",
    imageUrl: "https://images.unsplash.com/photo-1518877593221-1f28583780b4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
  },
  {
    id: "similar-2",
    title: "Loki",
    type: "series",
    imageUrl: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
  },
  {
    id: "similar-3",
    title: "WandaVision",
    type: "series",
    imageUrl: "https://images.unsplash.com/photo-1721322800607-8c38375eef04?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
  },
  {
    id: "similar-4",
    title: "Hawkeye",
    type: "series",
    imageUrl: "https://images.unsplash.com/photo-1518877593221-1f28583780b4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
  },
];

const Details = () => {
  const { id } = useParams<{ id: string }>();
  const [content, setContent] = useState<any | null>(null);

  useEffect(() => {
    if (id && mockContentDetails[id as keyof typeof mockContentDetails]) {
      setContent(mockContentDetails[id as keyof typeof mockContentDetails]);
      document.title = `${mockContentDetails[id as keyof typeof mockContentDetails].title} | KISAH² DIGITAL`;
    } else {
      // Handle content not found
      console.error("Content not found:", id);
    }
  }, [id]);

  if (!content) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p>Loading...</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <Navigation />
      
      <div className="pt-16">
        {/* Hero Banner */}
        <div className="relative h-[50vh] md:h-[60vh] w-full">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: `url(${content.imageUrl})`,
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-t from-kisah-dark via-kisah-dark/80 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-r from-kisah-dark/80 to-transparent" />
          </div>
        </div>
        
        {/* Content Details */}
        <div className="relative -mt-32 px-6 md:px-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">{content.title}</h1>
          
          <div className="flex flex-wrap items-center text-sm text-gray-300 mb-4 gap-x-4 gap-y-2">
            <span>{content.year}</span>
            <span className="px-1.5 py-0.5 border border-gray-500 rounded">{content.rating}</span>
            <span>{content.duration}</span>
            <div className="flex items-center">
              {content.genres.map((genre: string, index: number) => (
                <span key={genre}>
                  {genre}
                  {index < content.genres.length - 1 && <span className="mx-1">•</span>}
                </span>
              ))}
            </div>
          </div>
          
          <div className="flex flex-wrap gap-4 mb-8">
            <Button asChild className="bg-white hover:bg-white/80 text-black">
              <Link to={`/watch/${content.videoId}`}>
                <Play className="mr-2 h-4 w-4" />
                Play
              </Link>
            </Button>
            <Button variant="outline">
              <Plus className="mr-2 h-4 w-4" />
              Add to Watchlist
            </Button>
            <Button variant="ghost" size="icon">
              <ThumbsUp className="h-5 w-5" />
            </Button>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="md:col-span-2">
              <p className="text-base md:text-lg">{content.description}</p>
            </div>
            
            <div>
              <div className="mb-4">
                <p className="text-gray-300 mb-1">Starring:</p>
                <p>{content.starring.join(", ")}</p>
              </div>
            </div>
          </div>
          
          <ContentRow title="More Like This" items={mockSimilarContent} />
        </div>
      </div>
    </div>
  );
};

export default Details;
