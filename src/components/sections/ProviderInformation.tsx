//--------- Hooks
import { useState, useEffect } from "react"

//---- Dependencies
import { useParams } from 'react-router-dom';

//--------- Models
import { equipmentInterface, fullProviderInterface, paginationInterface } from "../../models"

//---- Components
import EquipmentCard from "../cards/EquipmentCard";
import CategoryCard from "../cards/CategoryCard";

//--------- Services
import { getOne } from "../../services/providers.service"
import { getAllByProviders } from "../../services/equipments.service";

//--------- Configurations
interface equipmentsByProvider extends paginationInterface{
    data: equipmentInterface[]
}

// const initialProvider = {
//     providerID: -1,
//     name: "",
//     web: "",
//     mail: "",
//     phone: "",
//     address: "",
//     categories: []
// }

function ProviderInformation(){

    const { id } = useParams();

    const [provider, setProvider] = useState<fullProviderInterface | null>(null)
    const [equipments, setEquipments] = useState<equipmentsByProvider | null>(null)

    useEffect(()=>{
        (async()=>{
            const provider:any = await getOne(Number(id));
            
            if(!provider.error_message){
                setProvider(provider as fullProviderInterface);
                
                const Equipmentsdata:any = await getAllByProviders(Number(id)) 
                setEquipments(Equipmentsdata)
            }
        })()
        
    }, [])

    return(
        <div className="ProviderPage">
            {
                (provider != null)
                ?    <>
                        <h2 className="ProviderPage__title">{ provider.name }</h2>
                        <div className="ProviderPage__data">    
                            <span><b>Direccion/es:</b> {provider.address || 'Sin especificar'}</span>
                            <span><b>Telefono/s:</b> {provider.phone || 'Sin especificar'}</span>
                            <span><b>Sitio Web: </b>
                                {provider.web
                                ? <a href={provider.web} target="__blank">{provider.web}</a>
                                : 'No existe'}
                            </span>
                            <span><b>E-Mail:</b> {provider.mail}</span>                            
                        </div>
               
                        <h3 style={{marginTop:'2em',marginBottom:'10px'}}>Categorias con las que trabaja</h3>
                        <div className="ProviderPage__categories">
                            {
                                (provider.categories.length > 0)
                                ? provider.categories.map((category)=>{
                                    return <CategoryCard category={category} key={`${category.categoryID}`} />
                                })
                                : 'No trabaja con ninguna categoria'
                            }
                        </div>

                        <div style={{ marginTop:'2em', borderBottom:'2px solid black', display:"flex", justifyContent:"space-between", alignItems:"end" }}>
                            <h3 style={{marginBottom:"10px"}}>Equipos que comercializa</h3>
                            <span style={{ marginRight:"1em", fontSize:"1.2em" }}>Total: {`${equipments?.total}` || 0}</span>
                        </div>
                        <div>
                            {
                                (equipments != null)
                                ? equipments.data.map((value)=>{
                                    return <EquipmentCard key={`${value.equipmentID}`} equipment={value}/>
                                })
                                : 'Cargando...'
                            }
                        </div>         

                    </>
                :  <span>Cargando...</span>
            }
        </div>
    ) 
}

export default ProviderInformation