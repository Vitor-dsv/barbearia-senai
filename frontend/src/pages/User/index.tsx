import React, { useState, useEffect } from 'react'
import { DataTable } from 'primereact/datatable'
import { Column } from 'primereact/column'
import { Button } from 'primereact/button'
import { Dialog } from 'primereact/dialog'
import UserService from '../../services/User/UserService'
import UserForm from '../../forms/User'

interface IUser {
  id: number
}

const User = () => {
  const [users, setUsers] = useState<IUser[]>([])
  const [selectedUser, setSelectedUser] = useState<IUser>()
  const [isVisibleModal, setIsVisibleModal] = useState(false)

  const getUsers = async () => {
    const users = await UserService.getAll()

    setUsers(users)
  }

  const deleteUser = async (id: number) => {
    await UserService.delete(id)

    const filteredUsers = users.filter(user => user?.id !== id)

    setUsers(filteredUsers)
    setSelectedUser(undefined)
  }

  useEffect(() => {
    getUsers()
  }, [])

  return (
    <div className="p-grid p-fluid p-mt-3">
      <div className="p-col-10 p-md-7 p-mx-auto text"><h1>Usuários</h1></div>
      <div className="p-grid p-col-10 p-md-7 p-mx-auto">
        {console.log(selectedUser)}
        <div className="p-col">
          <Button
            icon="pi pi-plus-circle"
            label="Novo"
            className="p-button-success"
            disabled={!!selectedUser?.id}
            onClick={() => setIsVisibleModal(true)}
          />
        </div>
        <div className="p-col">
          <Button
            icon="pi pi-pencil"
            label="Alterar"
            className="p-button-primary"
            disabled={!selectedUser?.id}
            onClick={() => setIsVisibleModal(true)}
          />
        </div>
        <div className="p-col">
          <Button
            icon="pi pi-times-circle"
            label="Excluir"
            className="p-button-secondary"
            disabled={!selectedUser?.id}
            onClick={() => deleteUser(Number(selectedUser?.id))}
          />
        </div>
      </div>
      <div className="p-col-10 p-md-7 p-mx-auto datatable-responsive-demo">
        <DataTable
          value={users}
          selection={selectedUser}
          onSelectionChange={e => setSelectedUser(e.value)}
          rowHover
          selectionMode="checkbox"
          className="p-datatable-responsive-demo"
          paginator rows={5}
          rowsPerPageOptions={[5, 15, 30, 50, 100]}
        >
          <Column selectionMode="single" style={{ width: '3em' }} />
          <Column field="id" header="ID" />
          <Column field="login" header="Login" />
          <Column field="pessoa.nome" header="Nome" />
          <Column field="pessoa.cpf" header="CPF" />
          <Column field="pessoa.endereco.cidade" header="Cidade" />
          <Column field="tipoUsuario.descricao" header="Tipo" />
        </DataTable>
      </div>
      {isVisibleModal && (
        <Dialog
          modal={true}
          visible={isVisibleModal}
          onHide={() => setIsVisibleModal(false)}
          style={{ width: '70vw' }}
          header="Usuário"
        >
          <UserForm
            setUsers={setUsers}
            users={users}
            user={selectedUser}
            onHide={() => setIsVisibleModal(false)}
          />
        </Dialog>
      )}
    </div>
  )
}

export default User
