export default interface CreateUserDto {
  // Usuario
  usuario: { login: string; senha: string; foto: string }

  // Tipo Usuario
  idTipoUsuario: number

  // Pessoa
  pessoa: { nome: string; cpf: string; data_nascimento: Date; rg: string; telefone: string }

  // Endereço
  endereco: {
    estado: string
    cidade: string
    bairro: string
    rua: string
    numero: string
    complemento: string
    cep: string
  }
}
