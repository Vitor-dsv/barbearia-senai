import Route from '@ioc:Adonis/Core/Route'

Route.get('/atendimentos', 'AtendimentosController.index')
Route.get('/atendimento/:id', 'AtendimentosController.findOne')
Route.post('/atendimento', 'AtendimentosController.create')
Route.put('/atendimento', 'AtendimentosController.update')
Route.delete('/atendimento/:id', 'AtendimentosController.delete')
