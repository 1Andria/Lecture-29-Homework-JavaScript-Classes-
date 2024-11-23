// 1. შექმენი კლასი Person, რომელსაც ექნება name და age ატრიბუტები. დაამატე მეთოდი introduce(), რომელიც დააბრუნებს ტექსტს:
// Hello, my name is [name] and I am [age] years old.

// class Person {
//   constructor(name, age) {
//     this.name = name;
//     this.age = age;
//   }
//   introduce() {
//     console.log(`Hello,my name is ${this.name} and i am ${this.age} years old`);
//   }
// }
// let per = new Person("Andria", "18");
// per.introduce();

// 2. დაამატე სტატიკური მეთოდი isAdult(age) კლასთან Person, რომელიც დააბრუნებს true თუ ასაკი მეტია ან ტოლია 18-ის და false - წინააღმდეგ შემთხვევაში.
// დავალება: შექმენი ახალი ობიექტი და შეამოწმე ეს სტატიკური მეთოდი.
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  introduce() {
    console.log(`Hello,my name is ${this.name} and i am ${this.age} years old`);
  }
  static isAdult(age) {
    return age >= 18;
  }
}
let per = new Person("Andria", 18);
per.introduce();
console.log(Person.isAdult(18));

// 3. კლასების მემკვიდრეობა (Inheritance)
// შექმენი კლასი Animal, რომელსაც ექნება name და მეთოდი speak(). შექმენი შვილობილი კლასი Dog, რომელსაც ექნება მეთოდი speak(), რომელიც დააბრუნებს: [name] says: Woof!

class Animal {
  constructor(name) {
    this.name = name;
  }
  speak() {
    return `this animal is ${this.name}`;
  }
}
class Dog extends Animal {
  constructor(name, bark) {
    super(name);
    this.bark = bark;
  }
  barking() {
    console.log(`${this.name} გამოსცემს ასეთ ხმას ${this.bark}`);
  }
}
let dzagli = new Dog("ძაღლი", "Woof");
dzagli.barking();
// 4. DOM-ის გამოყენება
// შექმენი კლასი Button, რომელსაც ექნება label და color პარამეტრები კონსტრუქტორში. დაამატე მეთოდი render(containerId), რომელიც შეიქმნის ღილაკს შესაბამისი ფერით და ტექსტით და დაამატებს კონტეინერში.
// დავალება: შექმენი ორი ღილაკი და დაამატე div ელემენტში.

class Button {
  constructor(label, color) {
    this.label = label;
    this.color = color;
  }
  render() {
    let btn = document.createElement("button");
    btn.style.color = this.color;
    btn.textContent = this.label;
    let container = document.getElementById("container");
    container.appendChild(btn);
  }
}
let gilaki = new Button("ღილაკი", "red");
let gilaki2 = new Button("რაღაც", "blue");
gilaki2.render("container");
gilaki.render("container");

// 5. შექმენი კლასი Vehicle, რომელსაც ექნება brand და speed ატრიბუტები და მეთოდი describe(). შემდეგ შექმენი Car კლასი, რომელიც მემკვიდრეობით მიიღებს Vehicle-ს და დაამატე თვისება model.
// დავალება: შექმენი რამდენიმე Car ობიექტი და დაიბეჭდე მათი მონაცემები.

class Vehicle {
  constructor(brand, speed) {
    this.brand = brand;
    this.speed = speed;
  }
  describe() {}
}
class Car extends Vehicle {
  constructor(brand, speed, model) {
    super(brand, speed);

    this.model = model;
  }
  info() {
    console.log(
      `მანქანა არის ${this.brand}, Model:${this.model} და აქვს სიჩქარე ${this.speed}`
    );
  }
}
let car1 = new Car("BMW", "300კმ/სთ", "M4");
let car2 = new Car("Mercedes", "290კმ/სთ", "AMG GT 63");
let car3 = new Car("Audi", "280კმ/სთ", "R8 V10");
car1.info();
car2.info();
car3.info();

// 6. შექმენი კლასი Product, რომელსაც ექნება name, price და category ატრიბუტები. დაამატე სტატიკური მეთოდი filterByCategory(products, category), რომელიც გამოიყვანს კონკრეტული კატეგორიის პროდუქტებს.
// დავალება: შექმენი რამდენიმე პროდუქტი და ფილტრაციით აჩვენე მხოლოდ electronics კატეგორიის პროდუქტები.

