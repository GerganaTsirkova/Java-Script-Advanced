function timer() {
    let minutes = $("#minutes");
    let seconds = $("#seconds");
    let hours = $("#hours");
    let start = $("#start-timer");
    let stop = $("#stop-timer");
    let sec = 0;
    let interval = null;
    start.on('click',funcStart);
    stop.on('click',funcStop);

    function funcStart() {
        if(interval === null){
            interval = setInterval(increment,1000);
        }
        function increment() {
            sec++;
            hours.text(('0' + Math.floor(sec / 60/60)).slice(-2));
            minutes.text(('0' + Math.floor(sec / 60)%60).slice(-2));
            seconds.text(('0' + Math.floor(sec % 60)).slice(-2));
        }
    }

    function funcStop() {
        clearInterval(interval);
        interval = null;
    }
}