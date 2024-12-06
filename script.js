let [hours,mnutes,seconds]=[0,0,0];
let displayTime=document.getElementById("displayTime")
let timer;
function stopWatch(){
    seconds++;
    if(seconds==60){
        seconds=0;
        mnutes++;
        if(mnutes==60){
            mnutes=0;
            hours++;
        }
    }

    let h=hours<10?"0"+hours:hours;
    let m=mnutes<10?"0"+mnutes:mnutes;
    let s=seconds<10?"0"+seconds:seconds;

    displayTime.innerHTML=h+":"+m+":"+s
}

function watchSTart() {
  
    timer=setInterval(() => {
        stopWatch()
    }, 1000);
}

function watchSTop(){
    clearInterval(timer)
}
function watchReset(){
    [hours,mnutes,seconds]=[0,0,0];
    clearInterval(timer)
    displayTime.innerHTML="00:00:00"
}