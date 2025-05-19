import { useState, useEffect } from "react";
import Navigation from "@/components/Navigation";
import { Search as SearchIcon } from "lucide-react";
import { Link } from "react-router-dom";
import { Input } from "@/components/ui/input";
import { ContentItem } from "@/components/ContentRow";

// Mock content data for search
const mockAllContent: ContentItem[] = [
  {
    id: "moon-knight-1",
    title: "Moon Knight",
    type: "series",
    imageUrl: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
  },
  {
    id: "trend-1",
    title: "The Mandalorian",
    type: "series",
    imageUrl: "https://images.unsplash.com/photo-1518877593221-1f28583780b4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
  },
  {
    id: "trend-2",
    title: "Loki",
    type: "series",
    imageUrl: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
  },
  {
    id: "trend-3",
    title: "WandaVision",
    type: "series",
    imageUrl: "https://images.unsplash.com/photo-1721322800607-8c38375eef04?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
  },
  {
    id: "new-1",
    title: "Doctor Strange in the Multiverse of Madness",
    type: "movie",
    imageUrl: "https://images.unsplash.com/photo-1518877593221-1f28583780b4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
  },
  {
    id: "new-2",
    title: "Turning Red",
    type: "movie",
    imageUrl: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
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
      
      <main className="pt-16 pb-16 px-4">
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
