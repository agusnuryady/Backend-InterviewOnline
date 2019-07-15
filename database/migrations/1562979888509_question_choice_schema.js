'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class QuestionChoiceSchema extends Schema {
  up () {
    this.create('question_choices', (table) => {
      table.increments()
      table.integer('question_id').unsigned().references('id').inTable('questions')
      table.string('choice', 254).notNullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('question_choices')
  }
}

module.exports = QuestionChoiceSchema
