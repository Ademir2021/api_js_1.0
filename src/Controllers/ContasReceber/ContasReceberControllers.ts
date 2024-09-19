import { Request, Response } from "express"
import { DAO } from "../../Entities/DAO/DAO";
import { ContaReceber } from "../../Entities/ContaReceber/ContaReceber";
import { ContaReceberDAO } from "../../Entities/ContaReceber/ContaReceberDAO";
import { IContaAreceber } from "../../Interfaces/ContaReceber/ContaReceber";
import { IUser } from "../../Interfaces/User/User";
import { ContasAReceberDTO } from "../../Dtos/ContasAReceber/ContasAReceberDTO";

class ContasReceberControllers extends DAO {

    async saveContasReceber(request: Request, response: Response) {
        const resp: IContaAreceber = <IContaAreceber>request.body
        const contaReceber: ContaReceber = new ContaReceber(
            resp.id_conta, resp.fk_filial, resp.tipo, resp.fk_venda,
            resp.fk_user, resp.parcela, resp.valor, resp.multa, resp.juros,
            resp.desconto, resp.emissao, resp.vencimento, resp.saldo,
            resp.pagamento, resp.recebimento, resp.observacao, resp.fk_pagador)
        const insertConta = await new ContaReceberDAO().insert(contaReceber)
        return response.json(insertConta)
    }

    async updateContasReceber(request: Request, response: Response) {
        const resp: IContaAreceber = <IContaAreceber>request.body
        const contaReceber: ContaReceber = new ContaReceber(
            resp.id_conta, resp.fk_filial, resp.tipo, resp.fk_venda,
            resp.fk_user, resp.parcela, resp.valor, resp.multa, resp.juros,
            resp.desconto, resp.emissao, resp.vencimento, resp.saldo,
            resp.pagamento, resp.recebimento, resp.observacao, resp.fk_pagador)
        const updateConta = await new ContaReceberDAO().update(contaReceber)
        return response.json(updateConta)
    };
    async findAllContasReceberlist(request: Request, response: Response) {
        const { id, privilege }: IUser = <IUser>request.body[0]
         const contasReceber = await new ContasAReceberDTO().listContasAReceberByLoggedInUser(id, privilege)
        response.json(contasReceber)
    };
}

export {ContasReceberControllers }