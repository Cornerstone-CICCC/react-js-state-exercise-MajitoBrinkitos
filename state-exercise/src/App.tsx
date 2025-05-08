
import LightToggle from './components/LightToggle'
import LottoNumbers from './components/LottoNumbers'
import './App.css'

function App() {

  return (
    <>
      <div>
        {/*Light Toggle */}
        <h2>Light Toggle</h2>
        <LightToggle />

        {/*Lotto Numbers */}
          <LottoNumbers />
      </div>
    </>
  )
}

export default App
