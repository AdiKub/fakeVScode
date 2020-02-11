import React from 'react'

import './styles.scss';

const Projects = () => {
  const projects = {
    'node_modules': ['closedFolder', 1],
    'src': ['openedFolder', 1],
    'assets': ['closedFolder', 2],
    'components': ['openedFolder', 2],
    'Content': ['openedFolder', 3],
    'index.jsx': ['jsx', 4],
    'styles.scss': ['scss', 4],
    'Footer': ['closedFolder', 3],
    'Header': ['closedFolder', 3],
    'Projects': ['closedFolder', 3],
    'SideBar': ['closedFolder', 3],
    'Toolbar':['closedFolder', 3],
    'babel.js': ['js', 2],
    'index.js': ['jsx', 2],
    '.gitignore': ['git', 2],
    'package-lock.json': ['json', 1],
    'package.json': ['json', 1],
    'webpack.config.js': ['js', 1]
  }
  const setLogo = (format) => {
    if (format[0] === 'closedFolder' || format[0] === 'openedFolder' ) {
      return (
        <div
          style={{
            transform: `${format[0] === 'closedFolder' ? 'rotate(45deg)' : 'rotate(135deg)'}`
          }}
         className='sidebar-item_arrow sidebar-item_arrow__small'
        >
        </div>
      )
    }
    
  }
  return (
    <div className="project">
      {Object.keys(projects).map((key) => {
        return (
          <div
            id={key}
            key={key}
            style={{paddingLeft: 10*projects[key][1]}}
            className='sidebar-item-content_title'>
              {setLogo(projects[key])}   
              <span className='sidebar-item_text'>
                {key}
              </span>
          </div>
        )
      })}
       
    </div>
  )
}
export default Projects