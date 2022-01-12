// EJERCICIOS ADICIONALES

/* 1 - Crea una función que tome como parámetro un número. Si es un número entero (sin
decimales) muestra por consola true. Si no, muestra por consola false.*/
                                     // Toda función debe retornar algo.
function isInteger(num) {            // Tomar como parametro un número para que sea dinámico y poder ejecutar esta función con un número diferente cada vez si queremos
    return Number.isInteger(num);    // Number representa un objeto. Podemos trabajar con cualquier tipo de número de diferentes formas. Transformar un número, comprobar si es entero o no...
}                                   // isInteger es un método que nos devuelve true o false dependiendo del valor que pasemos.
console.log(isInteger(10));         // se pone el valor que queremos saber entre paréntesis






/* 2 - Crea una función que tome como parámetros dos strings, puedes llamarlos a y b. Si
a contiene b, añade b al principio de a. Si no, añade b al final. Por ejemplo:
(“cheese”, “cake”) => output: “cheesecake”
(“Java”, “script”) => output: “JavaScript”
(“think, therefore I am”, “I”) => output: “I think, therefore I am” */

function content(a, b) {        
    if (a.includes(b)) {        // si a incluye b retorna b + a, sino a + b
        return b + " " + a;
    } else {
        return a + b;
    }
    // también se podría hacer con indexOf:   (a.indexOf(b) !== -1)   si no encuentra esos dos parámetros devuelve -1
}
console.log(content("thing, therefore I am", "I")); // aquí pasamos los parámetros que queremos comprobar






/* 3 - Crea una función que tome como parámetro un número y lo divida en dígitos
individuales dentro de un array. Tip: puedes usar el método split(); Por ejemplo:
(10) => output: [1,0]*/

// Hay que convertir el número en string para poder operar con él. Ya que split trabaja con string no con números. 

function toArray(num) {                     // split trabaja con string, no con números.
    const newArr = String(num).split(" ");    //Creamos una variable para guardar ese nuevo array que vamos a crear. Seguidamente tenemos el operador String para convertirlo en string. Le pasamos el parámetro. Una vez tengo convertido ese número en un string, con split lo convierto en array. 
    const arr = [];                 // realmente quiero un array con números, no un string de números. Me creo un array nuevo para con un bucle iterar por cada valor, coger string de 1 y pasarlo a número, coger string de 2 y así... Como creo un array nuevo? creo variable, con nombre que le quiera dar a ese array, y un array vacío, corchetes sin nada dentro
    newArr.forEach((item) => {;     // forEach (admite como parámetro una función), es un loop que itera por cada uno de ellos uno a uno. Cojo mi newArr que es mi array con string sobre el cual voy a iterar.
        arr.push(Number(item));     // arrOw functions: son funciones flecha, en las cuales no vamos a tener function como palabra clave. Sintaxis: () => {} Si queremos reutilizar esta función, la guardamos en una variable y le damos el nombre que queramos: const arrowFunction = () => {} Si hay solo un parámetro se quita el parentesis (), si hay más se pone y se separa por comas.
                                    // con un parámetro: const arrowFunction = a => {console.log(a)} o con dos parámetros: const arrowFunction = (a, b) => {a + b}. Siempre CONST porque es una función. No se usa return porque ya en los corchetes te devuelve.
    });  
    console.log(arr);               
                     
    //otra forma de hacer el ejercicio:
    const newArr = Array.from(String(num), Number); // otra forma de hacerlo: crear una variable, con el método array.from, que permite crear un nuevo array a partir de un objeto iterable (array, string, objetos...) objetos que me permiten con difetentes funciones recorrer cada uno de sus elementos. Podemos usar por ejemplo un bucle.
    console.log(newArr);                            // Un iterador es cualquier objeto que nos permite recorrer una determinada colección de valores y devolver un valor al final.
}                                                   // Admite dos parámetros.String(num), estamos transformando este parámetro en un string. Array.from no opera con números. El segundo parámetro es el operador o función de Number, que nos va a transformar esto en un número con cada uno de los elementos del array.
toArray(20);                        
                                                






/*4 - Crea una función que tome como parámetro un array. Si todos los elementos del
array son estrictamente iguales, muestra por consola true, de lo contrario muestra
false. Por ejemplo:
([true, true, true, true]) => output: true
(['10',10,10,10]) => output: false*/

