import Route from '@ioc:Adonis/Core/Route'

Route.get('/usuarios', 'UsuariosController.index')
Route.get('usuario-barbeiro', 'UsuariosController.findTypeBarbeiro')
Route.get('/autenticar-usuario/:login/:senha', 'UsuariosController.validUser')
Route.get('/usuario/:id', 'UsuariosController.findOne')
Route.post('/usuario', 'UsuariosController.create')
Route.post('/usuario/login', 'UsuariosController.login')
Route.put('/usuario', 'UsuariosController.update')
Route.delete('/usuario/:id', 'UsuariosController.delete')
