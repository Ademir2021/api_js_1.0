import { Request, Response } from "express"
import { IUser } from "../../Interfaces/User/User"
import { User } from "../../Entities/User/User"
import { UsersDTO } from "../../Dtos/Users/UsersDTO"
import { UsersServices } from "../../Services/Users/UsersServices"
import { UserDAO } from "../../Entities/User/UserDAO"

const table = UserDAO.table

class UsersControllers {

    async saveUser(request: Request, response: Response) {
        const { id, name, username, password, privilege }: IUser = <IUser>request.body
        const user: User = new User(id, name, username, password, privilege)
        const userDTOSave = await new UsersDTO().saveUser(user)
        response.json(userDTOSave)
    };

    async listUsers(request: Request, response: Response) {
        const { id, privilege }: IUser = <IUser>request.body[0]
        const usersDTOList = await new UsersDTO().listUsersByLoggedInUser(id, privilege)
        response.json(usersDTOList)
    };

    async listUser(request: Request, response: Response) {
        const { id }: IUser = <IUser>request.body
        const listUser = await new UserDAO().selectOne(table, id, 'id')
        response.json(listUser)
    };

    async updateUser(request: Request, response: Response) {
        const { id, name, username, password, privilege }: IUser = <IUser>request.body
        const user: User = new User(id, name, username, password, privilege)
        const userDTOUpdate = await new UsersDTO().updateUser(user)
        response.json([userDTOUpdate, user])
    };

    async deleteUser(request: Request, response: Response) {
        const { id }: IUser = <IUser>request.body
        const deleteUser = await new UserDAO().delete( table, id, 'id')
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
