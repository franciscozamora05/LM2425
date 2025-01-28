// Gestor de arrays para añadir números, ordenar y calcular la media

// Inicializamos un array vacío donde guardaremos los números
var lista = [];

// Función para añadir un número al array
function anadir()
{
    // Obtenemos el valor del input y lo convertimos a un número entero
    var numero = parseInt(document.getElementById('num').value);
    
    // Comprobamos si el número ingresado es válido (entero y positivo)
    if (isNaN(numero) || numero < 0)
    {
        // Si el número no es válido, mostramos una alerta
        alert("Por favor introduzca un número válido (entero y positivo)");
        return; // Terminamos la ejecución si el número no es válido
    }

    // Si el número es válido, lo añadimos al array
    lista.push(numero);

    // Mostramos el número que ha sido añadido al array
    document.getElementById('final').innerHTML = "El nº " + numero + " ha sido añadido";
}

// Función para ordenar la lista de números y mostrarla
function ordenar()
{
    // Ordenamos el array de números de menor a mayor
    var orden = lista.sort(); // El sort() por defecto ordena los elementos como cadenas de texto
    
    // Mostramos la lista ordenada en el HTML
    document.getElementById("final").innerHTML = "Su lista de números es " + orden;
}

// Función para calcular la media de los números en la lista
function media()
{
    // Inicializamos una variable para acumular la suma de los números
    var suma = 0;

    // Obtenemos el número total de elementos en el array
    var total = lista.length;

    // Usamos un bucle for para recorrer todos los números de la lista
    for (var i = 0; i < total; i++) // Usamos i < total porque .length da la cantidad de elementos, empezando desde el índice 0
    {
        // Sumamos cada número del array a la variable suma
        suma = suma + lista[i];
    }

    // Calculamos la media dividiendo la suma por la cantidad total de elementos
    var media = suma / total;

    // Mostramos la media en el HTML
    document.getElementById("media").innerHTML = "La media es de " + media;
}