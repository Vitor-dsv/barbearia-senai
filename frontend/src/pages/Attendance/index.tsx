import React, { useState, useEffect } from 'react'
import { DataTable } from 'primereact/datatable'
import { Column } from 'primereact/column'
import { Button } from 'primereact/button'
import { Dialog } from 'primereact/dialog'
import AttendanceForm from '../../forms/Attendance'
import AttendanceService from '../../services/Attendance/AttendanceService'
import moment from 'moment'

interface IAttendance {
  id: number
}

const Attendace = () => {
  const [attendances, setAttendances] = useState<IAttendance[]>([])
  const [selectedAttendance, setSelectedAttendance] = useState<IAttendance>()
  const [isVisibleModal, setIsVisibleModal] = useState(false)

  const getAttendances = async () => {
    const attendances = await AttendanceService.getAll()

    setAttendances(attendances)
  }

  const deleteAttendance = async (id: number) => {
    await AttendanceService.delete(id)

    const filteredAttendances = attendances.filter(attendances => attendances?.id !== id)

    setAttendances(filteredAttendances)
    setSelectedAttendance(undefined)
  }

  useEffect(() => {
    getAttendances()
  }, [])

  return (
    <div className="p-grid p-fluid p-mt-3">
      <div className="p-col-10 p-md-7 p-mx-auto text"><h1>Atendimentos</h1></div>
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
          <Column field="data_horario" header="Data" body={data => moment(data.data_horario).format('DD/MM/YYYY HH:mm')} />
          <Column field="tipoCorteCabelo.descricao" header="Corte" />
          <Column field="cliente.pessoa.nome" header="Cliente" />
          <Column field="usuario.pessoa.nome" header="Barbeiro" />
        </DataTable>
      </div>
      {isVisibleModal && (
        <Dialog
          modal={true}
          visible={isVisibleModal}
          onHide={() => setIsVisibleModal(false)}
          style={{ width: '70vw' }}
          header="Atendimentos"
        >
          <AttendanceForm
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
