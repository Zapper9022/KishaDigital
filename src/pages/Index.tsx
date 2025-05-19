
import { useEffect } from "react";
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import ContentRow, { ContentItem } from "@/components/ContentRow";

const Index = () => {
  // In a real app, this data would come from an API
  const featuredContent = {
    title: "Moon Knight",
    description: "When Steven Grant, a mild-mannered gift-shop employee, becomes plagued with blackouts and memories of another life, he discovers he has dissociative identity disorder and shares a body with mercenary Marc Spector.",
    imageUrl: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    videoId: "moon-knight-1",
  };

  const trendingNow: ContentItem[] = [
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
      id: "trend-4",
      title: "The Falcon and the Winter Soldier",
      type: "series",
      imageUrl: "https://images.unsplash.com/photo-1518877593221-1f28583780b4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    },
    {
      id: "trend-5",
      title: "Hawkeye",
      type: "series",
      imageUrl: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    },
    {
      id: "trend-6",
      title: "What If...?",
      type: "series",
      imageUrl: "https://images.unsplash.com/photo-1721322800607-8c38375eef04?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    },
  ];

  const newReleases: ContentItem[] = [
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
    {
      id: "new-3",
      title: "Lightyear",
      type: "movie",
      imageUrl: "https://images.unsplash.com/photo-1721322800607-8c38375eef04?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    },
    {
      id: "new-4",
      title: "Encanto",
      type: "movie",
      imageUrl: "https://images.unsplash.com/photo-1518877593221-1f28583780b4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    },
    {
      id: "new-5",
      title: "Chip 'n Dale: Rescue Rangers",
      type: "movie",
      imageUrl: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    },
  ];

  const recommended: ContentItem[] = [
    {
      id: "rec-1",
      title: "Star Wars: The Book of Boba Fett",
      type: "series",
      imageUrl: "https://images.unsplash.com/photo-1721322800607-8c38375eef04?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    },
    {
      id: "rec-2",
      title: "The Simpsons",
      type: "series",
      imageUrl: "https://images.unsplash.com/photo-1518877593221-1f28583780b4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    },
    {
      id: "rec-3",
      title: "National Geographic: The World According to Jeff Goldblum",
      type: "series",
      imageUrl: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    },
    {
      id: "rec-4",
      title: "Pixar's Soul",
      type: "movie",
      imageUrl: "https://images.unsplash.com/photo-1721322800607-8c38375eef04?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    },
    {
      id: "rec-5",
      title: "The Mighty Ducks: Game Changers",
      type: "series",
      imageUrl: "https://images.unsplash.com/photo-1518877593221-1f28583780b4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    },
  ];

  useEffect(() => {
    document.title = "KISAH² DIGITAL";
  }, []);

  return (
    <div className="min-h-screen">
      <Navigation />
      
      <main className="pb-24">
        <Hero
          title={featuredContent.title}
          description={featuredContent.description}
          imageUrl={featuredContent.imageUrl}
          videoId={featuredContent.videoId}
        />
        
        <div className="px-6 md:px-12">
          <ContentRow title="Trending Now" items={trendingNow} />
          <ContentRow title="New Releases" items={newReleases} />
          <ContentRow title="Recommended For You" items={recommended} />
        </div>
      </main>
    </div>
  );
};

export default Index;
