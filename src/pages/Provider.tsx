//---- Components
import { Link } from 'react-router-dom'
import ProviderInformation from '../components/sections/ProviderInformation';


function Provider(){
    
    return(
        <div className='Information'>
            <Link to={'/proveedores'}>Volver</Link>
            <ProviderInformation />
        </div>
    )

}

export default Provider;