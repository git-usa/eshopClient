import React from "react";

const Carousel = () => {
	
	const slideBoxId   = "slideImageCarousel";
	const slideItems   = ["prod1", "prod2", "prod3"];
	const sliderLength = slideItems.length - 1;
	
	let currSlide = 0;
	
	const ToggleSlide = (next = true) => {
		const slideBox = document.getElementById(slideBoxId);
		if(!slideBox) return;
		
		currSlide = next ? (currSlide === sliderLength ? 0 : ++currSlide)
		                 : (currSlide === 0 ? sliderLength : --currSlide);
		
		const slideIndex         = currSlide;
		slideBox.style.transform = `translateX(-${slideIndex * 100}%)`;
	};
	
	const slides = slideItems.map((slide, index) => {
		const image = <img alt={slide} src={`./images/${slide}.jpg`} style={{maxWidth : "100%", maxHeight : "500px"}}/>;
		return <div key={`${slideBoxId}${index}`} className="w3-center w3-padding">{image}</div>;
	});
	
	return <>
		<div className="la-l la-hide-small la-s0 la-slider">
			<div id={slideBoxId} className="la-slideBox la-l la-hide-small la-s0">{slides}</div>
			<div className="w3-center la-l w3-light-grey la-hide-small la-s0">
				<div className="w3-button w3-ripple" onClick={() => ToggleSlide(false)}><i className="fi fi-rs-angle-left w3-large"></i></div>
				<div className="w3-button w3-ripple" onClick={() => ToggleSlide()}><i className="fi fi-rs-angle-right w3-large"></i></div>
			</div>
		</div>
		
		<div className="la-slideBox la-s la-hide-large la-l0 w3-responsive">{slides}</div>
	</>;
};

export default Carousel;