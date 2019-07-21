'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URL's and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

Route.group(() => {

    Route.get('users', 'UserController.shows')
    Route.get('profile', 'UserController.show').middleware('auth')
    Route.post('apply', 'UserController.apply')
    Route.post('login', 'UserController.login')

    Route.get('groups', 'GroupController.shows').middleware('auth')
    Route.post('group/:id', 'GroupController.show').middleware('auth')
    Route.post('codeGroup/:code', 'GroupController.code').middleware('auth')
    Route.post('post/group', 'GroupController.post').middleware('auth')

    Route.get('questions', 'QuestionController.shows').middleware('auth')
    Route.post('question/:id', 'QuestionController.show').middleware('auth')
    Route.post('create/question', 'QuestionController.create').middleware('auth')

    Route.post('choice/:id', 'QuestionChoiceController.show').middleware('auth')
    Route.post('create/choice', 'QuestionChoiceController.create').middleware('auth')

    Route.get('answers', 'AnswerController.shows').middleware('auth')
    Route.post('answer/:id', 'AnswerController.show').middleware('auth')
    Route.post('post/answer', 'AnswerController.post').middleware('auth')

}).prefix('api/v1')