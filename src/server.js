const express = require("express");
const cors = require("cors");
const sequelize = require("./db");

const worshipRoutes = require("./routes/worship");
const eventsRoutes = require("./routes/events");
const sermonsRoutes = require("./routes/sermons");

const app = express();
app.use(cors());
app.use(express.json());

// Sync models with DB (creates tables if not exist)
sequelize.sync();

app.use("/api/worship", worshipRoutes);
app.use("/api/events", eventsRoutes);
app.use("/api/sermons", sermonsRoutes);

const PORT = 5000;
app.listen(PORT, () => console.log(`Backend running on port ${PORT}`));
