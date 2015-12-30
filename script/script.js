$( document ).ready(function() {
    console.log( "ready!!!" );



    var myLength = $( "#myInput" ).val();
    var warning = $( "#warning" );
    var result = $( "#result" );




    $('#calculate').on('click', function(){

       console.log("click!");

       if (myLength < 0) {
           warning.html("Please enter value bigger then 0");
           console.log("Bad number (0 or smaller)");

       } else {
           console.log("good value");
       }

    });



});