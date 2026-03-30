// import { BrowserRouter, Routes, Route } from 'react-router-dom'
// import Navbar from './components/Navbar'
// import './App.css'

// function App() {
//   return (
//     <BrowserRouter>
//       <Navbar />
//       <Routes>
//         <Route path="/" element={<h1>Home</h1>} />
//         <Route path="/sneakers" element={<h1>Sneakers</h1>} />
//         <Route path="/ropa" element={<h1>Ropa</h1>} />
//         <Route path="/marcas" element={<h1>Marcas</h1>} />
//         <Route path="/nosotros" element={<h1>Nosotros</h1>} />
//       </Routes>
//     </BrowserRouter>
//   )
// }

// export default App

import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import './App.css'

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sneakers" element={<h1>Sneakers</h1>} />
        <Route path="/ropa" element={<h1>Ropa</h1>} />
        <Route path="/marcas" element={<h1>Marcas</h1>} />
        <Route path="/nosotros" element={<h1>Nosotros</h1>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App