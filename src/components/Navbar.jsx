import styles from "../styles/navbar.module.css"
import {NavLink} from "react-router-dom"
const Navbar = () => {
  return (
    <header>
    <nav>
      <NavLink to={"/"}>
        <h2>Hello</h2>
        <h2>Hello</h2>
      </NavLink>
    </nav>
    </header>
  )
}

export default Navbar