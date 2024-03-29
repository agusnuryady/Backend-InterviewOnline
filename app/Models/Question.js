'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Question extends Model {

    choices () {
        return this.hasMany('App/Models/QuestionChoice')
    }

    answers () {
        return this.hasMany('App/Models/Answer')
    }

    group () {
        return this.belongsTo('App/Models/Group')
    }

}

module.exports = Question
