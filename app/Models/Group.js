'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Group extends Model {

    questions () {
        return this.hasMany('App/Models/Question')
    }
}

module.exports = Group
