//---- Assets
import { BsBoxArrowInRight } from 'react-icons/bs'

//------ Models
import { equipmentInterface } from "../../models/data.model";

//------ Dependencies
import { Link } from 'react-router-dom';

interface PropsInterface{
    equipment: equipmentInterface
}

function EquipmentCard({ equipment }:PropsInterface){

    //---- ------ Data exported from Equipments ---------------
    return(
        <div className="Card Card--equipment">
            <span className='Card__id'>{`${equipment.equipmentID}`}</span>
            <h4 className="Card__h4">{ equipment.name }</h4>
            <span className="Card__span">{ equipment.category }</span>
            <Link to={`/equipo/${equipment.equipmentID}`} className="Card__a">
                <BsBoxArrowInRight />
            </Link>
        </div>
    )
}

export default EquipmentCard;