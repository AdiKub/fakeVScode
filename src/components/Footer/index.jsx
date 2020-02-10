import React from 'react'

import './styles.scss';

const Footer = () => {
 
  return (
    <div className="footer">
      <div className='footer-no-problem'>
        <div className='footer-no-problem_error space_between'>+</div>
        <span className='space_between'>0</span>
        <div className='footer-no-problem_warning space_between'>
          <div>
          </div>
          <span className='footer-no-problem_warning_her'>!</span>
        </div>
        <span className='space_between'>0</span>
      </div>
      <div className='footer-workplace-info'>
        <span className='space_between_info'> Ln 20, Col 28 </span>
        <span className='space_between_info'> Spaces: 2 </span>
        <span className='space_between_info'> UTF-8 </span>
        <span className='space_between_info'> LF </span>
        <span className='space_between_info'> JavaScript React </span>
      </div>
    </div>
  )
}
export default Footer