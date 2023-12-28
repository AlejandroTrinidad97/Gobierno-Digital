import pokeball from './../assets/Pokeball.png';
import { Link } from "react-router-dom";
const Header = () => {
    return (
        <nav className="navbar navbar-expand-lg" style={{backgroundColor: "rgba(255, 58, 57, 0.9)"}}>
           <img src={ pokeball } width = { 50 } />
            <a className="navbar-brand">Pokedex</a>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                <li className="nav-item">
                    <button><Link to="/" className='nav-link'>Inicio</Link></button>
                </li>
                <li className="nav-item">
                    <button className="nav-link" onClick={()=>alert("Pokedex 2023\nProgramador: Alejandro Trinidad Zavala")}>Acerca de...</button>
                </li>
                </ul>
            </div>
        </nav>
 
    )
}

export default Header;