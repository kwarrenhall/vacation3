$(document).ready(function() {
  ("form#vacation").submit(function() {
    event.preventDefault();
   var party = PartseInt($('#numberinparty').val());
   var season =$('#season').val();
   var region =$('#region').val();
   var budget =$('#budget').val();

   if (season === spring && region === North-America && budget === espensive) {
     var result = "beach"
    $("#reccomendation").empty().text(result);
    $(".class").show.();

   };

});
});
