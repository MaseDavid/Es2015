// Question 1
let person = {
    fullName: "Harry Potter",
    sayHi: () => {
        setTimeout( function () {
            console.log(`Your name is ${this.fullName}`)
        }
        .bind(this),1000);
    }
}

//Question 2
let name = "Josie"
console.log(`When ${name} comes home, so good`)

//Question 3
const DO_NOT_CHANGE = 42;
   DO_NOT_CHANGE = 42

//Question 4
let arr = [1,2]
let temp = arr[0]
arr[0] = arr[1]
arr[1] = temp

// Question 5
function double(arr){
    return arr.map(function(val){
      return val*2
    });
   }

//Question 6
let a = obj.numbers.b;
let b = obj.numbers.a;

//Question7
const add = (a,b) => {
    if(a === 0) a = 0
    else {
        a = a || 10    
    }
    if(b === 0) b = 0
    else {
        b = b || 10    
    }
    return a+b
  }