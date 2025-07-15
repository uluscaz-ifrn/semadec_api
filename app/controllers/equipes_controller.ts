import type { HttpContext } from '@adonisjs/core/http'
import Equipe from '#models/equipe'

export default class EquipesController {
  public async index({ }: HttpContext) {
    return await Equipe.all()
  }

  public async store({ request }: HttpContext) {
    return await Equipe.create(
      request.only(['nome', 'genero', 'validado', 'cursoId', 'modalidadeId'])
    )
  }

  public async update({ request, params }: HttpContext) {
    const equipe = await Equipe.findOrFail(params.id)
    equipe.merge(request.only(['nome', 'genero', 'validado', 'cursoId', 'modalidadeId']))
    await equipe.save()
    return equipe
  }

  public async destroy({ params }: HttpContext) {
    const equipe = await Equipe.findOrFail(params.id)
    await equipe.delete()
    return equipe
  }

  public async show({ params, response }: HttpContext) {
    const equipe = await Equipe.query().where({ id: params.id }).preload('atletas').first()
    if (equipe) return equipe
    else return response.status(404)
  }

  public async associarAtleta({ params, request }: HttpContext) {
    //esperamos uma variável de entrada "atletas"
    //com os ids dos atletas que deverão ser associados
    const equipe = await Equipe.findOrFail(params.id)
    await equipe.related('atletas').sync(request.input('atletas'))
    await equipe.load('atletas')
    return equipe
  }
}
