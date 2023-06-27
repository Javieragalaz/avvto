import React, { Component } from 'react';

class ScheduleServiceSection extends Component{
	render(){
		return(
			<>
				<section className="section-area bg-primary form-card">
					<div className="container">
						<div className="row align-items-center">
							<div className="col-lg-3 align-self-center">
								<div className="form-head text-white mb-md-30">
									<h3 className="title">Cotiza nuestros servicios</h3>
									<h6 className="mb-0"><span className="fw4 mr-1">O LLAMA AL </span> + 56 9 35707961</h6>
								</div>
							</div>
							<div className="col-lg-9">
								<form>
									<div className="row sp5">
										<div className="col-md-4 col-sm-6">
											<div className="form-group">
												<input type="text" className="form-control" placeholder="Nombre*"/>
											</div>
										</div>
										<div className="col-md-4 col-sm-6">
											<div className="form-group">
												<input type="text" className="form-control" placeholder="Email*"/>
											</div>
										</div>
										<div className="col-md-4 col-sm-6">
											<div className="form-group">
												<input type="text" className="form-control" placeholder="Teléfono*"/>
											</div>
										</div>
										<div className="col-md-4 col-sm-6">
											<div className="form-group">
												<select className="form-select form-control">
													<option>*Tipo de servicio*</option>
													<option>Cambio de aceite</option>
													<option>Cambio de frenos</option>
													<option>Cambio neumáticos</option>
													<option>Revisión técnica</option>
													<option>Barería</option>
													<option>Pintura</option>
													<option>Desabolladura</option>
													<option>Scanner</option>
												</select>
											</div>
										</div>
										<div className="col-md-4 col-sm-6">
											<div className="form-group">
												<input type="text" className="form-control" placeholder="How Can We Help you*"/>
											</div>
										</div>
										<div className="col-md-4 col-sm-6">
											<div className="form-group">
												<button type="submit" className="btn btn-warning w-100">COTIZAR</button>
											</div>
										</div>
									</div>
								</form>
							</div>
						</div>
					</div>
				</section>
			</>
		);
	}
}

export default ScheduleServiceSection;