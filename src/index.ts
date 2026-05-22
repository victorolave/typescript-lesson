// TIPOS DE VARIABLES

// 1. Primitivos
let nombre: string = "Juan Perez";
let edad: number = 20;
let activo: boolean = true;

// Arrays
const frutas: string[] = ['manzanas', 'limon'];
const jugadores: Array<string> = ['curry', 'lebron']

const punto: [number, string] = [10, 'numero']

// Union type
let id: string | number = 'abc123';
id = 1234;

// Literal type
let estado: 'active' | 'inactive' | 'pending' = 'active';
estado = 'active'

// Type assertion
const input = document.getElementById("campo") as HTMLInputElement;



function sumar(a: number, b: number): number {
    return a + b;
}

function sumarOpcional(a: number, b: number, c?: number): number {
    if (c === undefined) {
        return a + b;
    }

    return a + b + c;
}

function sumarOpc(a: number, b: number, c: number = 0): number {
    return a + b + c;
}

// Function type as variable
type Operacion = (a: number, b: number) => number;
const multiplicacion: Operacion = (a, b) => a*b
const division: Operacion = (a, b) => a/b;








