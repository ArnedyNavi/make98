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

        $("#menu").on("click", ".launch", function (event) {
            console.log($(this).data("launch"));
            var targetId = $(this).data("launch");
            var title = $(this).data("title");
            var imgUrl = $(this).data("icon");
            var url = $(this).data("url");
            if (!isWindowOpen(targetId)) {
              createProgram(targetId, title, imgUrl, url);
              $("#menu").hide();
              $("#startbutton").removeClass("startbutton-on");
            } else {
              openWindow(targetId);
              $("#menu").hide();
              $("#startbutton").removeClass("startbutton-on");
              console.log("program already exists... opening window");
            }
          });
        
          $(".item").each(function () {
            if ($(this).data("icon")) {
              var icon = $(this).data("icon");
              $(this).css("background-image", "url(" + icon + ")");
            } else {
              console.log("no icon supplied");
            }
          });
        
          $(".dropdown-item").each(function () {
            if ($(this).data("icon")) {
              var icon = $(this).data("icon");
              $(this).css("background-image", "url(" + icon + ")");
            } else {
              console.log("no icon supplied");
            }
          });
    })
});

var startStatus = false;
function modifyStart() {
    if (startStatus) {
        var element = document.getElementById("startButton");
        element.classList.add("startbutton-unclicked");
        element.classList.remove("startbutton-clicked");
        startStatus = false;
        document.getElementById('menu').style.display = 'none';
    }
    else {
        var element = document.getElementById("startButton");
        element.classList.add("startbutton-clicked");
        element.classList.remove("startbutton-unclicked");
        startStatus = true;
        document.getElementById('menu').style.display = 'block';
    }
}

