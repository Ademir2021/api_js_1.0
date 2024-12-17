import { DAO } from "../DAO/DAO";

class NFeDAO extends DAO {
    public static tbl_notas = 'sales'
    public static tbl_filiais = 'filiais'
    public static tbl_users = 'users'
    public static tbl_persons = 'persons'
    public static tbl_items_nota = 'itens_sale'
    
}

export { NFeDAO }