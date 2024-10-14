import './App.css'
import Navbar from '../src/nav/Navbar'
import { Outlet } from 'react-router-dom'
function App() {
  return (
    <>
      <Navbar />
      <Outlet></Outlet>
    </>
  )
}

export default App
