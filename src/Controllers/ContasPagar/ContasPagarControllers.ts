import { Request, Response } from "express"
import { DAO } from "../../Entities/DAO/DAO"
import { IContaAPagar } from "../../Interfaces/ContaPagar/ContaPagar"
import { ContasPagar } from "../../Entities/ContaPagar/ContaPagar"
import { ContaPagarDAO } from "../../Entities/ContaPagar/ContaPagarDAO"

class ContasPagarControllers extends DAO {

    async saveContasPagar(request: Request, response: Response) {
        const resp: IContaAPagar = <IContaAPagar>request.body
        const contaAPagar: ContasPagar = new ContasPagar(
            resp.id_conta,
            resp.fk_filial,
            resp.tipo,
            resp.fk_compra,
            resp.fk_user,
            resp.parcela,
            resp.valor,
            resp.multa,
            resp.juros,
            resp.desconto,
            resp.emissao,
            resp.vencimento,
            resp.saldo,
            resp.pagamento,
            resp.recebimento,
            resp.observacao,
            resp.fk_beneficiario,
            resp.fk_despesa
        );
        const insertConta = await new ContaPagarDAO().insert(contaAPagar)
        response.json(insertConta)
    };

    async updateContasPagar(request: Request, response: Response) {
        const resp: IContaAPagar = <IContaAPagar>request.body
        const constaAPagar: ContasPagar = new ContasPagar(
            resp.id_conta,
            resp.fk_filial,
            resp.tipo,
            resp.fk_compra,
            resp.fk_user,
            resp.parcela,
            resp.valor,
            resp.multa,
            resp.juros,
            resp.desconto,
            resp.emissao,
            resp.vencimento,
            resp.saldo,
            resp.pagamento,
            resp.recebimento,
            resp.observacao,
            resp.fk_beneficiario,
            resp.fk_despesa
        );
        const updateConta = await new ContaPagarDAO().update(constaAPagar)
        return response.json(updateConta)
    };
    
    async findAllContasPagar(request: Request, response: Response) {
        const contasPagar = await new ContasPagarControllers().select('contas_pagar', 'vencimento')
        response.json(contasPagar)
    };
}

export { ContasPagarControllers }