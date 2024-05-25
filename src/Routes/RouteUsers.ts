import { Router } from "express"
import { UsersControllers } from "../Controllers/Users/UsersControllers";
import { postgreSQL } from "../Providers/Storages/pg/postgreSQL";
import { ensureAuthenticated } from "../middlewares/EnsureAuthenticated";

postgreSQL.connect()

const routeUsers = Router();
const usersControllers= new UsersControllers()

routeUsers.post('/users_list', ensureAuthenticated, usersControllers.listUsers)
routeUsers.post('/user_list', usersControllers.listUser)
routeUsers.post('/user', usersControllers.saveUser)
routeUsers.put('/user_update', usersControllers.updateUser)
routeUsers.delete('/user_delete', usersControllers.deleteUser)
routeUsers.post('/login', ensureAuthenticated, usersControllers.userLogin)

export { routeUsers }