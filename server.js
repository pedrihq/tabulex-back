import express from "express";
import cors from "cors";
import routes from "./src/routes/productsRoutes.js"

const app = express();

app.use(express.json());
app.use(cors({ origin: "*" }));

routes(app)

app.listen(8000,"0.0.0.0",() => {
    console.log("Servidor escutando na porta 8000...");
});
