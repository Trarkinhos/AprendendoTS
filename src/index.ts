// annotation
let x: number = 10 // declaro o tipo do lado do nome

// x = 'teste';  -- isso vai gerar um erro --
x = 30;

console.log(x);

// inferencia x annotation

let y = 12; // inferencia
// y = 'teste; -- isso vai gerar um erro --

// tipos básicos
let firstName: string = "Marcos";
let age: number = 30;
const isAdmin: boolean = true;

// String != string

console.log(firstName);

// object
const myNumbers: number[] = [1, 2, 3] // tipo array númerico

console.log(myNumbers);
console.log(myNumbers.length);

// tuplas -> tuple
let myTuple: [number, string, string[]]

myTuple = [5, 'teste', ['a', 'b']]

// myTuple = [true, false, true] -- isso vai gerar um erro --

// object literals -> {prop: value}

const user: {name: string, age: number} = {
    name: "Pedro",
    age: 18
};

console.log(user);
console.log(user.name);

// user.job = "Programador"; -- isso vai gerar um erro --

// Any
let a:any = 0;

a = "teste";
a = true;
a = [];

// union type
let id: string | number = "10"

id = 200

// id = true; id = []; -- isso vai gerar um erro --

// type alias
type myIdType = number | string

const userId: myIdType = 10
const productId: myIdType = "00001"
const shirId: myIdType = 123

// enum
// tamanho de roupas (size: Médio, size: Pequeno)
enum Size {
    P = "Pequeno",
    M = "Médio",
    G = "Grande"
}

const camisa = {
    name: "Camisa gola V",
    size: Size.G
}

console.log(camisa)

// literal types
let teste: "autenticado" | null;

// só vou conseguir alterar para algum valor declaro a cima
teste = "autenticado"
teste = null;

// funções
function sum(a: number, b: number){
    return a + b
}

console.log((sum(12, 12)));

function sayHelloTo(name: string): string {
    return `Hello ${name}`
}

console.log(sayHelloTo("Marcos"));

function logger(msg: string): void{ // não retorna nada
    console.log(msg);
}

logger("Teste!");

function greeting(name: string, greet?: string) {
    if(greet){
        console.log(`Olá ${greet} ${name}`) 
        return;
    }
    else {
        console.log(`Olá ${name}`)
    }
}

console.log(greeting("Marcos"))
console.log(greeting("Pedro", "Sir"))

// interfaces
interface MathFunctionParams {
    n1: number,
    n2: number
}

function sumNumbers(nums: MathFunctionParams) {
    return nums.n1 + nums.n2
}

console.log(sumNumbers({n1: 1, n2: 2}));

function multiplyNumbers(nums: MathFunctionParams) {
    return nums.n1 * nums.n2
}

const someNumbers: MathFunctionParams = {
    n1: 5,
    n2: 10
}

console.log(multiplyNumbers(someNumbers))

// narrowing - checagem tipos
function doSomething(info: number | boolean) {
    if(typeof info === "number"){
        console.log(`O número é ${info}`)
        return;
    }
    else{
        console.log("Não foi passado um número");
    }
}

doSomething(5);
doSomething(true);

// generics - vou receber qualquer coisa na minha array
function showArraysItens<T>(array: T[]) {
    array.forEach((item) => {
        console.log(`ITEM: ${item}`)
    })
}

const a1 = [1, 2, 3];
const a2 = ["a", "b", "c"];

showArraysItens(a1);
showArraysItens(a2);

// Classes
class User {
    name
    role
    isApproved

    constructor(name: string, role: string, isApproved: boolean){
        this.name = name
        this.role = role
        this.isApproved = isApproved
    }

    showUserName(){
        console.log(`O nome do usuário é ${this.name}`)
    }
}

const joao = new User("João", "Admin", true)

console.log(joao)

// interfaces em classes
interface IVehicle {
    brand: string
    showBrand(): void
}

class Car implements IVehicle {
    
    brand
    wheels

    constructor(brand: string, wheels: number){
        this.brand = brand
        this.wheels = wheels
    }

    showBrand(): void {
        console.log(`A marca do carro é: ${this.brand}`)
    }
}

const fusca = new Car("VW", 4)
fusca.showBrand();

// herança
class SuperCar extends Car {
    
    engine

    constructor(brand: string, wheels: number, engine: number) {
        super(brand, wheels)
        this.engine = engine;
    }
}

const a4 = new SuperCar("Audi", 4, 2.0);

console.log(a4);
a4.showBrand();

// decorators

// constructor decorator
function BaseParameters(){
    return function <T extends {new (...args: any[]): {}}>(constructor: T){
        return class extends constructor {
            id = Math.random()
            createdAt = new Date();
        };
    }
}

@BaseParameters()
class Person {
    
    name;

    constructor(name: string){
        this.name = name;
    }


}

const sam = new Person("Sam");

console.log(sam);