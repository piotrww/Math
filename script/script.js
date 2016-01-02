$( document ).ready(function() {
    console.log( "ready!!!" );

///DOM

  ////Section A
      //1. Square

    $('#calculateA1').on('click', function(){

          var a = $("#myInputA1").val();

         calculateSquare (a);

     });


    function calculateSquare (a) {
        var result = $( "#resultA1" );

        result.html( Math.pow(a, 2) );
    }




//

//
    //2. Rectangle


    $('#calculateA2').on('click', function(){

        var a = $("#myInputA2").val();
        var b = $("#myInputA2A").val();

        calculateRectangle (a, b);

    });


    function calculateTriangle (a, h) {
        var result = $( "#resultA2" );

        result.html( a * b );
    }

    //3. Triangle


    $('#calculateA3').on('click', function(){

        var a = $("#myInputA3").val();
        var h = $("#myInputA3A").val();

        calculateTriangle (a, h);

    });


    function calculateTriangle (a, h) {
        var result = $( "#resultA3" );

        result.html( 0.5 * a * h );
    }














});

//
////Calculate triangle
//    function calculateTriangle (myLengthA, myAttitudeH) {
//        var calcResult = (myLengthA * myAttitudeH)*0.5;
//        console.log(myLength);
//        result.html(calcResult);
//
//    }
//
////SECTION B
//
//
//
////Calculate trapeze
//    function calculateTrapeze (a,b,h) {
//        var calcResult = (0.5*h)*(a+b);
//        console.log(calcResult);
//        result.html(calcResult);
//
//    }
//
//
////Calculate diamond
//    function calculateDiamond (a, h) {
//        var calcResult = a * h;
//        console.log(myLength);
//        result.html(calcResult);
//
//    }
//
//
////SECTION C
//
//
////Calculate sphere
//    function calculateSphere (r) {
//        var calcResult = 4*Math.PI*Math.pow(r, 2);
//        result.html(calcResult);
//
//    }
//
//
////Calculate cilinder
//    function calculateCilinder (r,h) {
//        var calcResult = Math.PI*Math.pow(r,2)*h;
//        result.html(calcResult);
//
//    }
//
//
////Calculate cuboid
//    function calculateCircle (a,b,c) {
//        var calcResult = a, b,c;
//        result.html(calcResult);
//
//    }
//
//
//});