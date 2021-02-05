class Parent {
    constructor() {
        this.fatherName = "James";
    }
}

class Child extends Parent {
    constructor(name) {
        super();
        this.name = name;
    }
    // using function
    getFullName() {
        return this.name + ' ' + this.fatherName;
    }
}

const baby = new Child("Lubaba");
const baby2 = new Child("Muyeen");
console.log(baby);
console.log(baby2);
console.log(baby.getFullName());