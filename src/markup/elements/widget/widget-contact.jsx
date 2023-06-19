import React, { Component } from 'react';
import { Link } from 'react-router-dom';

// Import Images
import icon1 from "../../../images/icon/contact/skin2/icon1.png"
import icon2 from "../../../images/icon/contact/skin2/icon2.png"


class widgetContact extends Component{
	render(){
		return(
			<>
				<div className="widget">
					<h5 className="widget-title">Contáctanos</h5>
					<ul className="contact-infolist">
						<li>
							<img src={icon1} alt=""/>
							<h6 className="contact-title">Número de contacto</h6>
							<p>+56935707961 <br/> </p>
						</li>
						<li>
							<img src={icon2} alt=""/>
							<h6 className="contact-title">Correo electrónico</h6>
							<Link to="#">contacto@aavto.cl</Link><br/>
							
						</li>
						{/* <li>
							<img src={icon3} alt=""/>
							<h6 className="contact-title">Address</h6>
							<p>2005 Stokes Isle Apt. 896, Venaville 10010, USA</p>
						</li> */}
					</ul>
				</div>
				
			</>
		);
	}
}

export default widgetContact;