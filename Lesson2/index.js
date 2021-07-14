const fs = require('fs');

// fs.writeFile('demo.text', "The is demo fs write file create update", function(err){
//     if (err) {
//         console.log(err);
//     } else {
//         console.log("success");
//     }
// });

/**
 * 
 */
// fs.appendFile('demo.text', ".Add a new line hear", function(err){
//     if (err) {
//         console.log(err);
//     } else {
//         console.log("success");
//     }
// });

/**
 * 
 */
fs.readFile('demo.text', 'utf-8', (err, data) => {
    if (err) {
        console.log(err);
    } else {
        console.log(data);
    }
});