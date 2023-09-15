import {useContext, useState} from "react";
import {Products} from "../../values/PodValues";
import AppContext from "../../modules/AppContext";
import {lat_onScreenResize, lat_screenWidth} from "../../scripts/labject";

interface Type{
	category : {parent : string, name : string};
}

const Category = ({category} : Type) => {
	
	const name       = category.name;
	const parent     = category.parent;
	const appContext = useContext(AppContext);
	
	const [screenWidth, setScreenWidth] = useState(lat_screenWidth());
	lat_onScreenResize(setScreenWidth);
	
	const flexCenter = screenWidth > 1000 ? "" : "flex-center";
	
	return <>
		{/* HEAD */}
		<h3 className="la-capital w3-green w3-theme-l1 w3-padding w3-margin">{name}</h3>
		
		{/* BREAD CRUMBS TRAILS */}
		<div className="la-capital w3-margin w3-large">
			<i className="fi fi-rs-angle-left la-vert-center"></i>
			<i className="w3-border-bottom la-point w3-hover-dark-gray w3-margin-8" onClick={() => appContext.changeComponent(parent)}>{parent}</i>
			<span>/</span>
			<span className="w3-margin-8">{name}</span>
		</div>
		
		{/* PRODUCTS LIST */}
		<div className="la-container la-l la-s w3-padding">
			{
				Products.map((product, index) => {
					const key     = `CategoryProduct${index}`;
					const src     = `./images/books/${product}.jpg`;
					const onClick = () => appContext.changeComponent("product", {parent, category : name, name : product});
					
					/* PRODUCT BLOCK */
					return <div key={key} onClick={onClick} className={`la-container la-s la-l w3-border la-point w3-hover-pale-yellow ${flexCenter}`}>
						{/* PRODUCT IMAGE */}
						<div className="la-l2 la-s3 w3-padding">
							<img alt={product} src={src} style={{maxWidth : "100%"}}/>
						</div>
						
						{/* PRODUCT BRIEF */}
						<div className="la-l8 la-s7 w3-padding w3-border-left">
							<h4 className="la-lightBold la-noMargin">Product Name</h4>
							<h5 className="w3-text-dark-gray">Brief Details About Product</h5>
							<h6 className="w3-text-red la-bold">Price : $0.00</h6>
						</div>
					</div>;
				})
			}
		</div>
	</>;
};

export default Category;