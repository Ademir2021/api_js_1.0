import { NFeDTO } from "../../Dtos/NFe/NFeDTO";
import { INFe } from "../../Interfaces/NFe/NFe";

class NFeServices {
    async findNota(NFe: INFe) {
        const res = await new NFeDTO().findNota(NFe)
        return (res)
    }
}

export { NFeServices }