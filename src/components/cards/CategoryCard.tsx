//------- Components
import { Link } from "react-router-dom";

//------- Models
import { categoryInterface } from "../../models/data.model";

interface PropsInterface{
    category: categoryInterface
}

function CategoryCard(props:PropsInterface){
    const { category } = props;

    return <span className="CategoryCard">
        <Link to={"/?category="+category.categoryID}>{ category.name }</Link>
    </span>
}

export default CategoryCard;