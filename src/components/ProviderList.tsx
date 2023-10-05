//----> Dependencies
import { useEffect } from 'react';

//----> Models
import { providerInterface } from '../models/data.model';

//----> Store
import { useProvidersStore } from '../store/providers.store';

//----> Components
import ProviderCard from './cards/ProviderCard';
import Pagination from './general/Pagination';


function ProviderList(){
    const isLoading = useProvidersStore((state)=>(state.isLoading))
    const loadProviders = useProvidersStore((state) => state.load)
    const providers = useProvidersStore((state)=>({
        hasNextPage: state.hasNextPage,
        hasPrevPage: state.hasPrevPage,
        total: state.total,
        page: state.page,
        limit: state.limit,
        data: state.data,
    }))


    useEffect(()=>{
        if(providers.data.length == 0 && providers.limit == 0){
            loadProviders()
        }
    },[])

    //----- Functions
    function changePage(number:number){
        loadProviders(number)
    }

    const listHeader = {
        border:'none',
        borderBottom:'1px solid rgb(66, 66, 66)',
        borderRadius:'0px',
        paddingBottom:'2px'
    }


    return(
        <div className="CardsContainer">
            
            <div className='Card' style={listHeader}>
                <span style={{color:'rgb(66,66,66)', textTransform:'uppercase'}}>Nombre</span>
                <span style={{color:'rgb(66,66,66)', textTransform:'uppercase'}}>Detalles</span>            
            </div>
            { isLoading && <h3>Cargando...</h3> }
            {
                (providers.data.length > 0)
                ? providers.data.map((provider:providerInterface)=>{
                    return <ProviderCard key={`${provider.providerID}`} provider={provider} />
                })
                : <span>Ocurrio un error o no se encontraron los datos</span>
                
            }

            <Pagination changePage={changePage} 
                pagination={{
                    hasNextPage: providers.hasNextPage,
                    hasPrevPage: providers.hasPrevPage,
                    total: providers.total,
                    page: providers.page,
                    limit: providers.limit
                }}/>            

        </div> 
    )
}


export default ProviderList;