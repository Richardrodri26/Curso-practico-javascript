function calcularMediaAritmetica(lista) {
  const sumalista = lista.reduce(function (valorAcumulado = 0, nuevoElemento) {
    return valorAcumulado + nuevoElemento;
  });

  const promedioLista = sumalista / lista.length;
  return promedioLista;
}

const lista1 = [100, 200, 500, 400000000];

const mitadLista1 = parseInt(lista1.length / 2);

function esPar(numero) {
  if (numero % 2 === 0) {
    return true;
  } else {
    return false;
  }
}

let mediana;

if (esPar(lista1.length)) {
  const elemento1 = lista1[mitadLista1 - 1];
  const elemento2 = lista1[mitadLista1];

  const promedioElemento1y2 = calcularMediaAritmetica([elemento1, elemento2]);

  mediana = promedioElemento1y2;
} else {
  mediana = lista1[mitadLista1];
}

const listaOrdenada = lista1.sort(function (a, b) {
  return a - b;
});

const lista = [100, 400, 234, 500, 560, 600];

function calcularMediana(lista) {
  const listaOrdenada = lista.sort(function (a, b) {
    return a - b;
  });

  const mitadLista = parseInt(listaOrdenada.length / 2);

  let mediana;

  if (esPar(listaOrdenada.length)) {
    const elemento1 = listaOrdenada[mitadLista - 1];
    const elemento2 = listaOrdenada[mitadLista];

    const promedioElemento1y2 = calcularMediaAritmetica([elemento1, elemento2]);

    mediana = promedioElemento1y2;
    return mediana;
  } else {
    mediana = lista1[mitadLista1];
    return mediana;
  }
}

function esPar(numero) {
  if (numero % 2 === 0) {
    return true;
  } else {
    return false;
  }
}
