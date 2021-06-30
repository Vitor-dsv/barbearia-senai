import Route from '@ioc:Adonis/Core/Route'

Route.get('/barbeiros', 'BarbeirosController.index')
Route.get('/barbeiro/:id', 'BarbeirosController.findOne')
Route.post('/barbeiro', 'BarbeirosController.create')
Route.put('/barbeiro', 'BarbeirosController.update')
Route.delete('/barbeiro/:id', 'BarbeirosController.delete')
