import React, { useState, useEffect } from 'react'
import { DataTable } from 'primereact/datatable'
import { Column } from 'primereact/column'
import { Button } from 'primereact/button'
import { Dialog } from 'primereact/dialog'
import CustomerService from '../../services/Customer/CustomerService'
import CustomerForm from '../../forms/Customer'

interface ICustomer {
  id: number
}

const Customer = () => {
  const [customers, setCustomers] = useState<ICustomer[]>([])
  const [selectedCustomer, setSelectedCustomer] = useState<ICustomer>()
  const [isVisibleModal, setIsVisibleModal] = useState(false)

  const getCustomers = async () => {
    const customers = await CustomerService.getAll()

    setCustomers(customers)
  }

  const deleteCustomer = async (id: number) => {
    await CustomerService.delete(id)

    const filteredCustomers = customers.filter(customer => customer?.id !== id)

    setCustomers(filteredCustomers)
    setSelectedCustomer(undefined)
  }

  useEffect(() => {
    getCustomers()
  }, [])

  return (
    <div className="p-grid p-fluid p-mt-3">
      <div className="p-col-10 p-md-7 p-mx-auto text"><h1>Clientes</h1></div>
      <div className="p-grid p-col-10 p-md-7 p-mx-auto">
        <div className="p-col">
          <Button
            icon="pi pi-plus-circle"
            label="Novo"
            className="p-button-success"
            disabled={!!selectedCustomer?.id}
            onClick={() => setIsVisibleModal(true)}
          />
        </div>
        <div className="p-col">
          <Button
            icon="pi pi-pencil"
            label="Alterar"
            className="p-button-primary"
            disabled={!selectedCustomer?.id}
            onClick={() => setIsVisibleModal(true)}
          />
        </div>
        <div className="p-col">
          <Button
            icon="pi pi-times-circle"
            label="Excluir"
            className="p-button-secondary"
            disabled={!selectedCustomer?.id}
            onClick={() => deleteCustomer(Number(selectedCustomer?.id))}
          />
        </div>
      </div>
      <div className="p-col-10 p-md-7 p-mx-auto datatable-responsive-demo">
        <DataTable
          value={customers}
          selection={selectedCustomer}
          onSelectionChange={e => setSelectedCustomer(e.value)}
          rowHover
          selectionMode="checkbox"
          className="p-datatable-responsive-demo"
          paginator rows={5}
          rowsPerPageOptions={[5, 15, 30, 50, 100]}
          emptyMessage="Sem registro na tabela."
        >
          <Column selectionMode="single" style={{ width: '3em' }} />
          <Column field="id" header="ID" />
          <Column field="pessoa.nome" header="Nome" />
          <Column field="pessoa.telefone" header="Telefone" />
        </DataTable>
      </div>
      {isVisibleModal && (
        <Dialog
          modal={true}
          visible={isVisibleModal}
          onHide={() => setIsVisibleModal(false)}
          style={{ width: '40vw' }}
          header="Clientes"
        >
          <CustomerForm
            setCustomers={setCustomers}
            customers={customers}
            customer={selectedCustomer}
            onHide={() => setIsVisibleModal(false)}
          />
        </Dialog>
      )}
    </div>
  )
}

export default Customer
