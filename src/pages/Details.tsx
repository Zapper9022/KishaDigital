
import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Play, Plus, ThumbsUp } from "lucide-react";
import ContentRow, { ContentItem } from "@/components/ContentRow";

// Mock content details using uploaded images
const mockContentDetails = {
  "bayang-1": {
    title: "Bayang-Bayang dalam Gambar",
    description: "A haunting tale of shadows from the past that resurface in mysterious ways, challenging a man's perception of reality and his family history.",
    imageUrl: "/lovable-uploads/569c1dc5-733c-439c-a5b3-6b302e4f87ad.png",
    year: "2023",
    rating: "18+",
    duration: "6 episodes",
    genres: ["Horror", "Mystery", "Thriller"],
    starring: ["Bront Palarae", "Remy Ishak", "Sangeeta Krishnasamy"],
    videoId: "bayang-1",
  },
  "suami-1": {
    title: "Suami Dari Dimensi Lain",
    description: "Every midnight, she disappears from this world—and becomes another man's wife in a parallel dimension, leaving her torn between two realities.",
    imageUrl: "/lovable-uploads/0f47a53f-3d82-430e-b451-2da28e8a776e.png",
    year: "2023",
    rating: "13+",
    duration: "8 episodes",
    genres: ["Sci-Fi", "Romance", "Drama"],
    starring: ["Mira Filzah", "Alvin Wong", "Beto Kusyairy"],
    videoId: "suami-1",
  },
  "kapten-1": {
    title: "Kapten Dekat Kokpit, Skandal Dekat Galley",
    description: "In the air they're professionals, but in the galley, it's a different story altogether. Follow the secret romance between a captain and a flight attendant.",
    imageUrl: "/lovable-uploads/bb868ed8-7c2d-4250-9220-41795d203650.png",
    year: "2023",
    rating: "13+",
    duration: "10 episodes",
    genres: ["Romance", "Drama", "Comedy"],
    starring: ["Aiman Hakim Ridza", "Mia Sara", "Nazim Othman"],
    videoId: "kapten-1",
  },
  "boyfriend-1": {
    title: "Boyfriend Aku Anak Makcik Aku",
    description: "Should I call him darling... or nephew? A young woman discovers her boyfriend is actually related to her in the most unexpected way.",
    imageUrl: "/lovable-uploads/bbbb3df6-0b6b-455b-996c-b3e27c67e0f5.png",
    year: "2022",
    rating: "13+",
    duration: "8 episodes",
    genres: ["Romance", "Comedy", "Drama"],
    starring: ["Mia Sara", "Syafiq Kyle", "Normah Damanhuri"],
    videoId: "boyfriend-1",
  },
  "bilik-1": {
    title: "Bilik 207, Bilik 208",
    description: "Two boyfriends. One hospital. Two doors, one heart—and zero ways out. A nurse finds herself torn between two charming doctors who happen to work next door to each other.",
    imageUrl: "/lovable-uploads/85ef2f5e-dccd-42a8-b4b1-75d6c5380742.png",
    year: "2023",
    rating: "13+",
    duration: "1h 45m",
    genres: ["Romance", "Comedy", "Drama"],
    starring: ["Mira Filzah", "Syafiq Kyle", "Alvin Wong"],
    videoId: "bilik-1",
  },
  "curi-1": {
    title: "Curi Kerusi, Curi Hati",
    description: "In front of cameras they're political rivals, but behind the scenes, they're secretly in love. Politics meets romance in this thrilling drama.",
    imageUrl: "/lovable-uploads/11bc8e14-493a-486d-b781-30759d35efbb.png",
    year: "2022",
    rating: "13+",
    duration: "2h 10m",
    genres: ["Drama", "Romance", "Politics"],
    starring: ["Remy Ishak", "Mira Filzah", "Datuk Jalaluddin Hassan"],
    videoId: "curi-1",
  },
};

// Mock similar content using uploaded images
const getMockSimilarContent = (currentId: string): ContentItem[] => {
  // Return different similar content based on current content
  const allIds = Object.keys(mockContentDetails);
  return allIds
    .filter(id => id !== currentId)
    .slice(0, 4)
    .map(id => {
      const content = mockContentDetails[id as keyof typeof mockContentDetails];
      return {
        id,
        title: content.title,
        type: content.duration.includes("episodes") ? "series" : "movie",
        imageUrl: content.imageUrl,
      };
    });
};

const Details = () => {
  const { id } = useParams<{ id: string }>();
  const [content, setContent] = useState<any | null>(null);
  const [similarContent, setSimilarContent] = useState<ContentItem[]>([]);

  useEffect(() => {
    if (id && mockContentDetails[id as keyof typeof mockContentDetails]) {
      setContent(mockContentDetails[id as keyof typeof mockContentDetails]);
      setSimilarContent(getMockSimilarContent(id));
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
    <div className="min-h-screen bg-[#000529]">
      <Navigation />
      
      <div className="pt-4">
        {/* Hero Banner */}
        <div className="relative h-[60vh] w-full">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: `url(${content.imageUrl})`,
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-t from-[#000529] via-[#000529]/80 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-r from-[#000529]/80 to-transparent" />
          </div>
        </div>
        
        {/* Content Details */}
        <div className="relative -mt-32 px-6">
          <h1 className="text-3xl font-bold mb-2">{content.title}</h1>
          
          <div className="flex flex-wrap items-center text-sm text-gray-300 mb-4 gap-x-4 gap-y-2">
            <span>{content.year}</span>
            <span className="px-1.5 py-0.5 border border-gray-500 rounded">{content.rating}</span>
            <span>{content.duration}</span>
          </div>
          
          <div className="mb-2">
            <div className="flex items-center flex-wrap">
              {content.genres.map((genre: string, index: number) => (
                <span key={genre} className="text-sm">
                  {genre}
                  {index < content.genres.length - 1 && <span className="mx-1">•</span>}
                </span>
              ))}
            </div>
          </div>
          
          <div className="flex flex-wrap gap-3 mb-6">
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
          
          <div className="mb-6">
            <p className="text-sm">{content.description}</p>
          </div>
          
          <div className="mb-8">
            <p className="text-gray-300 text-sm mb-1">Starring:</p>
            <p className="text-sm">{content.starring.join(", ")}</p>
          </div>
          
          <ContentRow title="More Like This" items={similarContent} />
        </div>
      </div>
    </div>
  );
};

export default Details;
