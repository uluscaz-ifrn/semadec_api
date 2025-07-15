/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

import router from '@adonisjs/core/services/router'

router.get('/', async () => {
    return {
        hello: 'world',
    }
})

router.resource('/curso', '#controllers/cursos_controller').except(['create', 'edit'])
router.resource('/equipe', '#controllers/equipes_controller').except(['create', 'edit'])

router.post('/equipe/:id/associar-atletas', '#controllers/equipes_controller.associarAtleta')

router.resource('/atleta', '#controllers/atletas_controller').except(['create', 'edit'])
router.resource('/modalidade', '#controllers/modalidades_controller').except(['create', 'edit'])
