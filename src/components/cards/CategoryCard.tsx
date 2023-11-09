//------- Components
    //import { Link } from "react-router-dom";

//------- Models
import { categoryInterface } from "../../models/response.model";

interface PropsInterface{
    category: categoryInterface
}

function CategoryCard(props:PropsInterface){
    const { category } = props;

    return <span className="CategoryCard">
        <a href={"/equipos?category="+category.categoryID}>{ category.name }</a>
    </span>
}

export default CategoryCard;