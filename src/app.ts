import "reflect-metadata";
import express from "express";
import "./database/index";
import { routes } from "../src/app/routes/index";

const app = express();

app.use(express.json());
app.use(routes);

export {app};