import { BaseSchema } from '@adonisjs/lucid/schema'
import { DateTime } from 'luxon'

export default class extends BaseSchema {
  protected tableName = 'domains'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.string('url').notNullable()
      table.boolean('verified').notNullable().defaultTo(false)
      table.timestamp('last_check').notNullable().defaultTo(DateTime.now())
      table
        .integer('user_id')
        .unsigned()
        .references('id')
        .inTable('users')
        .onDelete('CASCADE')
      table.timestamp('created_at')
      table.timestamp('updated_at')
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}
