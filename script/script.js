$( document ).ready(function() {
    console.log( "ready!!!" );



    var warning = $( "#warning" );
    var result = $( "#result" );

    $('#calculate').on('click', function(){

       console.log("click!");
       var myLength = $( "#myInput" ).val();

            if (myLength < 1) {
               warning.html("Please enter value 1 or bigger");
             //  console.log("Please enter value 1 or bigger");

            }   else if (myLength > 1000) {
               warning.html("Are you sure? It is so big value.");
             //  console.log("Are you sure? It is so big value.");

            } else {
               console.log("good value");
            }

        calculateGeometric (myLength);

    });


    function calculateGeometric (myLength) {
        var calcResult = Math.pow(myLength, 2);
        console.log(myLength);
        result.html(calcResult);

    }



});