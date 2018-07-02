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
  // This is the code for headache
      if (yes === 0){
        $("#headache").find("span").text("0/10 correct.");
      } else if (yes === 1){
        $("#headache").find("span").text("1/10 correct");
      } else if (yes === 2){
        $("#headache").find("span").text("2/10 correct");
      } else if (yes === 3){
        $("#headache").find("span").text("3/10 correct");
      } else if (yes === 4){
        $("#headache").find("span").text("4/10 correct");
      } else if (yes === 5){
        $("#headache").find("span").text("5/10 correct");
      } else if (yes === 6){
        $("#headache").find("span").text("6/10 correct");
      } else if (yes === 7){
        $("#headache").find("span").text("7/10 correct");
      } else if (yes === 8){
        $("#headache").find("span").text("8/10 correct");
      } else if (yes === 9){
        $("#headache").find("span").text("9/10 correct");
      } else {
        $("#headache").find("span").text("10/10 correct. Congratulations!");
      }

}
