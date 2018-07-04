$(document).ready(function(){
    $(".question [type='radio']").on("click", function(e){
      var this_button = $(this),
        question = this_button.closest(".question"),
        next_question = question.next(".question");

        if(next_question.length > 0){
          next_question.addClass("active");
          scrollToElement(next_question);
        } else{
          // we're done. show me the results
          calculateResults();
          $(".result").addClass("active")
          scrollToElement($(".result"));
        }
    });
});

function scrollToElement(element){
  $("html, body").animate({
    scrollTop: element.offset().top
  });
}


function calculateResults(){
  var yes = $("[value='yes']:checked").length,
  no = $("[value='no']:checked").length;
  // This is the code for yesno

      if (yes === 0){
        $("#yesno").find("span").text("Incorrect");
      } else if (yes === 1){
        $("#yesno").find("span").text("Correct");
      } else if (yes === 2){
        $("#yesno").find("span").text("2/10 correct");
      } else if (yes === 3){
        $("#yesno").find("span").text("3/10 correct");
      } else if (yes === 4){
        $("#yesno").find("span").text("4/10 correct");
      } else if (yes === 5){
        $("#yesno").find("span").text("5/10 correct");
      } else if (yes === 6){
        $("#yesno").find("span").text("6/10 correct");
      } else if (yes === 7){
        $("#yesno").find("span").text("7/10 correct");
      } else if (yes === 8){
        $("#yesno").find("span").text("8/10 correct");
      } else if (yes === 9){
        $("#yesno").find("span").text("9/10 correct");
      } else {
        $("#yesno").find("span").text("10/10 correct. Congratulations!");
      }

}
