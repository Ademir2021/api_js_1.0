import { IUser } from "../../Interfaces/User/User"
import { UserDAO } from "../../Entities/User/UserDAO"

class UsersServices {
    async loginUser(User: IUser) {
        const userLogin = await new UserDAO().selectUsername(User)
        return (userLogin)
    };
}

export { UsersServices }