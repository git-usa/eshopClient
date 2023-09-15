import {useState} from "react";

const HeadBar = () => {
	
	const largeMenuBtnId = "largeMenuBtnId";    // Btn ID for Large Screens
	const smallMenuBtnId = "smallMenuBtnId";    // Btn ID for Small Screens
	
	const [showMobileNav, setShowMobileNav] = useState(false);
	
	const ToggleMenu = () => {
		const largeMenuBtn = document.getElementById(largeMenuBtnId);
		const smallMenuBtn = document.getElementById(smallMenuBtnId);
		largeMenuBtn?.classList.toggle("menu-toggle");
		smallMenuBtn?.classList.toggle("menu-toggle");
		setShowMobileNav(!showMobileNav);
	};
	
	return <>
		<div className="navBar w3-purple">
			<div className={"navBar w3-purple nav-back"}></div>
			<div className={"navBar w3-purple nav-front la-container flex-center-vertical"}>
				<h1 className="la-s la-l5 la-bold w3-center">eShop Title</h1>
				<div id={largeMenuBtnId} onClick={ToggleMenu} className="la-l1 la-hide-small">
					<div className="nav-btn">
						<div className="menu-bar1 w3-white"></div>
						<div className="menu-bar2 w3-yellow"></div>
						<div className="menu-bar3 w3-orange"></div>
					</div>
				</div>
			</div>
			
			<div id={smallMenuBtnId} onClick={ToggleMenu} className="nav-btn w3-hide-large">
				<div className="menu-bar1 w3-white"></div>
				<div className="menu-bar2 w3-yellow"></div>
				<div className="menu-bar3 w3-orange"></div>
			</div>
			
			<div className={"mobile-nav-menu la-container la-hide-large"} style={{left : showMobileNav ? "0" : "-100%"}}>
				<div className={"la-s65 la-purple nav-links w3-large"}>
					<a href="#" className="mobile-nav-link">Link 1</a>
					<a href="#" className="mobile-nav-link">Link 2</a>
					<a href="#" className="mobile-nav-link">Link 3</a>
				</div>
				{/*MAKE REMAINING BLANK SPACE/SCREEN TRANSPARENT/OPAQUE*/}
				<div className={"la-s35 w3-black nav-blank"}></div>
			</div>
			
			<div className={"large-nav-menu la-container la-hide-small"} style={{right : showMobileNav ? "0" : "-100%"}}>
				{/*MAKE REMAINING BLANK SPACE/SCREEN TRANSPARENT/OPAQUE*/}
				<div className={"la-l85 w3-black nav-blank"}></div>
				
				<div className={"la-l15 la-purple nav-links w3-large"}>
					<a href="#" className="mobile-nav-link">Link 1</a>
					<a href="#" className="mobile-nav-link">Link 2</a>
					<a href="#" className="mobile-nav-link">Link 3</a>
				</div>
			</div>
		</div>
	</>;
};

export default HeadBar;