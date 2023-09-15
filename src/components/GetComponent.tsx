import Product from "./singles/Product";
import Carousel from "./singles/Carousel";
import Category from "./singles/Category";
import Catalogue from "./singles/Catalogue";
import ResultBar from "./singles/ResultBar";
import {CatValues} from "../values/CatValues";
import {lat_scrollTo} from "../scripts/labject";
import Cart from "./singles/Cart";

interface Type{
	extra? : any;
	componentName : string;
}

const GetComponent = ({componentName, extra} : Type) => {
	let comp;
	
	switch(componentName){
		case "home":
			comp = <Carousel/>;
			break;
		case "category":
			comp = <Category category={extra}/>;
			break;
		case "product":
			comp = <Product product={extra}/>;
			break;
		case "cart":
			comp = <Cart/>;
			break;
		default:
			if(CatValues[componentName as keyof typeof CatValues])
				comp = <Catalogue catName={componentName}/>;
			else
				comp = <ResultBar text={`Invalid Component Call ${componentName}`} type="error"/>;
	}
	lat_scrollTo(0, 0);
	return <div className="la-s la-l">{comp}</div>;
	
};

export default GetComponent;