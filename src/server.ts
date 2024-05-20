import express, { NextFunction, Request, Response } from 'express';
import { routeUsers } from './Routes/RouteUsers';
import { routerAutheticate } from './Routes/RouteAuthenticate';
import { routeRefreshToken } from './Authenticate/refreshTokenUser/RouteRefreshToken';

const cors = require('cors');
const app = express();
app.use(cors())
const PORT = process.env.PORT || 3333;
app.use(express.json());

app.use(routerAutheticate)
app.use(routeRefreshToken)
app.use(routeUsers)

app.use(
    (error: Error, request: Request, response: Response, next: NextFunction) => {
        return response.json({
            status: "Error",
            message: error.message,
        })
    })

app.listen(PORT, () => console.log("server is runing on", { PORT }));