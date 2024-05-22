import { Request, Response } from "express"
import { IUser } from "../../Interfaces/User/User"
import { User } from "../../Entities/User/User"
import { UsersDTO } from "../../Dtos/Users/UsersDTO"
import { UsersServices } from "../../Services/Users/UsersServices"
import { UserDAO } from "../../Entities/User/UserDAO"

const table = UserDAO.table
const msg = { msg: "Passed by UsersControllers" }

class UsersControllers {

    async saveUser(request: Request, response: Response) {
        const { id, name, username, password, privilege }: IUser = <IUser>request.body
        const user: User = new User(id, name, username, password, privilege)
        user.setName(name)
        const userDTOSave = await new UsersDTO().handleSaveUser(user)
        response.json([user.getName(), userDTOSave, msg, user])
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
        response.json([userDTOUpdate, msg, user])
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
