
import { useEffect } from "react";
import Navigation from "@/components/Navigation";
import ContentRow, { ContentItem } from "@/components/ContentRow";

const Series = () => {
  // Mock series categories and data
  const trendingSeries: ContentItem[] = [
    {
      id: "trending-1",
      title: "Moon Knight",
      type: "series",
      imageUrl: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    },
    {
      id: "trending-2",
      title: "The Mandalorian",
      type: "series",
      imageUrl: "https://images.unsplash.com/photo-1518877593221-1f28583780b4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    },
    {
      id: "trending-3",
      title: "Obi-Wan Kenobi",
      type: "series",
      imageUrl: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    },
  ];
  
  const marvelSeries: ContentItem[] = [
    {
      id: "marvel-1",
      title: "Loki",
      type: "series",
      imageUrl: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    },
    {
      id: "marvel-2",
      title: "WandaVision",
      type: "series",
      imageUrl: "https://images.unsplash.com/photo-1721322800607-8c38375eef04?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    },
    {
      id: "marvel-3",
      title: "The Falcon and the Winter Soldier",
      type: "series",
      imageUrl: "https://images.unsplash.com/photo-1518877593221-1f28583780b4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    },
  ];
  
  const starWarsSeries: ContentItem[] = [
    {
      id: "starwars-1",
      title: "The Book of Boba Fett",
      type: "series",
      imageUrl: "https://images.unsplash.com/photo-1721322800607-8c38375eef04?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    },
    {
      id: "starwars-2",
      title: "The Bad Batch",
      type: "series",
      imageUrl: "https://images.unsplash.com/photo-1518877593221-1f28583780b4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    },
    {
      id: "starwars-3",
      title: "Star Wars: Visions",
      type: "series",
      imageUrl: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    },
  ];
  
  const natGeoSeries: ContentItem[] = [
    {
      id: "natgeo-1",
      title: "The World According to Jeff Goldblum",
      type: "series",
      imageUrl: "https://images.unsplash.com/photo-1518877593221-1f28583780b4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    },
    {
      id: "natgeo-2",
      title: "Secrets of the Whales",
      type: "series",
      imageUrl: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    },
    {
      id: "natgeo-3",
      title: "Limitless with Chris Hemsworth",
      type: "series",
      imageUrl: "https://images.unsplash.com/photo-1721322800607-8c38375eef04?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    },
  ];

  useEffect(() => {
    document.title = "Series | KISAH² DIGITAL";
  }, []);

  return (
    <div className="min-h-screen">
      <Navigation />
      
      <main className="pt-16 pb-16">
        <h1 className="text-xl font-bold px-4 mb-4">Series</h1>
        
        <div className="px-2">
          <ContentRow title="Trending Now" items={trendingSeries} />
          <ContentRow title="Marvel Series" items={marvelSeries} />
          <ContentRow title="Star Wars Series" items={starWarsSeries} />
          <ContentRow title="National Geographic" items={natGeoSeries} />
        </div>
      </main>
    </div>
  );
};

export default Series;
