import React from 'react'

import SideBar from '../SideBar'
import OpenFileEditor from '../OpenFileEditor'
import OpenFileName from '../OpenFileName'
import Terminal from '../Terminal'
import './styles.scss';

const Content = () => {
 
  return (
    <div className="content">
      <div className='activity-bar'>
      </div>
      <SideBar />
      <div className='content-editor-area'>
        <OpenFileName />
        <OpenFileEditor />
        <Terminal />
      </div>
    </div>
  )
}
export default Content