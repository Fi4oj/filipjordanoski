$(window).on("load", function () {
  $(".loader-wrapper").fadeOut("slow", function () {
    $(this).remove();
  });
});

$("document").ready(function () {
  let x = 0;
  let y = 50;

  const updateBackgroundPosition = () => {
    if (x >= 0 && x <= 50 && y <= 50 && y > 0) {
      x += 0.1;
      y -= 0.1;
    } else if (x >= 50 && x <= 100 && y >= 0 && y < 50) {
      x += 0.1;
      y += 0.1;
    } else if (x >= 50 && x <= 100 && y >= 50 && y < 100) {
      x -= 0.1;
      y += 0.1;
    } else if (x <= 50 && x >= 0 && y <= 100 && y > 50) {
      x -= 0.1;
      y -= 0.1;
    }

    x = Number(x.toFixed(2));
    y = Number(y.toFixed(2));

    $("body").css({
      backgroundPositionX: x + "%",
      backgroundPositionY: y + "%",
    });

    requestAnimationFrame(updateBackgroundPosition);
  };

  requestAnimationFrame(updateBackgroundPosition);

  function randomInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  let starNum = 0;
  let starSize;
  let starSpeed;

  function createStar() {
    starSize = randomInteger(1, 9) / randomInteger(1, 7);
    let starId = "star" + starNum;

    $("#stars").append("<span id='" + starId + "' class='star'></span");

    $("#" + starId).css({
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

    if (starSize <= 4) {
      starSpeed = randomInteger(6000, 10500);
    } else {
      starSpeed = randomInteger(2500, 3500);
    }

    $("#" + starId).transition(
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
        },
      }
    );

    starNum += 1;
  }

  let lastUpdate = performance.now();

  function animate(time) {
    let deltaTime = time - lastUpdate;

    if (deltaTime >= 1000) {
      createStar();
      lastUpdate = time;
    }

    requestAnimationFrame(animate);
  }

  requestAnimationFrame(animate);
});
