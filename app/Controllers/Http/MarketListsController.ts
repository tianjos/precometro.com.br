import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class MarketListsController {
  public async create({ view }: HttpContextContract) {
    return view.render('pages/market-lists/create')
  }

  public async store({ request, response }: HttpContextContract) {
    const marketList: string = request.input('market-list') ?? ''
    console.log(marketList)
    // const items = marketList.split('\r\n')
    // console.log(items[0])
    return response.json({ ok: 'it works' })
  }
}
