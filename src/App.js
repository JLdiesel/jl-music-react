import React, { memo } from 'react'
import { renderRoutes } from 'react-router-config'
import { HashRouter } from 'react-router-dom'

import routes from './route'

import JLAppHeader from '@/components/app-header'
import JLAppFooter from '@/components/app-footer'


export default memo(function App() {
  return (

    <HashRouter>
      <JLAppHeader/>
      {renderRoutes(routes)}
      <JLAppFooter/>
      </HashRouter>
  
  
  )
})

