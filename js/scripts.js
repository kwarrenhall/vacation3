$(document).ready(function() {
  $("form#vacation").submit(function(event) {

   var season =$('#season').val();
   var region =$('#region').val();
   var budget =$('#budget').val();
   var grid =$('#grid').val();
   var kids =$('#kids').val();
// summer
    // asia
  if (season === "summer" && region === "Asia" && budget === "$$$$" && grid === "offgrid" && kids === "no"){
    result = "summer asia";
    $("#recomendation").empty().text(result);
    $(".results").show();
  } else if (season === "summer" && region === "Asia" && budget === "$$$$" && grid === "offgrid" && kids === "yes") {
      result = "summer europe";
      $("#recomendation").empty().text(result);
      $(".results").show();
  } else if (season === "summer" && region === "Asia" && budget === "$$$$" && grid === "resort" && kids === "no") {
      result = "summer europe";
      $("#recomendation").empty().text(result);
      $(".results").show();
  } else if (season === "summer" && region === "Asia" && budget === "$$$$" && grid === "resort" && kids === "yes") {
      result = "summer europe";
      $("#recomendation").empty().text(result);
      $(".results").show();
  } else if (season === "summer" && region === "Asia" && budget === "$" && grid === "offgrid" && kids === "no") {
      result = "summer europe";
      $("#recomendation").empty().text(result);
      $(".results").show();
  } else if (season === "summer" && region === "Asia" && budget === "$" && grid === "offgrid" && kids === "yes") {
      result = "summer europe";
      $("#recomendation").empty().text(result);
      $(".results").show();
  } else if (season === "summer" && region === "Asia" && budget === "$" && grid === "resort" && kids === "no") {
      result = "summer europe";
      $("#recomendation").empty().text(result);
      $(".results").show();
  } else if (season === "summer" && region === "Asia" && budget === "$" && grid === "resort" && kids === "yes") {
      result = "summer europe";
      $("#recomendation").empty().text(result);
      $(".results").show();
  // europe
  } else if (season === "summer" && region === "Europe" && budget === "$$$$" && grid === "offgrid" && kids === "no") {
      result = "summer europe";
      $("#recomendation").empty().text(result);
      $(".results").show();
  } else if (season === "summer" && region === "Europe" && budget === "$$$$" && grid === "offgrid" && kids === "yes") {
      result = "summer europe";
      $("#recomendation").empty().text(result);
      $(".results").show();
  } else if (season === "summer" && region === "Europe" && budget === "$$$$" && grid === "resort" && kids === "no") {
    result = "summer europe";
    $("#recomendation").empty().text(result);
    $(".results").show();
  } else if (season === "summer" && region === "Europe" && budget === "$$$$" && grid === "resort" && kids === "yes") {
      result = "summer europe";
      $("#recomendation").empty().text(result);
      $(".results").show();
  } else if (season === "summer" && region === "Europe" && budget === "$" && grid === "offgrid" && kids === "no") {
      result = "summer europe";
      $("#recomendation").empty().text(result);
      $(".results").show();
  } else if (season === "summer" && region === "Europe" && budget === "$" && grid === "offgrid" && kids === "yes") {
      result = "summer europe";
      $("#recomendation").empty().text(result);
      $(".results").show();
  } else if (season === "summer" && region === "Europe" && budget === "$" && grid === "resort" && kids === "no") {
      result = "summer europe";
      $("#recomendation").empty().text(result);
      $(".results").show();
// Americas
  } else if (season === "summer" && region === "Americas" && budget === "$$$$" && grid === "offgrid" && kids === "no") {
    result = "summer americas";
    $("#recomendation").empty().text(result);
    $(".results").show();
  } else if (season === "summer" && region === "Americas" && budget === "$$$$" && grid === "offgrid" && kids === "yes") {
    result = "summer americas";
    $("#recomendation").empty().text(result);
    $(".results").show();
  } else if (season === "summer" && region === "Americas" && budget === "$$$$" && grid === "resort" && kids === "no") {
    result = "summer americas";
    $("#recomendation").empty().text(result);
    $(".results").show();
  } else if (season === "summer" && region === "Americas" && budget === "$$$$" && grid === "resort" && kids === "yes") {
    result = "summer americas";
    $("#recomendation").empty().text(result);
    $(".results").show();
  } else if (season === "summer" && region === "Americas" && budget === "$" && grid === "offgrid" && kids === "no") {
    result = "summer americas";
    $("#recomendation").empty().text(result);
    $(".results").show();
  } else if (season === "summer" && region === "Americas" && budget === "$" && grid === "offgrid" && kids === "yes") {
    result = "summer americas";
    $("#recomendation").empty().text(result);
    $(".results").show();
  } else if (season === "summer" && region === "Americas" && budget === "$" && grid === "resort" && kids === "no") {
    result = "summer americas";
    $("#recomendation").empty().text(result);
    $(".results").show();
  } else if (season === "summer" && region === "Americas" && budget === "$" && grid === "resort" && kids === "yes") {
    result = "summer americas";
    $("#recomendation").empty().text(result);
    $(".results").show();
// winter
// winter asia
  } else if (season === "winter" && region === "Asia" && budget === "$$$$" && grid === "offgrid" && kids === "no") {
    result = "summer europe";
    $("#recomendation").empty().text(result);
    $(".results").show();
  } else if (season === "winter" && region === "Asia" && budget === "$$$$" && grid === "offgrid" && kids === "yes") {
    result = "summer europe";
    $("#recomendation").empty().text(result);
    $(".results").show();
  } else if (season === "winter" && region === "Asia" && budget === "$$$$" && grid === "resort" && kids === "no") {
    result = "summer europe";
    $("#recomendation").empty().text(result);
    $(".results").show();
  } else if (season === "winter" && region === "Asia" && budget === "$$$$" && grid === "resort" && kids === "yes") {
    result = "summer europe";
    $("#recomendation").empty().text(result);
    $(".results").show();
  } else if (season === "winter" && region === "Asia" && budget === "$" && grid === "offgrid" && kids === "no") {
    result = "summer europe";
    $("#recomendation").empty().text(result);
    $(".results").show();
  } else if (season === "winter" && region === "Asia" && budget === "$" && grid === "offgrid" && kids === "yes") {
    result = "summer europe";
    $("#recomendation").empty().text(result);
    $(".results").show();
  } else if (season === "winter" && region === "Asia" && budget === "$" && grid === "resort" && kids === "no") {
    result = "summer europe";
    $("#recomendation").empty().text(result);
    $(".results").show();
  } else if (season === "winter" && region === "Asia" && budget === "$" && grid === "resort" && kids === "yes") {
    result = "summer europe";
    $("#recomendation").empty().text(result);
    $(".results").show();
  // winter europe
  } else if (season === "winter" && region === "Europe" && budget === "$$$$" && grid === "offgrid" && kids === "no") {
    result = "summer europe";
    $("#recomendation").empty().text(result);
    $(".results").show();
  } else if (season === "winter" && region === "Europe" && budget === "$$$$" && grid === "offgrid" && kids === "yes") {
    result = "summer europe";
    $("#recomendation").empty().text(result);
    $(".results").show();
  } else if (season === "winter" && region === "Europe" && budget === "$$$$" && grid === "resort" && kids === "no") {
  result = "summer europe";
  $("#recomendation").empty().text(result);
  $(".results").show();
  } else if (season === "winter" && region === "Europe" && budget === "$$$$" && grid === "resort" && kids === "yes") {
    result = "summer europe";
    $("#recomendation").empty().text(result);
    $(".results").show();
  } else if (season === "winter" && region === "Europe" && budget === "$" && grid === "offgrid" && kids === "no") {
    result = "summer europe";
    $("#recomendation").empty().text(result);
    $(".results").show();
  } else if (season === "winter" && region === "Europe" && budget === "$" && grid === "offgrid" && kids === "yes") {
    result = "summer europe";
    $("#recomendation").empty().text(result);
    $(".results").show();
  } else if (season === "winter" && region === "Europe" && budget === "$" && grid === "resort" && kids === "no") {
    result = "summer europe";
    $("#recomendation").empty().text(result);
    $(".results").show();
  } else if (season === "winter" && region === "Europe" && budget === "$" && grid === "resort" && kids === "yes") {
    result = "summer europe";
    $("#recomendation").empty().text(result);
    $(".results").show();
  // winter Americas
  } else if (season === "winter" && region === "Americas" && budget === "$$$$" && grid === "offgrid" && kids === "no") {
    result = "summer americas";
    $("#recomendation").empty().text(result);
    $(".results").show();
  } else if (season === "winter" && region === "Americas" && budget === "$$$$" && grid === "offgrid" && kids === "yes") {
    result = "summer americas";
    $("#recomendation").empty().text(result);
    $(".results").show();
  } else if (season === "winter" && region === "Americas" && budget === "$$$$" && grid === "resort" && kids === "no") {
    result = "summer americas";
    $("#recomendation").empty().text(result);
    $(".results").show();
  } else if (season === "winter" && region === "Americas" && budget === "$$$$" && grid === "resort" && kids === "yes") {
    result = "summer americas";
    $("#recomendation").empty().text(result);
    $(".results").show();
  } else if (season === "winter" && region === "Americas" && budget === "$" && grid === "offgrid" && kids === "no") {
    result = "summer americas";
    $("#recomendation").empty().text(result);
    $(".results").show();
  } else if (season === "winter" && region === "Americas" && budget === "$" && grid === "offgrid" && kids === "yes") {
    result = "summer americas";
    $("#recomendation").empty().text(result);
    $(".results").show();
  } else if (season === "winter" && region === "Americas" && budget === "$" && grid === "resort" && kids === "no") {
    result = "summer americas";
    $("#recomendation").empty().text(result);
    $(".results").show();
  } else if (season === "winter" && region === "Americas" && budget === "$" && grid === "resort" && kids === "yes") {
    result = "summer americas";
    $("#recomendation").empty().text(result);
    $(".results").show();
    }else{
      alert("you won a free vacation for finding an error in my code!");
    }
event.preventDefault();
  });
});
