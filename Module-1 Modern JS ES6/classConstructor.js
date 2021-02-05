class Student {
    constructor(sId, sName) {
        this.id = sId;
        this.name = sName;
        // by default all are same institute
        this.university = "AIUB";
    }
}
const student1 = new Student(10, "Samiul");
const student2 = new Student(12, "Chaity");
const student3 = new Student(22, "Hannan");
console.log(student1, student2, student3);
// console.log(student1.name, student2.id, student3.university);