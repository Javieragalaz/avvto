import React, { Component } from 'react';


// Images
import pic6 from "../../images/about/pic6.jpg";

class ChooseUsSection extends Component{
	render(){
		return(
			<>
				<section className="section-area bg-white section-sp1">
					<div className="container">
						<div className="row align-items-center">
							<div className="col-lg-6 mb-30">
								<div className="choose-media">
									<img src={pic6} alt=""/>
								</div>
							</div>
							<div className="col-lg-6 mb-30">
								<div className="heading-bx mb-30">
									<h6 className="title-ext text-primary">¿Por qué nos eligen?</h6>
									<h2 className="title mb-0">¿POR QUÉ ELEGIRNOS?</h2>
									<p>Nosotros te ofrecemos una amplia gama de servicios para ti, nos ubicamos en Santiago en donde recogemos y entregamos tu auto tras darte un gran servicio de calidad de acuerdo a tus nececidades.</p>
								</div>
								<div className="progress-area">
									<div className="progress-box style1 appear">
										<div className="progress-info">
											<h6 className="title">Servicio de calidad</h6>
										
										</div>
										<div className="progress">
											<div className="progress-bar bg-primary" style={{width: "100"}}></div>
										</div>
									</div>
									<div className="progress-box style1 appear">
										<div className="progress-info">
											<h6 className="title">Técnicos con experiencia</h6>
										
										</div>
										<div className="progress">
											<div className="progress-bar bg-primary" style={{width: "100%"}}></div>
										</div>
									</div>
									<div className="progress-box style1 appear">
										<div className="progress-info">
											<h6 className="title">Garantía</h6>
										
										</div>
										<div className="progress">
											<div className="progress-bar bg-primary" style={{width: "100%"}}></div>
										</div>
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

export default ChooseUsSection;