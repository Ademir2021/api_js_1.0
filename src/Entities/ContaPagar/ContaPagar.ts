import { IContaAPagar } from "../../Interfaces/ContaPagar/ContaPagar";
import { ContaPagarDAO } from "./ContaPagarDAO";

class ContasPagar extends ContaPagarDAO implements IContaAPagar {
    id_conta
    fk_filial: number
    tipo: string
    fk_compra: number
    fk_user: number
    parcela: number | string
    valor: number
    multa: number
    juros: number
    desconto: number
    emissao: Date | string
    vencimento: Date | string
    saldo: number
    pagamento: Date | null
    recebimento: number
    observacao: string | null
    fk_beneficiario: number
    fk_despesa: number
    constructor(
        id_conta: number,
        fk_filial: number,
        tipo: string,
        fk_compra: number,
        fk_user: number,
        parcela: number | string,
        valor: number,
        multa: number,
        juros: number,
        desconto: number,
        emissao: Date | string,
        vencimento: Date | string,
        saldo: number | any,
        pagamento: Date | any | null,
        recebimento: number | any,
        observacao: string | null,
        fk_beneficiario: number,
        fk_despesa:number
    ) {
        super()
        this.id_conta = id_conta
        this.fk_filial = fk_filial
        this.tipo = tipo
        this.fk_compra = fk_compra
        this.fk_user = fk_user
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
        this.observacao = observacao
        this.fk_beneficiario = fk_beneficiario
        this.fk_despesa = fk_despesa
    }
}

export { ContasPagar }