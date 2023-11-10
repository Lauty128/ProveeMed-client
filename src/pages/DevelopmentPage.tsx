//----> Assets
import gif from '../assets/mono.gif';


export default function DevelopmentPage(){
    return <div className="ErrorPage">
    <img className='ErrorPage__img' src={gif} alt="Confused gif" />
    <h2 className="ErrorPage__h2">Esta pagina se encuentra en desarrollo</h2>
    <span className="ErrorPage__span">Actualmente no puede ser accedida por el usuario</span>
    <a href="/" className="ErrorPage__button">Volver</a>
</div>
}