const jsonNFe = require('../../../json/nfe')
import { NFeDAO } from "../../Entities/NFe/NFeDAO";
import { INFe } from "../../Interfaces/NFe/NFe";
import { AutorizaNFe } from "./autoriza_nfe";
import { GeraXMLNFe } from "./gera_xml_nfe";
import { HandleNFe } from "./handleNFe/handleNFe";

class NFeDTO {

    async findNota(NFe: INFe) {
        const nota = await new NFeDAO().selectOne(NFeDAO.tbl_notas, NFe.id_nota, "id_sale")
        const filial = await new NFeDAO().selectOne(NFeDAO.tbl_filiais, NFe.fk_name_filial, "id_filial")
        const user = await new NFeDAO().selectOne(NFeDAO.tbl_users, NFe.fk_name_user, 'id')
        const person = await new NFeDAO().selectOne(NFeDAO.tbl_persons, NFe.fk_name_pers, 'id_person')
        const items = await new NFeDAO().selectOne(NFeDAO.tbl_items_nota, NFe.id_nota, 'fk_sale')

        // IDE
        const ide = jsonNFe.nfeProc.NFe.infNFe.ide
        ide.cUF = "35"
        ide.cNF = '00000001'
        ide.natOp = "VENDA"
        ide.mod = "55"
        ide.serie = "001"
        ide.nNF = "00000000" + nota[0].id_sale
        const dt = new HandleNFe().formatDateNFe()
        ide.dhEmi = dt
        ide.dhSaiEnt = dt
        ide.idDest = '1'
        ide.cMunFG = '4125506'
        ide.tpAmb = '2'
        ide.tpNF = "000000001"
        ide.tpEmis = '2'

        // Dados do Emitente
        const emit = jsonNFe.nfeProc.NFe.infNFe.emit
        emit.CNPJ = filial[0].cnpj
        emit.xNome = filial[0].name_filial
        emit.enderEmit.xLgr = filial[0].address
        emit.enderEmit.nro = '200'
        emit.enderEmit.xBairro = 'Centro'
        emit.enderEmit.cMun = '4102505'
        emit.enderEmit.xMun = 'Barbosa Ferraz'
        emit.enderEmit.CEP = '86960000'
        emit.enderEmit.UF = 'PR'
        emit.enderEmit.cPais = '1058'
        emit.enderEmit.xPais = 'Brasil'
        emit.IE = 'Isento'
        emit.CRT = '3'

        // Dados do Destinatário
        const dest = jsonNFe.nfeProc.NFe.infNFe.dest
        dest.CNPJ = person[0].cnpj
        dest.xNome = person[0].name_pers
        dest.enderDest.xLgr = person[0].address_pers
        dest.enderDest.nro = person[0].num_address
        dest.enderDest.xBairro = person[0].bairro_pers
        dest.enderDest.cMun = '4102505'
        dest.enderDest.xMun = 'Barbosa Ferraz'
        dest.enderDest.CEP = '86960000'
        dest.enderDest.cPais = '1058'
        dest.enderDest.xPais = 'Brasil'
        dest.indIEDest = '1'
        dest.IE = 'Isento'

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