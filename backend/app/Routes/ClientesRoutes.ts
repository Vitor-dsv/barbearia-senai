import Route from '@ioc:Adonis/Core/Route'

Route.get('/clientes', 'ClientesController.index')
Route.get('/cliente/:id', 'ClientesController.findOne')
Route.post('/cliente', 'ClientesController.create')
Route.put('/cliente', 'ClientesController.update')
Route.delete('/cliente/:id', 'ClientesController.delete')
