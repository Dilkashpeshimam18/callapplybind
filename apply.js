var obj1={value:5}



function a(x,y,z){

 return this.value+x+y+z

}



var arr=[2,3,5]

console.log(a.apply(obj1,arr))