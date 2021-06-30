import Route from '@ioc:Adonis/Core/Route'

Route.get('/pessoas', 'PessoasController.index')
Route.get('/pessoa/:id', 'PessoasController.findOne')
Route.post('/pessoa', 'PessoasController.create')
Route.put('/pessoa', 'PessoasController.update')
Route.delete('/pessoa/:id', 'PessoasController.delete')