class Product {
  constructor(name, price, category) {
    this.name = name;
    this.price = price;
    this.category = category;
  }
  static filterByCategory(name, category, price) {
    //ეს electorinics მიხედვით დაყოფა არ ვიცი რაარი და ფასის მიხედვით დავყოფ :დდდდ
    if (price >= 40) {
      console.log(
        `პროდუქტი ${name} ${category}ს კატეგორიიდან  ღირს ${price} ლარი`
      );
    }
  }
}
Product.filterByCategory("ვაშლი", "ხილი", 130);
Product.filterByCategory("მსხალი", "ხილი", 30);
Product.filterByCategory("ატამი", "ხილი", 50);
Product.filterByCategory("მანგო", "ხილი", 20);

// 7. შექმენი კლასი Event, რომელსაც ექნება name და date ატრიბუტები. დაამატე მეთოდი isUpcoming(), რომელიც დაადგენს, ღონისძიება მომავალშია თუ არა.
// დავალება: დაამატე რამდენიმე ღონისძიება და შეამოწმე ისინი.

class Event {
  constructor(name, date) {
    this.name = name;
    this.date = date;
  }
  isUpcoming() {
    if (this.date === "მომავალ") {
      console.log(`${this.name}ს ღონისძიება არის ${this.date} ოთხშაბათს`);
      console.log("მომავალშია");
    } else {
      console.log(`${this.name} ღონისძიება ${this.date} ძალიან მაგარი იყო`);
      console.log("წარსული");
    }
  }
}
let event1 = new Event("მეჯლისი", "მომავალ");
let event2 = new Event("საქორწილო", "გუშინწინ");
event1.isUpcoming();
event2.isUpcoming();

// 8. შექმენი კლასი Character, რომელსაც ექნება name და health თვისებები. შექმენი შვილობილი კლასი Warrior, რომელსაც დაემატება attack() მეთოდი, რომელიც შეამცირებს health-ს 10-ით.
// დავალება: შექმენი ორი პერსონაჟი და გამოიყენე მათი attack() მეთოდი.

class Character {
  constructor(name, health) {
    this.name = name;
    this.health = health;
  }
  ragac() {
    console.log(
      `პერსონაჟი სახელად ${this.name}, სიცოცხლის ხანგრძლივობა:${this.health} წელი `
    );
  }
}
class Warrior extends Character {
  constructor(name, health) {
    super(name, health);
  }
  attack() {
    console.log(
      `პერსონაჟის სახელად ${this.name} სიცოცხლის ხანგრძლივობა გახდა ` +
        (this.health - 10) +
        " წელი"
    );
  }
}

let char1 = new Character("გელა", 93);
let char2 = new Character("გოჩა", 98);
let char3 = new Warrior("გელა", 93);
let char4 = new Warrior("გოჩა", 98);
char1.ragac();
char3.attack();
char2.ragac();
char4.attack();

// 9. შექმენი კლასი Task, რომელსაც ექნება title, completed და priority ატრიბუტები. დაამატე მეთოდი toggleCompleted(), რომელიც შეცვლის ტასქის სტატუსს (completed).
// დაამატე სტატიკური მეთოდი filterByPriority(tasks, priority), რომელიც დააბრუნებს მხოლოდ იმ ტასქებს, რომლებსაც შესაბამისი პრიორიტეტი აქვთ.

class Task {
  constructor(title, completed, priority) {
    this.title = title;
    this.completed = completed;
    this.priority = priority;
  }
  toggleCompleted() {}
}

// 10. შექმენი კლასი Appointment, რომელსაც ექნება title და date ატრიბუტები. დაამატე მეთოდი isToday(), რომელიც დააბრუნებს true, თუ ღონისძიება დღეს უნდა გაიმართოს და false, წინააღმდეგ შემთხვევაში.

class Appointment {
  constructor(title, date) {
    this.title = title;
    this.date = date;
  }
  isToday() {
    console.log(`${this.title} ღონისძიება ${this.date} არის ხო?`);

    return this.date === "დღეს";
  }
}
let goni = new Appointment("სამეფო", "დღეს");
console.log(goni.isToday());
