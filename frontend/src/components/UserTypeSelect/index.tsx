import React from 'react'
import { Dropdown } from 'primereact/dropdown'

const options = [
  { id: 1, label: 'Administrador' },
  { id: 2, label: 'Secretário' },
  { id: 3, label: 'Barbeiro' }
]

const UserTypeSelect = (props: any) => {
  return (
    <Dropdown
      id={props.id}
      options={options}
      optionLabel="label"
      optionValue="id"
      value={props.value}
      onChange={props.onChange}
      showClear={true}
    />
  )
}

export default UserTypeSelect
