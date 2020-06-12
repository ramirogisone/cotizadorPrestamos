import React, {useState, Fragment} from 'react';
import { calcularTotal } from '../helpers.js';

const Formulario = (props) => {
	const {cantidad, guardarCantidad, plazo, guardarPlazo, guardarTotal, guardarCargando} = props;
	//Defino state local
	const [error, guardarError]=useState(false);

	const leerCantidad = (ev) => {
		guardarCantidad(parseInt(ev.target.value));
	}
	const calcularPrestamo = (ev) => {
		ev.preventDefault();
		//validar campos
		if(cantidad === 0 || plazo === ''){
			guardarError(true);
			return;
		}
		//eliminar el error previo
		guardarError(false);
		//habilito spinner
		guardarCargando(true);
		setTimeout(() => {
			const total = calcularTotal(cantidad, plazo);
			guardarTotal(total);
			guardarCargando(false);
		}, 3000);

		
	}
	return (
		<Fragment>
			<form onSubmit={calcularPrestamo}>
				<div className="row">
					<div>
						<label>Cantidad Prestamo</label>
						<input 
							className="u-full-width" 
							type="number" 
							placeholder="Ejemplo: 3000" 
							//Defino el evento proporcionado por React
							onChange={leerCantidad}
						/>
					</div>
					<div>
						<label>Plazo para Pagar</label>
						<select 
							className="u-full-width"
							//otra forma de escribir el evento, sin tener que declarar una funcion
							onChange={ev => guardarPlazo(parseInt(ev.target.value))}
						>
							<option value="">Seleccionar</option>
							<option value="3">3 meses</option>
							<option value="6">6 meses</option>
							<option value="12">12 meses</option>
							<option value="24">24 meses</option>
						</select>
					</div>
					<div>
						<input 
							type="submit" 
							value="Calcular" 
							className="button-primary u-full-width"/>
					</div>
				</div>
			</form>
			{/* valido si la funcion devuelve false, muestro mje, sino null */}
			{ (error) ? <p className='error'>Todos los campos son obligatorios</p> : null }
		</Fragment>
	);
}
 
export default Formulario
