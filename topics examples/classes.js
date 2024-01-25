class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    set setName(name) {
        this.name = name;
    }
    get getName() {
        return this.name;
    }
    display() {
        console.log("------------------------")
        for (const [key, value] of Object.entries(this)) {
            console.log(key + " : " + value);
        }
        console.log("------------------------")
    }

}

class Student extends Person {
    constructor(name, age) {
        super(name, age)
    }
}

const abid = new Student("Abidullah", 20);
console.log(abid.getName);
abid.display();