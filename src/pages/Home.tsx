import { Link } from "react-router-dom";


export default function Home(){

    return (
        <div style={{ marginLeft:'2em' }}>
            <h2>
                Bienvenido a la interfaz de <b>ProveeMed</b>!!
            </h2>

            <p style={{color:'#505050', fontSize:'1.2em', maxWidth:'1100px'}}>
            Simplificamos el acceso a información crucial sobre proveedores argentinos y 
            sus equipos médicos. Descubre una amplia gama de dispositivos, encuentra 
            proveedores confiables y mantén tus datos actualizados fácilmente. 
            Nuestra sección de backups te ofrece control total, permitiéndote descargar 
            plantillas, cargar actualizaciones y revisar el historial de cambios. Con nosotros,
            la gestión eficiente de equipos médicos nunca ha sido tan fácil y centralizada. 
            ¡Explora y optimiza tu experiencia ahora!
            </p>

            <p style={{ marginTop:'2em', color:'#505050', fontSize:'1.2em', maxWidth:'1100px' }}>
                Haz {' '}
                <Link to={'/backups'}>click aquí</Link>
                {' '}para respaldar tus datos y asegurar una gestión sin contratiempos!
            </p>
        </div>
    )
}