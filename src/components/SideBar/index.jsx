import React, { useState } from 'react'

import Projects from '../Projects'
import './styles.scss';

const SideBar = () => {
  const [open, isOpen] = useState(true)
  const sidebarName = ['OPEN EDITORS', 'fakevscode', 'outline', 'npm scripts']

  return (
    <div className="sidebar">
      <div className='sidebar-explorer'>
        <span>explorer</span>
      </div>
      {sidebarName.map((text) => {
        const fakevscode = 'fakevscode' === text
        return (
          <div
            className='sidebar-item'
            id={text}
            key={text}>
            <div
              onClick={() => { fakevscode && isOpen(!open) }}
              className='sidebar-item-title'>
              <div
                style={{ transform: `rotate(${fakevscode && open ? '135deg' : '45deg'})` }}
                className='sidebar-item_arrow'>
              </div>
              <span className='sidebar-item_text'>
                {text.toUpperCase()}
              </span>
            </div>
            <div
              style={{ height: fakevscode && open ? '550px' : '0px' }}
              className='sidebar-item-content'>
              {fakevscode && <Projects />}
            </div>
          </div>
        )
      })}
    </div>
  )
}
export default SideBar