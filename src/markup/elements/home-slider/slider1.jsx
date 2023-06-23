import React, { Component } from 'react';
import Slider from "react-slick";

// Import Images
import slide1 from "../../../images/slider/slide1.jpg"


import wheel2 from "../../../images/slider/wheel2.png"

import car2 from "../../../images/slider/car2.png"

class SliderOne extends Component {
	render() {

		return (
			<>

				<div className="ttr-slider style-2">
					<Slider className="ttr-swiper01">
						<div className="slider-item">
							<div className="slider-img slide-move" style={{ backgroundImage: "url(" + slide1 + ")" }}>
								<img src={slide1} alt="" />
							</div>
							<div className="slider-content container text-center text-white">
								<div className="content-inner">
									<h6 className="sub-title">Te lo hacemos más fácil</h6>
									<h2 className="title">Servicio Técnico Automotriz</h2>
									<div className="car-wheel wheel2" data-swiper-parallax="-600">
									<img src={car2} alt="" />
										<div className="wheel-1"><img src={wheel2} alt="" /></div>
										<div className="wheel-2"><img src={wheel2} alt="" /></div>
									</div>
								</div>
							</div>
						</div>
					
					</Slider>
				</div>

			</>
		);
	}
}

export default SliderOne;