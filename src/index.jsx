import React from 'react'
import {render} from 'react-dom'
import './babel'
import Header from './components/Header/index'
import Footer from './components/Footer'
import Toolbar from './components/Toolbar'
import Content from './components/Content'

import './assets/styles/main.scss'

const MainContainer = () => (
    <div className="container">
      <Header />
      <Toolbar />
      <Content />
      <Footer />
    </div>
  )
render(<MainContainer />, document.getElementById('root'))