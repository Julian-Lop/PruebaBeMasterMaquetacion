import React from 'react'

export const Sidebar = () => {
  return (
    <aside className='Sidebar'>
      <div className='LogoContainer'>
        <img src="/images/logo.jpg" alt="" />
      </div>

      <ul>
        <li>
          <i className='icon icon-columns' />
          Dashboard
        </li>
        <li className='active'>
          <i className='icon icon-folder' />
          Videos
        </li>
        <li>
          <i className='icon icon-play' />
          Player
        </li>
        <li>
        <i className='icon icon-analytics' />
          Analytics
        </li>
        <li>
          <i className='icon icon-config'/>
          Configuratines
        </li>
      </ul>

      <div className='CardSidebar'>
        <div className='HeaderCardSidebar'>
          <h3>Mi Plan - Plus</h3>
          <strong>El uso se renueva el: 3-may-23</strong>
        </div>
        <div className='InfoCardSidebar'>

          <div className='ItemCardSidebar'>
            <div className='HedaerInfoCardSidebar'>
              <p>Almacenamiento</p>
              <span>23.5 GB/ 1 TB</span>
            </div>
            <progress value={0.8} />
          </div>
          
          <div className='ItemCardSidebar'>
            <div className='HedaerInfoCardSidebar'>
              <p>Banda Mensual</p>
              <span>3.4 TB/ 5 TB</span>
            </div>
            <progress value={0.65} />
          </div>

        </div>

        
        <button className='Btn-one'>
          Administrar Plan
        </button>
      </div>
    </aside>
  )
}
