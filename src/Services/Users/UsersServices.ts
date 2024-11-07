import { IUser, IUserRecoverPass } from "../../Interfaces/User/User"
import { UserDAO } from "../../Entities/User/UserDAO"
import { UsersDTO } from "../../Dtos/Users/UsersDTO"
import { HandleService } from "../../Providers/Mail/nodeMailer"

class UsersServices {
    async loginUser(User: IUser) {
        const userLogin = await new UserDAO().selectUsername(User)
        return (userLogin)
    };

    public async userRecoverPass(User: IUserRecoverPass) {
        const resp = await new UsersDTO().userRecoverPass(User)
        const res = await new UserDAO().recoverUpdateUSer(User)
        const handleService = new HandleService()
        handleService.setSendMailRecoverUserPass(User.username, User.hash )
        return resp
    };
}

export { UsersServices }