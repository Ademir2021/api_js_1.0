const jsonNFe = require('../../../json/nfe')
import { NFeDAO } from "../../Entities/NFe/NFeDAO";
import { INFe } from "../../Interfaces/NFe/NFe";
import { AutorizaNFe } from "./autoriza_nfe";
import { GeraXMLNFe } from "./gera_xml_nfe";
import { HandleNFe } from "./handleNFe/handleNFe";
import { GeraItemsNFe } from './gera_items_nfe';

class NFeDTO {

    private async findCEP(id: number) {
        const cep = await new NFeDAO().selectOne(NFeDAO.tbl_ceps, id, 'id_cep')
        return cep
    };
    private async findCity(id: number) {
        const city = await new NFeDAO().selectOne(NFeDAO.tbl_cities, id, 'id_city')
        return city
    }

    async handleNota(NFe: INFe) {
        const nota_ = await new NFeDAO().selectOne(NFeDAO.tbl_notas, NFe.id_nota, "id_sale")
        const nota = nota_[0]
        const filial_ = await new NFeDAO().selectOne(NFeDAO.tbl_filiais, NFe.fk_name_filial, "id_filial")
        const filial = filial_[0]
        const person_ = await new NFeDAO().selectOne(NFeDAO.tbl_persons, NFe.fk_name_pers, 'id_person')
        const person = person_[0]
        const items = await new NFeDAO().selectOne(NFeDAO.tbl_items_nota, NFe.id_nota, 'fk_sale')

        //Funções
        const cep = await this.findCEP(person.fk_cep)
        const city = await this.findCity(cep.code_city)

        // IDE
        const ide = jsonNFe.nfeProc.NFe.infNFe.ide
        ide.cUF = "35"
        ide.cNF = '00000001'
        ide.natOp = "VENDA"
        ide.mod = "55"
        ide.serie = "001"
        ide.nNF = "00000000" + nota.id_sale
        const dt = new HandleNFe().formatDateNFe()
        ide.dhEmi = dt
        ide.dhSaiEnt = dt
        ide.idDest = '1'
        ide.cMunFG = '4125506'
        ide.tpAmb = '2' // 1 Produção - 2 Homologação
        ide.tpNF = "000000001"
        ide.tpEmis = '2'

        // Dados do Emitente
        const emit = jsonNFe.nfeProc.NFe.infNFe.emit
        emit.CNPJ = filial.cnpj
        emit.xNome = filial.name_filial
        emit.enderEmit.xLgr = filial.address
        emit.enderEmit.nro = '1241'
        emit.enderEmit.xBairro = 'Centro'
        emit.enderEmit.cMun = '4102505'
        emit.enderEmit.xMun = 'Barbosa Ferraz'
        emit.enderEmit.CEP = '86960000'
        emit.enderEmit.UF = 'PR'
        emit.enderEmit.cPais = '1058'
        emit.enderEmit.xPais = 'Brasil'
        emit.IE = filial.inscric
        emit.CRT = filial.inscric

        // Dados do Destinatário
        const dest = jsonNFe.nfeProc.NFe.infNFe.dest
        dest.CNPJ = person.cnpj
        dest.xNome = person.name_pers
        dest.enderDest.xLgr = person.address_pers
        dest.enderDest.nro = person.num_address
        dest.enderDest.xBairro = person.bairro_pers
        dest.enderDest.cMun = city.code_ibge
        dest.enderDest.UF = city.uf
        dest.enderDest.xMun = city.name_city
        dest.enderDest.CEP = cep.num_cep
        dest.enderDest.cPais = '1058'
        dest.enderDest.xPais = 'Brasil'
        dest.indIEDest = person.inscricao
        dest.IE = person.inscricao

        const total = jsonNFe.nfeProc.NFe.infNFe.total
        total.ICMSTot.vBC = nota.total_sale
        total.ICMSTot.vICMS = 56.80
        total.ICMSTot.vProd = nota.val_rec
        total.ICMSTot.vNF = nota.val_rec
        total.ICMSTot.CNF = nota.total_sale

        const geraItemsNFe = new GeraItemsNFe()
        const gerarItemsNFe = await geraItemsNFe.gerarItemsNFe(items)
        console.log(gerarItemsNFe)

        const geraXMLNFe = new GeraXMLNFe()
        const gerarXMLNFe = geraXMLNFe.gerarXMLNFe()
        console.log(gerarXMLNFe)

        // const autorizaNFe = new AutorizaNFe()
        // const autorizarNFe = autorizaNFe.autorizarNFe()
        // console.log(autorizarNFe)

        return jsonNFe
    }
}

export { NFeDTO }