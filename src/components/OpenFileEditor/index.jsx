import React, {useEffect} from 'react'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { atomDark } from 'react-syntax-highlighter/dist/esm/styles/prism';
import Prism from 'prismjs'

import './styles.scss';

const OpenFileEditor = () => {


  const tekst = `import React from 'react'

  import './styles.scss';
  
  const OpenFileName = () => {
   
    return (
      <div className="open-file-name">
        <div className="open-file-name-file file-selected">
        </div>
        <div className="open-file-name-file file-unselected">
        </div>
      </div>
    )
  }
  export default OpenFileName`
 
  return (
    <div
      id='editor-win'
      className="open-file-editor">
      {/* <SyntaxHighlighter  
        language='jsx' 
        style={atomDark} >
        {tekst}
      </SyntaxHighlighter> */}
      { Prism.highlight(tekst, Prism.languages.javascript, 'javascript')}
    </div>
  )
}
export default OpenFileEditor