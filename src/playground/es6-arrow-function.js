function square (x) {
  return x * x;
}

// const squareArrow = (x) => {
//   return x * x;
// };

const squareArrow =  (x) => x * x;

console.log(squareArrow(7))
console.log(square(3))

const getFirstName = (fullName) => {
  return fullName.split(' ')[0]
}

const getFirstName2 = (fullName) => fullName.split(' ')[0];

console.log(getFirstName2("Mike Smith"));
