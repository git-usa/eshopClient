import {useContext} from "react";
import AppContext from "../../../modules/AppContext";
import {CartIconClass, HeadBarClass, NavMenuBtnId} from "../../../values/NavValues";

const BarHead = ({toggleMenu} : {toggleMenu : () => void}) => {
	const appContext = useContext(AppContext);
	const goToCart   = () => appContext.changeComponent("cart");
	
	return <>
		{/* FIXED POSITION CONTAINER TO CONTAIN/SHOW HEAD/NAV BAR ON TOP */}
		<div className={HeadBarClass} style={{}}>
			
			{/* APP/BAR TITLE */}
			<h1 className="la-lightBold la-noMargin">eShop Title</h1>
			
			{/* CART CELL */}
			<div className="la-container flex-center">
				<div className="la-vert-center la-point">
					{/* CART ICON */}
					<span onClick={goToCart} className={CartIconClass} style={{position : "relative", zIndex : "1"}}></span>
					
					{/* COUNT OF ITEMS IN CART */}
					<span className="w3-medium" style={{position : "relative", left : "-25px", top : "-8px", zIndex : "2"}}>
							{Object.keys(appContext.cartItems).length}
						</span>
				</div>
			</div>
			
			{/* TOGGLE MENU BUTTON FOR SMALL SCREENS */}
			<div className="la-hide-large">
				<div id={NavMenuBtnId} className="la-nav-btn la-vert-center" onClick={toggleMenu}>
					<div className="la-nav1 w3-white"></div>
					<div className="la-nav2 w3-yellow"></div>
					<div className="la-nav3 w3-orange"></div>
				</div>
			</div>
		</div>
	</>;
};

export default BarHead;