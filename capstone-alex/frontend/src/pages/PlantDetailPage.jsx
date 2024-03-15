import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const PlantDetailPage = () => {
  const { id } = useParams();
  const [plant, setPlant] = useState(null);

  useEffect(() => {
    const fetchPlantDetails = async () => {
      try {
        const response = await fetch(`http://localhost:3000/api/plants/${id}`);
        if (!response.ok) {
          throw new Error("Failed to fetch plant details");
        }
        const data = await response.json();
        setPlant(data);
      } catch (error) {
        console.error("Error fetching plant details:", error);
      }
    };

    fetchPlantDetails();
  }, [id]);

  if (!plant) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>Plant Details</h2>
      <p>ID: {plant.id}</p>
      <p>Name: {plant.name}</p>
      <p>Description: {plant.description}</p>
    </div>
  );
};

export default PlantDetailPage;
