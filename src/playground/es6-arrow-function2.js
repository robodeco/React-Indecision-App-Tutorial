

const add = (a, b) => {
  return a + b;
};

console.log(add(55, 1))

const user = {
  name: "Chris",
  cities: ["Springfield", "Arlington", "Portland"],
  printPlacesLived() {
    return this.cities.map((city) => this.name + ' has lived in ' + city);
  }
};
console.log(user.printPlacesLived());

const multiplier = {
  numbers: [1, 2, 3, 4, 5],
  multiplyBy: 3,
  multiplyFunction() {
    return this.numbers.map((baseNum) => "this number multiplied by 3 is " + this.multiplyBy * baseNum);
  }
}

console.log(multiplier.multiplyFunction());
