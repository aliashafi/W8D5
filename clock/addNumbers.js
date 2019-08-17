
const readline = require('readline'); 

const reader = readline.createInterface({ 
  input: process.stdin, 
  output: process.stdout }); 


function addNumbers(sum, numsLeft, completionCallback) {
  if (numsLeft > 0){
    reader.question(`Enter a number: `, (res) => {
      sum += parseInt(res);
      console.log(`Sum: ${sum}`);
      numsLeft -= 1;
      addNumbers(sum, numsLeft, completionCallback);
    });
  }
  else {
  reader.close();
  return completionCallback(sum);
}}

function completionCallback(sum){
  console.log(`Total Sum: ${sum}`);
}

console.log(addNumbers(0,3, completionCallback));
////////

// function teaAndBiscuits() { 
//   reader.question('Would you like some tea?', function (res) { 
//     console.log(`You replied ${res}.`); 


//     reader.question('Would you like some biscuits?', function (res2) { 
//       console.log(`You replied ${res2}.`); 
      
//       const first = (res === 'yes') ? 'do' : 'don\'t'; 
//       const second = (res2 === 'yes') ? 'do' : 'don\'t'; 

//       console.log(`So you ${first} want tea and you ${second} want biscuits.`); 
//       reader.close(); 
//     }); 

//   }); 
// }