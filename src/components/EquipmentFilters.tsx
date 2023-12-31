//---- Hooks
import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { useEquipmentsStore } from '../store/equipments.store';
import { useCategoriesStore } from '../store/categories.store';

//---- Models
import { filtersInterface, categoryInterface } from '../models';

//---- Data
//import Categories from '../data/Categories.json'


// This object is used for restarting the filters
const initialFilters = {
    word: '',
    category: -1
}

function EquipmentFilters(){
    //---------> Hooks
    const { newFilters, filters } = useEquipmentsStore();
    const Categories = useCategoriesStore((state)=>state.data);
    const LoadCategories = useCategoriesStore((state)=>state.load);
    const [localFilters, setLocalFilters] = useState<filtersInterface>(filters)
    const [params, setParams] = useSearchParams()

    //-----------> This is used if the default value of the localFilters state is initialFilters
    useEffect(()=>{
        if(Categories == null){
            LoadCategories()
        }
         // The values of the global state filters takes the value of localFilters
         //setLocalFilters(filters)
    },[])

    //---------> Functions
    // This restarts the local filters and the global state filters
    function restartFilters(){
        setLocalFilters(initialFilters);
        newFilters(initialFilters);
        setParams({});
    }

    // Here the local filters state is changed
    function changeFilters(target:HTMLInputElement | HTMLSelectElement){
        // The 'name' and 'value' properties are taked
        const { name, value } = target;
    
        // The localFilters state is changed
        setLocalFilters({
            ...localFilters,
            [name]:value
        })
    }

    function handlerForm(e:React.FormEvent<HTMLFormElement>){
        // This is for avoiding the default behavior of the form
        e.preventDefault();

        // If the word is equal to '' then the parameter in the url is deleted, else is changed
        if(localFilters.word.length == 0) params.delete('word')
        else params.set('word', localFilters.word)
        // If the category is equal to -1 then the parameter in the url is deleted, else is changed
        if(localFilters.category == -1) params.delete('category')
        else params.set('category', localFilters.category.toString())
        
        // The changes are applied to the url
        setParams(params)

        //---
        // AGREGAR VALIDACION PARA QUE SOLO SE EJECUTE SI EXISTE UN CAMBIO EN LOS FILTROS
        // PODRIA AGREGAR UN ESTADO BOOLEANDO QUE INDICA QUE CAMBIAN LOS FILTROS LOCALES
        //---
        
        // This is for updating the global state filters and exucute the new query
        newFilters(localFilters);
    }

    return(
        <form className="Filter" onSubmit={(e)=> handlerForm(e) }>
            <div className='Filter__div'>
                <label className='Filter__label' htmlFor="word-input">Buscar</label>
                <input className='Filter__input' id='word-input' type="text" name='word' value={localFilters.word} onChange={(e)=> changeFilters(e.target)}/>
            </div>
            <div className='Filter__div'>
                <label className='Filter__label' htmlFor="category-input">Categoria</label>
                <select value={localFilters.category} name="category" id="category-input" className='Filter__input' onChange={(e)=> changeFilters(e.target)}>
                <option value="-1">Todas</option>
                {
                    Categories
                    ? Categories.map((category:categoryInterface)=>{
                        return (localFilters.category == category.categoryID)
                        ? <option value={`${category.categoryID}`} key={`${category.categoryID}`}>{category.name  }</option>
                        : <option value={`${category.categoryID}`} key={`${category.categoryID}`}>{category.name  }</option>
                    })
                    : ''
                }
                </select>
            </div>
            <input type="submit" className='Filter__submit' value='FILTRAR'/>
            <button className='Filter__submit'
                onClick={()=> restartFilters()}
                style={{backgroundColor:'#5780ab', marginLeft:'1em'}}>
                    REINICIAR
            </button>
        </form>
    )
}

export default EquipmentFilters;