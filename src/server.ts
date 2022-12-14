import express from "express";
import { routes } from "../src/routes";
import cors from 'cors';

const app = express();

app.use(cors());
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use(routes);

const port = 3000;
app.listen(port, () => console.log(`Server running on ${port}/player`));
