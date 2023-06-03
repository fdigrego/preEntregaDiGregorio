import CartWidget from "../CartWidget/CartWidget"
import './NavBar.css'

const NavBar = () => {
  return (
   <>
    <header>
      <h1 className="title">Marolio Online</h1>
      <nav>
        <ul className="lista">
          <li>Almacen</li>
          <li>Lacteos</li>
          <li>Limpieza</li>
          <li>Secos</li>
          <li>Recetas</li>
        </ul>
      </nav>
      <CartWidget />
    </header>
   </>
  )
}

export default NavBar