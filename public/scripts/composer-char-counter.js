//___________________jQuery: counting ++ colours______________

$(document).ready(function(){
    $(".new-tweet textarea").on('keyup',function() {
    var textLength = $('.new-tweet textarea').val().length;
    var result = 140 - textLength;
    console.log(result);
    $(this).siblings(".counter").text(result);

    if(result <= 0){
      $(this).siblings(".counter").css("color", "red");
    } else{
      $(this).siblings(".counter").css("color", "black");
    }
    });

});



// document.getElementsByName("text").onclick = function(event){
//   console.log("you are amaaaazginnng click text")
// }


// document.addEventListener("click", (event) => {
//   console.log(event);
// });