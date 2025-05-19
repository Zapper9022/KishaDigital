
import { useState, useEffect } from "react";
import Navigation from "@/components/Navigation";
import { Search as SearchIcon } from "lucide-react";
import { Link } from "react-router-dom";
import { Input } from "@/components/ui/input";
import { ContentItem } from "@/components/ContentRow";

// Mock content data for search using the uploaded images
const mockAllContent: ContentItem[] = [
  {
    id: "bayang-1",
    title: "Bayang-Bayang dalam Gambar",
    type: "series",
    imageUrl: "/lovable-uploads/569c1dc5-733c-439c-a5b3-6b302e4f87ad.png",
  },
  {
    id: "suami-1",
    title: "Suami Dari Dimensi Lain",
    type: "series",
    imageUrl: "/lovable-uploads/0f47a53f-3d82-430e-b451-2da28e8a776e.png",
  },
  {
    id: "kapten-1",
    title: "Kapten Dekat Kokpit, Skandal Dekat Galley",
    type: "series",
    imageUrl: "/lovable-uploads/bb868ed8-7c2d-4250-9220-41795d203650.png",
  },
  {
    id: "boyfriend-1",
    title: "Boyfriend Aku Anak Makcik Aku",
    type: "series",
    imageUrl: "/lovable-uploads/bbbb3df6-0b6b-455b-996c-b3e27c67e0f5.png",
  },
  {
    id: "bilik-1",
    title: "Bilik 207, Bilik 208",
    type: "movie",
    imageUrl: "/lovable-uploads/85ef2f5e-dccd-42a8-b4b1-75d6c5380742.png",
  },
  {
    id: "curi-1",
    title: "Curi Kerusi, Curi Hati",
    type: "movie",
    imageUrl: "/lovable-uploads/11bc8e14-493a-486d-b781-30759d35efbb.png",
  },
];

const Search = () => {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<ContentItem[]>([]);

  useEffect(() => {
    document.title = "Search | KISAH² DIGITAL";
  }, []);

  useEffect(() => {
    if (query.trim() === "") {
      setResults([]);
      return;
    }

    const searchTerm = query.toLowerCase();
    const filtered = mockAllContent.filter(item => 
      item.title.toLowerCase().includes(searchTerm)
    );
    
    setResults(filtered);
  }, [query]);

  return (
    <div className="min-h-screen">
      <Navigation />
      
      <main className="pt-4 pb-16 px-4">
        <h1 className="text-xl font-bold mb-4">Search</h1>
        
        <div className="relative mb-6">
          <SearchIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
          <Input
            type="text"
            placeholder="Search for movies, shows..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="pl-10 bg-kisah-gray border-none text-white h-10 rounded-full"
          />
        </div>
        
        {query.trim() === "" ? (
          <div className="text-center py-8">
            <p className="text-muted-foreground text-sm">Start typing to search for content</p>
          </div>
        ) : results.length > 0 ? (
          <div className="grid grid-cols-3 gap-3">
            {results.map((item) => (
              <Link
                key={item.id}
                to={`/details/${item.id}`}
                className="content-card"
              >
                <div className="aspect-[9/16] relative rounded-md overflow-hidden">
                  <img
                    src={item.imageUrl}
                    alt={item.title}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 hover:opacity-100 flex items-end transition-opacity">
                    <div className="p-2">
                      <p className="text-xs font-medium line-clamp-2">{item.title}</p>
                      <p className="text-[10px] text-gray-300 capitalize">{item.type}</p>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        ) : (
          <div className="text-center py-8">
            <p className="text-muted-foreground text-sm">No results found for "{query}"</p>
          </div>
        )}
      </main>
    </div>
  );
};

export default Search;
