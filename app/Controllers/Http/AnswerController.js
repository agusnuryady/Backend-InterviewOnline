'use strict'

const Answer = use('App/Models/Answer')

class AnswerController {

    async shows({response}) {

        const answer= await Answer.query().select('*').with('question').with('user').fetch()

        return response.json(answer)
    }

    async show({params, response}) {

        const id = params.id

        const answer= await Answer.query().select('*').with('question').with('user').where('user_id',id).fetch()

        return response.json(answer)
    }

    async post({request, response}) {
        
        const {question_id, user_id, answer, attachment} = request.all()

        const data = await Answer.create({question_id: question_id, user_id: user_id, answer: answer, attachment: attachment})

        return response.json(data)
    }

}

module.exports = AnswerController
