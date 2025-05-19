
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
      
      <main className="pt-24 px-6 md:px-12 pb-24">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-2xl font-semibold mb-6">Search</h1>
          
          <div className="relative mb-8">
            <SearchIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-5 w-5" />
            <Input
              type="text"
              placeholder="Search for movies, shows..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="pl-10 bg-kisah-gray border-none text-white h-12"
            />
          </div>
          
          {query.trim() === "" ? (
            <div className="text-center py-12">
              <p className="text-muted-foreground">Start typing to search for content</p>
            </div>
          ) : results.length > 0 ? (
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
              {results.map((item) => (
                <Link
                  key={item.id}
                  to={`/details/${item.id}`}
                  className="content-card"
                >
                  <div className="aspect-[2/3] relative rounded-md overflow-hidden">
                    <img
                      src={item.imageUrl}
                      alt={item.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black/40 opacity-0 hover:opacity-100 flex items-end transition-opacity p-2">
                      <div>
                        <p className="text-sm font-medium">{item.title}</p>
                        <p className="text-xs text-gray-300 capitalize">{item.type}</p>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-muted-foreground">No results found for "{query}"</p>
            </div>
          )}
        </div>
      </main>
    </div>
  );
};

export default Search;
