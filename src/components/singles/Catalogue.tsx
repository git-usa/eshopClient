import {useContext, useState} from "react";
import {CatValues} from "../../values/CatValues";
import {lat_mapToArray, lat_onScreenResize, lat_screenWidth} from "../../scripts/labject";
import {Products} from "../../values/PodValues";
import AppContext from "../../modules/AppContext";

interface Type{
	catName : string;
}

const Catalogue = ({catName} : Type) => {
	
	const [screenWidth, setScreenWidth] = useState(lat_screenWidth());
	const appContext                    = useContext(AppContext);
	
	lat_onScreenResize(setScreenWidth);
	
	const category     = CatValues[catName as keyof typeof CatValues];
	const catalogStyle = {display : "grid", gridTemplateColumns : `repeat(${Products.length + 1},${screenWidth > 1000 ? "250px" : "125px"})`};
	
	return <>
		<div className="la-container">
			<h3 className="la-l la-s w3-padding w3-blue w3-theme-l1 la-capital">{category.title}</h3>
			{
				category.subs && lat_mapToArray(category.subs, (subCatKey, subCatValue) => {
					              const onClick = () => appContext.changeComponent("category", {parent : catName, name : subCatKey});
					              return <div key={`Category${catName}${subCatKey}`} className="la-l la-s la-container w3-padding">
						              <h6 className="la-capital la-lightBold">{subCatValue}</h6>
						              <div className="la-l la-s w3-border-bottom la-grid la-grid-scroll-col" style={catalogStyle}>
							              {
								              Products.map((product, index) => {
									              const key     = `Category${catName}${subCatKey}${product}${index}`;
									              const prod    = {parent : catName, category : subCatValue, name : product};
									              const onClick = () => appContext.changeComponent("product", prod);
									              return <div key={key} onClick={onClick} className="w3-border w3-padding w3-center la-point w3-hover-pale-yellow">
										              <div>
											              <img alt={product} src={`./images/${catName}/${product}.jpg`} style={{height : "108px"}}/>
										              </div>
										              <h6 className="la-l la-s la-capital">Product Name {product}</h6>
										              <h6 className="w3-khaki la-lightBold">$0.00</h6>
									              </div>;
								              })
							              }
							              <div onClick={onClick} className="w3-border w3-padding flex-center la-container la-l la-s la-point w3-hover-light-grey">
								              <div className="la-l la-s w3-center w3-large">See More...</div>
							              </div>
						              </div>
					              </div>;
				              })
			}
		</div>
	</>;
};

export default Catalogue;