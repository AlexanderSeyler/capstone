import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Grid, Typography, Button, styled } from "@mui/material";

const Image = styled("img")({
  maxWidth: "100%",
  height: "200px",
  cursor: "pointer",
});

const PageGrid = () => {
  const [plants, setPlants] = useState([]);

  useEffect(() => {
    const fetchPlants = async () => {
      try {
        const response = await fetch("http://localhost:3000/api/plants/");
        if (!response.ok) {
          throw new Error("Failed to fetch plants");
        }
        const json = await response.json();
        const data = json.data;
        setPlants(Array.isArray(data) ? data : []);
      } catch (error) {
        console.error("Error fetching plants:", error);
        setPlants([]);
      }
    };

    fetchPlants();
  }, []);

  const handleAddToCart = (index) => {
    console.log("Plant added to cart:", plants[index]);
  };

  if (!Array.isArray(plants)) {
    console.error("Plants data is not an array:", plants);
    return null;
  }

  return (
    <div>
      <header>{plants.length}</header>
      <Grid container spacing={4} my={2}>
        {plants.map((plant, index) => (
          <Grid item xs={3} key={index}>
            {plant.watering && (
              <div>
                <Link
                  to={`/plant/${plant.id}`}
                  style={{ textDecoration: "none" }}
                >
                  <Typography variant="body2" noWrap>
                    {plant.watering}
                  </Typography>
                </Link>
                <Button
                  variant="contained"
                  onClick={() => handleAddToCart(index)}
                  color="primary"
                >
                  Add to Cart
                </Button>
              </div>
            )}
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default PageGrid;
