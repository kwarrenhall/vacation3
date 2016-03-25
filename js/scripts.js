$(document).ready(function() {
  $("form#vacation").submit(function(event) {

   var party = PartseInt($('#number').val());
   var season =$('#season').val();
   var region =$('#region').val();
   var budget =$('#budget').val();

   if (season === "spring" && region === "North America" && budget === "expensive"
) {
     var result = "rock"
    $("#recomendation").empty().text(result);
    $(".results").show();
  }
event.preventDefault();

});
});
