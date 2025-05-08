
import LightToggle from './components/LightToggle'
import LottoNumbers from './components/LottoNumbers'
import ClickCounter from './components/ClickCounter'
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

        {/*CLick Counter */}
        <h2>Click Counter</h2>
          <ClickCounter />
      </div>
    </>
  )
}

export default App
