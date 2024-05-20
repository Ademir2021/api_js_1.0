import { IUser } from "../../Interfaces/User/User"
import { UserDAO } from "../../Entities/User/UserDAO"

const table = "users"
const loginSuccessfully = { login: true, msg: "User successfully logged in - Passou pelo service para efetuar Login !" }
const unsuccessfulLogin = { login: false, msg: "Username or password is invalid - Passou pelo service para efetuar Login !" }

class UsersServices {

    private async findUser(User: IUser) {
        const user = await new UserDAO().selectOne(User.id, table, 'id')
        return user
    };

    async loginUser(User: IUser) {
        const userLogin = await this.findUser(User)
        if (userLogin[0].username === User.username && userLogin[0].password === User.password) {
            return ([loginSuccessfully, User])
        } else {
            return ([unsuccessfulLogin, User])
        }
    };
}

export { UsersServices }