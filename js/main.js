/**
 * Created by Joenelson on 2017-03-07.
 */
$(document).ready(function(){

    var logo = $('.logo'),
        btn1 = $('.btn-full'),
        btn2 = $('.btn-ghost'),
          h1 = $('h1'),
    mainNav = $('.main-nav');


    TweenLite.from('.logo', 1.25, {autoAlpha:0, height:10});
    TweenLite.from('h1',2.5, {autoAlpha:0, delay: 1.25});
    TweenLite.from('.btn-full', 1.5, {y: -800, delay: 2.5});
    TweenLite.from('.btn-ghost', 2, {y: -800, delay: 2.5});
    TweenLite.from('.main-nav', 1.25, {x: 600, delay:4.5});

    var controller = new ScrollMagic.Controller();
    // build tween
    var tween = TweenMax.to("#twoDImage", 0.5, {scale: 2, repeat: 5, yoyo: true});

    // build scene and set duration to window height
    var scene = new ScrollMagic.Scene({triggerElement: "#top-section", duration: "100%"})
        .setTween(tween)
        .addTo(controller);

    //-----------------------------------------------//
    //--Lower Mid Section Boxes Slide in from side --//
    //-----------------------------------------------//


    // ---- build tween for first Show Me More box ----- //
    var swipe1Tween = TweenMax.from("#show-me-more", 1.5,
        {x: -1200, autoAlpha: 0}
    );

    var swipe1Scene = new ScrollMagic.Scene({
        triggerElement: '.long-copy',
        triggerHook: 0.3
    })
        .setTween(swipe1Tween)
        .addTo(controller);



    // ----  build tween for  Show Me More 2 box ----- //
    var swipe2Tween = TweenMax.from("#show-me-more-2", 1.5,
        {x: +1200, autoAlpha: 0}
    );

    var swipe2Scene = new ScrollMagic.Scene({
        triggerElement: '.first-box',
        triggerHook: 0.4
    })
        .setTween(swipe2Tween)
        .addTo(controller);


// ----  build tween for  Show Me More 3 box ----- //
    var swipe3Tween = TweenMax.from("#show-me-more-3", 1.5,
        {x: -1200, autoAlpha: 0}
    );

    var swipe3Scene = new ScrollMagic.Scene({
        triggerElement: '.second-box',
        triggerHook: 0.3
    })
        .setTween(swipe3Tween)
        .addTo(controller);



    var pinIntroScene = new ScrollMagic.Scene ({
        triggerElement: '.bar',
        triggerHook: 0,
        duration: '40%'
    })
        .setPin('.bar', {pushFollowers: true})
        .addTo(controller);

    //--------------------------------------//
    //-- Box Pinning in Lower Mid Section --//
    //--------------------------------------//

    var pinBoxes = new ScrollMagic.Scene ({
        triggerElement: '.first-box',
        triggerHook: 0,
        duration: '40%'
    })
        .setPin('.first-box', {pushFollowers: false})
        .addTo(controller);

    var pinBoxes2 = new ScrollMagic.Scene ({
        triggerElement: '.second-box',
        triggerHook: 0,
        duration: '37%'
    })
        .setPin('.second-box', {pushFollowers: false})
        .addTo(controller);

    var pinBoxes3 = new ScrollMagic.Scene ({
        triggerElement: '.third-box',
        triggerHook: 0,
        duration: '16.5%'
    })
        .setPin('.third-box', {pushFollowers: false})
        .addTo(controller);

});
