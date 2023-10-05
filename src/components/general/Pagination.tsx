//--- Interface
import { paginationInterface } from "../../models/data.model";

interface PropsInterface{
    changePage: any
    pagination: paginationInterface
}

/*
IMPORTANTE!!!!!!
SACAR LA FUNCIONALIDAD DE PASAR EL SET POR PARAMETRO PARA CAMBIAR UN ESTADO
INTENTAR HACERLO DE OTRA FORMA. ESTA ES UNA MALA PRACTICA
*/ 

function Pagination(Props:PropsInterface){
    
    const { changePage, pagination } = Props;
    
    return (
        <div className='CardsContainer__pagination'>
            {
                (!pagination.hasPrevPage)
                ? ''
                : <a onClick={()=>{ changePage(Number(pagination.page) - 1) }}>{'⬅'}</a>

            }
            {   
                [2,1].map(element=>{    
                    if((((pagination.page as number)) - element) >= 1){
                        return <a key={element} onClick={()=>{ changePage(Number(pagination.page) - element) }}>{(Number(pagination.page)) - element}</a>
                    }
                })
            }
            <a style={{color:'#044c84'}}>{Number(pagination.page)}</a>
            {   
                [0,1].map(element=>{    
                    if(((Number(pagination.page) + element) * Number(pagination.limit)) < Number(pagination.total)){
                        return <a key={element} onClick={()=>{ changePage(Number(pagination.page) + element + 1) }}>{(Number(pagination.page)) + element + 1}</a>
                    }
                })
            }
            {
                (!pagination.hasNextPage)
                ? ''
                : <a onClick={()=>{ changePage(Number(pagination.page) + 1)} }>{'➡'}</a>
            }
        </div>
    )
}

export default Pagination