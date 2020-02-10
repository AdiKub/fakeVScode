import React from 'react'

import './styles.scss';

const Toolbar = () => {
  const menu = ['file', 'Edit', 'selection', 'view', 'Go', 'debug', 'terminal', 'help']

  return (
    <div className="toolbar">
      {menu.map((text)=>
        <div
          key={text} 
          className='toolbar_menu'>
          {text.toLowerCase()}
        </div>
      )}
    </div>
  )
} 
export default Toolbar