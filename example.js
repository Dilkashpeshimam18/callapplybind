var obj1={nums:5}



function a(x){

 return this.nums+x

}



console.log(a.call(obj1,5))

function b(x,y,z){

    return this.nums+x+y+z
   
   }
   
   
   
   var arr=[2,3,5]
   
   console.log(b.apply(obj1,arr))

   

function c(x,y,z){

    return this.nums+x+y+z
   
   }
   
   
   
   
   
   var print=c.bind(obj1)
   
   
   
   console.log(print(1,2,3))