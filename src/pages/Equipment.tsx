//---- Data
// import EquipmentsJSON from '../data/Equipments.json'

//---- Models
// import { equipmentInterface } from '../models/data.model';

//---- Dependencies

//---- Components
import { Link } from 'react-router-dom'
import EquipmentInformation from '../components/sections/EquipmentInformation';


function Equipment(){
    
    return(
        <div className='Information'>
            <Link to={'/equipos'}>Volver</Link>
            <EquipmentInformation />
        </div>
    )

}

export default Equipment;