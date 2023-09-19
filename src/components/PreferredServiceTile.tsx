import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Typography from "@mui/material/Typography";

import Image from "next/image";

interface PreferredServiceTileProps {
  imageUrl: string;
  title: string;
  description: string;
}

export function PreferredServiceTile(props: PreferredServiceTileProps) {
  return (
    <ListItem alignItems="center">
      <ListItemIcon>
        <Image src={props.imageUrl} alt="dynamicImg" width={64} height={64} />
      </ListItemIcon>
      <ListItemText
        sx={{
          color: "#585858",
          fontSize: "1.125rem",
          fontStyle: "normal",
          fontWeight: 600,
          lineHeight: "normal",
          textTransform: "uppercase",
        }}
      >
        <Typography
          sx={{
            display: "inline",
            color: "#585858",
            fontSize: "1.5rem",
            fontStyle: "normal",
            fontWeight: 900,
            lineHeight: "normal",
            textTransform: "uppercase",
          }}
        >
          {props.title}:{" "}
        </Typography>
        {props.description}
      </ListItemText>
    </ListItem>
  );
}
