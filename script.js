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

//Part 3: Using Destructuring 

const {name, courses} = student;
console.log("Name Destructured:", name);
console.log("Courses Destructured:", courses);

const scores = [90, 95, 85];
const [score1, score2] = scores;
console.log("First 2 scores:", score1, score2);

// Part 4: Spread Operator

const clonedStudent = { ...student, graduationYear: 2027};
console.log("Cloned Student:", clonedStudent);

const newCourses = ["Web Programming", "Operating Systems", "Technical Reading and Writing Skills"];
const allCourses = [...student.courses, ...newCourses];
console.log("All Courses:", allCourses);