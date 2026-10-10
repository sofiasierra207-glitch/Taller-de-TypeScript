let productoNombre: string = "Laptop";
let productoPrecio: number = 1200;
let productoEnStock: boolean = true;

// ❌ El editor te mostrará un error aquí
// productoPrecio = "mil doscientos"; 

let datosAPI: unknown = JSON.parse('{"nombre": "tablet", "precio": 300}');

if (typeof datosAPI === 'object' && datosAPI !== null) {
  // ✅ Comprobación para acceder de forma segura
  let producto = datosAPI as { nombre: string, precio: number };
  console.log(producto.nombre);
}

function registrarMensaje(mensaje: string): void {
  console.log("LOG:", mensaje);
}

function detenerProceso(razon: string): never {
  throw new Error(`Proceso detenido: ${razon}`);
}


let usuariosIDs: number[] = [101, 102, 103];
let gpsCoordenadas: [number, number] = [40.7128, -74.0060];

enum EstadoOrden { Pendiente, Enviada, Entregada, Cancelada };
let miOrdenEstado: EstadoOrden = EstadoOrden.Enviada;

type ID = string | number;
let miId: ID = "a-123";

type Empleado = { nombre: string, email: string };
type Desarrollador = Empleado & { lenguaje: string, senioridad: "junior" | "senior" };

let nuevoDev: Desarrollador = {
  nombre: "Carlos",
  email: "carlos@empresa.com",
  lenguaje: "TypeScript",
  senioridad: "junior"
};

function saludar(nombre: string = 'Desconocido', titulo?: string, ...amigos: string[]): string {
  let saludo = titulo ? `${titulo} ${nombre}` : nombre;   
  if (amigos.length > 0) {
    saludo += `, y tus amigos ${amigos.join(', ')}`;
  }
  return `Hola, ${saludo}.`;
}

console.log(saludar());  // Hola, Desconocido
console.log(saludar("Ana")); // Hola, Ana
console.log(saludar("Pedro", "Sr.")); // Hola, Sr. Pedro
console.log(saludar("Maria", undefined, "Juan", "Pedro")); // Hola, Maria, y tus amigos Juan, Pedro
console.log(saludar(undefined, undefined, "Juan", "Pedro")); // Hola, Desconocido, y tus amigos Juan, Pedro

interface Usuario {
  readonly id: number;
  nombre: string;
  email?: string;
}

let usuario: Usuario = { id: 10, nombre: "Luis" };
// usuario.id = 11; // ❌ Error, es de solo lectura
usuario.email = "luis@correo.com"; // ✅ Válido

class Vehiculo {
  protected ruedas: number;
  constructor(ruedas: number) {
    this.ruedas = ruedas;
  }
  public arrancar(): void {
    console.log("El vehículo está arrancando.");
  }
}

class Coche extends Vehiculo {
  public marca: string;
  private _velocidad: number = 0;

  constructor(ruedas: number, marca: string) {
    super(ruedas);
    this.marca = marca;
  }
  
  // Puedes acceder a 'this.ruedas' porque es 'protected'
  public getInfo(): void {
    console.log(`Este coche tiene ${this.ruedas} ruedas.`);
  }

  // Métodos que manipulan la propiedad 'private'
  public acelerar(cantidad: number): void {
    this._velocidad += cantidad;
  }
}

const miCoche = new Coche(4, "Toyota");
miCoche.arrancar();
miCoche.acelerar(50);
// miCoche._velocidad = 100; // ❌ Error, es privado

class ColaString {
  private items: string[] = [];
  
  agregar(item: string): void {
    this.items.push(item);
  }
  obtenerPrimerElemento(): string | undefined {
    return this.items.shift();
  }
}

class ColaNumber {
  private items: number[] = [];
  
  agregar(item: number): void {
    this.items.push(item);
  }
} 

class Cola<T> {
  private items: T[] = [];
  
  agregar(item: T): void {
    this.items.push(item);
  }
  
  obtenerPrimerElemento(): T | undefined {
    return this.items.shift();
  }
}

const colaNumeros = new Cola<number>();
colaNumeros.agregar(10);
colaNumeros.agregar(20);
const primerNumero = colaNumeros.obtenerPrimerElemento(); // Tipo: number
console.log(primerNumero);


const colaCadenas = new Cola<string>();
colaCadenas.agregar('Pepe');
colaCadenas.agregar('Maria');
const primerNombre = colaCadenas.obtenerPrimerElemento(); // Tipo: string
console.log(primerNombre);

import { sumar } from './utils';

const resultado = sumar(5, 10);
console.log(`El resultado de la suma es: ${resultado}`);

