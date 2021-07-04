import React, { useState, useEffect } from 'react'
import { DataTable } from 'primereact/datatable'
import { Column } from 'primereact/column'
import { Button } from 'primereact/button'
import { Dialog } from 'primereact/dialog'
import UserService from '../../services/User/UserService'
import UserForm from '../../forms/User'

interface IAttendance {
  id: number
}

const Attendace = () => {
  const [attendances, setAttendances] = useState<IAttendance[]>([])
  const [selectedAttendance, setSelectedAttendance] = useState<IAttendance>()
  const [isVisibleModal, setIsVisibleModal] = useState(false)

  const getAttendances = async () => {
    const attendances = await UserService.getAll()

    setAttendances(attendances)
  }

  const deleteAttendance = async (id: number) => {
    await UserService.delete(id)

    const filteredAttendances = attendances.filter(attendances => attendances?.id !== id)

    setAttendances(filteredAttendances)
    setSelectedAttendance(undefined)
  }

  useEffect(() => {
    getAttendances()
  }, [])

  return (
    <div className="p-grid p-fluid p-mt-3">
      <div className="p-col-10 p-md-7 p-mx-auto text"><h1>Usuários</h1></div>
      <div className="p-grid p-col-10 p-md-7 p-mx-auto">
        <div className="p-col">
          <Button
            icon="pi pi-plus-circle"
            label="Novo"
            className="p-button-success"
            disabled={!!selectedAttendance?.id}
            onClick={() => setIsVisibleModal(true)}
          />
        </div>
        <div className="p-col">
          <Button
            icon="pi pi-pencil"
            label="Alterar"
            className="p-button-primary"
            disabled={!selectedAttendance?.id}
            onClick={() => setIsVisibleModal(true)}
          />
        </div>
        <div className="p-col">
          <Button
          icon="pi pi-times-circle"
          label="Excluir"
          className="p-button-secondary"
          disabled={!selectedAttendance?.id}
          onClick={() => deleteAttendance(Number(selectedAttendance?.id))}
        />
        </div>
      </div>
      <div className="p-col-10 p-md-7 p-mx-auto datatable-responsive-demo">
        <DataTable
          value={attendances}
          selection={selectedAttendance}
          onSelectionChange={e => setSelectedAttendance(e.value)}
          rowHover
          selectionMode="checkbox"
          className="p-datatable-responsive-demo"
        >
            <Column selectionMode="single" style={{ width: '3em' }}/>
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
            setAttendances={setAttendances}
            attendances={attendances}
            attendance={selectedAttendance}
            onHide={() => setIsVisibleModal(false)}
          />
        </Dialog>
      )}
    </div>
  )
}

export default Attendace
