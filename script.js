let startTime =0;
let updatedTime=0;
let difference=0;
let timerInterval;
let isrunning = false


const display = document.getElementById("display");
const startBtn= document.getElementById("start");
const stopBtn= document.getElementById("stop");
const resetBtn= document.getElementById("reset")

// display and format time !
function updateDisplay() {
    const time = new Date(difference);

    let hours = time.getUTCHours().toString().padStart(2,"0")
    let minutes = time.getUTCMinutes().toString().padStart(2,"0")
    let seconds= time.getUTCSeconds().toString().padStart(2,"0")
    let milliseconds = Math.floor(time.getUTCMilliseconds())
    .toString()
    .padStart(3, "0");

    
    display.textcontent= `${hours}:${minutes}:${seconds}:${millisecond}`;   
}

// Start the timer
function startTimer() {
    if (!isrunning) {
        startTime= Date.now() - difference;
        timerInterval = setInterval(() => {
            difference = Date.now() - startTime
            updateDisplay();
            
        // }, 10; updates every 10 milliseconds
        isrunning = true
    {
        function stopTimer(){
            clearInterval(timerInterval);
            isrunning=false
        
        }
        function resetTimer(){
            clearInterval(timerInterval);
            isrunning =false
            difference = 0
            updatedDisplay();

            
            
        }
        // button event listeners!
        startBtn.addEventListener("click",startTimer);
        stopBtn.addEventListener("click",stopTimer);
        resetBtn.addEventListener("click",resetTimer);


        updateDisplay();
    
