//--------- Hooks
import { useState, useEffect } from "react"
import { useParams } from 'react-router-dom';

//--------- Models
import { equipmentInterface, providerInterface, paginationInterface } from "../../models"

//---- Components
import ProviderCard from "../cards/ProviderCard";

//--------- Services
import { getAllByEquipment } from "../../services/providers.service"
import { getOne } from "../../services/equipments.service";


interface providersByEquipment extends paginationInterface{
    data: providerInterface[]
}

function EquipmentInformation(){

    const { id } = useParams();

    const [equipment, setEquipment] = useState<equipmentInterface | null>(null)
    const [providers, setProviders] = useState<providersByEquipment | null>(null)


    useEffect(()=>{
        (async()=>{

            const equipment:any = await getOne(Number(id));
            
            if(!equipment.error_message){
                setEquipment(equipment);
                
                const Providersdata:any = await getAllByEquipment(Number(id)) 
                setProviders(Providersdata)
            }
        })()
    }, [])

    return(
        <div className="ProviderPage">
            {
                (equipment != null)
                ?    <>
                        <h2 className="ProviderPage__title">{ equipment.name }</h2>
                        
                        <div className="ProviderPage__data">    
                            <span><b>Categoria:</b> <a href={"/equipos?category=" + equipment.categoryID}>{equipment.category}</a></span>
                            <span><b>Codigo UMDNS:</b> {equipment.umdns || 'Sin especificar'}</span>
                            <span><b>Precio (USD):</b> {equipment.price?.toLocaleString('en-EU', {
                                style:'currency',
                                currency:'USD',
                                minimumFractionDigits: 0
                            }) || 'Sin especificar'}</span>                            
                        </div>

                        {
                            (equipment.description.length > 0) &&
                            equipment.description.split("\n").map(p =>{
                                return <p className="ProviderPage__p">{p}</p>
                            })
                        }

                        <div style={{ marginTop:'2em', borderBottom:'2px solid black', display:"flex", justifyContent:"space-between", alignItems:"end" }}>
                            <h3 style={{marginBottom:"10px"}}>Proveedores que lo venden</h3>
                            <span style={{ marginRight:"1em", fontSize:"1.2em" }}>Total: {`${providers?.total}` || 0}</span>
                        </div>
                        <div>
                            {
                                (providers != null)
                                ? providers.data.map((value)=>{
                                    return <ProviderCard key={`${value.providerID}`} provider={value}/>
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

export default EquipmentInformation