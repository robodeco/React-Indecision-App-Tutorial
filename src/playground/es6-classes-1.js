class Person {
  constructor(name = 'Anonymous', age = 0) {
    //in our class methods, "this" refers to the class instance
    this.name = name;
    this.age = age;
  }
  getGreeting() {
    return `Hi. I am ${this.name}!`;
  }
  getDescription() {
    return `${this.name} is ${this.age} year(s) old!`;
  }
}

class Student extends Person {
  constructor(name, age, major) {
    super(name, age);
    this.major = major;
  }
  hasMajor() {
    return !!this.major;
  }
  getDescription() {
    let description = super.getDescription();

    if (this.hasMajor()) {
      description += ` Their Major is ${this.major}.`;
    }

    return description;
  }
}

class Traveler extends Person {
  constructor(name, age, homeLocation) {
    super(name, age);
    this.homeLocation = homeLocation;
  }
  getHomeLocation() {
    return !!this.homeLocation;
  }
  getGreeting() {
    let greeting = super.getGreeting();
    if (this.getHomeLocation()) {
      greeting += ` I'm visiting from ${this.homeLocation}.`;
    }
    return greeting;
  }
}

const me = new Student('Andrew Mead', 26, 'Computer Science');
console.log(me.getDescription());

const other = new Student();
console.log(other.getDescription())

const newTraveler = new Traveler('Andew Mead', 26, 'Virginia');
console.log(newTraveler.getGreeting());
