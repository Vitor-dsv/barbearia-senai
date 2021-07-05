import EnderecoDto from './EnderecoDto'

export interface ModifyPessoaDto {
  id?: number
  nome: string
  cpf: string
  data_nascimento: Date
  rg: string
  telefone: string
  endereco: EnderecoDto
}
