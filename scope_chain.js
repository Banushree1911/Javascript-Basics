var globalVariable = "I'm global";

function outerFunction() {
  var outerVariable = "I'm in outer scope";

  function innerFunction() {
    var innerVariable = "I'm in inner scope";
    console.log(innerVariable); 
    console.log(outerVariable); 
    console.log(globalVariable); 
  }

  innerFunction();
}

outerFunction();