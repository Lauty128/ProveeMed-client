//----> Dependencies
import { useEffect } from 'react';

//----> Models
import { equipmentInterface } from '../models';

//----> Store
import { useEquipmentsStore } from '../store/equipments.store';

//----> Components
import EquipmentCard from './cards/EquipmentCard';
import Pagination from './general/Pagination';

function EquipmentList(){
    //----------> Store
        // Function for loading the equipments in the store
        const loadEquipments = useEquipmentsStore((state) => state.load)

        // States of the store
        const State = useEquipmentsStore((state)=>({
            isLoading: state.isLoading,
            error: state.error
        }))
        
        // Data of the store
        const equipments = useEquipmentsStore((state)=>({
            hasNextPage: state.hasNextPage,
            hasPrevPage: state.hasPrevPage,
            total: state.total,
            page: state.page,
            limit: state.limit,
            data: state.data,
        }))

    //----------> Hooks
        useEffect(()=>{
            // If the length of the data and the established limit are equal to zero the following function is executed 
            if(equipments.data.length == 0 && equipments.limit == 0){
                loadEquipments(1)
            }
        },[])

    //----------> Functions
        function changePage(number:number){
            // loadEquipments() is executed but with a specified page number
            loadEquipments(number)
        }

    //----------> Styles
        const listHeader = {
            border:'none',
            borderBottom:'1px solid rgb(66, 66, 66)',
            borderRadius:'0px',
            paddingBottom:'2px'
        }


    return(
        <div className="CardsContainer">
            <div className='Card Card--equipment' style={listHeader}>
                <span style={{color:'rgb(66,66,66)', textTransform:'uppercase'}}>Nombre</span>
                <span style={{color:'rgb(66,66,66)', textTransform:'uppercase'}}>Categoria</span>
                <span style={{color:'rgb(66,66,66)', textTransform:'uppercase'}}>Detalles</span>
            </div>
            { State.isLoading && <h3>Cargando...</h3> }
            {
                (equipments.data.length > 0)
                && equipments.data.map((equipment:equipmentInterface)=>{
                    return <EquipmentCard key={`${equipment.equipmentID}`} equipment={equipment} />
                })
            }


            <Pagination changePage={changePage} pagination={{hasNextPage: equipments.hasNextPage,
            hasPrevPage: equipments.hasPrevPage,
            total: equipments.total,
            page: equipments.page,
            limit: equipments.limit}}/>
            
        </div>
    )
}

export default EquipmentList;