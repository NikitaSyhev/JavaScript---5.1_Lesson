// Контекст в функциях и методах
// foo();
// console.log(this);
 
function foo(param1, param2){
    console.log(this);  //this всегда ссылается на объект  - window - это объект описывающий всю нашу программу
    poo();
    function poo() { //локальная функция для функции foo о
        console.log(this);
    };
}
 
// const obj1 = {
//     name: 'Родион',
//     age: 18,
//     introduce (){
//      'use strict' // чтобы не обращаться к несуществующим полям
//         console.log(this.name);
//     }
// };
 
// obj1.introduce();
 
// let method = obj1.introduce; // копируем метод introduce, поэтому не используем круглые скобки
// method();
 
//функция конструктор, вызывается она через new
let p1 = new Person('Родион', 20, 'M'); //без new появляется undefined, поэтому нужно использовать new и делать проверку



 
function Person (name, age, gender) { 
    if(this == window) {
        throw new Error('Invalid inicialization: operator new expected;'); // не применили new при создании объекта
    }
    if(!(this instanceof Person)) { //способ проверить создали ли мы new перед Person
        throw new Error('Invalid inicialization: operator new expected;'); //
    }
    if(!new.target) { //способ проверить создали ли мы new перед Person - САМЫЙ ПРАВИЛЬНЫЙ СПОСОБ, ЕГО И ИСПОЛЬЗУЕМ
        throw new Error('Invalid inicialization: operator new expected;'); //
    }
    this.name = name;
    this.age = age;
}
 
//непрямой вызов функции на примере функции foo ( вызываем функции и назначаем контекст )
 
//эти функции одинаковые, разница в передаче аргументов
foo.call(p1, 10, 20); //метод call + в него передаем объект, который будет  являться контекстом для ф-ии foo, 10 и 20 это аргументы
//функция poo не наследует контекст от функции foo
foo.apply(p1, [10,20]); // принимает массив аргументов
const func = foo.bind(p1); //  создает новую функцию дял связывания  с контекстом
func(); //вызов новой функции


 
let a = {
    name: 'Empty',
};
 
let b = {
    age: 0,
};
 
b.__proto__= a;
 
console.log(b);
 
let s1 = new Student('Eliza', 20, 'BV222');
console.log(s1);
 
function Student (name, age, group) {
    if(!new.target) { //способ проверить создали ли мы new перед Person
        throw new Error('Invalid inicialization: operator new expected;');
    }
    this.group = group;
    this.__proto__ = new Person(name, age);
}