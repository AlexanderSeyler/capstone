import React from "react";
import { Link } from "react-router-dom";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import { styled } from "@mui/material/styles";

const Image = styled("img")({
  maxWidth: "100%",
  height: "200px",
  cursor: "pointer",
});

const PlantItem = ({ plant, onAddToCart }) => {
  const handleAddClick = () => {
    onAddToCart(plant);
  };

  return (
    <Grid item xs={3}>
      <div>
        <Link to={`/plant/${plant.id}`} style={{ textDecoration: "none" }}>
          <Image src={plant.imageUrl} alt={plant.name} />
          <Typography variant="body2" noWrap>
            {plant.description}
          </Typography>
        </Link>
        <Button onClick={handleAddClick} variant="outlined" color="primary">
          Add to Cart
        </Button>
      </div>
    </Grid>
  );
};

export default PlantItem;
