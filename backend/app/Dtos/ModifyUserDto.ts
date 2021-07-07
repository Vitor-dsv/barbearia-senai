import { ModifyPessoaDto } from './ModifyPessoaDto'

export default interface ModifyUserDto {
  login: string
  senha: string
  tipoUsuarioId: number
  foto: string
  pessoa: ModifyPessoaDto
}
