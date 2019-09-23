(function () {
    'use strict';


    class Student {

        constructor(first, last, age, grade) {
            this.first = first;
            this.last = last;
            this.age = age;
            this.grade = grade;
        }
    }
    let a = new Student('bob', 'lbob', 70, 70);
    let b = new Student('bob2', 'lbob2', 71, 71);
    let c = new Student('bob3', 'lbob3', 72, 72);
    let studentArray = [a, b, c];
    function printStudents(fl = true, ...args) {
        if (fl) {
            for (let i = 0; i < args.length; i++) {
                console.log(`${args[i].first} ${args[i].last} ${args[i].age} ${args[i].grade}`);
            }
        } else if (!fl){
            for (let i = 0; i < args.length; i++) {
                console.log(`${args[i].last} ${args[i].first} ${args[i].age} ${args[i].grade}`);
            }
        }

    }
    function cloneStudent(clone) {
       const args = {...clone};
       const {last, first , ...rest} = args;
       const newobj = { 
            first: last,
            last: first,
            rest: rest
        };
       return newobj;
    }
    printStudents(true, ...studentArray);
    printStudents(false, ...studentArray);
    const nc = cloneStudent(a);
    console.log(nc)

}());