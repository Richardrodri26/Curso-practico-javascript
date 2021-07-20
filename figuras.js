//Codigo del cuadrado

function perimetroCuadrado(lado) {
  return lado * 4;
}

function areaCuadrado(lado) {
  return lado * lado;
}

//http://127.0.0.1:5500/

//Codigo del cuadrado

//Codigo del triangulo

//Reto de la altura de un triangulo

function altura(lado1, lado2, base) {
  if (
    lado1 === lado2 && lado1 != base
  ) {
    alert(`Isoceles`)
    const altura = Math.sqrt(lado1**2 - base**2 / 4)
    console.log(altura)
  }
  else {
    alert("No lo se mi pana")
  }
}



function perimetroTriangulo(lado1, lado2, base) {
  return lado1 + lado2 + base;
}
function areaTriangulo(base, altura) {
  return (base * altura) / 2;
}

//Codigo del circulo

//Radio

//Diametro
function diametroCirculo(radio) {
  return radio * 2;
}

//PI
const PI = Math.PI;

//Circuferencia
function perimetroCirculo(radio) {
  const diametro = diametroCirculo(radio);
  return diametro * PI;
}

//Area
function areaCirculo(radio) {
  return radio * radio * PI;
}
console.groupEnd();

//Aqui va con el HTML
function calcularPerimetroCuadrado() {
  const input = document.getElementById("InputCuadrado");
  const value = input.value;

  const perimetro = perimetroCuadrado(value);
  alert(perimetro);
}

function calcularAreaCuadrado() {
  const input = document.getElementById("InputCuadrado");
  const value = input.value;

  const area = perimetroCuadrado(value);
  alert(area);
}
