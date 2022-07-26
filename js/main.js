$( document ).ready(function() {


    // const vidOptionsArray = [
    //     {url: "https://player.vimeo.com/video/727515662?h=147a66ea85",
    //         background: true,
    //         autoplay: false,
    //         loop: true},
    //     {url: "https://player.vimeo.com/video/727516301?h=70f2b651fd",
    //         background: true,
    //         autoplay: false,
    //         loop: true},
    //     {url: "https://player.vimeo.com/video/727516773?h=a0f316953d",
    //         background: true,
    //         autoplay: false,
    //         loop: true}
    // ];


    // const player1 = new Vimeo.Player($("#vimeo-frame-1"));
    // const player2 = new Vimeo.Player($("#vimeo-frame-2"));
    // const player3 = new Vimeo.Player($("#vimeo-frame-3"));

    const scrollFadeSpeed = 500;
    const initialScrollTop = $(window).scrollTop();

    if(initialScrollTop <= 0)
    {
        $(window).scroll( function(){
            $('.fadeOnScroll').each( function(){

                // var objectTop = $(this).offset().top;
                var objectHalf = $(this).offset().top + ($(this).outerHeight() / 2);
                // var objectBottom = $(this).offset().top + $(this).outerHeight();
                var windowBottom = $(window).scrollTop() + $(window).height();

                /* If the object is completely visible in the window, fade it in. Else, fade it out */
                if( windowBottom > objectHalf ){

                    $(this).animate({'opacity':'1'},1000);

                }
                // else
                // {
                //     $(this).animate({'opacity':'0'},700);
                // }

            });
        });
    }
    else
    {
        $('.fadeOnScroll').removeClass("fadeOnScroll");
    }


    const playerArray = [];
    const viframeArray = [];
    const carouselCardArray = [];

    $(".viframe").each(function(i) {
        playerArray.push(new Vimeo.Player($(this)));
        viframeArray.push($(this));
        // playerArray[i].pause();
    });

    $(".carouselCard").each(function(i) {
        carouselCardArray.push($(this));
    });

    var videoIndex = 0;

    const videoFadeInSpeed = 1000;
    const videoFadeOutSpeed = 500;

    const cardFadeInSpeed = 2000;
    const cardFadeOutSpeed = 500;

    // playerArray[0].play();

    playerArray[0].play().then(function() {
        $("#loadingVideo").animate({'opacity':'0'},cardFadeOutSpeed);

        viframeArray[0].removeClass("vimeo-on-deck");
        viframeArray[0].animate({'opacity':'1'}, videoFadeInSpeed);

        carouselCardArray[0].removeClass("card-on-deck");
        carouselCardArray[0].animate({'opacity':'1'},cardFadeInSpeed);

    });

    var videoInterval = setInterval(function() {
        // viframeArray[videoIndex].animate({'opacity':'0'},{duration: 1500, complete : function() {
        //
        //     }
        //
        // });

        carouselCardArray[videoIndex].animate({'opacity':'0'}, cardFadeOutSpeed);

        viframeArray[videoIndex].animate({'opacity':'0'}, videoFadeOutSpeed, function() {

                playerArray[videoIndex].pause();
                viframeArray[videoIndex].addClass("vimeo-on-deck");

                carouselCardArray[videoIndex].addClass("card-on-deck");

                videoIndex += 1;
                if(videoIndex >= playerArray.length)
                {
                    videoIndex = 0;
                }


                viframeArray[videoIndex].removeClass("vimeo-on-deck");
                viframeArray[videoIndex].animate({'opacity':'1'},videoFadeInSpeed);
                playerArray[videoIndex].play();


                carouselCardArray[videoIndex].removeClass("card-on-deck");
                carouselCardArray[videoIndex].animate({'opacity':'1'},cardFadeInSpeed);
        });




    }, 5500);



    // const playerArray = [player1, player2, player3];
    //
    //
    // var vidCount = playerArray.length;
    // player1.ready().then(function() {
    //     console.log("Player 1 played");
    //     $("#vimeo-frame-1").removeClass("vimeo-on-deck");
    //     // player2.pause();
    //     // player3.pause();
    // });

    // player2.on('bufferend', function(data) {
    //     console.log("Player 2 done buffering");
    // });
    //
    // player3.on('bufferend', function(data) {
    //     console.log("Player 3 done buffering");
    // });


});