import React from 'react'

import TerminalText from '../TerminalText'
import './styles.scss';

const Terminal = () => {
 
  return (
    <div className='terminal'>
      <div className='terminal-tabs'>
        <div className='terminal-tabs-names'>
          {['problems', 'output', 'debug console', 'terminal'].map( (name) => (
            <p
              className={name !== 'terminal' 
                ? 'terminal-tabs_name' 
                : 'terminal-tabs_name terminal-tabs_name__selected' 
              }
              key={name}
            >
              {name}
            </p>
          ))}
        </div>
        <div className='terminal-tabs-buttons'>
          <div className='terminal-tabs-buttons__select terminal-tabs-buttons__margin'>
            <span className='terminal-tabs-buttons__option'>1:npm, bash</span>
            <div
              style={{transform: 'rotate(135deg)'}}
              className='sidebar-item_arrow sidebar-item_arrow__small'
            >
            </div>
          </div>
          <span className='terminal-tabs-buttons__plus terminal-tabs-buttons__margin'>+</span>
          <div className='terminal-tabs-buttons__split terminal-tabs-buttons__margin'>
            <div className='terminal-tabs-buttons__split_line'></div>
          </div>
          <div
              style={{transform: 'rotate(-45deg)'}}
              className='sidebar-item_arrow terminal-tabs-buttons__margin'
          >
          </div>
          <span className='terminal-tabs-buttons__close  terminal-tabs-buttons__margin'>+</span>
        </div>
      </div>
      <div className='terminal-window'>
      <TerminalText />
      </div>
    </div>
  )
}
export default Terminal