import React from 'react'
import { Menubar } from 'primereact/menubar'
import { Link } from 'react-router-dom'
import Logo from '../../assets/logo.png'

const Navbar = () => {
  const items = [
    {
      label: 'Cadastrar',
      icon: 'pi pi-fw pi-plus',
      items: [
        {
          label: 'Secretário',
          icon: 'pi pi-fw pi-id-card'
        },
        {
          label: 'Barbeiro',
          icon: 'pi pi-fw pi-users'
        },
        {
          label: 'Cliente',
          icon: 'pi pi-fw pi-user-plus'
        },
        {
          label: 'Atendimento',
          icon: 'pi pi-fw pi-calendar-plus'
        },
        {
          label: 'Corte',
          icon: 'pi pi-fw pi-pencil'
        }

      ]
    },
    {
      label: 'Agenda',
      icon: 'pi pi-fw pi-calendar'
    }
  ]

  const start = <img alt="Logo" src={Logo} height="40" className="p-mr-2"></img>
  const end = <Link to="#" role="menuitem" className="p-menuitem-link" aria-haspopup="false" style={{ borderRadius: 5 }}>
                <span className="p-menuitem-icon pi pi-fw pi-power-off"></span>
                <span className="p-menuitem-text">Sair</span>
                <span className="p-ink"></span>
            </Link>

  return (
        <div>
            <div className="card">
                <Menubar model={items} start={start} end={end}/>
            </div>
        </div>
  )
}

export default Navbar
