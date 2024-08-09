import { Request, Response } from "express"
import { DAO } from "../../Entities/DAO/DAO";
import { ContaReceber } from "../../Entities/ContaReceber/ContaReceber";
import { ContaReceberDAO } from "../../Entities/ContaReceber/ContaReceberDAO";
// import { IContaAreceber } from "../../Interfaces/ContaReceber/ContaReceber";
// import { IContaAreceber as ITitulo } from "../../Interfaces/Sale/Sale";

export type TContaAreceber = {
    id_conta: number
    fk_filial: number
    tipo: string
    fk_venda: number
    fk_user: number
    parcela: number | string | any
    valor: number | any
    multa: number | any
    juros: number | any
    desconto: number | any
    emissao: Date | string | any
    vencimento: Date | string | any
    saldo: number | any
    pagamento: Date | any | null
    recebimento: number | any
    observacao: string | null | any
    fk_pagador: number
}

class ContasReceberControllers extends DAO {

    async findAllContasReceber(request: Request, response: Response) {
        const contasReceber = await new ContasReceberControllers().select('contas_receber', 'vencimento')
        response.json(contasReceber)
    };

    async updateContasReceber(request: Request, response: Response) {
        const resp: TContaAreceber = <TContaAreceber>request.body
        const contaReceber: ContaReceber = new ContaReceber(
            resp.id_conta, resp.fk_filial, resp.tipo, resp.fk_venda,
            resp.fk_user, resp.parcela, resp.valor, resp.multa, resp.juros,
            resp.desconto, resp.emissao, resp.vencimento, resp.saldo,
            resp.pagamento, resp.recebimento, resp.observacao, resp.fk_pagador)
        const updateConta = await new ContaReceberDAO().update(contaReceber)
        return response.json(updateConta)
    }

    async saveContasReceber(request: Request, response: Response) {
        const resp: TContaAreceber = <TContaAreceber>request.body
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