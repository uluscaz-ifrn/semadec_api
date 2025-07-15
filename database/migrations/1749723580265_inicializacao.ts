import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  async up() {
    this.schema.createTable('cursos', (table) => {
      table.increments('id')

      table.string('nome', 150).notNullable()
      table.boolean('ativo').defaultTo(true).notNullable()

      table.timestamp('created_at')
      table.timestamp('updated_at')
    })

    this.schema.createTable('atletas', (table) => {
      table.increments('id')

      table.string('nome', 150).notNullable()
      table.enum('genero', ['MASCULINO', 'FEMININO']).notNullable()

      table.integer('curso_id').unsigned().references('cursos.id').notNullable()

      table.timestamp('created_at')
      table.timestamp('updated_at')
    })

    this.schema.createTable('modalidades', (table) => {
      table.increments('id')

      table.string('nome', 150).notNullable()
      table.boolean('ativo').defaultTo(true).notNullable()

      table.timestamp('created_at')
      table.timestamp('updated_at')
    })

    this.schema.createTable('equipes', (table) => {
      table.increments('id')

      table.string('nome', 150).notNullable()
      table.boolean('validado').defaultTo(false).notNullable()
      table.enum('genero', ['MASCULINO', 'FEMININO', 'MISTO']).notNullable()

      table.integer('modalidade_id').unsigned().references('modalidades.id').notNullable()
      table.integer('curso_id').unsigned().references('cursos.id').notNullable()

      table.timestamp('created_at')
      table.timestamp('updated_at')
    })

    this.schema.createTable('equipes_atletas', (table) => {
      table.increments('id')

      table.integer('equipe_id').unsigned().references('equipes.id').notNullable()
      table.integer('atleta_id').unsigned().references('atletas.id').notNullable()
      table.boolean('ativo').defaultTo(false).notNullable()

      table.timestamp('created_at')
      table.timestamp('updated_at')
    })
  }

  async down() {
    this.schema.dropTable('equipes_atletas')
    this.schema.dropTable('equipes')
    this.schema.dropTable('modalidades')
    this.schema.dropTable('atletas')
    this.schema.dropTable('cursos')
  }
}
