import EnderecoDto from './EnderecoDto'
import PessoaDto from './PessoaDto'

export default interface CreateClientDto {
  pessoa: PessoaDto
  endereco: EnderecoDto
}
