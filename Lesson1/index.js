/**
 * all module call in object
 */
// const student = require('./student');

// console.log(student.getName());
// console.log(student.getAge());
// console.log(student.cgpa);

/**
 * need module call
 */
const {getName, getAge, cgpa} = require('./student');

console.log(getName());
console.log(getAge());
console.log(cgpa);