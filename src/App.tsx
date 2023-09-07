// From React v17, that was released in 2020
//we no longer need to import the React module
//in files that contain React Components
import './App.css'
import { useState, useEffect } from 'react'
import { Display } from './Display'
import { getSignalStrengthData, SignalStrengthData } from './api'

function App() {
  const [data, setData] = useState<SignalStrengthData | null>(null)

  const fetchData = async () => {
    const response: SignalStrengthData = await getSignalStrengthData()
    setData(response)
  }

  useEffect(() => {
    fetchData()
  }, [])

  return <div className='App'>{data != null && <Display data={data} />}</div>
}

export default App
