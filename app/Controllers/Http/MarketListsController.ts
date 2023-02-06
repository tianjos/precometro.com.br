import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class MarketListsController {
  public async create({ view }: HttpContextContract) {
    return view.render('pages/market-lists/create')
  }

  public async store({ response }: HttpContextContract) {
    return response.json({ ok: 'it works' })
  }
}
