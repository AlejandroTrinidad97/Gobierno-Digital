import pokeball from './../assets/Pokeball.png';
const Header = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
           <img src={ pokeball } width = {50 } />
            <a className="navbar-brand">Pokedex</a>
            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav">
                <li class="nav-item active">
                    <a class="nav-link" href="#">Inicio</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">Acerca de...</a>
                </li>
                </ul>
            </div>
        </nav>
 
    )
}

export default Header;