// //1
// const message = "Hello world!";
// console.log(message);

/*Blocking, Synchronous Way*/
// //2
// const fs = require("fs");
// const nestIntro = fs.readFileSync("learn.txt", "utf-8");
// console.log(nestIntro)

// //3
// const Aouthor = "Farshad"
// const nestIntroTitle = `Introduction:\n ${nestIntro}\nCreated on: ${Date.now()}\nWritten by ${Aouthor}`;
// fs.writeFileSync('learn.txt', nestIntroTitle);
// console.log('file written');

// /* Why it will rewrite over the file? Answer: ** To avoid rewriting, we need to  utilize "fs.appendFileSync" 

// const Aouthor = "Farshad";
// const nestIntroTitle = `Introduction:\n ${nestIntro}\nCreated on: ${Date.now()}\nWritten by ${Aouthor}`;
// fs.writeFileSync('data.txt', nestIntroTitle);
// fs.appendFileSync ("data.txt", nestIntroTitle);
// console.log("file written");

// /*Non-Blocking, Asynchronous Way*/
const fs = require('fs');

// //1
// fs.readFile('learn.txt', 'utf-8' ,(err, data) => {
    // console.log(data);
// });
// console.log("*** >>>>>> First read this file");

// fs.readFile('question.txt', 'utf-8' ,(err, data) =>{
//     console.log(data);
// })

// fs.readFile('answer.txt', 'utf-8', (err,data)=>{
//     console.log(data);
// })

// //Call-back hell
fs.readFile('question.txt', 'utf-8', (err, data1)=>{
    if (err) return console.log("Error");

    fs.readFile(`${data1}.txt`, 'utf-8', (err, data2)=>{
        console.log(data1);
        fs.readFile('answer.txt', 'utf-8', (err, data3)=>{
            console.log(data3);
            fs.appendFile('data.txt', `\n${data1}\n${data3}` ,'utf-8', err => {
                console.log("Your file has been successfully written.");
            });
        });
    });
});


// //2
const newMessage = "\n\n I would master Node.js within a few next weeks." 
fs.appendFile('learn.txt', newMessage ,(err) => {
    if (err)
        throw err;
    console.log("Message has been appended successfully.");
});
  

 