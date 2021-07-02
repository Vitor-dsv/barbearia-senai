import Route from '@ioc:Adonis/Core/Route'

Route.get('/usuarios', 'UsuariosController.index')
Route.get('/usuario/:id', 'UsuariosController.findOne')
Route.post('/usuario', 'UsuariosController.create')
Route.post('/usuario-sistema', 'UsuariosController.createUserFull')
Route.put('/usuario', 'UsuariosController.update')
Route.delete('/usuario/:id', 'UsuariosController.delete')
