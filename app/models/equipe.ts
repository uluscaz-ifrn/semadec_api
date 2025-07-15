import { DateTime } from 'luxon'
import { BaseModel, column, belongsTo, manyToMany } from '@adonisjs/lucid/orm'
import type { BelongsTo, ManyToMany } from '@adonisjs/lucid/types/relations'
import Modalidade from '#models/modalidade'
import Curso from '#models/curso'
import Atleta from '#models/atleta'

export enum EquipeGenero {
  MASCULINO = 'MASCULINO',
  FEMININO = 'FEMININO',
  MISTO = 'MISTO',
}

export default class Equipe extends BaseModel {
  @column({ isPrimary: true })
  declare id: number

  @column()
  declare nome: string

  @column()
  declare validado: boolean

  @column()
  declare genero: EquipeGenero

  @column()
  declare cursoId: number

  @column()
  declare modalidadeId: number

  @belongsTo(() => Modalidade)
  declare modalidade: BelongsTo<typeof Modalidade>

  @belongsTo(() => Curso)
  declare curso: BelongsTo<typeof Curso>

  @manyToMany(() => Atleta, {
    pivotTable: 'equipes_atletas',
  })
  declare atletas: ManyToMany<typeof Atleta>

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime
}
