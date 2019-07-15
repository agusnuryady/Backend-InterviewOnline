'use strict'

const Choice = use('App/Models/QuestionChoice')

class QuestionChoiceController {

    async show({params, response}) {
        
        const id_question = params.id

        const choices = await Choice.query().select('*').where('question_id',id_question).fetch()

        return response.json(choices)
    }

    async create({request, response}) {
        const {question_id, choice} = request.all()        

        const choices = await Choice.create({question_id: question_id, choice: choice})

        return response.json(choices)
    }

}

module.exports = QuestionChoiceController
