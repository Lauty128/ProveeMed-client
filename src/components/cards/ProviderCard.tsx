//---- Assets
import { BsBoxArrowInRight } from 'react-icons/bs'

//------ Dependencies
import { Link } from 'react-router-dom';

//------ Models
import { providerInterface } from "../../models/response.model";

interface PropsInterface{
    provider: providerInterface   
}

function ProviderCard({ provider }:PropsInterface){

    return(
        <div className="Card Card--provider">
            <span className='Card__id'>{`${provider.providerID}`}</span>
            <h4 className="Card__h4">{ provider.name }</h4>
            <Link to={`/proveedores/${provider.providerID}`} className="Card__a">
                <BsBoxArrowInRight />
            </Link>
        </div>
    )
}

export default ProviderCard;