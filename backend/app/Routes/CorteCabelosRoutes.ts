import Route from '@ioc:Adonis/Core/Route'

Route.get('/corte-cabelos', 'CorteCabelosController.index')
Route.get('/corte-cabelo/:id', 'CorteCabelosController.findOne')
Route.post('/corte-cabelo', 'CorteCabelosController.create')
Route.put('/corte-cabelo', 'CorteCabelosController.update')
Route.delete('/corte-cabelo/:id', 'CorteCabelosController.delete')
