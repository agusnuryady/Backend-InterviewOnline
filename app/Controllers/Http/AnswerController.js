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

    async video({request, response}) {
        
        const Video = request.file('attachment')
        const answer = new Answer()
        answer.question_id = request.input('question_id')
        answer.user_id = request.input('user_id')
        answer.answer = request.input('answer')
        if (Video!==null) {
            answer.attachment = `${new Date().getTime()}.mp4`
            await Video.move(Helpers.publicPath('uploads/videos'), {
                name:answer.attachment
            })
        } else {
            answer.attachment = ''
        }

        await answer.save()
        try {
            return response.json(answer)
        } catch (error) {
            return error
        }
    }

}

module.exports = AnswerController