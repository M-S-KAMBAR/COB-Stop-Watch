let displaytime = document.querySelector('.displaytime');
let spbtn = document.getElementById('spbtn');
let stbtn = document.getElementById('stbtn');
let rbtn = document.getElementById('rbtn');

let msec =0;
let sec = 0;
let min = 0; 

let timerId = null;

stbtn.addEventListener('click',function(){
    if(timerId !==null){
        clearInterval(timerId);
    }
    timerId=setInterval(stT,10);

});

spbtn.addEventListener('click',function(){
    clearInterval(timerId);
});

rbtn.addEventListener('click',function(){
    clearInterval(timerId);
    displaytime.innerHTML = `00:00:00`;

    msec=sec = min =0o0;
});

function stT(){
    msec++;
    if(msec==60){
        msec=0;
        sec++;
        if(sec==60){
            sec=0;
            min++;
        }
    }
    let msecString = msec < 10 ? `0${msec}` : msec;
    let secString = sec < 10 ? `0${sec}` : sec;
    let minString = min < 10 ? `0${min}` : min;

    displaytime.innerHTML=`${minString} : ${secString} : ${msecString}`;
    

}











