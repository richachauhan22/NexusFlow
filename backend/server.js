
const express = require("express");

const app = express();
app.use(express.json());
const PORT = 5000;

app.get("/", (req, res) => {
  res.send("NexusFlow Backend is Running!");
});




app.post("/api/telemetry", (req, res) => {
  const sensorData = req.body;

  console.log("Received Sensor Data:", sensorData);

  res.status(201).json({
    message: "Telemetry received successfully!",
    data: sensorData,
  });
});





app.listen(PORT, () => {
  console.log(`NexusFlow server running on port ${PORT}`);
});
