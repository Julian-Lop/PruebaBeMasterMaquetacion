import React from 'react'
import { Sidebar } from './Sidebar'

export const Layout = ({children}) => {
  return (
    <div className='Layout'>
      <Sidebar/>
      <main className='MainContainer'>
        {children}
      </main>
    </div>
  )
}
