'use strict'

const Groups = use('App/Models/Group')

class GroupController {

    async shows({response}) {

        try {
            const groups= await Groups.query().select('*').with('questions').fetch()
    
            return response.json(groups)

        } catch (error) {
            
            return error
        }

    }

    async show({params, response}) {

        const id = params.id

        const answer= await Groups.query().select('*').where('id',id).fetch()

        return response.json(answer)
    }

    async code({params, response}) {

        const code = params.code

        const answer= await Groups.query().select('*').where('kode',code).fetch()

        return response.json(answer)
    }

    async post({request, response}) {
        
        const {position, name, profile, kode} = request.all()

        const data = await Groups.create({position: position, name: name, profile: profile, kode: kode})

        return response.json(data)
    }
}

module.exports = GroupController