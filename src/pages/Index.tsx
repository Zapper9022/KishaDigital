
import { useEffect } from "react";
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import ContentRow, { ContentItem } from "@/components/ContentRow";

const Index = () => {
  // Featured content with the uploaded image
  const featuredContent = {
    title: "Bayang-Bayang dalam Gambar",
    description: "A haunting tale of shadows from the past that resurface in mysterious ways.",
    imageUrl: "/lovable-uploads/569c1dc5-733c-439c-a5b3-6b302e4f87ad.png",
    videoId: "bayang-1",
  };

  const trendingNow: ContentItem[] = [
    {
      id: "trend-1",
      title: "Boyfriend Aku Anak Makcik Aku",
      type: "series",
      imageUrl: "/lovable-uploads/bbbb3df6-0b6b-455b-996c-b3e27c67e0f5.png",
    },
    {
      id: "trend-2",
      title: "Curi Kerusi, Curi Hati",
      type: "series",
      imageUrl: "/lovable-uploads/11bc8e14-493a-486d-b781-30759d35efbb.png",
    },
    {
      id: "trend-3",
      title: "Bilik 207, Bilik 208",
      type: "series",
      imageUrl: "/lovable-uploads/85ef2f5e-dccd-42a8-b4b1-75d6c5380742.png",
    },
    {
      id: "trend-4",
      title: "Bayang-Bayang dalam Gambar",
      type: "series",
      imageUrl: "/lovable-uploads/569c1dc5-733c-439c-a5b3-6b302e4f87ad.png",
    },
    {
      id: "trend-5",
      title: "Suami Dari Dimensi Lain",
      type: "series",
      imageUrl: "/lovable-uploads/0f47a53f-3d82-430e-b451-2da28e8a776e.png",
    },
    {
      id: "trend-6",
      title: "Kapten Dekat Kokpit, Skandal Dekat Galley",
      type: "series",
      imageUrl: "/lovable-uploads/bb868ed8-7c2d-4250-9220-41795d203650.png",
    },
  ];

  const newReleases: ContentItem[] = [
    {
      id: "new-1",
      title: "Suami Dari Dimensi Lain",
      type: "movie",
      imageUrl: "/lovable-uploads/0f47a53f-3d82-430e-b451-2da28e8a776e.png",
    },
    {
      id: "new-2",
      title: "Kapten Dekat Kokpit, Skandal Dekat Galley",
      type: "movie",
      imageUrl: "/lovable-uploads/bb868ed8-7c2d-4250-9220-41795d203650.png",
    },
    {
      id: "new-3",
      title: "Boyfriend Aku Anak Makcik Aku",
      type: "movie",
      imageUrl: "/lovable-uploads/bbbb3df6-0b6b-455b-996c-b3e27c67e0f5.png",
    },
    {
      id: "new-4",
      title: "Curi Kerusi, Curi Hati",
      type: "movie",
      imageUrl: "/lovable-uploads/11bc8e14-493a-486d-b781-30759d35efbb.png",
    },
    {
      id: "new-5",
      title: "Bilik 207, Bilik 208",
      type: "movie",
      imageUrl: "/lovable-uploads/85ef2f5e-dccd-42a8-b4b1-75d6c5380742.png",
    },
  ];

  const recommended: ContentItem[] = [
    {
      id: "rec-1",
      title: "Bayang-Bayang dalam Gambar",
      type: "series",
      imageUrl: "/lovable-uploads/569c1dc5-733c-439c-a5b3-6b302e4f87ad.png",
    },
    {
      id: "rec-2",
      title: "Bilik 207, Bilik 208",
      type: "series",
      imageUrl: "/lovable-uploads/85ef2f5e-dccd-42a8-b4b1-75d6c5380742.png",
    },
    {
      id: "rec-3",
      title: "Kapten Dekat Kokpit, Skandal Dekat Galley",
      type: "series",
      imageUrl: "/lovable-uploads/bb868ed8-7c2d-4250-9220-41795d203650.png",
    },
    {
      id: "rec-4",
      title: "Boyfriend Aku Anak Makcik Aku",
      type: "movie",
      imageUrl: "/lovable-uploads/bbbb3df6-0b6b-455b-996c-b3e27c67e0f5.png",
    },
    {
      id: "rec-5",
      title: "Curi Kerusi, Curi Hati",
      type: "series",
      imageUrl: "/lovable-uploads/11bc8e14-493a-486d-b781-30759d35efbb.png",
    },
  ];

  useEffect(() => {
    document.title = "KISAH² DIGITAL";
  }, []);

  return (
    <div className="min-h-screen">
      <Hero
        title={featuredContent.title}
        description={featuredContent.description}
        imageUrl={featuredContent.imageUrl}
        videoId={featuredContent.videoId}
      />
      
      <div className="px-2">
        <ContentRow title="Trending Now" items={trendingNow} />
        <ContentRow title="New Releases" items={newReleases} />
        <ContentRow title="Recommended For You" items={recommended} />
      </div>
      
      <Navigation />
    </div>
  );
};

export default Index;
