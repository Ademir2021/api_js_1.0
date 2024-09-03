import { Request, Response } from "express"
import { DAO } from "../../Entities/DAO/DAO";
import { ContaReceber } from "../../Entities/ContaReceber/ContaReceber";
import { ContaReceberDAO } from "../../Entities/ContaReceber/ContaReceberDAO";
import { IContaAreceber } from "../../Interfaces/ContaReceber/ContaReceber";

class ContasReceberControllers extends DAO {

    async findAllContasReceber(request: Request, response: Response) {
        const contasReceber = await new ContasReceberControllers().select('contas_receber', 'vencimento')
        response.json(contasReceber)
    };

    async updateContasReceber(request: Request, response: Response) {
        const resp: IContaAreceber = <IContaAreceber>request.body
        const contaReceber: ContaReceber = new ContaReceber(
            resp.id_conta, resp.fk_filial, resp.tipo, resp.fk_venda,
            resp.fk_user, resp.parcela, resp.valor, resp.multa, resp.juros,
            resp.desconto, resp.emissao, resp.vencimento, resp.saldo,
            resp.pagamento, resp.recebimento, resp.observacao, resp.fk_pagador)
        const updateConta = await new ContaReceberDAO().update(contaReceber)
        return response.json(updateConta)
    }

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
}

export { ContasReceberControllers }