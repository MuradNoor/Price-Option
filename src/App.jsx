

import './App.css'
import BarData from './assets/Components/BarChart/BarData'
import Chart from './assets/Components/Chart/Chart'
import Navbar from './assets/Components/Navbar/Navbar'
import PriceOptions from './assets/Components/PriceOptions/PriceOptions'

function App() {
  return (
    <>
    <Navbar></Navbar>
    <h1 className='text-6xl bg-red-500 p-5 text-center'>Gym Price Option</h1>
    <PriceOptions></PriceOptions>
    <Chart></Chart>
    <BarData></BarData>
    </>
  )
}

export default App
