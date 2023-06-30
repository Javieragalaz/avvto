import React, { Component } from 'react';
/* import { Link } from 'react-router-dom'; */

// Images
import bg2 from "../../images/background/bg2.png";

class ServicesSection extends Component{
	render(){
		return(
			<>
				<section className="section-area bg-primary service-wraper1 section-sp2" style={{backgroundImage: "url("+bg2+")", backgroundRepeat: "no-repeat", backgroundPosition: "right top"}}>
					<div className="container">
						<div className="heading-bx text-white d-lg-flex d-md-block align-items-end justify-content-between">
							<div className="clearfix">
								<h6 className="title-ext">Nuestros servicios</h6>
								<h2 className="title mb-0">NOS PREOCUPAMOS POR TI, PROVEEMOS LOS MEJORES SERVICIOS</h2>
							</div>
							<div className="clearfix mt-md-20">
								{/* <Link to="/services" className="btn btn-outline-light">Revisa todos los servicios</Link> */}
							</div>
						</div>
						<div className="row spno">
							<div className="col-xl-3 col-lg-4 col-md-6">
								<div className="feature-container bg-gray-alt feature-bx1 mb-sm-30">
									<div className="icon-lg mb-10 text-primary">
										<i className="flaticon-fuel-1"></i>
									</div>
									<div className="icon-content">
										<h5 className="ttr-tilte">CAMBIO DE ACEITE</h5>
										<p>Realizar el cambio de aceite de manera regular contribuye a mantener el motor en buen estado y prolongar su vida útil. Además, un aceite limpio y de calidad adecuada ayuda a mejorar el rendimiento del motor, la eficiencia del combustible y reducir las emisiones contaminantes.</p>
									{/* 	<Link to="/service-lube-oil-and-filters" className="btn-link">Read More</Link> */}
									</div>
								</div>
							</div>
							<div className="col-xl-3 col-lg-4 col-md-6">
								<div className="feature-container feature-bx1 mb-sm-30">
									<div className="icon-lg mb-10 text-primary">
										<i className="flaticon-brake"></i>
									</div>
									<div className="icon-content">
										<h5 className="ttr-tilte">FRENOS</h5>
										<p>Es fundamental confiar el cambio de frenos a un taller mecánico profesional, ya que se requiere experiencia y conocimiento técnico para realizar el proceso de manera segura y garantizar un funcionamiento correcto del sistema de frenado. Un sistema de frenos en buen estado contribuye a mantener la seguridad del vehículo y evitar accidentes.</p>
										{/* <Link to="/service-brake-repair" className="btn-link">Read More</Link> */}
									</div>
								</div>
							</div>
							<div className="col-xl-3 col-lg-4 col-md-6">
								<div className="feature-container bg-gray-alt feature-bx1 mb-sm-30">
									<div className="icon-lg mb-10 text-primary">
										<i className="flaticon-car-4"></i>
									</div>
									<div className="icon-content">
										<h5 className="ttr-tilte">NEUMÁTICOS</h5>
										<p>El cambio de neumáticos debe realizarse de manera regular, siguiendo las recomendaciones del fabricante y las regulaciones locales. Neumáticos en buen estado y con la presión adecuada proporcionan una mejor tracción, estabilidad y frenado, lo que contribuye a la seguridad y el rendimiento del vehículo.</p>
								{/* 		<Link to="/service-tire-and-wheel-services" className="btn-link">Read More</Link> */}
									</div>
								</div>
							</div>
							<div className="col-xl-3 col-lg-4 col-md-6">
								<div className="feature-container feature-bx1 mb-sm-30">
									<div className="icon-lg mb-10 text-primary">
										<i className="flaticon-check-2"></i>
									</div>
									<div className="icon-content">
										<h5 className="ttr-tilte">SCANNER</h5>
										<p>un scanner automotriz es una herramienta esencial para los técnicos y propietarios de vehículos, ya que permite realizar diagnósticos precisos y rápidos de los sistemas electrónicos del automóvil, lo que ayuda a identificar y solucionar problemas de manera eficaz.</p>
									{/* 	<Link to="/service-belts-and-hoses" className="btn-link">Read More</Link> */}
									</div>
								</div>
							</div>
							<div className="col-xl-3 col-lg-4 col-md-6">
								<div className="feature-container feature-bx1 mb-sm-30">
									<div className="icon-lg mb-10 text-primary">
										<i className="flaticon-battery-2"></i>
									</div>
									<div className="icon-content">
										<h5 className="ttr-tilte">BATERIA</h5>
										<p>el chequeo periódico de tu batería alarga la vida de todos los sistemas eléctricos de tu vehículo, siendo fundamental su función de dar encendido de tu vehículo.</p>
									{/* 	<Link to="/service-tire-and-wheel-services" className="btn-link">Read More</Link> */}
									</div>
								</div>
							</div>
							<div className="col-xl-3 col-lg-4 col-md-6">
								<div className="feature-container bg-gray-alt feature-bx1 mb-sm-30">
									<div className="icon-lg mb-10 text-primary">
										<i className="flaticon-paint"></i>
									</div>
									<div className="icon-content">
										<h5 className="ttr-tilte">PINTURA</h5>
										<p>ademas del sentido estético, la pintura cumple un rol fundamental en la protección de tu vehículo ante oxidación y químicos propios del ambiente.</p>
									{/* 	<Link to="/service-air-conditioning" className="btn-link">Read More</Link> */}
									</div>
								</div>
							</div>
							<div className="col-xl-3 col-lg-4 col-md-6">
								<div className="feature-container active feature-bx1 mb-sm-30">
									<div className="icon-lg mb-10 text-primary">
										<i className="flaticon-repair-1"></i> 
									</div>
									<div className="icon-content">
										<h5 className="ttr-tilte">DESABOLLADURAS</h5>
										<p>Si has sufrido un accidente o golpe fortuito, contamos con el servicio de desabolladura de tu vehículo, podemos evaluar tu vehículo frente a cualquier siniestro y realizar la tarea con la mejor calidad.</p>
								{/* 		<Link to="/service-tire-and-wheel-services" className="btn-link">Read More</Link> */}
									</div>
								</div>
							</div>
							<div className="col-xl-3 col-lg-4 col-md-6">
								<div className="feature-container bg-gray-alt feature-bx1">
									<div className="icon-lg mb-10 text-primary">
										<i className="flaticon-engine"></i>
									</div>
									<div className="icon-content">
										<h5 className="ttr-tilte">MOTOR</h5>
										<p> El corazón de tu vehículo debe estar en el mejor estado, podemos realizar la reparación y cambio de las partes que tu motor requiera, cotiza con nosotros.</p>
									{/* 	<Link to="/service-engine-diagnostics" className="btn-link">Read More</Link> */}
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

export default ServicesSection;