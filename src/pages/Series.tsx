
import { useEffect } from "react";
import Navigation from "@/components/Navigation";
import ContentRow, { ContentItem } from "@/components/ContentRow";

const Series = () => {
  // Series categories using uploaded images
  const trendingSeries: ContentItem[] = [
    {
      id: "trending-1",
      title: "Bayang-Bayang dalam Gambar",
      type: "series",
      imageUrl: "/lovable-uploads/569c1dc5-733c-439c-a5b3-6b302e4f87ad.png",
    },
    {
      id: "trending-2",
      title: "Suami Dari Dimensi Lain",
      type: "series",
      imageUrl: "/lovable-uploads/0f47a53f-3d82-430e-b451-2da28e8a776e.png",
    },
    {
      id: "trending-3",
      title: "Kapten Dekat Kokpit, Skandal Dekat Galley",
      type: "series",
      imageUrl: "/lovable-uploads/bb868ed8-7c2d-4250-9220-41795d203650.png",
    },
  ];
  
  const dramaSeries: ContentItem[] = [
    {
      id: "drama-1",
      title: "Curi Kerusi, Curi Hati",
      type: "series",
      imageUrl: "/lovable-uploads/11bc8e14-493a-486d-b781-30759d35efbb.png",
    },
    {
      id: "drama-2",
      title: "Boyfriend Aku Anak Makcik Aku",
      type: "series",
      imageUrl: "/lovable-uploads/bbbb3df6-0b6b-455b-996c-b3e27c67e0f5.png",
    },
    {
      id: "drama-3",
      title: "Bayang-Bayang dalam Gambar",
      type: "series",
      imageUrl: "/lovable-uploads/569c1dc5-733c-439c-a5b3-6b302e4f87ad.png",
    },
  ];
  
  const romanceSeries: ContentItem[] = [
    {
      id: "romance-1",
      title: "Boyfriend Aku Anak Makcik Aku",
      type: "series",
      imageUrl: "/lovable-uploads/bbbb3df6-0b6b-455b-996c-b3e27c67e0f5.png",
    },
    {
      id: "romance-2",
      title: "Bilik 207, Bilik 208",
      type: "series",
      imageUrl: "/lovable-uploads/85ef2f5e-dccd-42a8-b4b1-75d6c5380742.png",
    },
    {
      id: "romance-3",
      title: "Curi Kerusi, Curi Hati",
      type: "series",
      imageUrl: "/lovable-uploads/11bc8e14-493a-486d-b781-30759d35efbb.png",
    },
  ];
  
  const mysterySeries: ContentItem[] = [
    {
      id: "mystery-1",
      title: "Bayang-Bayang dalam Gambar",
      type: "series",
      imageUrl: "/lovable-uploads/569c1dc5-733c-439c-a5b3-6b302e4f87ad.png",
    },
    {
      id: "mystery-2",
      title: "Suami Dari Dimensi Lain",
      type: "series",
      imageUrl: "/lovable-uploads/0f47a53f-3d82-430e-b451-2da28e8a776e.png",
    },
    {
      id: "mystery-3",
      title: "Bilik 207, Bilik 208",
      type: "series",
      imageUrl: "/lovable-uploads/85ef2f5e-dccd-42a8-b4b1-75d6c5380742.png",
    },
  ];

  useEffect(() => {
    document.title = "Series | KISAH² DIGITAL";
  }, []);

  return (
    <div className="min-h-screen">
      <Navigation />
      
      <main className="pt-4 pb-16">
        <h1 className="text-xl font-bold px-4 mb-4">Series</h1>
        
        <div className="px-2">
          <ContentRow title="Trending Now" items={trendingSeries} />
          <ContentRow title="Drama Series" items={dramaSeries} />
          <ContentRow title="Romance Series" items={romanceSeries} />
          <ContentRow title="Mystery & Thriller" items={mysterySeries} />
        </div>
      </main>
    </div>
  );
};

export default Series;
