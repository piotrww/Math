$( document ).ready(function() {
    console.log( "ready!" );



    var side = $( "input[name*='side']").val();

    var side2 = $( "#aaa").val();

    var warning = $( "#warning" );
    var result = $( "#result" );




    $('#calculate').on('click', function(){

            var resu = side * side;
            return resu;
        result.html(resu);


    });



});