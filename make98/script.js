function updateClock() {
    var currentTime = dayjs().format("HH:mm A");
    $(".clock").html(currentTime);
}

function loadingBar(callback) {
    var width = 0;
    var load = setInterval(function() {
        width += 1
        if (width <= 100) {
            document.getElementById("loading").style.backgroundColor = 'white';
            document.getElementById("loading").style.width = width + '%';
        } else{
            clearInterval(load);
            callback();
        }
    }, 10)
}

$(document).ready(function () {    
    loadingBar(function() {
        setInterval(function() {
            updateClock();
        }, 1000);
        document.getElementById('screen').style.display = 'block';
        document.getElementById('loadingScreen').style.display = 'none';
    })
});

var startStatus = false;
function modifyStart() {
    if (startStatus) {
        var element = document.getElementById("startButton");
        element.classList.add("startbutton-unclicked");
        element.classList.remove("startbutton-clicked");
        startStatus = false;
    }
    else {
        var element = document.getElementById("startButton");
        element.classList.add("startbutton-clicked");
        element.classList.remove("startbutton-unclicked");
        startStatus = true;
    }
}
