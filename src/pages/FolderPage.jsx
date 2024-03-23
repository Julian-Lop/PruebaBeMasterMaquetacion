import React from 'react'
import { useParams } from 'react-router-dom'
import { Table } from '../components/Table'
import { HeaderPage } from '../components/HeaderPage'

const titulos = ['Nombre', 'Tamaño', 'Duración', 'Última modificación']
const lista = [
  ['Etrenamiento.mp4', '7.3 GB', '04:11:37', '30/may/2023'],
  ['Salida-al-mercado-version-nueva.mp4', '1.4 GB', '47:55', '22/jun/2022'],
  ['Como-cerrar-una-ventana.mp4', '284 MB', '10:12', '11/sep/2021']
]

export const FolderPage = () => {

  const { folder } = useParams()

  return (
    <div>
      <HeaderPage isHome={false} msm={folder} />

      <div className='Content'>
        <Table titles={titulos} list={lista} icon={'icon-play'}/>
      </div>
    </div>
  )
}
