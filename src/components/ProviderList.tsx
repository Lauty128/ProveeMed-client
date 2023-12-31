//----> Dependencies
import { useEffect } from 'react';

//----> Models
import { providerInterface } from '../models/response.model';

//----> Store
import { useProvidersStore } from '../store/providers.store';

//----> Components
import ProviderCard from './cards/ProviderCard';
import Pagination from './general/Pagination';
import { SqueletonCard } from './squeleton/Card';


function ProviderList(){
    //----------> Store
        // Function for loading the equipments in the store
        const loadProviders = useProvidersStore((state) => state.load)

        // States of the store
        const State = useProvidersStore((state)=>({
            isLoading: state.isLoading,
            error: state.error
        }))

        // Data of the store
        const providers = useProvidersStore((state)=>({
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
            if(providers.data.length == 0 && providers.limit == 0){
                loadProviders(1)
            }
        },[])

    //----------> Functions
        function changePage(number:number){
            // loadEquipments() is executed but with a specified page number
            loadProviders(number)
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
            
            <div className='Card' style={listHeader}>
                <span style={{color:'rgb(66,66,66)', textTransform:'uppercase'}}>Nombre</span>
                <span style={{color:'rgb(66,66,66)', textTransform:'uppercase'}}>Detalles</span>            
            </div>

            { State.isLoading && [1,2,3,4,5,6,7,8,9,10].map((index)=>{
                    return <SqueletonCard key={`${index}`} />
            }) }
            
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