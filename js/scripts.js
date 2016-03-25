$(document).ready(function() {
  $("form#vacation").submit(function(event) {

   var season =$('#season').val();
   var region =$('#region').val();
   var budget =$('#budget').val();
   var grid =$('#grid').val();

   if (season === "spring" && region === "North America" && budget === "expensive"
&& grid === "offgrid") {
     var result = "rock"
    $("#recomendation").empty().text(result);
    $(".results").show();
  }
event.preventDefault();

});
});
