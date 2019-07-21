'use strict'

const User = use('App/Models/User')

class UserController {
    
    async apply({request, auth}) {
        const {email, name, phone_number, password} = request.all()

        await User.create({
            name,
            email,
            phone_number,
            password
        })

        return auth.attempt(email,password)
    }

    async login({request, auth,}) {
        const {email, password} = request.all()

        return auth.attempt(email,password)
    }

    async shows({response}) {

        const user = await User.query().select('id','name','email','phone_number').with('answers').fetch()

        return response.json(user)
    }

    async show({auth, response}) {
        const id = auth.user.id

        const user = await User.query().select('id','name','email','phone_number').with('answers').where('id',id).fetch()

        return response.json(user)
    }

}

module.exports = UserController
