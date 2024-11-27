// Part 1: Student Information

const student = {
        name: " G Hernandez",
        age : 30,
        enrolled: true,
        courses: ["Fundamentals of JavaScript", "Algorithm and Problem Solving", "Database Concept and Design"],
        displayInfo() {
            return '${this.name} is ${this.age} years old.';
        },
        addCourse(course) {
            this.courses.push(course);
        },
        totalCourses() {
            return this.courses.length;
        },
    };

    // Console.log output

console.log(student.name);
console.log(student.age);
console.log(student.courses);
console.log(student.displayInfo());


// Part 2: JSON

const studentJSON = JSON.stringify(student);
console.log("JSON String:", studentJSON);

const parsedStudent = JSON.parse(studentJSON);
console.log("Parsed Object:", parsedStudent);

