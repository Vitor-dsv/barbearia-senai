import React from 'react'
import { Menubar } from 'primereact/menubar'
import { Link } from 'react-router-dom'
import Logo from '../../assets/logo.png'

const Navbar = () => {
  const items = [
    {
      label: 'Home',
      icon: 'pi pi-fw pi-home',
      url: 'home'
    },
    {
      label: 'Usuários',
      icon: 'pi pi-fw pi-user',
      url: 'usuarios'
    },
    {
      label: 'Clientes',
      icon: 'pi pi-fw pi-user-plus',
      url: 'clientes'
    },
    {
      label: 'Atendimentos',
      icon: 'pi pi-fw pi-calendar-plus',
      url: 'atendimentos'
    },
    {
      label: 'Cortes',
      icon: 'pi pi-fw pi-pencil',
      url: 'cortes'
    }
  ]

  const start = <img alt="Logo" src={Logo} height="80" className="p-mr-2"></img>
  const end = <Link onClick={() => localStorage.removeItem('token')} to="/login" role="menuitem" className="p-menuitem-link" aria-haspopup="false" style={{ borderRadius: 5 }}>
    <span className="p-menuitem-icon pi pi-fw pi-power-off"></span>
    <span className="p-menuitem-text">Sair</span>
    <span className="p-ink"></span>
  </Link>

  return (
    <div>
      <div className="card">
        <Menubar model={items} start={start} end={end} />
      </div>
    </div>
  )
}

export default Navbar
