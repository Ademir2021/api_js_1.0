import { Request, Response, response } from "express"
import { IUser } from "../../Interfaces/User/User"
import { User } from "../../Entities/User/User"
import { UsersDTO } from "../../Dtos/Users/UsersDTO"
import { UsersServices } from "../../Services/Users/UsersServices"
import { UserDAO } from "../../Entities/User/UserDAO"

const table = UserDAO.table
const msgUnsuccessful = { msg: "End unsuccessful - Passed by UsersControlles" }
const msgSuccessfully = { msg: "End successfully - Passed by UsersControlles" }

class UsersControllers {

    async saveUser(request: Request, response: Response) {
        const { id, name, username, password, privilege }: IUser = <IUser>request.body
        const user: User = new User(id, name, username, password, privilege)
        user.setName(name)
        const userDTOSave = await new UsersDTO().handleSaveUser(user)
        if (userDTOSave) {
            response.json([user.getName(), userDTOSave, msgUnsuccessful, user])
        } else {
            response.json([msgSuccessfully, user])
        }
    };

    async listUsers(request: Request, response: Response) {
        const users = await new UserDAO().select(table, 'id')
        response.json(users)
    };

    async listUser(request: Request, response: Response) {
        const { id }: IUser = <IUser>request.body
        const listUser = await new UserDAO().selectOne(id, table, 'id')
        response.json(listUser)
    };

    async updateUser(request: Request, response: Response) {
        const { id, name, username, password, privilege }: IUser = <IUser>request.body
        const user: User = new User(id, name, username, password, privilege)
        const userDTOUpdate = await new UsersDTO().handleUpdateUser(user)
        response.json([userDTOUpdate, user])
    };

    async deleteUser(request: Request, response: Response) {
        const { id }: IUser = <IUser>request.body
        const deleteUser = await new UserDAO().delete(id, table, 'id')
        response.json(deleteUser)
    };

    async userLogin(request: Request, response: Response) {
        const { id, name, username, password, privilege }: IUser = <IUser>request.body
        const user: User = new User(id, name, username, password, privilege)
        const userLogin = await new UsersServices().loginUser(user)
        response.json(userLogin)
    };
}

export { UsersControllers }
