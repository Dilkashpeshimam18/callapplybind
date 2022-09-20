//currying using bind
let multiply=function(x,y){
    console.log(x*y)
}
let multiplyByTwo=multiply.bind(this,2)
multiplyByTwo(3)


//currying using closure
let add=function(x){
    return function(y){
        console.log(x+y)
    }
}

let add2= add(3)
add2(4)