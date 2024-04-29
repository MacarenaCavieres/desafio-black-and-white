import "dotenv/config";
import express from "express";
import path from "path";
import emailRouter from "./routes/email.route.js";
import imageRouter from "./routes/image.route.js";

const app = express();

const __dirname = import.meta.dirname;

app.use(express.static(path.join(__dirname, "public")));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/", imageRouter);

app.use("/", emailRouter);

const PORT = process.env.PORT || 3000;

app.listen(PORT, (req, res) => {
    console.log(`http://localhost:${PORT}`);
});
