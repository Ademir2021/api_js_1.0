import { Request, Response } from "express"
import { NotaRecebida } from "../../Entities/NotaRecebida/NotaRecebida"
import { INotaRecebida } from "../../Interfaces/NotaRecebida/NotaRecebida"

class NotaRecebidaControllers{
    registerNotaRecebida(request: Request, response: Response){
        const resp:INotaRecebida = request.body
        const notaRecebida:NotaRecebida = new NotaRecebida(
            resp.fkFornecedor,
            resp.data,
            resp.emissao,
            resp.numNota,
            resp.modelo,
            resp.vFrete,
            resp.vSeguro,
            resp.despAcessorias,
            resp.encargos,
            resp.acrescimo,
            resp.desconto,
            resp.tProdutos,
            resp.total,
            resp.items,
            resp.contaAPagar,
            resp.valsPago,

        )
        console.log(notaRecebida)
    };
}

export { NotaRecebidaControllers }