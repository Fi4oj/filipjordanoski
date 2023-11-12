$("document").ready(function () {
  $("#navigation ul li").hide().slideDown(1000);
  $("#hello").hide().fadeIn(850);

  let bounceInOneElement = 1;
  $("#aboutMeButton").on("click", function () {
    $("#skills, #hello, #hideAll").fadeOut();
    $(
      ".indexDots, .nextB, .previousB, .theButton, .bouncez" +
        bounceInOneElement
    ).hide();
    $(".aboutMeP, .pContainer").show();
    retextillate(".aboutMeP", "bounceIn", "none", "in");
  });

  $("#projectsButton").on("click", function () {
    $("#hello, #skills").fadeOut();
    retextillate(".aboutMeP", "none", "fadeOutDown", "out");
    $(
      "#projects, .pContainer, .indexDots, .nextB, .previousB, .theButton, .bouncez" +
        bounceInOneElement
    ).show();
    $("#hideAll").slideDown();
    retextillate(
      ".bouncez" + bounceInOneElement + "",
      "bounceIn",
      "none",
      "in"
    );
  });

  $("#skillsButton").on("click", function () {
    retextillate(".aboutMeP", "none", "fadeOutDown", "out");
    $("#hello, #hideAll, #projects").fadeOut();
    $("#skills").fadeIn();
  });

  $("#hideAll").on("click", function () {
    $("header, #main").fadeOut("slow");
    $("#showAll").fadeIn(1200);
  });

  $("#showAll").on("click", function () {
    $(this).fadeOut(300);
    $("header, #main").fadeIn("slow");
  });

  let tabs = $(".projectsTab");
  for (let i = 0; i < tabs.length; i++) {
    $(tabs[i]).append(
      "<div id='buttonHandler'><div class='indexDots'></div><button class='previousB'><</button><button class='nextB'>></button></div>"
    );
    $(tabs[i]).css({
      left: i * 100 + "%",
    });
  }
  for (let i = 0; i < tabs.length; i++) {
    $(".indexDots").append("<span class='indexDot' numberId=" + i + "></span>");
  }

  let indexDots = $(".indexDot");

  $(indexDots[0]).css("background", "#03e9f4");

  let currentPosition = 0;

  indexDots.on("click", function (event) {
    currentPosition = -Math.abs(event.target.getAttribute("numberid"));
    for (var i = 0; i < tabs.length; i++) {
      $(tabs[i]).animate({
        left: (currentPosition + i) * 200 + "%",
      });
    }
    $(indexDots).css("background", "transparent");
    $(".indexDot[numberid='" + Math.abs(currentPosition) + "']").css(
      "background",
      "#03e9f4"
    );
    bounceInOneElement = Number(event.target.getAttribute("numberid")) + 1;
  });

  $(".nextB").on("click", function () {
    currentPosition--;
    if (currentPosition <= -tabs.length + 1) {
      currentPosition = -tabs.length + 1;
    }
    for (var i = 0; i < tabs.length; i++) {
      $(tabs[i]).animate({
        left: (currentPosition + i) * 200 + "%",
      });
    }
    $(indexDots).css("background", "transparent");
    $(".indexDot[numberid='" + Math.abs(currentPosition) + "']").css(
      "background",
      "#03e9f4"
    );
    bounceInOneElement = currentPosition * -1 + 1;
  });

  $(".previousB").on("click", function () {
    currentPosition++;
    if (currentPosition >= 0) {
      currentPosition = 0;
    }
    for (var i = 0; i < tabs.length; i++) {
      $(tabs[i]).animate({
        left: (currentPosition + i) * 200 + "%",
      });
    }
    $(indexDots).css("background", "transparent");
    $(".indexDot[numberid='" + Math.abs(currentPosition) + "']").css(
      "background",
      "#03e9f4"
    );
    bounceInOneElement = currentPosition * -1 + 1;
  });
});

function retextillate(element, in_effect = "", out_effect = "", type) {
  $(element).textillate({
    loop: true,
    autoStart: false,
    in: {
      effect: in_effect,
      delay: 0.7,
      shuffle: true,
    },
    out: {
      effect: out_effect,
      reverse: true,
      delay: 0.5,
      shuffle: true,
      callback: function () {
        $(element).css("opacity", 0);
      },
    },
  });

  if (type == "in") {
    $(element).textillate("in");
    $(element).css("opacity", 1);
  } else if (type == "out") {
    $(element).textillate("out");
  } else if (type == "both") {
    $(element).textillate("in");
    setTimeout(function () {
      $(element).textillate("out");
    }, 1000);
  }
}
