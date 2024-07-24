import { Request, Response } from "express"
import { DAO } from "../../Entities/DAO/DAO";
import { ContaReceber } from "../../Entities/ContaReceber/ContaReceber";
import { ContaReceberDAO } from "../../Entities/ContaReceber/ContaReceberDAO";
import { IContaAreceber } from "../../Interfaces/ContaReceber/ContaReceber";


class ContasReceberControllers extends DAO {
    async findAllContasReceber(request: Request, response: Response) {
        const contasReceber = await new ContasReceberControllers().select('contas_receber', 'id_conta')
        response.json(contasReceber)
    };
    async updateContasReceber(request: Request, response: Response) {

        const { id_conta, fk_filial, tipo, fk_venda, fk_user, parcela,
            valor, multa, juros, desconto, emissao, vencimento, saldo,
            pagamento, recebimento }: IContaAreceber | any = <IContaAreceber | any>request.body

        const contaReceber: ContaReceber = new ContaReceber(id_conta, fk_filial, tipo, fk_venda,
            fk_user, parcela, valor, multa, juros, desconto, emissao, vencimento,
            saldo, pagamento, recebimento)
        const updateConta = await new ContaReceberDAO().update(contaReceber)
        return response.json(updateConta)
    }
}

export { ContasReceberControllers }