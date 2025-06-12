import { useEffect } from 'react'
import CenterBox from './components/CenterBox'
import CatImage from './components/CatImage'
import CatQuote from './components/CatQuote'
import { getClientInfo } from './utils/getClientInfo'

function App() {
  useEffect(() => {
    const logClient = async () => {
      const info = await getClientInfo()
      await fetch(import.meta.env.VITE_DB_URL + '/clients', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(info)
      })
    }

    logClient()
  }, [])

  return (
    <CenterBox title="Welcome to CatBox">
      <CatQuote />
      <CatImage />
    </CenterBox>
  )
}

export default App
