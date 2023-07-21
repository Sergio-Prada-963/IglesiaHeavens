import express from 'express';
import cors from 'cors';
import routerCreyentes from './mysqlDB/src/routes/creyentes.routes.js';

const app = express();
app.set("port",5001);

app.use(cors());

app.use(express.json());


app.use("/api/creyentes",routerCreyentes)



export default app;