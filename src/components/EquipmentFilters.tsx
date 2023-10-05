//---- Data
import Categories from '../data/Categories.json'
import { categoryInterface } from '../models/data.model';

function EquipmentFilters(){

    return(
        <div className="Filter">
            <div className='Filter__div'>
                <label className='Filter__label' htmlFor="word-input">Buscar</label>
                <input className='Filter__input' id='word-input' type="text" name='word'/>
            </div>
            <div className='Filter__div'>
                <label className='Filter__label' htmlFor="category-input">Categoria</label>
                <select name="category" id="category-input" className='Filter__input'>
                {
                    Categories.map((category:categoryInterface)=>{
                        return <option value={category.name} key={`${category.categoryID}`}>{category.name  }</option>
                    })
                }
                </select>
            </div>
            <input type="submit" className='Filter__submit' value='FILTRAR' />
        </div>
    )
}

export default EquipmentFilters;