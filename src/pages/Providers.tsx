//---- Components
import ProviderFilters from '../components/ProviderFilters';
import ProviderList from '../components/ProviderList';

//---- Hooks
import { useSearchParams } from 'react-router-dom';
import { useProvidersStore } from '../store/providers.store';


function Providers(){
    
    // Get the queries of the url with useSearchParams
    const params = useSearchParams()[0]
    const initialFilters = {
        // Word takes the value of the url or ''
        word:params.get('word') || '',
        // Word takes the value of the url or -1
        category: Number(params.get('category')) || -1
    };

    //----> Store
    // This changes the global state of the equipment providers
    const changeFilters = useProvidersStore((state)=> state.changeFilters);
    changeFilters(initialFilters)
    // Thanks to this function, the state of the filters can be changed from the url, where the navigator is refreshed


    // SECTION OF THE PROVIDERS LIST
    return(
        <div className='Divisor'>
            {/* This div contains The component that renders the equipments list and the component that is the responsable of filter the equipmnets */}
            <ProviderFilters />
            <ProviderList />
            {/* <ProviderList initialFilters={initialFilters} /> */}
        </div>
    )
}

export default Providers;