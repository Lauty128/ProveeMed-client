//----> Assets
import gif from '../assets/errorCat2.gif';


export default function ErrorPage(){

    const divPosition = {
        marginTop:'4em'
    }

    return <div className="ErrorPage" style={divPosition}>
        <img className='ErrorPage__img' src={gif} alt="Cat gif" />
        <h2 className="ErrorPage__h2">Esta pagina no existe</h2>
        <span className="ErrorPage__span">Vuelve al inicio para seguir navegando</span>
        <a href="/" className="ErrorPage__button">Volver</a>
    </div>
}