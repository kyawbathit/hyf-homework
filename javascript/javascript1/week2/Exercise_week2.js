// Account balance 
function calBalance (balance) {
  if (balance <= 0 ) {
  return (`Please deposit some money.`);
} else if (balance > 0 && balance <= 1000) {
  return (`Your balance is looking okay.`);
} else if (balance > 1000 && balance <= 3000) {
  return (`Your balance is looking good.`);
} else if (balance > 3000 && balance <= 10000) {
  return (`Your balance is looking fantastic.`);
} else if (balance > 10000) {
  return (`Your balance is amazing.`);
} 
};
console.log(calBalance(50000));

// Circle Area
function getCircleArea (radius) {
    return Math.PI * radius * radius;
}
console.log(getCircleArea(250));

// Celcius to Fahrenheit
function celciusToFahrenheit (celcius) {
    return celcius * 9/5 + 32;
  }
console.log(celciusToFahrenheit(37.6));

//  Scope Test
const global = 'global';
function scopeTest() {
    console.log(functionScope);
    console.log(global);
    const functionScope = 'functionScope'; // can't access  variable above

    function tester() {
        console.log(global);

        const testerVariable = 'testerVariable'; // can't access  variable above
    }

    tester();
    console.log(testerVariable);
}

scopeTest();

// versus
const global = 'global';
const functionScope = 'functionScope'; //globel scope
const testerVariable = 'testerVariable';
        function scopeTest() {
    console.log(functionScope);
    console.log(global);
        function tester() {
    console.log(global);
  }
  tester();
    console.log(testerVariable);
}
 scopeTest();


//  For loop to repeat a string
function repeatString(str, num) {
    let repeatedStr = "";
  for (let i = 0; i < num; i++) {
   repeatedStr += str;
  }
    return repeatedStr;
  }
  console.log (repeatString('Hi,', 4)) // 'Hi, Hi, Hi, Hi'

  // do while to repeat the same string
  function repeatString(str, num) {
    let repeatedStr = "";
    while (num > 0) {
   repeatedStr += str;
   num--;
  }
    return repeatedStr;
  }
  console.log (repeatString('Hi,', 4)) 

  // Send email to the recepients

const emailAdds = ['benjamin@gmail.com','peter@gmail.com','hans@gmail.com','ahmad@gmail.com','sana@gmail.com', 'virgeen@gmail.com','mohammed@gmail.com'];

function sendEmailTo (recepient) {
  for (let recepient of emailAdds) {
    // for (let i = 0; i < emailAdds.length; i++) 
    //   let recepient = emailAdds[i];
      console.log('email sent to ' + recepient)
  }
}
sendEmailTo();
