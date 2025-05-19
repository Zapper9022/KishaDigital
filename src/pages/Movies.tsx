
import { useEffect } from "react";
import Navigation from "@/components/Navigation";
import ContentRow, { ContentItem } from "@/components/ContentRow";

const Movies = () => {
  // Movie categories using uploaded images
  const actionMovies: ContentItem[] = [
    {
      id: "action-1",
      title: "Bayang-Bayang dalam Gambar",
      type: "movie",
      imageUrl: "/lovable-uploads/569c1dc5-733c-439c-a5b3-6b302e4f87ad.png",
    },
    {
      id: "action-2",
      title: "Suami Dari Dimensi Lain",
      type: "movie",
      imageUrl: "/lovable-uploads/0f47a53f-3d82-430e-b451-2da28e8a776e.png",
    },
    {
      id: "action-3",
      title: "Kapten Dekat Kokpit, Skandal Dekat Galley",
      type: "movie",
      imageUrl: "/lovable-uploads/bb868ed8-7c2d-4250-9220-41795d203650.png",
    },
  ];
  
  const romanceMovies: ContentItem[] = [
    {
      id: "romance-1",
      title: "Boyfriend Aku Anak Makcik Aku",
      type: "movie",
      imageUrl: "/lovable-uploads/bbbb3df6-0b6b-455b-996c-b3e27c67e0f5.png",
    },
    {
      id: "romance-2",
      title: "Bilik 207, Bilik 208",
      type: "movie",
      imageUrl: "/lovable-uploads/85ef2f5e-dccd-42a8-b4b1-75d6c5380742.png",
    },
    {
      id: "romance-3",
      title: "Curi Kerusi, Curi Hati",
      type: "movie",
      imageUrl: "/lovable-uploads/11bc8e14-493a-486d-b781-30759d35efbb.png",
    },
  ];
  
  const dramaMovies: ContentItem[] = [
    {
      id: "drama-1",
      title: "Curi Kerusi, Curi Hati",
      type: "movie",
      imageUrl: "/lovable-uploads/11bc8e14-493a-486d-b781-30759d35efbb.png",
    },
    {
      id: "drama-2",
      title: "Bayang-Bayang dalam Gambar",
      type: "movie",
      imageUrl: "/lovable-uploads/569c1dc5-733c-439c-a5b3-6b302e4f87ad.png",
    },
    {
      id: "drama-3",
      title: "Suami Dari Dimensi Lain",
      type: "movie",
      imageUrl: "/lovable-uploads/0f47a53f-3d82-430e-b451-2da28e8a776e.png",
    },
  ];
  
  const comedyMovies: ContentItem[] = [
    {
      id: "comedy-1",
      title: "Boyfriend Aku Anak Makcik Aku",
      type: "movie",
      imageUrl: "/lovable-uploads/bbbb3df6-0b6b-455b-996c-b3e27c67e0f5.png",
    },
    {
      id: "comedy-2",
      title: "Bilik 207, Bilik 208",
      type: "movie",
      imageUrl: "/lovable-uploads/85ef2f5e-dccd-42a8-b4b1-75d6c5380742.png",
    },
    {
      id: "comedy-3",
      title: "Kapten Dekat Kokpit, Skandal Dekat Galley",
      type: "movie",
      imageUrl: "/lovable-uploads/bb868ed8-7c2d-4250-9220-41795d203650.png",
    },
  ];

  useEffect(() => {
    document.title = "Movies | KISAH² DIGITAL";
  }, []);

  return (
    <div className="min-h-screen">
      <Navigation />
      
      <main className="pt-4 pb-16">
        <h1 className="text-xl font-bold px-4 mb-4">Movies</h1>
        
        <div className="px-2">
          <ContentRow title="Action & Thriller" items={actionMovies} />
          <ContentRow title="Romance" items={romanceMovies} />
          <ContentRow title="Drama" items={dramaMovies} />
          <ContentRow title="Comedy" items={comedyMovies} />
        </div>
      </main>
    </div>
  );
};

export default Movies;
