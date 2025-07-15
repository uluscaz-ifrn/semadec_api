import { DateTime } from 'luxon'
import { BaseModel, column } from '@adonisjs/lucid/orm'

export default class EquipeAtleta extends BaseModel {
  static table = 'equipes_atletas'

  @column({ isPrimary: true })
  declare id: number

  @column()
  declare equipeId: number

  @column()
  declare atletaId: number

  @column()
  declare ativo: boolean

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime
}
