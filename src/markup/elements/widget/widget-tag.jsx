import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class widgetTag extends Component{
	render(){
		return(
			<>
				<div className="widget widget_tag_cloud">
					<h5 className="widget-title">Tags</h5>
					<div className="tagcloud"> 
						<Link to="#">Motor</Link> 
						<Link to="#">Scanner</Link> 
						<Link to="#">Los mejores insumos</Link> 
						<Link to="#">Desabolladuras</Link> 
						<Link to="#">Reparaciones</Link>  
						<Link to="#">Servicio técnivo</Link>  
						<Link to="#">Cinturones de seguridad</Link>  
						<Link to="#">Magueras</Link>  
						<Link to="#">Frenos</Link>  
						<Link to="#">Revisión técnica</Link>  
						<Link to="#">Neumáticos</Link>   
					</div>
				</div>
				
			</>
		);
	}
}

export default widgetTag;