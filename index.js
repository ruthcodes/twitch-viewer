$(document).ready(function(){
  
  $( ".pic" ).each(function() {
    $(this).on("mouseenter", function(event){
      $("#imgText" + $(this).attr('data-value')).css("opacity", "100")
      $("#" + this.id + " img").css("filter", "blur(10px)")
    });
  });
  
 /* $("#picOne").mouseenter(function(){
    $("#imgTextOne").css("opacity", "100")
    $("#picOne img").css("filter", "blur(10px)")
    
  })
  
  $("#picTwo").mouseenter(function(){
    $("#imgTextTwo").css("opacity", "100")
    $("#picTwo img").css("filter", "blur(10px)")
    
  })
  
  $("#picThree").mouseenter(function(){
    $("#imgTextThree").css("opacity", "100")
    $("#picThree img").css("filter", "blur(10px)")
    
  })
  
  $("#picFour").mouseenter(function(){
    $("#imgTextFour").css("opacity", "100")
    $("#picFour img").css("filter", "blur(10px)")
    
  })
  
  $("#picFive").mouseenter(function(){
    $("#imgTextFive").css("opacity", "100")
    $("#picFive img").css("filter", "blur(10px)")
    
  })
  
  $("#picSix").mouseenter(function(){
    $("#imgTextSix").css("opacity", "100")
    $("#picSix img").css("filter", "blur(10px)")
    
  }) */
  
 $(".pic").mouseleave(function(){
    $(".imgText").css("opacity", "0")
   $(".pic img").css("filter", "none")
  })

    
  
  //Syndicate JSON requests
  
  $.getJSON("https://wind-bow.glitch.me/twitch-api/users/syndicate", function(x){
    $("#synd").html(x.display_name + "<i class='fa fa-circle' id='faOne' aria-hidden='true'>");
    $("#picOne img").attr("src", x.logo);
    
     $.getJSON("https://wind-bow.glitch.me/twitch-api/streams/syndicate", function(y){
    if (y.stream){
     
      $("#imgTextOne").html("Currently streaming:</br></br><span class='title'>" + y.stream.game + "</span></br></br>" + "Number of viewers:</br></br><span class='title'>" + y.stream.viewers + "</span></br></br>");
      $("#picOne").addClass("online");
      
      
      $("#faOne").css("color", "green");
    } else {
       $("#imgTextOne").html("User is currently offline");
      $("#faOne").css("color", "red");
      $("#picOne").addClass("offline");
    }
  })
    
  })   
  
  
  //FCC JSON requests
  
  
  $.getJSON("https://wind-bow.glitch.me/twitch-api/users/freecodecamp", function(x){
    $("#fcc").html(x.display_name + "<i class='fa fa-circle' id='faTwo' aria-hidden='true'>");
    $("#picTwo img").attr("src", x.logo);
    
     $.getJSON("https://wind-bow.glitch.me/twitch-api/streams/freecodecamp", function(y){
    if (y.stream){
   
      $("#imgTextTwo").html("Currently streaming:</br></br><span class='title'>" + y.stream.game + "</span></br></br>" + "Number of viewers:</br></br><span class='title'>" + y.stream.viewers + "</span></br></br>");
      $("#picTwo").addClass("online");
      
      
      $("#faTwo").css("color", "green");
    } else {
         $("#imgTextTwo").html("User is currently offline");
      $("#faTwo").css("color", "red");
      $("#picTwo").addClass("offline");
    }
  })
    
  })   
  
  //RiotGames JSON requests
  
  $.getJSON("https://wind-bow.glitch.me/twitch-api/users/riotgames", function(x){
    $("#riot").html(x.display_name + "<i class='fa fa-circle' id='faThree' aria-hidden='true'>");
    $("#picThree img").attr("src", x.logo);
    
     $.getJSON("https://wind-bow.glitch.me/twitch-api/streams/riotgames", function(y){
    if (y.stream){
   
      $("#imgTextThree").html("Currently streaming:</br></br><span class='title'>" + y.stream.game + "</span></br></br>" + "Number of viewers:</br></br><span class='title'>" + y.stream.viewers + "</span></br></br>");
      $("#picThree").addClass("online");
      
      $("#faThree").css("color", "green");
    } else {
         $("#imgTextThree").html("User is currently offline");
      $("#faThree").css("color", "red");
      $("#picThree").addClass("offline");
    }
  })
    
  })   
  
 // Summit JSON requests
  
    $.getJSON("https://wind-bow.glitch.me/twitch-api/users/summit1g", function(x){
    $("#summit").html(x.display_name + "<i class='fa fa-circle' id='faFour' aria-hidden='true'>");
    $("#picFour img").attr("src", x.logo);
    
     $.getJSON("https://wind-bow.glitch.me/twitch-api/streams/summit1g", function(y){
    if (y.stream){
   
      $("#imgTextFour").html("Currently streaming:</br></br><span class='title'>" + y.stream.game + "</span></br></br>" + "Number of viewers:</br></br><span class='title'>" + y.stream.viewers + "</span></br></br>");
      $("#picFour").addClass("online");
      
      $("#faFour").css("color", "green");
    } else {
         $("#imgTextFour").html("User is currently offline");
      $("#faFour").css("color", "red");
      $("#picFour").addClass("offline");
    }
  })
    
  })
  
  //esl_csgo JSON requests
  
    $.getJSON("https://wind-bow.glitch.me/twitch-api/users/imaqtpie", function(x){
    $("#imaqtpie").html(x.display_name + "<i class='fa fa-circle' id='faFive' aria-hidden='true'>");
    $("#picFive img").attr("src", x.logo);
    
     $.getJSON("https://wind-bow.glitch.me/twitch-api/streams/imaqtpie", function(y){
    if (y.stream){
   
      $("#imgTextFive").html("Currently streaming:</br></br><span class='title'>" + y.stream.game + "</span></br></br>" + "Number of viewers:</br></br><span class='title'>" + y.stream.viewers + "</span></br></br>");
      $("#picFive").addClass("online");
      
      $("#faFive").css("color", "green");
    } else {
         $("#imgTextFive").html("User is currently offline");
      $("#faFive").css("color", "red");
      $("#picFive").addClass("offline");
    }
  })
    
  })  
  
  //nightblue3 JSON requests
  
    $.getJSON("https://wind-bow.glitch.me/twitch-api/users/nightblue3", function(x){
    $("#night").html(x.display_name + "<i class='fa fa-circle' id='faSix' aria-hidden='true'>");
    $("#picSix img").attr("src", x.logo);
    
     $.getJSON("https://wind-bow.glitch.me/twitch-api/streams/nightblue3", function(y){
    if (y.stream){
   
      $("#imgTextSix").html("Currently streaming:</br></br><span class='title'>" + y.stream.game + "</span></br></br>" + "Number of viewers:</br></br><span class='title'>" + y.stream.viewers + "</span></br></br>");
      $("#picSix").addClass("online");
      
      $("#faSix").css("color", "green");
    } else {
         $("#imgTextSix").html("User is currently offline");
      $("#faSix").css("color", "red");
      $("#picSix").addClass("offline");
    }
  })
    
  })  
 
  $(".btn-primary").on("click", function(){
    $(".offline").css("display", "block");
   $(".online").css("display", "block");
  })
    
 $(".btn-success").on("click", function(){
   $(".offline").css("display", "none");
   $(".online").css("display", "block");
 })
  
  $(".btn-danger").on("click", function(){
   $(".online").css("display", "none");
   $(".offline").css("display", "block");
   })
});
