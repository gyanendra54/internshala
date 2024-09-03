import { useState } from 'react'

import RightPanel from './RightPanel'
function App() {
  return (
    <div className="min-h-screen bg-gray-900 flex">

    <div className="hidden lg:block w-1/2 bg-gray-700"></div>
   
    <RightPanel />
  </div>
  )
}

export default App
