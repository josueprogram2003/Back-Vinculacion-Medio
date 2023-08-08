import express from "express";
import morgan from "morgan";
import alumnoRoutes from './routes/alumno.routes'
const app = express();
let cors = require("cors");
app.use(express.json());
app.use(cors());
app.use(morgan("dev"));

app.get("/", (req, res) => {
  res.send("Bienvenido a Node JS.......!");
});
app.use('/api/alumno', alumnoRoutes)


export default app;