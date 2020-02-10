import React, {useState} from 'react'

import './styles.scss';

const SideBar = () => {
  const [open, isOpen]=useState(true)
  const sidebarName = ['OPEN EDITORS', 'fakevscode', 'outline', 'npm scripts']
  
  return (
    <div className="sidebar">
      <div className='sidebar-explorer'>
        <span>explorer</span>
      </div>
      {sidebarName.map((text) =>
        <div
          className='sidebar-item'
          id={text}
          key={text}>
          <div
            onClick={()=>{'fakevscode' === text && isOpen(!open)}} 
            className='sidebar-item-title'>
            <div
              style={{transform: `rotate(${'fakevscode' === text && open ? '135deg' : '45deg'})`}} 
              className='sidebar-item_arrow'>
            </div>
            <span className='sidebar-item_text'>
              {text.toUpperCase()}
            </span>
          </div>
          <div
            style={{height: 'fakevscode' === text && open ? '550px' : '0px'}}
            className='sidebar-item-content'>
            
            <div className='sidebar-item-content_title'>
              <div
                style={{transform: `rotate(45deg)`}} 
                className='sidebar-item_arrow sidebar-item_arrow__small'>
              </div>
              <span className='sidebar-item_text'>
                {text}
              </span>
            </div>
            <div className='sidebar-item-content_title'>
              <div
                style={{transform: `rotate(45deg)`}} 
                className='sidebar-item_arrow sidebar-item_arrow__small'>
              </div>
              <span className='sidebar-item_text'>
                {text}
              </span>
            </div>
            <div className='sidebar-item-content_title'>
              <div
                style={{transform: `rotate(45deg)`}} 
                className='sidebar-item_arrow sidebar-item_arrow__small'>
              </div>
              <span className='sidebar-item_text'>
                {text}
              </span>
            </div>
            <div className='sidebar-item-content_title'>
              <div
                style={{transform: `rotate(45deg)`}} 
                className='sidebar-item_arrow sidebar-item_arrow__small'>
              </div>
              <span className='sidebar-item_text'>
                {text}
              </span>
            </div>
            <div className='sidebar-item-content_title'>
              <div
                style={{transform: `rotate(45deg)`}} 
                className='sidebar-item_arrow sidebar-item_arrow__small'>
              </div>
              <span className='sidebar-item_text'>
                {text}
              </span>
            </div>
        
          </div>
        </div>
      )}
    </div>
  )
}
export default SideBar