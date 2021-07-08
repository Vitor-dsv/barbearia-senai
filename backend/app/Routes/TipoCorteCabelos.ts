import Route from '@ioc:Adonis/Core/Route'

Route.group(() => {
  Route.get('/tipo-corte-cabelos', 'TipoCorteCabelosController.index')
  Route.get('/tipo-corte-cabelo/:id', 'TipoCorteCabelosController.findOne')
  Route.post('/tipo-corte-cabelo', 'TipoCorteCabelosController.create')
  Route.put('/tipo-corte-cabelo', 'TipoCorteCabelosController.update')
  Route.delete('/tipo-corte-cabelo/:id', 'TipoCorteCabelosController.delete')
}).middleware('auth')
