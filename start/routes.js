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
    Route.post('user/:id', 'UserController.show')
    Route.post('apply', 'UserController.apply')

    Route.get('questions', 'QuestionController.shows')
    Route.post('question/:id', 'QuestionController.show')
    Route.post('create/question', 'QuestionController.create')

    Route.post('choice/:id', 'QuestionChoiceController.show')
    Route.post('create/choice', 'QuestionChoiceController.create')

    Route.get('answers', 'AnswerController.shows')
    Route.post('answer/:id', 'AnswerController.show')
    Route.post('post/answer', 'AnswerController.post')

}).prefix('api/v1')