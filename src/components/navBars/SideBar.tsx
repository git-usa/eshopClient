import {JSX, useContext, useState} from "react";
import {SideBarBackClass} from "../../values/NavValues";
import {lat_isValidObject, lat_mapToArray} from "../../scripts/labject";
import {SideMainLink, SideSubLink} from "../chidren/bars/BarLinks";
import AppContext from "../../modules/AppContext";

interface Type{
	links : {[key : string] : any};
}

const SideBar = ({links} : Type) => {
	
	const slideMenuId                     = "slideMenuId";
	const [hideMainMenu, setHideMainMenu] = useState(true);
	const [subLinks, setSubLinks]         = useState<undefined | JSX.Element | JSX.Element[]>();
	
	const appContext = useContext(AppContext);
	
	const ToggleMenu = (subLinks? : {[key : string] : string}) => {
		const slideBox = document.getElementById(slideMenuId);
		if(!slideBox) return;
		slideBox.style.transform = `translateX(-${hideMainMenu ? 100 : 0}%)`;
		setHideMainMenu(!hideMainMenu);
		if(subLinks && lat_isValidObject(subLinks))
			setSubLinks(<>
					{
						lat_mapToArray(subLinks, (key, value) => <SideSubLink key={`${slideMenuId}Sub${key}`} link={key as string} value={value} onClick={LinkClick}/>)
					}
				</>
			);
	};
	
	const LinkClick = (link : string, subs? : {[key : string] : string}) => {
		if(!subs) appContext.changeComponent(link);
		else ToggleMenu(subs);
	};
	
	return <>
		<div id={slideMenuId} className="la-slideBox la-l">
			<div className="la-slide">
				{
					lat_mapToArray(links, (key, value) => <SideMainLink key={`${slideMenuId}${key}`} onClick={LinkClick} link={key as string} value={value}/>)
				}
			</div>
			<div className="la-slide">
				<div onClick={() => ToggleMenu()} className={SideBarBackClass}>
					<i className="fi fi-rs-arrow-left la-l2"></i>
					<div className="la-l8">Main Menu</div>
				</div>
				{subLinks}
			</div>
		</div>
	</>;
};

export default SideBar;
