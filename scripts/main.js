$("document").ready(function () {
  $("#navigation ul li").hide().slideDown(1000);
  $("#hello").hide().fadeIn(850);
  $(".pInfo, .skillContainer, #hideAll, #showAll").hide();

  $("#aboutMeButton").on("click", function () {
    $(".skillContainer, #hello, #hideAll").fadeOut();
    retextillate("#pProjects", "none", "fadeOutDown", "out");
    $(".aboutMeP").show();
    retextillate(".aboutMeP", "bounceIn", "none", "in");
  });
  $("#projectsButton").on("click", function () {
    $("#hello, .skillContainer").fadeOut();
    retextillate(".aboutMeP", "none", "fadeOutDown", "out");
    $("#pProjects").show();
    $("#hideAll").slideDown();
    retextillate("#pProjects", "bounceIn", "none", "in");
  });
  $("#skillsButton").on("click", function () {
    $("#hello, #hideAll").fadeOut();
    retextillate(".pInfo", "none", "fadeOutDown", "out");
    $(".skillContainer").slideDown();
  });

  $("#hideAll").on("click", function () {
    $("header, #main").fadeOut("slow");
    $("#showAll").fadeIn(1200);
  });

  $("#showAll").on("click", function () {
    $(this).fadeOut(300);
    $("header, #main").fadeIn("slow");
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
