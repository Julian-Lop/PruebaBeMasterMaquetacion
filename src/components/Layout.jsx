import React, { useState } from 'react'
import { Sidebar } from './Sidebar'

export const Layout = ({ children }) => {
  
  const [showSidebar, setShowSidebar] = useState(false)

  return (
    <div className='Layout'>
      <Sidebar sx={ showSidebar ? {display:'block'} : {}} show={setShowSidebar} />
      <div className='FloatMenu' onClick={() => setShowSidebar(!showSidebar)}>
        <i className='icon icon-return'/>
      </div>
      <main className='MainContainer'>
        {children}
      </main>
    </div>
  )
}
