var _a, _b;
let holaMundo = 'Hola mundo';
console.log(holaMundo);
let numero = 3;
console.log(numero);
let activado = true;
let nulo = null;
let indefinido;
let arrNumeros = [1, 2, 3];
let arrStrings = ['a', 'b', 'c'];
let cualquierCosa = 2;
cualquierCosa = 'z';
cualquierCosa = ['a', 2, true, [1, 2, 3], { a: 'b' }];
// Union de tipos
let tarea = null;
tarea = true;
let tarea8;
tarea8 = { id: 8, titulo: 'Tarea 8', completada: true, fecha: new Date() };
function getRandomId(longitud) {
    return Math.random() * longitud + '';
}
console.log('ID Random: ' + getRandomId(2));
console.log('ID Random: ' + getRandomId(5));
// Arrow functions
const muestraMensaje = (mensaje) => {
    console.log(mensaje);
};
muestraMensaje('Hola mundo...');
// () => {}
// a => {}
// (a: number) => {}
// (a: number, b: string) => {}
// (a, b) => {}
// (a, b): number => a + b
// (a, b): number => {
//    const res = a + b
//    return res
// }
// class Persona {
//   public nombre: string;
//   private apellidos: string;
//   constructor(n: string, a: string) {
//     this.nombre = n
//     this.apellidos = a
//   }
// }
class Persona {
    constructor(nombre, apellidos) {
        this.nombre = nombre;
        this.apellidos = apellidos;
        this.edad = 0;
    }
    getNombreCompleto() {
        return this.nombre + ' ' + this.apellidos;
    }
    get nombreCompleto() {
        return this.nombre + ' ' + this.apellidos;
    }
    set nombreCompleto(nuevoNombre) {
        // 'Charly Falco García' => ['Charly', 'Falco', 'García']
        // const arrPalabras: Array<string> = nuevoNombre.split(' ')
        // this.nombre = arrPalabras[0]
        // this.apellidos = arrPalabras[1]
        const [nombre, ...apellidos] = nuevoNombre.split(' ');
        this.nombre = nombre;
        this.apellidos = apellidos.join(' ');
    }
}
const angel = new Persona('Ángel', 'Villalba Fdez-Paniagua');
console.log(angel.getNombreCompleto());
console.log(angel.nombreCompleto);
angel.nombreCompleto = 'Charly Falco García'; // Llamamos al set
console.log(angel.nombreCompleto); // Llamamos al get
class DesarrolladorJavaScript extends Persona {
    constructor() {
        super(...arguments);
        this.lenguaje = 'JavaScript';
        // constructor(nombre: string, apellidos: string) {
        //   super(nombre, apellidos)
        // }
    }
}
const angelJS = new DesarrolladorJavaScript('Ángel', 'Villalba Fdez-Paniagua');
console.log(angelJS.lenguaje);
console.log(angelJS.nombreCompleto);
// Desestructuración
const arrDatos = [3, 'Charly', ['JS', 'TS', 'Ruby']];
// const id = arrDatos[0]
// const nombre = arrDatos[1]
// const conocimientos = arrDatos[2]
const [, nombre, conocimientos] = arrDatos;
console.log(nombre, conocimientos);
const titulo = "";
// tarea8 = { id: 8, titulo: 'Tarea 8', completada: true, fecha: new Date() }
const { completada, titulo: textoTarea } = tarea8;
console.log(completada, textoTarea);
// Rest operator
function getNumeroLoteria(sorteo, numSorteo, ...numeros) {
    // return sorteo + ' (num: ' + numSorteo + ') - ' + numeros.join(', ')
    return `${sorteo} (num: ${numSorteo}) - ${numeros.join(', ')}`;
}
const numEuromillon = getNumeroLoteria('Euromillón', 284, 3, 15, 19, 27, 39, 42);
console.log(numEuromillon);
// Spread operator
const JSONStatham = {
    nombre: 'JSON',
    apellido: 'Statham'
};
// Object.assign({}, JSONStatham)
const YAMLStatham = Object.assign({}, JSONStatham);
YAMLStatham.nombre = 'YAML';
console.log(JSONStatham);
console.log(YAMLStatham);
// Optional chaining operator
const persona1 = {
    numeros: {
        fijo: {
            numero: 666111222
        },
        movil: {
            numero: 666111222,
            prefijo: '+34'
        }
    }
};
const persona2 = {
    numeros: {
        fijo: {
            numero: 666111222
        },
    }
};
// if (persona.numeros && persona.numeros.movil && persona.numeros.movil.numero) {
//   console.log(persona.numeros.movil.numero)
// }
console.log((_b = (_a = persona1.numeros) === null || _a === void 0 ? void 0 : _a.movil) === null || _b === void 0 ? void 0 : _b.numero);
// filter, map, forEach
const arrSeries = [
    { id: 1, titulo: 'Gangland Undercover', finalizada: true },
    { id: 2, titulo: 'Taboo', finalizada: false },
    { id: 3, titulo: 'Game of Thrones', finalizada: true },
];
const seriesFinalizadas = arrSeries.filter((serie) => {
    return serie.finalizada;
});
console.log(seriesFinalizadas);
const titulosMayus = arrSeries.map(serie => serie.titulo.toUpperCase());
console.log(titulosMayus);
const seriesTitulosMayus = arrSeries.map(serie => {
    return Object.assign(Object.assign({}, serie), { titulo: serie.titulo.toUpperCase() });
});
console.log(seriesTitulosMayus);
arrSeries.forEach((serie) => {
    console.log(serie.titulo);
});
