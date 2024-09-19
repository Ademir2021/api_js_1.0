import { ContaPagarDAO } from "../../Entities/ContaPagar/ContaPagarDAO";

const table = ContaPagarDAO.table

class ContasAPagarDTO {
    private async findContasAPagarByLoggedInUser(id: number) { // Cliente
        const contas = await new ContaPagarDAO().selectOne(table, id, "fk_user")
        return (contas)
    };
    private async findContasAPagarAdmin() { // Admin Privilege == 2
        const contas = await new ContaPagarDAO().select(table, "vencimento")
        return (contas)
    };
    async listContasAPagarByLoggedInUser(id: number, privilege: number) {
        if (privilege == 2) {
            const contas = await this.findContasAPagarAdmin()
            return contas
        } else {
            const contas = await this.findContasAPagarByLoggedInUser(id)
            return contas
        }
    };
}

export { ContasAPagarDTO }