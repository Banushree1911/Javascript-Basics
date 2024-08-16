function outerFunction() {
    const outerVariable = "Hello";

    function innerFunction() {
        const innerVariable = "Banushree";
        console.log(`${outerVariable} ${innerVariable}`);
    }

    innerFunction();
}

outerFunction();
