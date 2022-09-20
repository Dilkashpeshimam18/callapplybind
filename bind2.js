var Student={age:20}



function age(){

 return this.age

}



var print=age.bind(Student)

console.log(print())