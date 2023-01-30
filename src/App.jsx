import { BrowserRouter, Routes, Route } from "react-router-dom"
import "./App.css"
import Footer from "./components/Footer/Footer"

// Components
import Header from "./components/Header/Header"
import Home from "./pages/Home/Home"
import MovieDetail from "./pages/MovieDetail/MovieDetail"

function App() {


  return (
    <>
      <BrowserRouter>
      <Header />
      <div className="container">
        <Routes>
          <Route element={ <Home/> } path="/"/>
          <Route element={ <MovieDetail/> } path="/movie/:id"/>
        </Routes>
      </div>
      <Footer />
      </BrowserRouter>
    </>
  )
}

export default App
