import { IContaAreceber } from "../../Interfaces/ContaReceber/ContaReceber";
import { ContaReceberDAO } from "./ContaReceberDAO";


class ContaReceber extends ContaReceberDAO implements IContaAreceber {

    fkFilial = 0
    tipo: string | number | any
    fkVenda = 0
    fkUser = 0
    parcela:number | string
    valor = 0
    multa = 0
    juros = 0
    desconto = 0
    emissao: Date | any
    vencimento: Date | any
    saldo = 0
    pagamento: Date | any
    recebimento = 0
    constructor(
        id:number,
        fkFilial: number,
        tipo: string,
        fkVenda: number,
        fkUser: number,
        parcela: string,
        valor: number,
        multa: number,
        juros: number,
        desconto: number,
        emissao: Date | any,
        vencimento: Date | any,
        saldo: number,
        pagamento: Date | any,
        recebimento: number
    ) {
        super()
        this.id = id
        this.fkFilial = fkFilial
        this.tipo = tipo
        this.fkVenda = fkVenda
        this.fkUser = fkUser
        this.parcela = parcela
        this.valor = valor
        this.multa = multa
        this.juros = juros
        this.desconto = desconto
        this.emissao = emissao
        this.vencimento = vencimento
        this.saldo = saldo
        this.pagamento = pagamento
        this.recebimento = recebimento
    }
}

export { ContaReceber }