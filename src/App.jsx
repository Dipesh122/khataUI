import "./App.css"
import { Outlet } from "react-router-dom"
import DashBoard from "./components/Layout"

function App() {

  return (
    <>
    <div className="flex">
    <DashBoard />
    <Outlet />
    </div>
    </>
  )
}

export default App
