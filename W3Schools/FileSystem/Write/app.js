const fs = require('fs')

// Create or Open a file
fs.open('test.txt','w',(error, file)=>{
    if(error) throw err;
    console.log("openend")
})

// Create or write new contents
fs.writeFile('test.txt', 'Hello content!', function (err) {
    if (err) throw err;
    console.log('Saved!');
});

// Create or Append to existing
fs.appendFile('test.txt', 'Hello content!', function (err) {
    if (err) throw err;
    console.log('Saved!');
});