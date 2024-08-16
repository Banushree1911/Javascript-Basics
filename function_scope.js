function outerFunction() {
    var outerVar = "I'm outside!";  
    function innerFunction() {
        var innerVar = "I'm inside!"; 
        console.log(outerVar); 
        console.log(innerVar); 
    }

    innerFunction(); 
    console.log(outerVar); 
}

outerFunction();  