import {JSX, useContext, useState} from "react";
import AppContext from "../../../modules/AppContext";
import {lat_isValidObject} from "../../../scripts/labject";
import {MobileMainMenuLinks, MobileSubMenuBackLink, MobileSubMenuLinks} from "./BarLinks";
import {MobileSubMenuClass, NavMobileMenuId, NavMobileSubMenuId} from "../../../values/NavValues";

interface Type{
	links : {[key : string] : any};
	showMobileNav : boolean;
	toggleMenu : () => void;
}

const BarMobileMenu = ({links, showMobileNav, toggleMenu} : Type) => {
	let hideMainMenu              = true;
	const appContext              = useContext(AppContext);
	const [subLinks, setSubLinks] = useState<undefined | JSX.Element | JSX.Element[]>();
	
	const ToggleSub = (subLinks? : {[key : string] : string}) => {
		const mainMenu = document.getElementById(NavMobileMenuId);
		const subMenu  = document.getElementById(NavMobileSubMenuId);
		if(!mainMenu || !subMenu) return;
		
		if(subLinks && lat_isValidObject(subLinks)){
			setSubLinks(<>
				<MobileSubMenuBackLink ToggleSub={ToggleSub}/>
				<MobileSubMenuLinks links={subLinks} ToggleSub={ToggleSub} LinkClick={LinkClick}/>
			</>);
		}
		
		mainMenu.style.left = hideMainMenu ? "-100%" : "0";
		setTimeout(() => {
			subMenu.style.left = hideMainMenu ? "0" : "100%";
			hideMainMenu       = !hideMainMenu;
		}, 0);
	};
	
	const LinkClick = (link : string, subs? : {[key : string] : string}) => {
		if(!subs){
			toggleMenu();
			appContext.changeComponent(link);
		} else ToggleSub(subs);
	};
	
	return <>
		{/* MOBILE MENU SCREEN */}
		<div className="la-menu-screen la-container la-s la-l0 la-hide-large" style={{right : showMobileNav ? 0 : "-100%"}}>
			{/*<div className="w3-black la-s3 la-menu-opaque"></div>*/}
			
			{/*  */}
			<div className="w3-pale-yellow la-s la-container">
				{/* MAIN MENU */}
				<MobileMainMenuLinks links={links} LinkClick={LinkClick} ToggleSub={ToggleSub}/>
				
				{/* SUB MENU */}
				<div id={NavMobileSubMenuId} className={MobileSubMenuClass}>{subLinks}</div>
			</div>
		</div>
	</>;
};

export default BarMobileMenu;