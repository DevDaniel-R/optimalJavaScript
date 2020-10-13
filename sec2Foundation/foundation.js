// inline caching (Optimizing code) - cache so that findUser just becomes that piece of text (findUser)
function findUser(user) {
  return `found ${user.firstName} ${user.lastName}`
}

const userData {
  firstName: 'Johnson'
  lastName: 'junior'
}

findUser(userData)



// hidden classes - internally slow things down - to prevent this we should assign all properties of an objects to its constructor

function Animal(x, y) {
  this.x = x;
  this.y = y;
}

const obj1 = new Animal(1,2);
const obj2 = new Animal(3,4);

// obj1.a = 30;
// obj1.b = 100;
// obj2.b = 30;
// obj2.a = 100;

delete obj1.x = 30;


//Call stack + Memory Heap
const number = 610; // allocate memory for number
const string = 'some text' //allocate memory for a string
const human = { //allocate memory for an object... and it's values
first: 'Daniel',
last : 'Rodriguez'
}

function subtractTwo(num) {
  return num - 2;
}

function calculate() {
  const sumTotal = 4 + 5;
  return subtractTwo(sumTotal);
}

calculate();