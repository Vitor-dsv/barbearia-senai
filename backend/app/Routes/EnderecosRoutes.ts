import Route from '@ioc:Adonis/Core/Route'

Route.get('/enderecos', 'EnderecosController.index')
Route.get('/endereco/:id', 'EnderecosController.findOne')
Route.post('/endereco', 'EnderecosController.create')
Route.put('/endereco', 'EnderecosController.update')
Route.delete('/endereco/:id', 'EnderecosController.delete')
