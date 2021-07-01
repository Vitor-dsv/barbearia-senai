import React from 'react'
import barber from '../../assets/barber.svg'
import { Button } from 'primereact/button'

const Home = () => {
  return (
    <div className="p-grid">
      <div className="p-grid p-fluid p-col-10 p-mx-auto">
        <div className="p-col-6" style={{ marginTop: '100px' }}>
          <div className="p-mt-auto">
            <img src={barber} width="100%" />
          </div>
        </div>
        <div className="p-col-6 text" style={{ marginTop: '40px' }}>
          <h1 style={{ fontSize: '65px', fontFamily: 'Trebuchet MS' }}>BARBEARIA VIP</h1>
          <p style={{ fontSize: '22px' }}>A Barbearia VIP é a barbearia da sua época. Focada em excelência, a VIP conta com tudo que o homem moderno precisa. Um ambiente confortável e descontraído, com cuidados para todos os estilos de barba e cabelo. Uma barbearia premium, para cuidar do visual, tomar uma cerveja gelada, assistir aos seus esportes favoritos ou jogar uma partida de sinuca.</p>
          <Button style={{ width: '40vh', float: 'right' }} label="INICIE ESSA EXPERIÊNCIA" className="p-button-rounded p-button-warning right" />
        </div>
      </div>
    </div>
  )
}

export default Home
