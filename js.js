let body = document.querySelector('body');
let elCacheTimer = document.createElement('div');

elCacheTimer.classList += 'cache-timer cache-timer_block';
elCacheTimer.innerHTML = '<div class="cache-timer_container"><svg class="cache-timer_circle"><circle id="ctCircle" r="25" cx="25" cy="25"></circle></svg><span class="cache-timer_time" id="time">00:00</span> <a href="#" onclick="return false;" role="button" class="cache-timer_btn" id="ctBTN"><i class="fas fa-hourglass-end"></i></a></div>';
body.appendChild(elCacheTimer);

function startTimer(duration, display) {
    let timer = duration, minutes, seconds;
    setInterval(function () {
        minutes = parseInt(timer / 60, 10)
        seconds = parseInt(timer % 60, 10);

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        display.textContent = minutes + ":" + seconds;

        if (--timer < 0) {
            timer = duration;
        }
    }, 1000);
}

let ctBTN = document.getElementById('ctBTN');

ctBTN.addEventListener("click",function(e){
    e.preventDefault();

    elCacheTimer.classList.add('on');

    let mins = 60 * 2, display = document.querySelector('#time');
    startTimer(mins, display);

    let aDuration = mins + 1 + 's';

    //document.getElementById("ctCircle").style.WebkitAnimationDuration = aDuration;
    document.getElementById("ctCircle").style.animationDuration = aDuration;

    let ms = (mins * 1000) + 1000;
    setTimeout(location.reload.bind(location), ms);

},false);
