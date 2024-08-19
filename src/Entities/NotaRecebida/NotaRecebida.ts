import { INotaRecebida, IItems, IContaAPagar, IValsPago } from "../../Interfaces/NotaRecebida/NotaRecebida";
import { NotaRecebidaDAO } from "./NotaRecebidaDAO";


class NotaRecebida extends NotaRecebidaDAO implements INotaRecebida {
    fkFornecedor = 0
    data:Date | any
    emissao: Date | any
    numNota = 0
    modelo = ''
    vFrete: number | any
    vSeguro: number | any
    despAcessorias: number | any
    encargos: number | any
    acrescimo: number | any
    desconto: number | any
    tProdutos: number | any
    total: number | any
    items: IItems[] = []
    contaAPagar:IContaAPagar[] = []
    valsPago: IValsPago[] = []
    constructor(fkFornecedor:number, items:IItems){
        super()
        this.fkFornecedor = fkFornecedor
    }

}

export { NotaRecebida }