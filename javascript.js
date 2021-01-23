/*Función para poder enseñar el dia de la semana. En la que extraemos el valor del input date, y enseñamos por pantalla el dia de la semana*/
          function diaSemana(){
               var fechaComoCadena = document.getElementById("fecha").value; 
               var fechaComoCadena = new Date(fechaComoCadena);
			 var dias = ['Domingo', 'Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sábado'];
               /*var numeroDia = fechaComoCadena.getDay();*/
               var nombreDia = dias[fechaComoCadena.getUTCDay()]; 
               alert("La fecha seleccionada en el elemento de fecha es un " + nombreDia);
          }
		  
		/*Función que coje el valor del input tipo rango y enseña el valor escogido por pantalla*/
		  function mostrarValoracion(){
			var valor = document.getElementById("valoracion").value;
			alert("Has valorado con " + valor + " puntos");
		  }
		 
		/*Función que coje los valores del apartado del campo Datos Bancarios y los enseña por pantalla. Cojemos cada uno de estos elementos y mostramos el valor a través de la función getElementById*/  
		  function mostrarCuenta(){
			var pais = document.getElementById('pais').value;
			var controlIban = document.getElementById('controlIban').value;
			var entidad = document.getElementById("entidad").value;
			var sucursal = document.getElementById("sucursal").value;
			var dc = document.getElementById("dc").value;
			var cuenta = document.getElementById("cuenta").value;
			alert("Le informamos que su cuenta bancaria es: " + pais + controlIban + "-" + entidad + "-" + sucursal + "-" + dc + "-" + cuenta);
		  }