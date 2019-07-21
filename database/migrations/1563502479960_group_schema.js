'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class GroupSchema extends Schema {
  up () {
    this.create('groups', (table) => {
      table.increments()
      table.string('position', 256).notNullable()
      table.string('name', 256).notNullable().unique()
      table.string('profile', 256).notNullable().unique()
      table.string('kode', 256).notNullable().unique()
      table.timestamps()
    })
  }

  down () {
    this.drop('groups')
  }
}

module.exports = GroupSchema
