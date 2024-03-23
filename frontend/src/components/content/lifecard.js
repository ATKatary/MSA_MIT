import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

export default function LifeCard({ resource }) {
  return (
    <Card
      sx={{ maxWidth: 345, minHeight: 350, margin: 1, position: "relative" }}
    >
      <CardMedia
        sx={{ height: 240 }}
        image={resource.picSrc}
        title="prayer space"
      />
      <CardContent>
        <Typography gutterBottom variant="h6" component="div">
          {resource.name}
        </Typography>
      </CardContent>
      <CardActions style={{ position: "absolute", bottom: 0 }}>
        <Button size="small" href={resource.href} target="_blank">
          Directions
        </Button>
      </CardActions>
    </Card>
  );
}
