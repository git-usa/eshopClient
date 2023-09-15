import {useContext} from "react";
import AppContext from "../../modules/AppContext";
import {lat_isValidObject, lat_mapToArray} from "../../scripts/labject";
import {CartHeadClass, CartHeadIntClass, CartRowClass, CartValueIntClass} from "../../values/CartValues";

const Cart = () => {
	const appContext = useContext(AppContext);
	
	const items = appContext.cartItems;
	if(!lat_isValidObject(items)) return <div className="la-container w3-padding">
		<h3 className="w3-padding la-error">Cart is Empty</h3>
	</div>;
	
	let total = 0;
	
	return <>
		<div className="la-container w3-padding">
			{/* CART TITLE */}
			<h3 className="w3-padding w3-deep-purple la-l la-s">Shopping Cart</h3>
			
			<div className={CartRowClass}>
				<h6 className={`la-l4 la-s4 ${CartHeadClass}`}>Product</h6>
				<h6 className={CartHeadIntClass}>Price</h6>
				<h6 className={CartHeadIntClass}>Qty.</h6>
				<h6 className={CartHeadIntClass}>Total</h6>
			</div>
			
			{/* LIST OF ITEMS */}
			{
				lat_mapToArray(items, (name, item) => {
					total += item.qty * 1;
					return <div key={`CartItem${name}`} className={CartRowClass}>
						
						{/* PRODUCT NAME */}
						<h6 className="la-l4 la-s4 la-capital la-lightBold la-noMargin">{name}</h6>
						
						{/* PRODUCT PRICE */}
						<h6 className={CartValueIntClass}>$1.00</h6>
						
						{/* PRODUCT QUANTITY */}
						<h6 className={CartValueIntClass}>X {item.qty}</h6>
						
						{/* PRODUCT TOTAL */}
						<h6 className={CartValueIntClass}>{item.qty * 1}</h6>
					</div>;
				})
			}
			
			<div className={CartRowClass}>
				<h6 className="la-l6 la-s4 la-lightBold w3-right-align">Net Total</h6>
				<h6 className={`${CartValueIntClass}`}>{Object.values(items).reduce((pv, cv, ci) => {
					return pv + cv.qty;
				}, 0)}</h6>
				<h6 className={`${CartValueIntClass}`}>{total}</h6>
			</div>
		</div>
	</>;
};

export default Cart;