function myArray(array) {  // pasamos un array como parámetro. Usamos un bucle para iterar en cada elemento del array y comprobar si son iguales o no con un bucle for.
    for (let i = 1; i < array.length; i++) {  // se empieza en 1 porque vamos a comparar todos los elementos del array con el primer elemento.
        if (array[0] === array[i]) {          // aquí se puede poner lo que quieras. Una vez he hecho la iteración, quiero comprobar si mi elemento en el index 0 es estrictamente igual a array de i (cada elemento del array en la iteración). 
          return true;                         // array 0 es la referencia. Array i se compara con array 0 en cada iteración.
        } else {                                // retornamos true si es estrictamente igual, si no retorna false.
          return false;
        }
    }
}
console.log(myArray(["10", 10, 10]));






/* 5 -  Dado un array de números, muestra por consola un array con dichos números
ordenados en forma descendente.*/

function orderedNumbers(array) {
    return array.sort(function(a, b) {   //sort requiere estrictamente que esta función retorne un valor
        return b - a;
    });
}
console.log(orderedNumbers([56, 0, 12, 4, 31]));






/*6 -  Dado un array de strings, muestra por consola un array con sus valores ordenados
alfabéticamente. Por ejemplo:
['b', 'c', 'd', 'a'] => output: ['a', 'b', 'c', 'd'] */


const letters = ["b", "c", "d", "a"];   // no hace falta función. Guardamos en variable el string
console.log(letters.sort());






/*7 -  Crea una función que tome como parámetro un array de strings y muestra por
consola el string más largo. Por ejemplo:
(['help', 'me']) => output: “help”*/

// 1 FORMA DE HACERLO:

function longestStr(arr) {       // aquí nuestro parámetro va a ser el array. Tengo un array de string. Entonces quiero comprobar la longitud de cada palabra. Si dicha longitud es mayor que una que yo tomo como referencia, quiero guardarla en una variable para luego poder retornar esa palabra más larga por los demás.
    let longuestWord = "";       // variable con string vacío porque no sé lo que tiene dentro. Valor inicial vacío. Este va a ser mi punto de referencia
    arr.forEach((word) => {      // para iterar por cada elemento
        if (word.length > longuestWord.length) { // comprobar si la longitud de help es mayor que la longitud de la palabra de referencia, en ese caso
            longuestWord = word;                // longuestWord ahora va a ser igual a esa palabra. Si en la siguiente iteracción longuestWord es más larga pasará a ser esa palabra.
        }
    });  
    return longuestWord;                       
}
console.log(longestStr(["help", "me"]));   // parámetros a comprobar


// 2 FORMA DE HACERLO:

function longestStr(arr) { 
    let lgth = 0;  
    let longestWord;                         // valor inicial 0
    for (let i = 0; i < arr.length; i++) {  // compruebas la longitud de cada string con un valor inicial
        if (arr[i].length > lgth) {         // compruebas si array de i.length, es mayor ue este valor (lgth)
            lgth = arr[i].length;           // lgth va a ser igual a array i .length, que va a ser la palabra que corresponde en cada iteración
            longestWord = arr[i];           // creamos variable arriba para poder asignarle esa palabra, arr i
        }
    }
    return longestWord;
}
console.log(longestStr(["help", "me"]));


// 3 FORMA DE HACERLO:

arr.sort(function (a, b) {return b.length - a.length})[0];   // más fácil






/*8 -  Crea una función que tome dos arrays de números como parámetros. Une ambos
arrays, remueve valores duplicados (si hay alguno) y ordena los números en orden
ascendente.*/

function joinArr(arr1, arr2) {
    const newArr = arr1.concat(arr2)   // concat une arrays. Aquí le paso los arrays que quiero unir
    console.log(newArr);
}
joinArr([1, 2, 3], [1, 2, 4, 5, 6]);


// OTRA FORMA DE HACERLO CON ES6 NUEVA ACTUALIZACIÓN, CON SPREAD OPERATOR
//spread operator, nos crea como una copia de un array, creando un array nuevo si queremos y expandiendo sus valores

