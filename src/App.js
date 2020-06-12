import React, { Fragment, useState } from 'react';
import Header from './components/Header.js';
import Formulario from './components/Formulario.js';

function App() {

	//Definir el state(Estos son globales ya que son usados  por diferentes componentes)
	//Variable--Funcion--------------------Valor inicial del state
	const [cantidad, guardarCantidad] = useState(0);
	const [plazo, guardarPlazo] = useState('');	
	return (
		<Fragment>
			<Header 
				titulo="Cotizador de prestamos" //propiedad=valor. Estos se pasan como parametros en el componente
				// descripcion="Ingresa los datos para obtener una cotización."
			/>
			<div className="container">
				<Formulario 
					cantidad={cantidad}
					guardarCantidad={guardarCantidad}
					plazo={plazo}
					guardarPlazo={guardarPlazo}
				/>
			</div>
		</Fragment>
	);
}

export default App;
