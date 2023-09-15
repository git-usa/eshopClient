import React, {useState} from "react";
import NavBar from "../navBars/NavBar";
import SideBar from "../navBars/SideBar";
import GetComponent from "../GetComponent";
import {NavLinks} from "../../values/NavValues";
import AppContext from "../../modules/AppContext";
import {TypeCart} from "../../interfaces/TypeCart";

const Home = () => {
	// Create state for cart items
	const [cartItems, setCartItems] = useState<TypeCart>({});
	
	const setCartItem = (name : string, qty : number) => {
		cartItems[name] = {qty};
		setCartItems({...cartItems});
	};
	
	// Create state for component name
	const [compObj, setCompObj] = useState<{name : string, extra? : any}>({name : "home"});
	
	const component  = <GetComponent componentName={compObj.name} extra={compObj.extra}/>;
	const changeComp = (name : string, extra? : any) => setCompObj({name, extra});
	
	return <AppContext.Provider value={{cartItems : cartItems, setCartItem, changeComponent : changeComp}}>
		<NavBar links={NavLinks}/>
		<div className="la-bodyAfterHead la-container la-l la-s">
			<div className="la-container la-l2 la-s0 la-hide-small w3-white la-slider">
				<SideBar links={NavLinks}/>
			</div>
			<div className="la-container la-l6 la-s w3-white">{component}</div>
		</div>
	</AppContext.Provider>;
};

export default Home;