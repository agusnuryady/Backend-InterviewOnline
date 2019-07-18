'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class QuestionSchema extends Schema {
  up () {
    this.create('questions', (table) => {
      table.increments()
      table.integer('number').notNullable().unique()
      table.text('description').notNullable()
      table.enu('type', ['multiple choice','multi select','text','video record']).notNullable()
      table.integer('timer').notNullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('questions')
  }
}

module.exports = QuestionSchema
