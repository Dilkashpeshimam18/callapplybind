var obj1={value:5}



function a(x){

 return this.value+x

}



console.log(a.call(obj1,5))