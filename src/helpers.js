export function calcularTotal(cantidad, plazo){
	let cantidadTotal;
	if(cantidad <= 5000){
		cantidadTotal = cantidad * .25;
	}else if (cantidad > 1000 && cantidad <= 5000) {
		cantidadTotal = cantidad * .20;
	}else if (cantidad > 5000 && cantidad <= 10000) {
		cantidadTotal = cantidad * .15;
	} else {
		cantidadTotal = cantidad * .10;
	}
	
	let plazoTotal = 0;

	switch(plazo){
		case 3: 
			plazoTotal = cantidad * .05;
			break;
		case 6: 
			plazoTotal = cantidad * .10;
			break;
		case 12: 
			plazoTotal = cantidad * .15;
			break;
		case 24: 
			plazoTotal = cantidad * .20;
			break;
		default:
			break;
	}
	return plazoTotal + cantidadTotal + cantidad;
}