import { IUser } from "../../Interfaces/User/User"
import { UserDAO } from "../../Entities/User/UserDAO"

const table = "users"
const msgAlreadyExists = { msg: 'Email já existe' }
const msgRecordSucess = { msg: 'Usuário cadastrado com sucesso' }
const msgUserNotFound = { msg: 'User não Localizado' }
const msgUserUpdatedSuccessfully = { msg: 'Usuário Atualizado com Sucesso' }

class UsersDTO {

    private async findUser(User: IUser) {
        const user = await new UserDAO().selectOne(User.id, table, 'id')
        return user
    };

    private async findUserName(User: IUser) {
        const userName = await new UserDAO().selectUsername(User)
        return userName
    };

    private async saveUser(User: IUser) {
        await new UserDAO().insertUser(User)
    };

    private async updateUser(User: IUser) {
        const userUpdate = await new UserDAO().updateUSer(User)
        return userUpdate
    };

    public async handleSaveUser(User: IUser) {
        const user: any = await this.findUserName(User)
        if (user[0]) {
            return ([msgAlreadyExists])
        } else {
            this.saveUser(User)
            return ([msgRecordSucess])

        }
    };

    public async handleUpdateUser(User: IUser) {
        const user: any = await this.findUser(User)
        if (user[0].id === User.id) {
            const res = await this.updateUser(User)
            return (msgUserUpdatedSuccessfully)
        } else {
            return (msgUserNotFound)
        }
    };
}

export { UsersDTO }