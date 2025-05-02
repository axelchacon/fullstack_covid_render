import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import covidRoutes from "./routes/covid.js";

dotenv.config();
const app = express();

app.use(cors()); // 🟢 agrega esta línea
app.use(express.json());
app.use("/api", covidRoutes);

const PORT = 3002;
app.listen(PORT, () => {
	console.log(
		`🟢 Microservicio covid-query corriendo en http://localhost:${PORT}`
	);
});
