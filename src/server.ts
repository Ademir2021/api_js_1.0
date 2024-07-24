import express, { NextFunction, Request, Response } from 'express';
import { routeUsers } from './Routes/RouteUsers';
import { routerAutheticate } from './Routes/RouteAuthenticate';
import { routeRefreshToken } from './Authenticate/refreshTokenUser/RouteRefreshToken';
import { routerPersons } from './Routes/RoutePersons';
import { routerProducts } from './Routes/RouteProducts';
import { routerSales } from './Routes/RouteSales';
import { routeNotes } from './Routes/RouteNotes';
import { routeBrands } from './Routes/RouteBrands';
import { routeSectors } from './Routes/RouteSectors';
import { routeCeps } from './Routes/RouteCeps';
import { routeCities } from './Routes/RouteCities';
import { routePagSeguro } from './Routes/RoutePagSeguro';
import { routeContacts } from './Routes/RouteContacts';
import { routeContabilidades } from './Routes/RouteContabilidades';
import { routeContasReceber } from './Routes/RouteContasReceber';
import { routerValsRecebidos } from './Routes/RouteValsRecebidos';

const cors = require('cors');
const app = express();
app.use(cors())
const PORT = process.env.PORT || 3000;
app.use(express.json());

app.use(routerAutheticate)
app.use(routeRefreshToken)
app.use(routeUsers)
app.use(routerPersons)
app.use(routerProducts)
app.use(routerSales)
app.use(routeNotes)
app.use(routeBrands)
app.use(routeSectors)
app.use(routeCeps)
app.use(routeCities)
app.use(routePagSeguro)
app.use(routeContacts)
app.use(routeContabilidades)
app.use(routeContasReceber)
app.use(routerValsRecebidos)

app.use(
    (error: Error, request: Request, response: Response, next: NextFunction) => {
        return response.json({
            status: "Error",
            message: error.message,
        })
    })

app.listen(PORT, () => console.log("server is runing on", { PORT }));