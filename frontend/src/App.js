import "bootstrap/dist/css/bootstrap.min.css"
import "./App.css"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Auth from "./screens/auth"
import Dashboard from "./screens/dashboard"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Auth />} />
        <Route path="/dashboard/" element={<Dashboard />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App