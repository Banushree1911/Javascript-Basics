function startCountdown(seconds) {
    let counter = seconds;

    const intervalId = setInterval(() => {
        console.log(counter);
        counter--;

        if (counter < 0) {
            clearInterval(intervalId);
            console.log("Countdown finished!");
        }
    }, 1000);
}

startCountdown(5);  
