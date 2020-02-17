import React from 'react'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { atomDark } from 'react-syntax-highlighter/dist/esm/styles/prism'
import './styles.scss';

const TerminalText = () => {

  const text = `                                      Asset       Size  Chunks                               Chunk Names
  13c3d2d9b97066223c4f.hot-update.json   46 bytes          [emitted] [immutable] [hmr]  
                            index.html  436 bytes          [emitted]                    
main.13c3d2d9b97066223c4f.hot-update.js   1.97 KiB    main  [emitted] [immutable] [hmr]  main
main.13c3d2d9b97066223c4f.hot-update.js.map   2.65 KiB    main  [emitted] [dev]              main
                               main.js   67.9 KiB    main  [emitted]                    main
                           main.js.map   58.4 KiB    main  [emitted] [dev]              main
+ 4 hidden assets
Entrypoint main = vendors~main.js vendors~main.js.map main.css main.js main.13c3d2d9b97066223c4f.hot-update.js main.css.map main.js.map main.13c3d2d9b97066223c4f.hot-update.js.map
[./components/TerminalText/index.jsx] 469 bytes {main} [built]
+ 858 hidden modules
Child html-webpack-plugin for "index.html":
1 asset
Entrypoint undefined = index.html
  4 modules
ℹ ｢wdm｣: Compiled successfully.
ℹ ｢wdm｣: Compiling...
ℹ ｢wdm｣: Hash: 3aa48cc782d8b4608856
Version: webpack 4.41.5
Time: 152ms
Built at: 02/17/2020 5:15:22 PM
                          Asset       Size  Chunks                               Chunk Names
bd62b14415ae4cf6d8ec.hot-update.json   35 bytes          [emitted] [immutable] [hmr]  
                     index.html  436 bytes          [emitted]                    
                        main.js   67.9 KiB    main  [emitted]                    main
                    main.js.map   58.4 KiB    main  [emitted] [dev]              main
+ 4 hidden assets
Entrypoint main = vendors~main.js vendors~main.js.map main.css main.js main.css.map main.js.map
[./components/TerminalText/index.jsx] 469 bytes {main} [built]
+ 858 hidden modules
Child html-webpack-plugin for "index.html":
1 asset
Entrypoint undefined = index.html
  4 modules
ℹ ｢wdm｣: Compiled successfully.`

  return (
    <div className='terminal-text' id='terminalText'>
      
      {/* <p className='terminal-text-main'>
        <span className='terminal-text_user'>
          superUser@ThinkPad
      </span>
        :
      <span className='terminal-text_path'>
          ~/Documents/fakeVScode
      </span>
        $ git add .
    </p>
      <p className='terminal-text-main'>
        <span className='terminal-text_user'>
        superUser@ThinkPad
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
        superUser@ThinkPad
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
      <span> To github.com:Shpilivili/fakeVScode.git</span>
      <span>    ef6a751..428e739  dev -> dev</span>
      <p className='terminal-text-main'>
        <span className='terminal-text_user'>
        superUser@ThinkPad
      </span>
        :
      <span className='terminal-text_path'>
          ~/Documents/fakeVScode
      </span>
        $
    </p>
     */}

  <SyntaxHighlighter  
        language='jsx' 
        style={atomDark} >
        {text}
      </SyntaxHighlighter>
    </div>
  )
}
export default TerminalText