function joinArr(arr1, arr2) {
    const newArr = [...arr1, ...arr2]    // duplica los valores en este array nuevo que he creado ... es el simbolo de spread operator
    return newArr.sort().filter(function(item, index, arr) => {  // ordena de forma ascendente sort. Filter: crea un nuevo array con los elementos que cumplan una condición determinada. Sus parámetros son: item, index, arr (array no 1 ni 2, array a secas). Pongo función porque necesito retornar
        return !index || item != arr[index - 1];     // si item no es igual a array de i menos 1 (posición anterior en cada iteración). Y para eliminar el elemento, pongo el valor contrario o negación de index.
    });
}
joinArr([1, 2, 3], [1, 2, 4, 5, 6]);







/*9 -  Crea una función que tome un objeto como parámetro. Remueve la propiedad
“country” y su valor y muestra el resultado por consola. Por ejemplo:
const myObj = { city: 'Sacramento', state: 'California', country: 'USA', continent: 'North
America' }
=> output: { city: 'Sacramento', state: 'California', continent: 'North America' }*/

const myObj = {
    city: "Sacramento",
    state: "California",
    country: "USA",
    continent: "Nort America"
};

/*const myObj2 = {
    city: "Madrid",
    state: "Madrid",
    country: "Spain",
    continent: "Europe"
}; */

function deleteKey(object) {
    delete object .country;
    console.log(object);
}
deleteKey(myObj);
deleteKey(myObj2);  // puedo utilizar una función a la vez para dos objetos. 







/*10 - Trabajando con el mismo array anterior, muestra por consola el valor de la propiedad
“city”*/

console.log(myObj.city);






/*11 - Algunas de las propiedades de los siguientes objetos son strings vacíos.
Reemplazalos por el valor “null”, empleando para ello una función que tome como
parámetro dichos objetos. Muestra por consola el objeto resultante
{ a: 'a', b: 'b', c: '' }
{ a: '', b: 'b', c: ' ', d: 'd' }
{ a: 'a', b: 'b ', c: ' ', d: '' }
=> output: { a: 'a', b: 'b', c: null }*/

const lettersObj = { a: '', b: 'b', c: ' ', d: 'd' }; // tenemos un objeto iterable y queremos comprobar si son string vacíos o no

function replaceKey(obj) {   // creamos funcion que se llame replaceKey y va a tomar como parámetro un objeto (se puede llamar como queramos)
    for (const key in obj) {   //for ... in me permite iterar en objetos. Para guardar cada una de las propiedades en una variable                 
        if(obj[key] === " " || obj[key] === "") {
            obj[key] = null;
        }
    }
    console.log(obj);
}
replaceKey(lettersObj);







/*12 - Crea una función que tome como parámetros un array de objetos y un string. Agrega
a cada uno de los objetos la propiedad “continent” que tome como valor el parámetro
de string. Muestra por consola el nuevo array.
([{ city: 'Tokyo', country: 'Japan' }, { city: 'Bangkok', country: 'Thailand' }], 'Asia')
=> output: [{ city: 'Tokyo', country: 'Japan', continent: 'Asia' }, { city: 'Bangkok', country:
'Thailand', continent: 'Asia' }]
([{ city: 'Stockholm', country: 'Sweden' }, { city: 'Paris', country: 'France' }], 'Europe')
=> output: [{ city: 'Stockholm', country: 'Sweden', continent: 'Europe' }, { city: 'Paris', country:
'France', continent: 'Europe' }] */

function addKey(arr, newValue) {            // (array de objetos (arr) y un string "newValue"")
    const newKey ="continent";              // (newValue) es la const newKey, le vamos a llamar así. Creamos la variable que va a darle el valor a newValue
    for (let i = 0; i < arr.length; i++) {  // For para iterar en el objeto. 
        arr[i][newKey] = newValue;          // Quiero agregar una nueva propiedad a cada elemento. Tengo que acceder a array de i, que va ser el 1º objeto en la 1º iteración. 
    }                                       // 
    console.log(arr);
}

addKey(
    [
        {city: "Tokyo", country: 'Japan'},
        {city: 'Bangkok', country: 'Thailand'},
    ],
    "Asia"          // parámetro de string que vamos a agregar a continent
);                  // arr[i][newKey] = newValue; esta va a ser la propiedad y "Asia" el valor.