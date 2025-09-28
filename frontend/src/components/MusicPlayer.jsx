import { useRef, useState, useEffect } from "react";
import { Play, Pause, Music } from "lucide-react"; // ambil icon dari lucide
import bgMusic from "../assets/music/musik_dennyCaknan.mp3";

const MusicPlayer = () => {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(true);

  useEffect(() => {
    const audio = audioRef.current;
    if (audio) {
      audio.play().catch(() => {
        const handleFirstClick = () => {
          audio.play();
          setIsPlaying(true);
          document.removeEventListener("click", handleFirstClick);
        };
        document.addEventListener("click", handleFirstClick);
      });
    }
  }, []);

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <div className="fixed bottom-4 right-4 z-50">
      <audio ref={audioRef} src={bgMusic} autoPlay loop />
      <button
        onClick={togglePlay}
        className="w-12 h-12 flex items-center justify-center rounded-full bg-lime-800 border-white border-2 text-white shadow-lg hover:bg-lime-700 transition"
        title={isPlaying ? "Pause" : "Play"}
      >
        {isPlaying ? <Pause size={20} /> : <Play size={20} />}
      </button>
    </div>
  );
};

export default MusicPlayer;
