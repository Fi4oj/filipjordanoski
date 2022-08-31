$("document").ready(function () {
  var x = 0;
  var y = 50;
  setInterval(function () {
    if (x >= 0 && x <= 50 && y <= 50 && y > 0) {
      x += 1;
      y -= 1;
    } else if (x >= 50 && x <= 100 && y >= 0 && y < 50) {
      x += 1;
      y += 1;
    } else if (x >= 50 && x <= 100 && y >= 50 && y < 100) {
      x -= 1;
      y += 1;
    } else if (x <= 50 && x >= 0 && y <= 100 && y > 50) {
      x -= 1;
      y -= 1;
    }
    $("body").animate(
      {
        backgroundPositionX: x + "%",
        backgroundPositionY: y + "%",
      },
      200
    );
  }, 1);
  var starNum = 0;
  var starSize;
  setInterval(function () {
    $("#stars").append("<span class='star' dataNum='" + starNum + "'></span");
    starSize = randomInteger(1, 9) / randomInteger(1, 7);
    $("head").append(
      "<style> [dataNum='" +
        starNum +
        "'].star::before {width: " +
        starSize * 50 +
        "px} </style>"
    );
    $(".star[dataNum='" + starNum + "']").css({
      width: starSize,
      height: starSize * 0.75,
      boxShadow:
        "0 0 " +
        starSize * 2 +
        "px " +
        starSize +
        "px rgb(" +
        randomInteger(1, 255) +
        "," +
        randomInteger(1, 255) +
        ", " +
        randomInteger(1, 255) +
        ")",
      top: randomInteger(-10, 110) + "%",
      left: randomInteger(-10, 110) + "%",
      transform: "rotate(" + randomInteger(1, 360) + "deg)",
    });
    var starSpeed;
    if (starSize <= 4) {
      starSpeed = randomInteger(6000, 10500);
    } else {
      starSpeed = randomInteger(2500, 3500);
    }
    $(".star[dataNum='" + starNum + "']").transition(
      {
        rotate: "+=" + randomInteger(1, 10) + "deg",
        x: -2500,
        y: 0,
      },
      {
        duration: starSpeed,
        easing: "linear",
        queue: false,
        complete: function () {
          $(this).remove();
          if (limit < starNum) {
            cutIt = 0;
            for (cutIt; cutIt < starNum - 11; cutIt++) {
              $("head > style:contains([dataNum='" + cutIt + "'])").remove();
            }
            cutIt += 11;
            limit += 11;
          }
        },
      }
    );
    starNum += 1;
  }, randomInteger(700, 1200));
});

var cutIt;
var limit = 11;
function randomInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
