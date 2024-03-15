const axios = require("axios");
const PlantModel = require("../models/Plant");

const getPlant = (res) => {
  PlantModel.find({})
    .then((data) => res.send({ result: 200, data: data }))
    .catch((err) => {
      console.log(err);
      res.send({ result: 500, error: err.message });
    });
};

const fetchAndSavePlants = async (req, res) => {
  try {
    const response = await axios.get(
      "https://perenual.com/api/species-list?key=sk-ffIl656827c3479f93205"
    );
    const plants = response.data.data;

    const existingPlants = await PlantModel.find({
      plantId: { $in: plants.map((plant) => plant.plantId) },
    });

    const newPlants = plants.filter(
      (plant) =>
        !existingPlants.some(
          (existingPlant) => existingPlant.plantId === plant.plantId
        )
    );

    const savedPlants = await PlantModel.insertMany(newPlants);
    console.log("Saved plants:", savedPlants);
    res.status(200).json({ result: 200, data: savedPlants });
  } catch (error) {
    console.error(error);
    res.status(500).json({ result: 500, error: error.message });
  }
};

module.exports = { fetchAndSavePlants, getPlant };
