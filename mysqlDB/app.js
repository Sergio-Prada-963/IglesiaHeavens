import express from 'express';
import cors from 'cors';
import routerCreyentes from './src/routes/creyentes.routes.js';
import routerDepartamento from './src/routes/departamento.routes.js';
import routerMunicipio from './src/routes/municipio.routes.js';
import routerComuna from './src/routes/comuna.routes.js';
import routerBarrio from './src/routes/barrio.routes.js';
import config from './config.js';

const app = express();
app.set("port",config.port)
app.use(cors());
app.use(express.json());
app.use("/api/creyentes",routerCreyentes);
app.use("/api/departamento",routerDepartamento);
app.use("/api/municipio",routerMunicipio);
app.use("/api/comuna",routerComuna);
app.use("/api/barrio",routerBarrio);

export default app;