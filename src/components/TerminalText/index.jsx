import React from 'react'

import './styles.scss';

const TerminalText = () => {
 
  return (
    <div className='terminal-text' id='terminalText'>
    <p className='terminal-text-main'>
      <span className='terminal-text_user'>
        adikub@ThinkPad
      </span>
      :
      <span className='terminal-text_path'>
      ~/Documents/fakeVScode
      </span>
      $ git add .
    </p>
    <p className='terminal-text-main'>
      <span className='terminal-text_user'>
        adikub@ThinkPad
      </span>
      :
      <span className='terminal-text_path'>
      ~/Documents/fakeVScode
      </span>
      $ git commit -m 'finished terminal'
    </p>
    <span>[dev 428e739] finished terminal</span>
    <span> 2 files changed, 114 insertions(+), 4 deletions(-)</span>
    <p className='terminal-text-main'>
      <span className='terminal-text_user'>
        adikub@ThinkPad
      </span>
      :
      <span className='terminal-text_path'>
      ~/Documents/fakeVScode
      </span>
      $  git push origin dev
    </p>
    <span> git push origin dev</span>
    <span> Delta compression using up to 4 threads.</span>
    <span> Compressing objects: 100% (7/7), done.</span>
    <span> Writing objects: 100% (7/7), 1.75 KiB | 894.00 KiB/s, done. </span>
    <span> Total 7 (delta 3), reused 0 (delta 0)</span>
    <span> remote: Resolving deltas: 100% (3/3), completed with 3 local objects. </span>
    <span> To github.com:AdiKub/fakeVScode.git</span>
    <span>    ef6a751..428e739  dev -> dev</span>
    <p className='terminal-text-main'>
      <span className='terminal-text_user'>
        adikub@ThinkPad
      </span>
      :
      <span className='terminal-text_path'>
      ~/Documents/fakeVScode
      </span>
      $
    </p>
    </div>
  )
}
export default TerminalText