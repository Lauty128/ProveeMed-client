//---- Components
import ProviderFilters from '../components/ProviderFilters';
import ProviderList from '../components/ProviderList';

function Providers(){

    return(
        <div className='Divisor'>
            <ProviderFilters />
            <ProviderList />
        </div>
    )
}

export default Providers;