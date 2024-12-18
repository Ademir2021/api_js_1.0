import { DAO } from "../DAO/DAO";

class NFeDAO extends DAO {
    public static tbl_notas = 'sales'
    public static tbl_filiais = 'filiais'
    public static tbl_users = 'users'
    public static tbl_persons = 'persons'
    public static tbl_items_nota = 'itens_sale'
    public static tbl_products = 'products'
    public static tbl_table_trib = 'table_trib'
    public static tbl_un_meds = 'un_meds'
    public static tbl_ceps = 'ceps'
    public static tbl_cities = 'cities'
    public static tbl_paises = 'paises' 
}

export { NFeDAO }