"use strict";

/*    JavaScript 7th Edition
      Chapter 12
      Project 12-01

      Project to display a dropdown menu
      Author: 
      Date:   

      Filename: project12-01.js
*/

$(document).ready(function() {
  // Step 4: Attach mouseover and mouseout events to the li.submenu element
  $("li.submenu").mouseover(function(e) {
    // Show the contents of the dropdown menu on mouseover event
    $(e.currentTarget).children("ul").show();
  }).mouseout(function(e) {
    // Hide the contents of the dropdown menu on mouseout event
    $(e.currentTarget).children("ul").hide();
  });
});


                                                