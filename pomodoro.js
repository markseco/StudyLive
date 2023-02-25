let workTime = 25;
let breakTime = 5;

let seconds = "00"

// display
window.onload = () => {
    document.getElementById('minutes').innerHTML = workTime;
    document.getElementById('seconds').innerHTML = seconds;

    
}

// start timer
function start() {
    
    // change the time
    seconds = 59;

    let minutes = workTime - 1;
    let minutesBreak = breakTime - 1;

    breakCount = 0;

    // countdown
    let timerFunction = () => {
        //change the display
        document.getElementById('minutes').innerHTML = minutes;
        document.getElementById('seconds').innerHTML = seconds;

        // start
        seconds = seconds - 1;

        if(seconds === 0) {
            minutes = minutes - 1;
            if(minutes === -1 ){
                if(breakCount % 2 === 0) {
                    // start break
                    minutes = minutesBreak;
                    breakCount++

                }else {
                    // continue work
                    minutes = workTime;
                    breakCount++

                }
            }
            seconds = 59;
        }
    }

    // start countdown
    setInterval(timerFunction, 1000); // 1000 = 1s
}