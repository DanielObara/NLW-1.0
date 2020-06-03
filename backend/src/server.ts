import express from "express";
import routes from "./routes";
import path from "path";
import cors from "cors";

const app = express();

app.use(express.json());
app.use(cors());
app.use(routes);

app.use("/uploads", express.static(path.resolve(__dirname, "..", "uploads")));

app.listen(3333, () => {
	console.log("🚨️ Bug-end started! To de brinks ;D");
});
