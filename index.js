$(document).ready(function(){
  // for each tile, blur and show text on enter
  $( ".pic" ).each(function() {
    $(this).on("mouseenter", function(event){
      $("#imgText" + $(this).attr('data-value')).css("opacity", "100")
      $("#" + this.id + " img").css("filter", "blur(10px)")
    });
    $(this).on("mouseleave", function(event){
      $(".imgText").css("opacity", "0")
      $(".pic img").css("filter", "none")
    });
  });
  
  // make array of channels
  var channels = ["syndicate", "freecodecamp", "riotgames", "summit1g", "imaqtpie", "nightblue3"];
  // loop through each channel
  $(channels).each(function(i){
    
    //api urls for user details and stream details
    let urlUser = "https://wind-bow.glitch.me/twitch-api/users/" + channels[i];
    let urlStream = "https://wind-bow.glitch.me/twitch-api/streams/" + channels[i];
    
    // make api call for user
    $.getJSON(urlUser, function(x){
      
      // change the username and img to ones returned by API
      $("#" + channels[i] + " p").html(x.display_name + "<i class='fa fa-circle' id='faOne' aria-hidden='true'>");
      $("#" + channels[i] + " img").attr("src", x.logo);
      
      // get the api info about the stream
      $.getJSON(urlStream, function(y){
        
        // if the user is currently streaming
        if (y.stream){
        
          // Update the channel information shown on hover, add 'online' class and change the icon to green
          $("#" + channels[i] + " span").html("Currently streaming:</br></br><span class='title'>" + y.stream.game + "</span></br></br>" + "Number of viewers:</br></br><span class='title'>" + y.stream.viewers + "</span></br></br>");
          $("#" + channels[i]).addClass("online");
          $("#" + channels[i] + " i").css("color", "green");
        // if they are not streaming, update info, image and icon to offline  
        } else {
          $("#" + channels[i] + " span").html("User is currently offline");
          $("#" + channels[i] + " i").css("color", "red");
          $("#" + channels[i]).addClass("offline");
        }
      })
    })
  })
  
  // button to display all  
  $(".btn-primary").on("click", function(){
    $(".offline").css("display", "block");
    $(".online").css("display", "block");
  })
 // button for online  
 $(".btn-success").on("click", function(){
   $(".offline").css("display", "none");
   $(".online").css("display", "block");
 })
 // button for offline 
 $(".btn-danger").on("click", function(){
   $(".online").css("display", "none");
   $(".offline").css("display", "block");
  })
});
