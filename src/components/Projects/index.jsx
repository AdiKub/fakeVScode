import React from 'react'

import './styles.scss';

const Projects = () => {
  const projects = {
    'node_modules': ['closedFolder', 1],
    'src': ['openedFolder', 1, 'modified'],
    'assets': ['closedFolder', 2],
    'components': ['openedFolder', 2, 'modified'],
    'Content': ['closedFolder', 3],
    'Footer': ['closedFolder', 3],
    'Header': ['closedFolder', 3],
    'Projects': ['openedFolder', 3, 'modified'],
    'index.jsx': ['jsx', 4, 'modified'],
    'styles.scss': ['scss', 4, 'modified'],
    'SideBar': ['closedFolder', 3],
    'Toolbar':['closedFolder', 3],
    'babel.js': ['js', 2],
    'index.js': ['jsx', 2],
    'index.html': ['html', 2],
    '.gitignore': ['git', 2],
    'package-lock.json': ['json', 1],
    'package.json': ['json', 1],
    'webpack.config.js': ['webpack', 1]
  }

  const setLogo = format => {
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

  const setModify = format => {
    if (format[0] === 'closedFolder' || format[0] === 'openedFolder'){
      return (
        <div className='project-modified_folder project-modified_color'></div>
      )
    } else {
      return (
        <strong className='project-modified_color'>M</strong>
      )
    }
  }

  return (
    <div className="project">
      {Object.keys(projects).map((key) => {
        return (
          <div
            key={key} 
            className='project-wrapper'>
            <div
              id={key}
              style={{paddingLeft: 10*projects[key][1]}}
              className='sidebar-item-content_title'>
                {setLogo(projects[key])}   
                <span
                  style={{color: projects[key][2] && '#fcc695'}}
                  className='sidebar-item_text'>
                  {key}
                </span>
            </div>
            <div className='project-modified'>
              {projects[key][2] && setModify(projects[key])}
            </div>
          </div>
        )
      })}
    </div>
  )
}
export default Projects