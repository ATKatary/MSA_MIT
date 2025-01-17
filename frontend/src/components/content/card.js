import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

export default function MediaCard({ space }) {
  return (
    <Card
      sx={{
        maxWidth: 400,
        minWidth: 300,
        minHeight: 500,
        margin: 1,
        marginBottom: 5,
        position: "relative",
      }}
    >
      <CardMedia
        sx={{ height: 250 }}
        image={space.picSrc}
        title="prayer space"
      />
      <CardContent>
        <Typography gutterBottom variant="h6" component="div">
          <span>
            {space.name}: {space.rooms && space.rooms.join(", ")}
          </span>
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {space.description}
        </Typography>
        {space.address && (
          <Typography variant="body2" color="text.secondary">
            {space.address}
          </Typography>
        )}
      </CardContent>
      <CardActions style={{ position: "absolute", bottom: 0 }}>
        <Button size="small" href={space.href} target="_blank">
          See More
        </Button>
      </CardActions>
    </Card>
  );
}
