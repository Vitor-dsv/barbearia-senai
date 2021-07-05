import { ModifyPessoaDto } from './ModifyPessoaDto'

export default interface ModifyUserDto {
  login: string
  senha: string
  tipo_usuario_id: number
  foto: string
  pessoa: ModifyPessoaDto
}
