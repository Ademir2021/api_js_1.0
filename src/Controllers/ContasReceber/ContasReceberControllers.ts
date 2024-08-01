import { Request, Response } from "express"
import { DAO } from "../../Entities/DAO/DAO";
import { ContaReceber } from "../../Entities/ContaReceber/ContaReceber";
import { ContaReceberDAO } from "../../Entities/ContaReceber/ContaReceberDAO";
import { IContaAreceber } from "../../Interfaces/ContaReceber/ContaReceber";
import { IContaAreceber as ITitulo } from "../../Interfaces/Sale/Sale";

class ContasReceberControllers extends DAO {

    async findAllContasReceber(request: Request, response: Response) {
        const contasReceber = await new ContasReceberControllers().select('contas_receber', 'id_conta')
        response.json(contasReceber)
    };

    async updateContasReceber(request: Request, response: Response) {
        const { id_conta, fk_filial, tipo, fk_venda, fk_user, parcela,
            valor, multa, juros, desconto, emissao, vencimento, saldo,
            pagamento, recebimento, observacao, pagador }: IContaAreceber | any = <IContaAreceber | any>request.body
        const contaReceber: ContaReceber = new ContaReceber(id_conta, fk_filial, tipo, fk_venda,
            fk_user, parcela, valor, multa, juros, desconto, emissao, vencimento,
            saldo, pagamento, recebimento, observacao, pagador)
        const updateConta = await new ContaReceberDAO().update(contaReceber)
        return response.json(updateConta)
    }

    async saveContasReceber(request: Request, response: Response) {
        const { id_conta, fk_filial, tipo, fk_venda, fk_user, parcela,
            valor, multa, juros, desconto, emissao, vencimento, saldo,
            pagamento, recebimento, observacao, fk_pagador }: IContaAreceber | any = <IContaAreceber | any>request.body
        const contaReceber: ContaReceber  = new ContaReceber(id_conta, fk_filial, tipo, fk_venda,
            fk_user, parcela, valor, multa, juros, desconto, emissao, vencimento,
            saldo, pagamento, recebimento, observacao, fk_pagador)
        const insertConta = await new ContaReceberDAO().insert(contaReceber)
        return response.json(insertConta)
    }
}

export { ContasReceberControllers }