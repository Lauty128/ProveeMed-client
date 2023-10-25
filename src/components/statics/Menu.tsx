//---- Dependencies
import { Link } from "react-router-dom";

//---- Assets
import viteLogo from '/icon.png'

function Menu(){

    return(
        <div className="Menu">
            {/* <Link to={'/'}>
                <img src={viteLogo} alt="logo fio" className="Menu__image" />
            </Link> */}
            <a href="/">
                <img src={viteLogo} alt="logo fio" className="Menu__image" />
            </a>

            <nav className="Menu__nav"> 
                <Link className="Menu__a" to={'/equipos'}>Equipos</Link>
                <Link className="Menu__a" to={'/proveedores'}>Proveedores</Link>
            </nav>
        </div>
    )

}

export default Menu;