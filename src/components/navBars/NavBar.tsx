import {useState} from "react";
import BarHead from "../chidren/bars/BarHead";
import {NavMenuBtnId} from "../../values/NavValues";
import BarMobileMenu from "../chidren/bars/BarMobileMenu";

interface Type{
	links : {[key : string] : any};
}

const NavBar = ({links} : Type) => {
	const [showMobileNav, setShowMobileNav] = useState(false);
	
	const ToggleMenu = () => {
		const menuBtn = document.getElementById(NavMenuBtnId);
		if(menuBtn){
			menuBtn.classList.toggle("la-menu-toggle");
			setShowMobileNav(!showMobileNav);
		}
	};
	
	return <>
		{/* HEAD BAR */}
		<BarHead toggleMenu={ToggleMenu}/>
		
		{/* MENU FOR MOBILE */}
		<BarMobileMenu links={links} showMobileNav={showMobileNav} toggleMenu={ToggleMenu}/>
	</>;
};

export default NavBar;