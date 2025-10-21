import './App.module.css'
import { Outlet } from "react-router-dom";

import Header from './components/header/Header.jsx'
import Footer from './components/footer/footer.jsx'

function App() {

  return (
    <>
      <Header />

      <Outlet />
      
      <Footer />
    </>
  )
}

export default App
