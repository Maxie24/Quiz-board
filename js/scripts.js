// U I LOGIC
$(document).ready(function check() {
  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;

  $("well").submit(function(event) {
    event.preventDefault();
    var a = parseInt($("input:radio[name=choice1]:checked").val());
    var b = parseInt($("input:radio[name=choice2]:checked").val());
    var c = parseInt($("input:radio[name=choice3]:checked").val());
    var d = parseInt($("input:radio[name=choice4]:checked").val());
    var e = parseInt($("input:radio[name=choice5]:checked").val());
    });
});
