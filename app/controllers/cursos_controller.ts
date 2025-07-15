import type { HttpContext } from '@adonisjs/core/http'
import Curso from '#models/curso'

export default class CursosController {
  public async index({ }: HttpContext) {
    // return await Curso.all()
    return await Curso.query().withScopes((scope) => scope.visiveis())
  }

  public async store({ request }: HttpContext) {
    return await Curso.create(request.only(['nome', 'ativo']))
  }

  public async update({ request, params }: HttpContext) {
    const curso = await Curso.findOrFail(params.id)
    curso.merge(request.only(['nome', 'ativo']))
    await curso.save()
    return curso
  }

  public async destroy({ params }: HttpContext) {
    const curso = await Curso.findOrFail(params.id)
    await curso.delete()
    return curso
  }

  public async show({ params }: HttpContext) {
    return await Curso.findOrFail(params.id)
  }
}
