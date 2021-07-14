/**
 * @returns 
 * Fast type of model
 */
function getName(){
    return "Farhan Tanvir";
}
/**
 * @returns 
 * Secnd type of model
 */
const getAge = () =>{
    return "25 age";
}
/**
 * @returns 
 * variable
 */
const cgpa = 3.53;

/**
 * @returns 
 * Single model exports
 */
// exports.getName = getName;
// exports.getAge = getAge;
// exports.result = cgpa;

/**
 * @returns 
 * All module exports
 */
module.exports = {
    getName,
    getAge,
    cgpa
}