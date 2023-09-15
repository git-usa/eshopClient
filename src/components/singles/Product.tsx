import {BreadTrailLinkClass} from "../../values/NavValues";
import {useContext} from "react";
import AppContext from "../../modules/AppContext";
import {PodAddToCartClassSmall, PodAddToCartClass, PodPriceClass, PodPriceClassSmall} from "../../values/PodValues";

interface Type{
	product : {
		name : string;
		parent : string;
		category : string;
	};
}

const Product = ({product} : Type) => {
	
	const parent     = product.parent;
	const category   = product.category;
	const source     = `./images/books/${product.name}.jpg`;
	const appContext = useContext(AppContext);
	const addToCart  = () => appContext.setCartItem(product.name, 1);
	
	return <div>
		{/* BREAD CRUMBS TRAILS */}
		<div className="la-capital w3-margin w3-large">
			<i className="fi fi-rs-angle-left la-vert-center"></i>
			<i className={BreadTrailLinkClass} onClick={() => appContext.changeComponent(parent)}>{parent}</i>
			<span>/</span>
			<i className={BreadTrailLinkClass} onClick={() => appContext.changeComponent("category", {parent, name : category})}>{category}</i>
		</div>
		
		{/* PRODUCT BLOCK */}
		
		<div className="la-l la-s la-container">
			
			{/* PRODUCT NAME ON SMALL SCREENS */}
			<div className="la-s la-l0 la-hide-large w3-padding">
				<h3 className="la-lightBold">Name of the Product : <span className="la-capital">{product.name}</span></h3>
			</div>
			
			{/* PRODUCT IMAGE */}
			<div className="la-s la-l3 w3-padding w3-border-bottom w3-center">
				<img alt={product.name} src={source} style={{maxWidth : "100%", maxHeight : "300px"}}/>
			</div>
			
			{/* PRODUCT DETAILS ON BIG SCREENS */}
			<div className="la-l7 la-s0 la-hide-small w3-padding">
				
				{/* PRODUCT NAME */}
				<h3 className="la-lightBold la-noMargin">Name of the Product : <span className="la-capital">{product.name}</span></h3>
				
				{/* PRODUCT BRIEF */}
				<h6 className="w3-large">Some brief details about the product</h6>
				
				{/* PRODUCT PRICE */}
				<div>
					<h6 className={PodPriceClass}>Sale Price : $0.00</h6>
				</div>
				
				{/* ADD TO CART */}
				<h6 className={PodAddToCartClass} onClick={addToCart}>Add to Cart</h6>
			
			</div>
			
			{/* PRODUCT DETAILS ON SMALL SCREENS */}
			<div className="la-s la-l0 la-hide-large w3-padding">
				
				<div className="w3-center la-s la-container">
					
					{/* PRODUCT PRICE */}
					<h6 className={PodPriceClassSmall}>Sale Price : $0.00</h6>
					
					{/* ADD TO CART */}
					<h6 className={PodAddToCartClassSmall} onClick={addToCart}>Add to Cart</h6>
				</div>
				
				{/* PRODUCT BRIEF */}
				<h6 className="w3-large">Some brief details about the product</h6>
			</div>
		</div>
	</div>;
};

export default Product;