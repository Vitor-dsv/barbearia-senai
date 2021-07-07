import React, { useState, useEffect } from 'react'
import HaircutStyleForm from '../../forms/HaircutStyle'
import { DataTable } from 'primereact/datatable'
import { Column } from 'primereact/column'
import { Button } from 'primereact/button'
import { Dialog } from 'primereact/dialog'
import HaircutTypeService from '../../services/HaircutType/HaircutTypeService'

interface IHaircut {
  id: number
  description: string
  price: number
  duration: number
}

const HaircutStyle = () => {
  const [haircuts, setHaircuts] = useState<IHaircut[]>([])
  const [selectedHaircut, setSelectedHaircut] = useState<IHaircut>()
  const [isVisibleModal, setIsVisibleModal] = useState(false)

  const getHaircuts = async () => {
    const haircuts = await HaircutTypeService.getAll()

    setHaircuts(haircuts)
  }

  const deleteHaircut = async (id: number) => {
    await HaircutTypeService.delete(id)

    const filteredHaircuts = haircuts.filter(haircut => haircut?.id !== id)

    setHaircuts(filteredHaircuts)
    setSelectedHaircut(undefined)
  }

  useEffect(() => {
    getHaircuts()
  }, [])

  return (
    <div className="p-grid p-fluid p-mt-3">
      <div className="p-col-10 p-md-7 p-mx-auto text"><h1>Cortes de cabelo</h1></div>
      <div className="p-grid p-col-10 p-md-7 p-mx-auto">
        <div className="p-col">
          <Button
            icon="pi pi-plus-circle"
            label="Novo"
            className="p-button-success"
            disabled={!!selectedHaircut?.id}
            onClick={() => setIsVisibleModal(true)}
          />
        </div>
        <div className="p-col">
          <Button
            icon="pi pi-pencil"
            label="Alterar"
            className="p-button-primary"
            disabled={!selectedHaircut?.id}
            onClick={() => setIsVisibleModal(true)}
          />
        </div>
        <div className="p-col">
          <Button
          icon="pi pi-times-circle"
          label="Excluir"
          className="p-button-secondary"
          disabled={!selectedHaircut?.id}
          onClick={() => deleteHaircut(Number(selectedHaircut?.id))}
        />
        </div>
      </div>
      <div className="p-col-10 p-md-7 p-mx-auto">
        {console.log(selectedHaircut)}
        <DataTable
          value={haircuts}
          selection={selectedHaircut}
          onSelectionChange={e => setSelectedHaircut(e.value)}
          rowHover
          selectionMode="checkbox"
        >
            <Column selectionMode="single" style={{ width: '3em' }}/>
            <Column field="id" header="ID" />
            <Column field="descricao" header="Descrição" />
            <Column field="preco" header="Preço" body={data => `R$ ${data.preco}`} />
            <Column field="duracao" header="Duração" />
        </DataTable>
      </div>
      {isVisibleModal && (
        <Dialog
          modal={true}
          visible={isVisibleModal}
          onHide={() => setIsVisibleModal(false)}
          style={{ width: '70vw' }}
          header="Corte de cabelo"
        >
          <HaircutStyleForm
            setHaircuts={setHaircuts}
            haircuts={haircuts}
            haircut={selectedHaircut}
            onHide={() => setIsVisibleModal(false)}
          />
        </Dialog>
      )}
    </div>
  )
}

export default HaircutStyle
