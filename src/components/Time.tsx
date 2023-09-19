import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

import { useEffect, useState } from "react";

export function RealTimeClock() {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    // Cleanup the interval when the component unmounts
    return () => clearInterval(intervalId);
  }, []);

  // Format the time as a string (e.g., "HH:MM:SS")
  const formattedTime = currentTime.toLocaleTimeString();

  const currentDate = new Date();
  const formattedDate = currentDate.toLocaleDateString(); // "MM/DD/YYYY"

  return (
    <Box display="flex" alignItems="center" justifyContent="center" gap="1rem">
      {/* TIME */}
      <Typography
        variant="h2"
        sx={{
          color: "#343333",
          fontSize: "2rem",
          fontStyle: "normal",
          fontWeight: 900,
          lineHeight: "normal",
        }}
      >
        {formattedTime}
      </Typography>

      {" | "}

      {/* DATE */}
      <Typography
        variant="h2"
        sx={{
          color: "#343333",
          fontSize: "1.75rem",
          fontStyle: "normal",
          fontWeight: 500,
          lineHeight: "normal",
        }}
      >
        {formattedDate}
      </Typography>
    </Box>
  );
}
