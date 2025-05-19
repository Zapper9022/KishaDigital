
import { useEffect } from "react";
import Navigation from "@/components/Navigation";
import ContentRow, { ContentItem } from "@/components/ContentRow";

const Movies = () => {
  // Mock movie categories and data
  const actionMovies: ContentItem[] = [
    {
      id: "action-1",
      title: "Doctor Strange in the Multiverse of Madness",
      type: "movie",
      imageUrl: "https://images.unsplash.com/photo-1518877593221-1f28583780b4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    },
    {
      id: "action-2",
      title: "Black Widow",
      type: "movie",
      imageUrl: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    },
    {
      id: "action-3",
      title: "Shang-Chi",
      type: "movie",
      imageUrl: "https://images.unsplash.com/photo-1721322800607-8c38375eef04?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    },
  ];
  
  const animatedMovies: ContentItem[] = [
    {
      id: "animated-1",
      title: "Turning Red",
      type: "movie",
      imageUrl: "https://images.unsplash.com/photo-1518877593221-1f28583780b4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    },
    {
      id: "animated-2",
      title: "Lightyear",
      type: "movie",
      imageUrl: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    },
    {
      id: "animated-3",
      title: "Encanto",
      type: "movie",
      imageUrl: "https://images.unsplash.com/photo-1721322800607-8c38375eef04?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    },
  ];
  
  const comedyMovies: ContentItem[] = [
    {
      id: "comedy-1",
      title: "Free Guy",
      type: "movie",
      imageUrl: "https://images.unsplash.com/photo-1518877593221-1f28583780b4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    },
    {
      id: "comedy-2",
      title: "Chip 'n Dale: Rescue Rangers",
      type: "movie",
      imageUrl: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    },
    {
      id: "comedy-3",
      title: "The Bob's Burgers Movie",
      type: "movie",
      imageUrl: "https://images.unsplash.com/photo-1721322800607-8c38375eef04?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    },
  ];
  
  const documentaries: ContentItem[] = [
    {
      id: "doc-1",
      title: "The Rescue",
      type: "movie",
      imageUrl: "https://images.unsplash.com/photo-1518877593221-1f28583780b4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    },
    {
      id: "doc-2",
      title: "Summer of Soul",
      type: "movie",
      imageUrl: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    },
    {
      id: "doc-3",
      title: "The Beatles: Get Back",
      type: "movie",
      imageUrl: "https://images.unsplash.com/photo-1721322800607-8c38375eef04?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    },
  ];

  useEffect(() => {
    document.title = "Movies | KISAH² DIGITAL";
  }, []);

  return (
    <div className="min-h-screen">
      <Navigation />
      
      <main className="pt-24 px-6 md:px-12 pb-24">
        <h1 className="text-3xl font-bold mb-8">Movies</h1>
        
        <ContentRow title="Action & Adventure" items={actionMovies} />
        <ContentRow title="Animated" items={animatedMovies} />
        <ContentRow title="Comedy" items={comedyMovies} />
        <ContentRow title="Documentaries" items={documentaries} />
      </main>
    </div>
  );
};

export default Movies;
