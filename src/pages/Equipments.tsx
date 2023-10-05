//---- Components
import EquipmentFilters from '../components/EquipmentFilters';
import EquipmentList from '../components/EquipmentList';

function Equipment(){
    return(
        <div className='Divisor'>
            <EquipmentFilters />
            <EquipmentList />
        </div>
    )

}

export default Equipment;