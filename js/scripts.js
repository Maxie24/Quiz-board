//Business logic //
$(document).ready(function () {
  $("#btn1").click(function() {
    var nameOne = $("input#name1").val();
    var nameTwo = $("input#name2").val();

  })
})




//U.I Logic//
$(document).ready(function () {
    $("#quiz").submit(function (event) {
        event.preventDefault();
        var quiz1= $("input:radio[name=Q1]:checked").val();
        var quiz2 = $("input:radio[name=Q2]:checked").val();
        var quiz3= $("input:radio[name=Q3]:checked").val();
        var quiz4 = $("input:radio[name=Q4]:checked").val();
        var quiz5= $("input:radio[name=Q5]:checked").val();



        var correct = 0;
        if (quiz1=="Style"){
          correct++;
        }
        if (quiz2=="Single quotes"){
          correct++;
        }
        if (quiz3=="scripting"){
          correct++;
        }
        if (quiz4=="To add interactivity on HTML"){
          correct++;
        }
        if (quiz5=="semi-colon"){
          correct++;
        }
        var percent = correct/5*100
        if (percent >69){
          remark="EXELLENT!"
        }
        if(percent >49){
          remark="FAIR!"

        }
        else {
          remark="Are you really a student here?!!"
        };

      document.getElementById("correct").innerHTML = "You scored " + correct +" out of 5 questions correct."
    document .getElementById("results").innerHTML = remark;
    });

});
