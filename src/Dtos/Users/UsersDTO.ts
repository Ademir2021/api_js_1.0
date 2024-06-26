import { IUser } from "../../Interfaces/User/User"
import { UserDAO } from "../../Entities/User/UserDAO"

const table = "users"
const msgAlreadyExists = { msg: 'Email já existe' }
const msgRecordSucess = { msg: 'Usuário cadastrado com sucesso' }
const msgUserNotFound = { msg: 'User não Localizado' }
const msgUserUpdatedSuccessfully = { msg: 'Usuário Atualizado com Sucesso' }

class UsersDTO {

    private async findUser(User: IUser) {
        const user = await new UserDAO().selectOne( table, User.id, 'id')
        return user
    };

    private async findUserName(User: IUser) {
        const userName = await new UserDAO().selectUsername(User)
        return userName
    };


    public async saveUser(User: IUser) {
        const user: any = await this.findUserName(User)
        if (user[0]) {
            return ([msgAlreadyExists])
        } else {
            await new UserDAO().insertUser(User)
            return ([msgRecordSucess])
        }
    };

    public async updateUser(User: IUser) {
        const user: any = await this.findUser(User)
        if (user[0].id === User.id) {
            const user = await new UserDAO().updateUSer(User)
            return (msgUserUpdatedSuccessfully)
        } else {
            return (msgUserNotFound)
        }
    };

    public async listUsersByLoggedInUser(id: number, privilege: number) {
        if (privilege == 2) {
            const users = await new UserDAO().select(table, 'id')
            return (users)
        } else {
            const users = await new UserDAO().selectOne( table, id, 'id')
            return (users)
        }
    };
}

export { UsersDTO }