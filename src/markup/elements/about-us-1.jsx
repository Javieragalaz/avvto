import React, { Component } from 'react';
import { Link } from 'react-router-dom';

// Images
import bg1 from "../../images/background/bg1.png";
import pic1 from "../../images/about/pic1.jpg";

class AboutUsOneSection extends Component{
	render(){
		return(
			<>
				
				<section className="section-area section-sp1 bg-white" style={{backgroundImage: "url("+bg1+")", backgroundRepeat:"no-repeat"}}>
					<div className="container">
						<div className="row align-items-center">
							<div className="col-lg-5 mb-40">
								<div className="heading-bx mb-4">
									<h6 className="title-ext text-primary">Nosotros</h6>
									<h2 className="title">SOMOS UNA COMPAÑÍA DE TALENTOSOS INGENIEROS &amp; MECÁNICOS</h2>
									<p>Cómo compañía nos interesa entregarte el mejor servicio, nos preocupamos de la seguridad y cuidado de tu vehícula para que puedas sentirte cómodo tranquilo.</p>
								</div>
							
							</div>
							<div className="col-lg-7 mb-30">							
								<div className="about-media">
									<div className="media">
										<img src={pic1} alt=""/>
									</div>
									<div className="about-contact bg-primary text-white">
										<h6 className="title-ext text-white">¿QUIERES HABLAR?</h6>
										<h3 className="number mb-15 text-white">+56935707961 </h3>
										<p className="mb-20">Necesitas un servicio especial de reparación? estamos felices de ofrecerte un servicio que superes tus expectativas</p>
										<Link to="/contact-2" className="btn btn-light">Contáctanos</Link>
									</div>
								</div>
							</div>
						</div>
					</div>
				</section>
				
			</>
		);
	}
}

export default AboutUsOneSection;