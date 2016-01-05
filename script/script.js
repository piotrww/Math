$( document ).ready(function() {
    console.log( "ready!!!" );

///DOM

  ////Section A
      //1. Square



    $('#calculateA1').on('click', function(){

        var result = $( "#resultA1" );
        var a = $("#myInputA1").val();

        if ( a == "" ) {
            result.html('Input can not be left blank').addClass('warning');

        } else {

            result.html( Math.pow(a, 2)).removeClass('warning');
        }
     });



    //2. Rectangle


    $('#calculateA2').on('click', function(){


        var result = $( "#resultA2" );
        var a = $("#myInputA2").val();
        var b = $("#myInputA2A").val();

        if ( a == "" || b == "") {
            result.html('Input can not be left blank').addClass('warning');

        }  else {

            result.html( a * b).removeClass('warning');
        }


    });


    //3. Triangle


    $('#calculateA3').on('click', function(){

        var result = $( "#resultA3" );
        var a = $("#myInputA3").val();
        var h = $("#myInputA3A").val();

        if ( a == "" || h == "") {
            result.html('Input can not be left blank').addClass('warning');

        }  else {

            result.html( 0.5 * a * h).removeClass('warning');
        }



    });





////SECTION B

  // Figure 1, trapezoid

    $('#calculateB1').on('click', function(){

        console.log("klikb1");

    var result = $( "#resultB1" );
    var a = $("#myInputB1a").val();
    var b = $("#myInputB1b").val();
    var h = $("#myInputB1h").val();

    if ( a == "" || b == "" || h == "") {
        result.html('Input can not be left blank').addClass('warning');

    }  else {

        result.html( (0.5*h)*(a+b) ).removeClass('warning');
    }

    });



  // Figure 2, diamond

    $('#calculateB2').on('click', function(){

        console.log("klikb2");

        var result = $( "#resultB2" );
        var a = $("#myInputB2a").val();
        var h = $("#myInputB2h").val();

        if ( a == "" || h == "") {

            result.html('Input can not be left blank').addClass('warning');

        }  else {

            result.html( a * h ).removeClass('warning');
        }

    });


// SECTION 3

    //Figure 1

    $('#calculateC1').on('click', function(){

        console.log("klikC1");

        var result = $( "#resultC1" );
        var r = $("#myInputC1R").val();

        if ( r == "" ) {

            result.html('Input can not be left blank').addClass('warning');

        }  else {

            result.html( 4*Math.PI*Math.pow(r, 2) ).removeClass('warning');
        }

    });


    //Figure 2


    $('#calculateC2').on('click', function(){

        console.log("klikC2");

        var result = $( "#resultC2" );
        var r = $("#myInputC2R").val();
        var h = $("#myInputC2H").val();


        if ( r == "" || h == "") {

            result.html('Input can not be left blank').addClass('warning');

        }  else {

            result.html( Math.PI*Math.pow(r,2)*h ).removeClass('warning');
        }

    });

   //Figure 3


    $('#calculateC3').on('click', function(){

        console.log("klikC3");

        var result = $( "#resultC3" );
        var a = $("#myInputC3a").val();
        var b = $("#myInputC3b").val();
        var h = $("#myInputC3h").val();



        if ( a == "" || b == "" || h == "") {

            result.html('Input can not be left blank').addClass('warning');

        }  else {

            result.html( a*b*h ).removeClass('warning');
        }

    });
//PARALER
    function parralax() {
        var prlxLayer1 = document.getElementById('contLayer1');
        prlxLayer1.style.top = -(window.pageYOffset*2)+'px';

        var prlxLayer2 = document.getElementById('contLayer2');
        prlxLayer2.style.top = -(window.pageYOffset/2)+'px';

    }

    window.addEventListener("scroll", parralax, false);



//SLIDER



    var scrollSpeed = 4000;
    var currentSlide = 1;



    var $wrapper = $(".wrapper");
    var $allSlides = $wrapper.find('.allSlides');
    var $slide = $allSlides.find('.slide');


    setInterval(function() {
            $allSlides.animate(
                {'margin-left': '-=1000px'},
                2000,
                function() {
                    currentSlide++;

                    if(currentSlide === $slide.length) {
                        currentSlide = 1;
                        $allSlides.css('margin-left', 0);
                    }

                });
        },
        scrollSpeed);







});




