var obj1={value:5}



function a(x,y,z){

 return this.value+x+y+z

}





var print=a.bind(obj1)



console.log(print(1,2,3))