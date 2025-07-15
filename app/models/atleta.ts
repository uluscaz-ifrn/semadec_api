import { DateTime } from 'luxon'
import { BaseModel, column, belongsTo, manyToMany, scope } from '@adonisjs/lucid/orm'
import type { BelongsTo, ManyToMany } from '@adonisjs/lucid/types/relations'
import Curso from '#models/curso'
import Equipe from '#models/equipe'

export enum AtletaModalidade {
  MASCULINO = 'MASCULINO',
  FEMININO = 'FEMININO',
}

export default class Atleta extends BaseModel {
  @column({ isPrimary: true })
  declare id: number

  @column()
  declare nome: string

  @column()
  declare genero: AtletaModalidade

  @column()
  declare cursoId: number

  @belongsTo(() => Curso)
  declare curso: BelongsTo<typeof Curso>

  @manyToMany(() => Equipe)
  declare equipes: ManyToMany<typeof Equipe>

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime

  static vinculoEquipeAtivo = scope((query) => {
    query.innerJoin('equipes_atletas AS ea', 'ea.atleta_id', 'atletas.id')
    query.where('ea.ativo', '=', true)
    query.select('atletas.*')
  })
}
