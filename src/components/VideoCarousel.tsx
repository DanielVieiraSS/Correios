import { useState, useRef } from "react";

import Box from "@mui/material/Box";

interface VideoCarouselProps {
  videos: string[];
}

export function VideoCarousel({ videos }: VideoCarouselProps) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const videoRef = useRef(null);

  const handleVideoEnded = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % videos.length);
  };

  return (
    <Box
      width={"100%"}
      height={"100%"}
      sx={{ borderRadius: "20px", background: "#D9D9D9" }}
    >
      <video
        width={"100%"}
        height={"100%"}
        ref={videoRef}
        src={videos[currentSlide]}
        autoPlay
        onEnded={handleVideoEnded}
      />
    </Box>
  );
}

export default VideoCarousel;
