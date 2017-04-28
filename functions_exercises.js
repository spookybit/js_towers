const readline = require('readline');

function addNumbers(sum, numsLeft, callback){
  const reader = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

  if(numsLeft === 0){
    callback(sum);
  } else {
    const ans = reader.question('Enter a number', input => {
      sum = sum + parseInt(input);
      reader.close();
      return addNumbers(sum, numsLeft-1, callback);
    });
  }
}

addNumbers(0, 3, sum => console.log(`Total Sum: ${sum}`));
