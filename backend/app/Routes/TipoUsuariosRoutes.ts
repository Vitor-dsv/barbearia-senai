import Route from '@ioc:Adonis/Core/Route'

Route.get('/tipo-usuarios', 'TipoUsuariosController.index')
Route.get('/tipo-usuario/:id', 'TipoUsuariosController.findOne')
Route.post('/tipo-usuario', 'TipoUsuariosController.create')
Route.put('/tipo-usuario', 'TipoUsuariosController.update')
Route.delete('/tipo-usuario/:id', 'TipoUsuariosController.delete')
