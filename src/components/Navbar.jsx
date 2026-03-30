import { Link } from 'react-router-dom'
import './Navbar.css'

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <Link to="/" className="navbar-logo">KICK-HAUS</Link>
      </div>
      <ul className="navbar-links">
        <li><Link to="/sneakers">Sneakers</Link></li>
        <li><Link to="/ropa">Ropa</Link></li>
        <li><Link to="/marcas">Marcas</Link></li>
        <li><Link to="/nosotros">Nosotros</Link></li>
      </ul>
      <div className="navbar-right">
        <button className="navbar-cart">Carrito (0)</button>
      </div>
    </nav>
  )
}

export default Navbar