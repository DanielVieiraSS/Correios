import Box from "@mui/material/Box";
import Image from "next/image";
import dynamic from "next/dynamic";
import Skeleton from "@mui/material/Skeleton";

const RealTimeClock = dynamic(
  () => import("./Time").then((mod) => mod.RealTimeClock),
  {
    ssr: false,
    loading: () => (
      <Skeleton
        variant="rounded"
        animation="wave"
        width="300px"
        height="50px"
      />
    ),
  }
);

export function Footer() {
  return (
    <Box
      component={"footer"}
      sx={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexWrap: "wrap",
        alignItems: "center",
        justifyContent: "space-between",
        background: "#D9D9D9",
        padding: "1rem 1.5rem",
      }}
    >
      <Image src="/logo.png" alt="logo" width="170" height="35" />

      <RealTimeClock />
    </Box>
  );
}
