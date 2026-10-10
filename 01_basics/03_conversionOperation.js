let score="hitesh"

console.log(typeof score);
console.log(typeof(score));

let valueInNumber = Number(score)
console.log(typeof valueInNumber);
console.log(valueInNumber);

//"33"=>33 it is converted in number
//"33abc"=>NaN it give not a number same for the "hitesh",undefined
//null=>0 it give zero 
//false=>0 true=>1 boolean value

let isLoggedIn=""

let booleanIsLoggedIn=Boolean(isLoggedIn)
console.log(booleanIsLoggedIn);

//isLoggedIn="" false return
//isloggedIn="hitesh"or 1 true return 

let someNumber=33

let stringNumber=String(someNumber)
console.log(stringNumber)
console.log(typeof stringNumber)