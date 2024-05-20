import { IUser } from "../../Interfaces/User/User"
import { UserDAO } from "../../Entities/User/UserDAO"

const table = "users"
const msgAlreadyExists = { msg: 'Username already exists - Passed by DTO' }
const msgRecordSucess = { msg: 'Record com sucess - Passed by DTO' }
const msgUserNotFound = { msg: 'User not found' }
const msgUserUpdatedSuccessfully = { msg: 'User updated successfully' }

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
            return ([msgAlreadyExists, user])
        } else {
            this.saveUser(User)
            return ([msgRecordSucess, user])

        }
    };

    public async handleUpdateUser(User: IUser) {
        const user: any = await this.findUser(User)
        if (user[0].id === User.id) {
            const res = await this.updateUser(User)
            return ([msgUserUpdatedSuccessfully, "Find:", user, "Resp:", res])
        } else {
            return ([msgUserNotFound, user])
        }
    };
}

export { UsersDTO }