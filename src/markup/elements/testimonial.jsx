import React, { Component } from 'react';

import Slider from "react-slick";

// Import Images
import bg1 from "../../images/background/bg1.jpg"
import testPic1 from "../../images/testimonials/pic1.jpg"
import testPic2 from "../../images/testimonials/pic2.jpg"


// Team Content
const content = [
	{ 
		thumb: testPic1,
		name: "David Gutierrez",
		text: "Tuve un problema con mi auto, me contacte con ellos super facil, llegaron super rapido, una revision acertada y lograron solucionar un problema que tenia de hace meses, excelente servicio!",		
	},
	{ 
		thumb: testPic2,
		name: "Romina Correa",
		text: "Tuve que hacer la mantención a mi auto y se encargaron de todo, me hicieron una cotización con buen precio y lo dejé en sus manos y muy buen resultado, súper cómodo que retiren y dejen el auto, muy confiables, los recomiendo.",		
	},

]

class TestimonialSection extends Component{
	render(){
		
		const settings = {
			dots: false,
			infinite: true,
			speed: 1000,
			slidesToShow: 2,
			slidesToScroll: 1,
			responsive: [
				{
					breakpoint: 1191,
					settings: {
						slidesToShow: 2,
					}
				},
				{
					breakpoint: 767,
					settings: {
						slidesToShow: 1,
					}
				}
			]
		};
		
		return(
			<>
				
				<section className="section-area section-sp2 bg-gray ovbl-dark testimonial-area" style={{backgroundImage: "url("+bg1+")", backgroundRepeat: "no-repeat", backgroundAttachment: "fixed", backgroundSize: "cover"}}>
					<div className="container">
						<div className="heading-bx text-white d-lg-flex d-md-block align-items-end justify-content-between">
							<div className="clearfix mb-2">
								<h6 className="title-ext text-light">TESTIMONIOS</h6>
								<h2 className="title mb-0">Los que dicen nuestros clientes</h2>
							</div>
							
						</div>
						<Slider {...settings} className="testimonial-carousel-1 slick-arrow-none">
							{content.map((item) =>(
								<div className="slider-item">								
									<div className="testimonial-bx">
										<div className="testimonial-content">
											<p>{item.text}</p>
										</div>
										<div className="client-info">
											<div className="testimonial-info">
												<h6 className="name">- {item.name}</h6>
											</div>
											
										</div>
									</div>
								</div>
							))}
						</Slider>
					</div>
				</section>
				
			</>
		);
	}
}

export default TestimonialSection;