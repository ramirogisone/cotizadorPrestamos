import React, {Fragment} from 'react';

/* function Header({titulo}){
	//lo que se coloca antes del return puede ser codigo estandar JS
	
	return(
		//lo que se coloca dentro del return es lo que se va a mostrar
		<Fragment>
			<h1>{titulo}</h1>dentro de las llaves inserto codigo JS, y puedo acceder a las props
			<p>{props.descripcion}</p>
		</Fragment>
	)
} */

//Function expresion. La ventaja de esta forma, es que da por implicito el return, por lo que no es necesario colocarlo(siempre y cuando no sea necesario codigo JS puro dentro de la funcion)
const Header = ({titulo}) => ( 
	<h1>{titulo}</h1>	
);

export default Header;