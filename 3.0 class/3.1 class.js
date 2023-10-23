class Myclass{
    constructor(name,age){
        this.name=name
        this.age=age
    }
    printdetail(){
        console.log("Name: ",this.name)
        console.log("Age: ",this.age)

    }
}

const obj1=new Myclass("karim",18)
console.log(obj1.name)
console.log(obj1.age)
obj1.printdetail()