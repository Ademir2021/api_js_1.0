import { INotaRecebida, IItems, IContaAPagar, IValsPago } from "../../Interfaces/NotaRecebida/NotaRecebida";
import { NotaRecebidaDAO } from "./NotaRecebidaDAO";

class NotaRecebida extends NotaRecebidaDAO implements INotaRecebida {
    fkFornecedor = 0
    data: Date | any
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
    contaAPagar: IContaAPagar[] = []
    valsPago: IValsPago[] = []
    constructor(
        // id: number,
        fkFornecedor: number,
        data: Date | any,
        emissao: Date | any,
        numNota: number,
        modelo: string,
        vFrete: number,
        vSeguro: number,
        despAcessorias: number,
        encargos: number,
        acrescimo: number,
        desconto: number,
        tprodutos: number,
        total: number,
        items: IItems[],
        contaAPagar: IContaAPagar[],
        valsPago: IValsPago[]
    ) {
        super()
        // this.id = id
        this.fkFornecedor = fkFornecedor
        this.data = data
        this.emissao = emissao
        this.numNota = numNota
        this.modelo = modelo
        this.vFrete = vFrete
        this.vSeguro = vSeguro
        this.despAcessorias = despAcessorias
        this.encargos = encargos
        this.acrescimo = acrescimo
        this.desconto = desconto
        this.tProdutos = tprodutos
        this.total = total
        this.items = items
        this.contaAPagar = contaAPagar
        this.valsPago = valsPago
    }
}

export { NotaRecebida }