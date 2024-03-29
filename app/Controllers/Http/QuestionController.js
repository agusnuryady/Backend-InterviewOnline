'use strict'

const Question = use('App/Models/Question')

class QuestionController {

    async shows({response}) {

        const question = await Question.query().select('*').with('choices').fetch()

        return response.json(question)
    }

    async show({params, response}) {

        const id = params.id

        const question = await Question.query().select('*').where('group_id',id).with('choices').fetch()

        return response.json(question)
    }

    async create({request, response}) {
        const {group_id, number, description, type, timer} = request.all()        

        const question = await Question.create({group_id: group_id, number: number, description: description, type: type, timer: timer})

        return response.json(question)
    }

}

module.exports = QuestionController
