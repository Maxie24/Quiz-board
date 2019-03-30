// U I LOGIC
$(document).ready(function check() {
  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;

  $("form#quiz").submit(function(event) {
    var a = parseInt($("input:radio[name=choice1]:checked").val());
    var b = parseInt($("input:radio[name=choice2]:checked").val());
    var c = parseInt($("input:radio[name=choice3]:checked").val());
    var d = parseInt($("input:radio[name=choice4]:checked").val());
    var e = parseInt($("input:radio[name=choice5]:checked").val());
    event.preventDefault();

    //BUSINESS LOGIC
    var total = (a + b + c + d + e);
    var percent = ((total / 25) * 100);

    if (percent > 79) {
      $("#correct").text( " You scored " + percent + "%. " + "Good Work!! Keep It Up Smart Brain");
    } else if (percent > 59 && percent < 79) {
      $("#correct").text(" You scored " + percent + "%. " + "Fair!! There`s still room for improvement");
    } else if (percent > 39 && percent < 59) {
      $("#correct").text(" You scored " + percent + "%. " + "This is below average but still not bad.");
    } else if(percent >0 && percent<20) {
      $("#correct").text(" You scored " + percent + "%. " + "Poor results!! Read extensively.");
    }else if(percent === 0){
      $("#correct").text("You scored "+ percent+ " %. " + "Are you really a student here cause this is a joke!! See me! ");
    } else{
      $("#correct").text("Please answer all questiions")
    };
      $("#hidden").fadeToggle();
      event.preventDefault();
  });
});
