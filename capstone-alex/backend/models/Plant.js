const mongoose = require("mongoose");

const plantSchema = new mongoose.Schema({
  id: { type: Number, required: true },
  common_name: { type: String, required: true },
  scientific_name: { type: Array, required: true },
  other_name: [{ type: String }],
  cycle: { type: String, required: true },
  watering: { type: String, required: true },
  sunlight: { type: Array, required: true },
  default_image: {
    license: { type: String, required: false },
    licenseName: { type: String, required: false },
    licenseUrl: { type: String, required: false },
    originalUrl: { type: String, required: false },
    regularUrl: { type: String, required: false },
    mediumUrl: { type: String, required: false },
    smallUrl: { type: String, required: false },
    thumbnail: { type: String, required: false },
  },
});

const Plant = mongoose.model("Plant", plantSchema);

module.exports = Plant;
