import React from 'react'
import { useNavigate } from 'react-router-dom'

export const Table = ({ titles, list, icon }) => {
  
  const navigate = useNavigate()

  return (
    <table className='Table'>
      <thead>
        <tr>
          {titles.map((title, i) => (
            <th key={i+'title'}> <div>{i == 0 && <input type="checkbox" />} {title}</div> </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {list.map((row,i) => (
          <tr key={i + 'row'}>
            {row.map((cell,i) => (
              <td key={i+'cell'} onClick={() => navigate('/'+cell)}>
                {i == 0 ? <div>
                  <input type="checkbox" />
                  <i className={`icon ${icon}`} />
                  <span>{cell}</span>
                </div>
                  :
                cell}
              </td>
            )) }
          </tr>
        ))}
      </tbody>
      
    </table>
  )
}
