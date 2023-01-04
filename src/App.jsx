import React, { useContext } from 'react'
import { Context } from './context/Context'

function App() {
  const { createDigits } = useContext(Context)

  return (
    <div>{createDigits()}</div>
  )
}

export default App