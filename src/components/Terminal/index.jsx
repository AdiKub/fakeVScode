import React from 'react'

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
        <span>
          + 2 hidden assets
          Entrypoint main = vendors~main.js vendors~main.js.map main.css main.js main.72d2ab6a381d14294552.hot-update.js main.css.map main.js.map main.72d2ab6a381d14294552.hot-update.js.map
          [./components/Terminal/styles.scss] 371 bytes  [built]
              + 390 hidden modules
          Child html-webpack-plugin for "index.html":
              1 asset
              Entrypoint undefined = index.html
                4 modules
          Child mini-css-extract-plugin ../node_modules/css-loader/dist/cjs.js!../node_modules/sass-loader/dist/cjs.js!components/Terminal/styles.scss:
              Entrypoint mini-css-extract-plugin = *
              [../node_modules/css-loader/dist/cjs.js!../node_modules/sass-loader/dist/cjs.js!./components/Terminal/styles.scss] 1.96 KiB [built]
                  + 1 hidden module
          ℹ ｢wdm｣: Compiled successfully.
        </span>
      </div>
    </div>
  )
}
export default Terminal