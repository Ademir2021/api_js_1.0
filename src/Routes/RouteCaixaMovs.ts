import { Router } from 'express'
import { CaixaMovsControllers  } from '../Controllers/CaixaMovs/CaixaMovsControllers'

const routerCaixaMovs = Router()
const caixaMovsControllers = new CaixaMovsControllers()

routerCaixaMovs.post('/caixa_movs', caixaMovsControllers.listCaixaMovs)

export {routerCaixaMovs}