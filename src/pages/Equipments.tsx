//---- Components
import EquipmentFilters from '../components/EquipmentFilters';
import EquipmentList from '../components/EquipmentList';

//---- Hooks
import { useSearchParams } from 'react-router-dom';
import { useEquipmentsStore } from '../store/equipments.store';


function Equipment(){

    // Get the queries of the url with useSearchParams
    const params = useSearchParams()[0]
    const initialFilters = {
        // Word takes the value of the url or ''
        word:params.get('word') || '',
        // Word takes the value of the url or -1
        category: Number(params.get('category')) || -1
    };
    
    //----> Store
    // This changes the global state of the equipment filters 
    const changeFilters = useEquipmentsStore((state)=> state.changeFilters);
    changeFilters(initialFilters)
    // Thanks to this function, the state of the filters can be changed from the url, where the navigator is refreshed

    
    // SECTION OF THE EQUIPMENTS LIST
    return(
        <div className='Divisor'>
            {/* This div contains The component that renders the providers list and the component that is the responsable of filter the providers */}
            <EquipmentFilters />
            <EquipmentList />
        </div>
    )

}

export default Equipment;