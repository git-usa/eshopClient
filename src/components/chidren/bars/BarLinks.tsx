import {lat_isValidObject, lat_mapToArray} from "../../../scripts/labject";
import {MobileMainMenuClass, MobileSubMenuBackLinkClass, NavMobileMenuId, SideBarLinkClass} from "../../../values/NavValues";

interface Type{
	link : string,
	value : any,
	onClick : (link : string, subs? : {[key : string] : string}) => void
}

interface TypeLinks{
	links : {[key : string] : string},
	LinkClick : (link : string) => void
	ToggleSub : (subs? : {[key : string] : string}) => void,
}

interface TypeHandleLink{
	() : (link : string, subs? : {[p : string] : string}) => void;
}

/**
 * Link for Side Main Menu
 * @param {string} link Reference to Load Component
 * @param {any} value   Text value to refer to link / Collection links to show as sub-links under link
 * @param {TypeHandleLink} onClick Event Handler to handle link with Sub Links
 * @return {JSX.Element}
 * @constructor
 */
export const SideMainLink = ({link, value, onClick} : Type) => {
	let text = value;
	let subs : {[key : string] : string};
	let Icon = () => <></>;
	
	// IF VALUE HAS LINKS FOR SUBMENU
	if(lat_isValidObject(value)){
		subs = value.subs;
		text = value.text;
		Icon = () => <><i className="fi fi-rs-caret-right"></i></>;
	}
	return <div onClick={() => onClick(link, subs)} className={SideBarLinkClass}>{text}<Icon/></div>;
};

/**
 * Link for Side Sub Menu
 * @param {string} link Reference to Load Component
 * @param {any} value   Text value to refer to link
 * @param {TypeHandleLink} onClick Event Handler to handle link
 * @return {JSX.Element}
 * @constructor
 */
export const SideSubLink = ({link, value, onClick} : Type) => <div onClick={() => onClick(link)} className={SideBarLinkClass}>{value}</div>;

/**
 * Link for Mobile Main Menu
 * @param {string} link Reference to Load Component
 * @param {any} value   Text value to refer to link / Collection links to show as sub-links under link
 * @param {TypeHandleLink) => void} onClick Event Handler to handle link with Sub Links
 * @return {JSX.Element}
 * @constructor
 */
export const MobileMenuLink = ({link, value, onClick} : Type) => {
	let text = value;
	let subs : {[key : string] : string};
	let Icon = () => <></>;
	
	if(lat_isValidObject(value)){
		subs = value.subs;
		text = value.text;
		Icon = () => <>
			<i style={{float : "right"}} className="fi fi-rs-caret-right"></i>
		</>;
	}
	
	return <div onClick={() => onClick(link, subs)} className="la-nav-link">
		{text}
		<Icon/>
	</div>;
};

/**
 * Mobile Main Menu Screen
 * @param {{[p : string] : string}} links Links to Show
 * @param {(subs?: {[p : string] : string}) => void} ToggleSub Event Handler to Toggle Screen for Mobile Sub Menu
 * @param {(link: string) => void} LinkClick Event Handler to handle link
 * @return {JSX.Element}
 * @constructor
 */
export const MobileMainMenuLinks = ({links, ToggleSub, LinkClick} : TypeLinks) => {
	return <>
		<div id={NavMobileMenuId} className={MobileMainMenuClass}>
			{
				lat_mapToArray(links, (key, value) => {
					               const onClick = (link : string, subs? : any) => subs ? ToggleSub(subs) : LinkClick(link);
					               return <MobileMenuLink key={`BarMobileMenu${key}`} link={key as string} value={value} onClick={onClick}/>;
				               }
				)
			}
		</div>
	</>;
};

/**
 * Mobile Sub Menu Link to Go Back to Mobile Main Menu
 * @param {() => void} ToggleSub Event Handler to Toggle Sub Menu
 * @return {JSX.Element}
 * @constructor
 */
export const MobileSubMenuBackLink = ({ToggleSub} : {ToggleSub : () => void}) => {
	return <>
		<div onClick={() => ToggleSub()} className={MobileSubMenuBackLinkClass}>
			<div className="la-s2">
				<i className="fi fi-rs-arrow-left"></i>
			</div>
			<div className="la-s8 w3-left-align">Main Menu</div>
		</div>
	</>;
};

/**
 * Mobile Sub Meu Screen
 * @param {{[p : string] : string}} links   Links to Show
 * @param {() => void} ToggleSub Event Handler to Toggle Sub Menu
 * @param {(link: string) => void} LinkClick Event Handler to handle link
 * @return {JSX.Element}
 * @constructor
 */
export const MobileSubMenuLinks = ({links, ToggleSub, LinkClick} : TypeLinks) => {
	return <>
		{
			lat_mapToArray(links, (key, value) => {
				const onClick = () => {
					ToggleSub();
					LinkClick(key as string);
				};
				return <div key={`SubLink${key}`} onClick={onClick} className="la-nav-link">{value}</div>;
			})
		}
	</>;
};