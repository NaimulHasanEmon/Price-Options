import './App.css'
import NavBar from './components/NavBar/NavBar'
import PriceOptions from './components/PriceOptions/PriceOptions'
import LineChart from './components/LineChart/LineChart'

function App() {

  return (
    <>
    <div className='mb-5 mx-3'>
        <NavBar></NavBar>
        <PriceOptions></PriceOptions>
        <LineChart></LineChart>
    </div>
    </>
  )
}

export default App