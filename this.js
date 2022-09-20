class Student{
    static count=0
    constructor(n,a,p,m){
     this.name=n
     this.age=a
     this.phoneNum=p
     this.boardMarks=m
     Student.count=Student.count+1
    }

    ifEligible(){
        if(this.boardMarks>40){
            console.log(`${this.name} is eligible`)
        }else{
            console.log(`${this.name} is not eligible`)

        }
    }
    eligibleForPlacement(marks){
   return (age)=>{
    if(this.boardMarks>marks && this.age>age){
        return true
    }else{
        return false
    }

   }
    }
    printStudent(){
        console.log(Student.count)
    }
}

var stud1=new Student('Yash', 20, 773882728, 70)
var stud2=new Student('Shreya', 19, 773992728, 38)
var stud3=new Student('Guruwir', 19, 7737882728, 35)
var stud4=new Student('Vaibhav', 21, 773342728, 51)
var stud5=new Student('Imran', 19, 773882866, 65)

stud3.ifEligible()
stud3.printStudent()

console.log(stud1.eligibleForPlacement(50)(18))
console.log(stud2.eligibleForPlacement(50)(18))
console.log(stud3.eligibleForPlacement(50)(18))
console.log(stud4.eligibleForPlacement(50)(18))
console.log(stud5.eligibleForPlacement(50)(18))




