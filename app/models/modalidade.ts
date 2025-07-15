import { DateTime } from 'luxon'
import { BaseModel, column, hasMany, scope } from '@adonisjs/lucid/orm'
import type { HasMany } from '@adonisjs/lucid/types/relations'
import Equipe from '#models/equipe'

export default class Modalidade extends BaseModel {
  @column({ isPrimary: true })
  declare id: number

  @column()
  declare nome: string

  @column()
  declare ativo: boolean

  @hasMany(() => Equipe)
  declare equipes: HasMany<typeof Equipe>

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime

  static visiveis = scope((query) => {
    query.where('ativo', '=', true)
  })
}
