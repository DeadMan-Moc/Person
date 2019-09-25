class Person{
  constructor(name, age, gender, interests){
    this.name = name;
    this.age = age;
    this.gender = gender;
    this.interests = interests;
  }

  hello(){
    let a = this.interests.pop();
    let b =`Hello, my name is ${this.name} and I am ${this.age} years old. My interests are ${this.interests} and `+a 
    return b;
  }
}

let person  = new Person('Ryan',30,'male',['being a hardarse','agile', 'ssd hard drives']);
let greeting = person.hello()
console.log(greeting)