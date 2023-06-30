import React, { Component } from 'react';
import { Link } from 'react-router-dom';

// Images
import logo2 from '../../images/aavto/3.png';
import icon1 from '../../images/icon/contact/icon1.png';
import icon2 from '../../images/icon/contact/icon2.png';
import icon3 from '../../images/icon/contact/icon3.png';



class aboutSection extends Component{
	render(){
		return(
			<>
				
				<footer className="footer">
					<div className="footer-info bg-primary">
						<div className="container">
							<div className="row align-items-center">
								<div className="col-lg-3 col-md-6 col-sm-6 mb-30">
									<div className="footer-logo">
										<img src={logo2} alt=""/> 
									</div>
								</div>
								<div className="col-lg-3 col-md-6 col-sm-6 mb-30">
									<div className="feature-container left footer-info-bx">
										<div className="icon-lg">
											<span className="icon-cell"><img src={icon3} alt=""/></span> 
										</div>
										<div className="icon-content">
											<p>Retiramos tu auto desde cualquier punto de Santiago</p>
										</div>
									</div>
								</div>
								<div className="col-lg-3 col-md-6 col-sm-6 mb-30">
									<div className="feature-container left footer-info-bx">
										<div className="icon-lg">
											<span className="icon-cell"><img src={icon1} alt=""/></span> 
										</div>
										<div className="icon-content">
											<p>+56935707961 <br/></p>
										</div>
									</div>
								</div>
								<div className="col-lg-3 col-md-6 col-sm-6 mb-30">
									<div className="feature-container left footer-info-bx">
										<div className="icon-lg">
											<span className="icon-cell"><img src={icon2} alt=""/></span> 
										</div>
										<div className="icon-content">
											<p>contacto@aavto.cl <br/></p>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="footer-top bt0">
						<div className="container me-3">
							<div className="row">
								<div className="col-xl-3 col-md-6">
									<div className="widget footer_widget">
										<h5 className="footer-title">Compañía</h5>
										<p className="mb-20">Necesitas un servicio automotríz? estaremos felices de ofrecerte un propuesta que, sin duda, superará tus expectativas</p>
										<div className="ft-content">
											<i className="fa fa-phone"></i>
											<span>Hábla con nuestro soporte</span>
											<h4>+56935797961 </h4>
										</div>
									</div>
								</div>
						
								
								<div className="col-xl-3 col-md-6">
									<div className="widget widget_info">
										<h5 className="footer-title">Suscríbete</h5>
										<p className="mb-20">y entérate de nuestras novedades y descuentos</p>
										<form className="subscribe-form subscription-form mb-30">
											<div className="ajax-message"></div>
											<div className="input-group">
												<input name="email" required="required" className="form-control" placeholder="Email Address" type="email"/>
												<div className="input-group-append">
													<button name="submit" value="Submit" type="submit" className="btn btn-block btn-primary radius-sm">Send</button>	
												</div>
											</div>
										</form>
										<ul className="list-inline ft-social-bx">
											<li><a target="_blank" rel="noreferrer" href="https://www.facebook.com/aavto.cl/" className="btn button-sm"><i className="fa fa-facebook"></i></a></li>
											<li><a target="_blank" rel="noreferrer" href="https://twitter.com/" className="btn button-sm"><i className="fa fa-twitter"></i></a></li>
											<li><a target="_blank" rel="noreferrer" href="https://www.linkedin.com/" className="btn button-sm"><i className="fa fa-linkedin"></i></a></li>
											<li><a target="_blank" rel="noreferrer" href="https://www.instagram.com/aavto.cl/" className="btn button-sm"><i className="fa fa-instagram"></i></a></li>
										</ul>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="footer-bottom">
						<div className="container">
							<div className="row">
								<div className="col-lg-6 col-md-6 col-sm-12 text-center text-md-start">
									<p className="mb-0">© Copyright aavto 2023. All right reserved.</p>
								</div>
								<div className="col-lg-6 col-md-6 col-sm-12 text-center text-md-end">
									<ul className="widget-link">
										<li><Link to="/">Home</Link></li>
										<li><Link to="/blog-grid">BLOG</Link></li>
										<li><Link to="/faq-1">FAQs</Link></li>
										<li><Link to="/contact-2">CONTACTO</Link></li>
									
									</ul>
								</div>
							</div>
						</div>
					</div>
				</footer>
			
			</>
		);
	}
}

export default aboutSection;