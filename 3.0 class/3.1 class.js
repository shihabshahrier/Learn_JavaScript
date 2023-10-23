class Myclass {
    constructor(name, age) { // constructor
        this.name = name
        this.age = age
    }
    setName(name) { // method
        this.name = name
    }
    printdetails() { // method
        console.log("Name: ", this.name)
        console.log("Age: ", this.age)

    }
}

const obj1 = new Myclass("karim", 18) // object creation 
console.log(obj1.name)
console.log(obj1.age)
obj1.printdetails()
obj1.setName("Rahim")
obj1.printdetails()