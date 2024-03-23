import React from 'react'
import { Table } from '../components/Table'
import { HeaderPage } from '../components/HeaderPage'

const titulos = ['Nombre', 'Videos', 'Tamaño', 'Última modificación']
const lista = [
  ['Afiliado Master', '8', '7.3 GB', '30/may/2023'],
  ['BeMaster', '21', '1.4 GB', '22/jun/2022'],
  ['Comizzión', '10', '284 MB', '11/sep/2021']
]

export const HomePage = () => {
  return (
    <div className='HomePage'>

      <HeaderPage />

      <div className='Search'>
        <i className='icon icon-search' />
        <input type="text" />
      </div>

      <div className='Content'>
        <Table titles={titulos} list={lista} icon={'icon-folder'} />
      </div>
      
    </div>
  )
}
