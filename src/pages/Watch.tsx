
import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import VideoPlayer from "@/components/VideoPlayer";
import { ArrowLeft } from "lucide-react";

// Mock video data
const mockVideos = {
  "moon-knight-1": {
    title: "Moon Knight - Episode 1",
    videoUrl: "https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_1mb.mp4", // Sample video URL
  },
  "mandalorian-1": {
    title: "The Mandalorian - Episode 1",
    videoUrl: "https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_1mb.mp4", // Sample video URL
  },
};

const Watch = () => {
  const { id } = useParams<{ id: string }>();
  const [video, setVideo] = useState<any | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    // In a real app, fetch video data from API
    if (id && mockVideos[id as keyof typeof mockVideos]) {
      setVideo(mockVideos[id as keyof typeof mockVideos]);
      document.title = `Watch: ${mockVideos[id as keyof typeof mockVideos].title} | KISAH² DIGITAL`;
    } else {
      console.error("Video not found:", id);
      navigate("/");
    }
  }, [id, navigate]);

  if (!video) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p>Loading...</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-kisah-dark">
      <div className="absolute top-4 left-4 z-50">
        <button
          onClick={() => navigate(-1)}
          className="flex items-center text-white hover:text-kisah-primary transition-colors"
        >
          <ArrowLeft className="h-5 w-5 mr-2" />
          Back
        </button>
      </div>
      
      <div className="h-screen">
        <VideoPlayer videoUrl={video.videoUrl} title={video.title} />
      </div>
    </div>
  );
};

export default Watch;
