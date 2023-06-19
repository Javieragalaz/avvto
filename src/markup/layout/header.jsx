import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Sticky from 'react-stickynode';

// Images
import logo from "../../images/aavto/LOGONEGRO.png";
import logoWhite from "../../images/aavto/LOGONEGRO.png";

class aboutSection extends Component {

	componentDidMount() {

		// Mobile Menu Open
		var menuIcon = document.querySelector(".menuicon")
		var menuLinks = document.querySelector(".menu-links")
		var menuClose = document.getElementById("menuClose")

		menuIcon.addEventListener('click', function () {
			menuLinks.classList.add("show")
		})

		menuClose.addEventListener('click', function () {
			menuLinks.classList.remove("show")
		})

		// Mobile Submenu Open Close Function
		var navMenu = [].slice.call(document.querySelectorAll('.menu-links > ul > li'));
		for (var y = 0; y < navMenu.length; y++) {
			navMenu[y].addEventListener('click', function () { menuClick(this) });
		}

		function menuClick(current) {
			const active = current.classList.contains("open")
			navMenu.forEach(el => el.classList.remove('open'));

			if (active) {
				current.classList.remove('open')
				console.log("active")
			} else {
				current.classList.add('open');
				console.log("close")
			}
		}
	}

	render() {
		return (
			<>

				<header className="header header-transparent rs-nav">
					<Sticky enabled={true} className="sticky-header navbar-expand-lg">
						<div className="menu-bar clearfix ">
							<div className="container clearfix">
								<div className="menu-logo">
									<Link to="/" className="main-logo"><img src={logoWhite} alt="" /></Link>
									<Link to="/" className="sticky-logo"><img src={logo} alt="" /></Link>
								</div>
								<button className="navbar-toggler collapsed menuicon justify-content-end" type="button" data-toggle="collapse" data-target="#menuDropdown" aria-controls="menuDropdown" aria-expanded="false" aria-label="Toggle navigation">
									<span></span>
									<span></span>
									<span></span>
								</button>

								<div className="menu-links navbar-collapse collapse justify-content-center" id="menuDropdown">
									<div className="menu-logo">
										<Link to="/"><img src={logoWhite} alt="" /></Link>
									</div>
									<ul className="nav navbar-nav">
										<li className="active">
											<Link to="#">Home<i className="fa fa-chevron-down"></i></Link>
											<ul className="sub-menu">
												<li><Link to="/"><span>Nuestros servicios</span> </Link></li>
												<li><Link to="/index-2"><span>Sobre nuestro trabajo</span></Link></li>
											</ul>
										</li>
										<li className="has-mega-menu "><Link to="#">Información<i className="fa fa-chevron-down"></i></Link>
											<ul className="mega-menu">
												<li>
													<Link to="#">Sobre nosotros</Link>
													<ul>
														<li><Link to="/about-1"><span>Nuestro Equipo</span></Link></li>
														
													</ul>
												</li>
												
												<li>
													<Link to="#">BLOG</Link>
													<ul>
														<li><Link to="/booking"><span>CUIDA TU VEHICULO</span></Link></li>
												
													</ul>
												</li>
												
											</ul>
										</li>
										<li>
											<Link to="#">SERVICIOS<i className="fa fa-chevron-down"></i></Link>
											<ul className="sub-menu">
												<li className="add-menu-left">
													<ul>
														<li><Link to="/service-engine-diagnostics"><span>ATUOMÓVILES</span> </Link></li>
														<li><Link to="/service-lube-oil-and-filters"><span>MOTOCICLETAS</span></Link></li>
														<li><Link to="/service-belts-and-hoses"><span>FLOTAS</span></Link></li>
													</ul>
												</li>
											</ul>
										</li>
										<li><Link to="#">PREGUNTAS FRECUENTES<i className="fa fa-chevron-down"></i></Link>
											<ul className="sub-menu left">
												<li><Link to="/blog-grid"><span>¿Cuáles son los valores?</span></Link></li>
												<li><Link to="/blog-grid-sidebar"><span>¿Cuánto tiempo me quedaré sin auto?</span></Link></li>
												<li><Link to="/blog-masonry"><span>¿Puede otra persona tramitar la revisión téncina por mi?</span></Link></li>
												<li><Link to="/blog-list-sidebar"><span>¿Tienen garantía por el servicio?</span></Link></li>
												
											</ul>
										</li>
										<li><Link to="#">CONTÁCTANOS<i className="fa fa-chevron-down"></i></Link>
											<ul className="sub-menu left">
												<li><Link to="/contact-1"><span>AQUI VA LINK A FORMULARIO</span></Link></li>
												
											</ul>
										</li>
									</ul>
									<ul className="social-media">
										<li><a target="_blank" href="https://www.facebook.com/" rel="noreferrer" className="btn btn-primary"><i className="fa fa-facebook"></i></a></li>
										<li><a target="_blank" href="https://www.google.com/" rel="noreferrer" className="btn btn-primary"><i className="fa fa-google-plus"></i></a></li>
										<li><a target="_blank" href="https://www.linkedin.com/" rel="noreferrer" className="btn btn-primary"><i className="fa fa-linkedin"></i></a></li>
										<li><a target="_blank" href="https://twitter.com/" rel="noreferrer" className="btn btn-primary"><i className="fa fa-twitter"></i></a></li>
									</ul>
									<div className="menu-close" id="menuClose">
										<i className="ti-close"></i>
									</div>
								</div>
							</div>
						</div>
					</Sticky>
				</header>

			</>
		);
	}
}

export default aboutSection;