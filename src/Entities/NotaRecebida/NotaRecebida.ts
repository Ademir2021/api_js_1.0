import { IContaAPagar } from "../../Interfaces/ContaPagar/ContaPagar";
import { INotaRecebida, IItems } from "../../Interfaces/NotaRecebida/NotaRecebida";
import { IValsPagos } from "../../Interfaces/ValsPagos/ValsPagos";
import { NotaRecebidaDAO } from "./NotaRecebidaDAO";

class NotaRecebida extends NotaRecebidaDAO implements INotaRecebida {
    fkFornecedor = 0
    data: Date 
    emissao: Date
    numNota = 0
    modelo = ''
    vFrete = 0
    vSeguro = 0
    despAcessorias = 0
    encargos = 0
    acrescimo = 0
    desconto = 0
    tProdutos = 0
    total = 0
    items: IItems[] = []
    contaAPagar: IContaAPagar[] = []
    valsPago: IValsPagos[] = []
    constructor(
        fkFornecedor: number,
        data: Date,
        emissao: Date,
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
        valsPago: IValsPagos[]
    ) {
        super()
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