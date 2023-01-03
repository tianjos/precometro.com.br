import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class HomeController {
    public async index({ view }: HttpContextContract) {
        return view.render('pages/home/index')
    }
}