function boilWater() {
    return new Promise((resolve) => {
        console.log("Step 1: Start boiling water...");
        setTimeout(() => {
            resolve("Step 1: Water is boiled");
        }, 3000); 
    });
}

function brewCoffee() {
    return new Promise((resolve) => {
        console.log("Step 2: Brewing coffee...");
        setTimeout(() => {
            resolve("Step 2: Coffee is brewed");
        }, 2000); 
    });
}

async function makeCoffee() {
    console.log("Starting coffee process...");

    const waterBoiled = await boilWater();
    console.log(waterBoiled);

    const coffeeBrewed = await brewCoffee();
    console.log(coffeeBrewed);

    console.log("Coffee is ready!");
}

makeCoffee();
