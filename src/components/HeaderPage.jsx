import React from 'react'
import { useNavigate } from 'react-router-dom'

export const HeaderPage = ({ isHome = true, msm }) => {
  
  const navigate = useNavigate()

  if (!isHome) return (
    <nav className='HeaderPage'>
      <div className='HeaderLeft'>
        <span>
          <button className='Btn-two bg-purple' onClick={() => navigate('/')}>
            <i className='icon icon-return' />
          </button>
          <br />
          <h2>Home/ <b>{msm}</b></h2>
        </span>
      </div>

      <div className='HeaderRight'>
      </div>
    </nav>
  )
  return (
    <nav className='HeaderPage'>
      <div className='HeaderLeft'>
        <span className='active'>
          <i className='icon icon-book' />
          <p>Biblioteca</p>
        </span>
        <span>
          <i className='icon icon-trash' />
          <p>Papelera</p>
        </span>
      </div>

      <div className='HeaderRight'>
        <button className='Btn-two'>
          <i className='icon icon-folder' />
          <p>Nueva carpeta</p>
        </button>

        <button className='Btn-two bg-purple'>
          <i className='icon icon-play' />
          <p>Nuevo video</p>
        </button>
      </div>
    </nav>
  )
}
