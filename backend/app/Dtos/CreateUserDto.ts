import EnderecoDto from './EnderecoDto'
import PessoaDto from './PessoaDto'
import UsuarioDto from './UsuarioDto'

export default interface CreateUserDto {
  usuario: UsuarioDto
  idTipoUsuario: number
  pessoa: PessoaDto
  endereco: EnderecoDto
}
