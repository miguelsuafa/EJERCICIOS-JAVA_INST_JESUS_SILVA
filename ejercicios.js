
//Primera edad 

let edad = prompt("ingrese su edad");
        if( edad >= 18 ) {
        alert( " eres mayor de edad " ) ;
        }else{
        alert( " eres menor de edad" ) ;
        }

//segunda notas promedio

let nota1 = parseFloat(prompt("escriba la nota1"));
let nota2 = parseFloat(prompt("escriba la nota1"));
let nota3 = parseFloat(prompt("escriba la nota1"));
let promedio = (nota1+nota2+nota3 ) /3;
    alert ("este es su promedio "+promedio);
if (promedio >=5){
    alert(promedio +"felicidades! aprobado")
} else {
    alert (promedio +"debes recuperar! reprobado")
};

//Tercero dado dos numero a y b 
let a = parseFloat(prompt("Número uno"));
let b = parseFloat(prompt("Número dos"));

if (a === b){
    alert("A y B son iguales")
} else if(a > b){
    alert("A es mayor que B")
} else {
    alert("A es menor que B")
};


//cuarto dos numeros de forma ascendente
let n1 = prompt("Ingrese un número");
let n2 = prompt("ingrese otro número");

if (n1 > n2){
    alert( n2 + "- - -" + n1);
} else {
    alert( n1 + "- - -" + n2);
};

//Quinta peso de personas 

let  pesopersona = prompt("ingrese peso de persona");

if ( pesopersona <= 40 ){
    alert("persona baja de peso")
} else if ( pesopersona >=41 && pesopersona <= 70){
    alert("persona con peso promedio")
}else{
    alert ("persona con sobrepeso")
};

//sexta  dias de la semana

let diasemana = parseFloat(prompt("ingrese el dia de la semana en numero entre 1 y 7"));

if(diasemana === 1){
    alert("Lunes")
}else if ( diasemana === 2){
    alert("Martes")
}else if ( diasemana === 3){
    alert("Miercoles")
}else if ( diasemana === 4){
    alert("Jueves")
}else if ( diasemana === 5){
    alert("Viernes")
}else if ( diasemana === 6){
    alert("Sabado")
}else if ( diasemana === 7){
    alert("Domingo")
}else{
    alert("su numero excedio el rango entre 1 y 7")
};

//sectima descuentos 

let precioOriginal = parseFloat(prompt("ingrese su valor de compra"));

    if (precioOriginal > 1000) {
      alert("Tiene un descuento de 20% Tiene un total de =  "+ precioOriginal * 0.8);
    } else {
       alert("Tienes un descuento del 5%  Tiene un total de =  "+precioOriginal * 0.95);
    };

// octava numeros positivos,negativo,igual a cero

let numero = (prompt("ingrese un número"));

if (numero < 0 ) {
  alert("ese número es negativo");
} else if (numero > 0 ) {
    alert("Ese número es positivo");
} else {
    alert("Ese número es cero");
};

// Novena

let persona1 = prompt("Ingrese el nombre de la persona 1");
let edad1 = parseFloat(prompt("Ingrese la edad de la persona 1"));

let persona2 = prompt("Ingrese el nombre de la persona 2");
let edad2 = parseFloat(prompt("Ingrese la edad de la persona 2"));

if (edad1 > edad2) {
    alert("La persona con mayor edad es " + persona1 + " con una edad de " + edad1);
} else {
    alert("La persona " + persona2 + " tiene una edad de "+edad2+ "tiene menor edad que " + persona1+ "con una edad de "+edad1 );
};

// Decima
let camisas = prompt("Ingrese el total de camisas compradas")

if (camisas >= 3){
    alert("Se ha aplicado un descuento de un 20%")
} else {
    alert("Se ha aplicado un 10% de descuento en su compra")
};





