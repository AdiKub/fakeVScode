import React from 'react'

import './styles.scss';

const Terminal = () => {
 
  return (
    <div className='terminal'>
      <div className='terminal-tabs'>
        <div className='terminal-tabs-names'>
          {['problems', 'output', 'debug console', 'terminal'].map( (name) => (
            <p
              className='terminal-tabs_name'
              key={name}
            >
              {name}
            </p>
          ))}
        </div>

      </div>
    </div>
  )
}
export default Terminal