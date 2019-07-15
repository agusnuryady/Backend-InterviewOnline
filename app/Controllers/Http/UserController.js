'use strict'

const User = use('App/Models/User')

class UserController {
    
    async apply({request, response}) {
        const {email, name, phone_number} = request.all()

        const user = await User.create({
            name,
            email,
            phone_number,
        })

        return response.json(user)
    }

    async shows({response}) {

        const user = await User.query().select('*').with('answers').fetch()

        return response.json(user)
    }

    async show({params, response}) {
        const id = params.id

        const user = await User.query().select('*').with('answers').where('id',id).fetch()

        return response.json(user)
    }

}

module.exports = UserController
