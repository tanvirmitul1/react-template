import { useState, useEffect, useRef } from "react";
import { useSelector } from "react-redux";

const HomePage = () => {
  const audioRef = useRef();
  const [selectedAudio, setSelectedAudio] = useState();
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);
  const products = useSelector((state) => state.product);
  useEffect(() => {
    fetch(
      "https://ia800208.us.archive.org/14/items/testmp3testfile/mpthreetest.mp3"
    )
      .then((res) => res.blob())
      .then((audioBlob) => {
        const audioUrl = URL.createObjectURL(audioBlob);
        setSelectedAudio(audioUrl);
      })
      .catch((error) => {
        console.error("Error fetching audio:", error);
      });
  }, []);

  console.log(audioRef);

  const toggleAudio = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
    }
    setIsPlaying((prev) => !prev);
  };

  const handleTimeUpdate = () => {
    if (audioRef.current) {
      setCurrentTime(audioRef.current.currentTime);
    }
  };

  const handleLoadedData = () => {
    if (audioRef.current) {
      setDuration(audioRef.current.duration);
      setIsLoaded(true);
    }
  };

  const totalId = products?.reduce((total, product) => {
    return total + product.id;
  }, "");

  return (
    <div>
      <audio
        ref={audioRef}
        src={selectedAudio}
        preload="auto"
        onTimeUpdate={handleTimeUpdate}
        onLoadedData={handleLoadedData}
      ></audio>

      <button onClick={toggleAudio}>{isPlaying ? "Pause" : "Play"}</button>

      {/* Show time */}
      <div>
        <span>{formatTime(currentTime)}</span> /{" "}
        <span>{formatTime(duration)}</span>
      </div>

      {/* Loading Bar */}
      {!isLoaded ? (
        <div>Loading...</div>
      ) : (
        <div style={{ width: "100%", backgroundColor: "#ddd", height: "10px" }}>
          <div
            style={{
              height: "100%",
              width: `${(currentTime / duration) * 100}%`,
              backgroundColor: "#4caf50",
            }}
          ></div>
        </div>
      )}

      {totalId}
    </div>
  );
};

// Utility function to format time in minutes:seconds
const formatTime = (seconds) => {
  const minutes = Math.floor(seconds / 60);
  const sec = Math.floor(seconds % 60);
  return `${minutes}:${sec < 10 ? "0" : ""}${sec}`;
};

export default HomePage;
