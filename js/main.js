/**
 * Created by Joenelson on 2017-03-07.
 */
$(document).ready(function(){

    var logo = $('.logo'),
        btn1 = $('.btn-full'),
        btn2 = $('.btn-ghost'),
          h1 = $('h1');


    TweenLite.from('.logo', 1.25, {autoAlpha:0, height:10});
    TweenLite.from('h1',2.5, {autoAlpha:0, delay: 1.25});
    TweenLite.from('.btn-full', 1.5, {y: -800, delay: 2.5});
    TweenLite.from('.btn-ghost', 2, {y: -800, delay: 2.5});
    TweenLite.from('.main-nav', 1.25, {x: 600, delay:4.5});

    //Init ScrollMagic
    var controller = new ScrollMagic.Controller();

    //-----------------------------------------------//
    //--Lower Mid Section Boxes Slide in from side --//
    //-----------------------------------------------//

    var ourScene = new ScrollMagic.Scene({
        triggerElement: '.long-copy',
        triggerHook: 0.3

    })
        .setClassToggle('#show-me-more', 'fade-in')
        .addIndicators({
            name: 'info box movements',
            colorTrigger: 'black',
            colorStart: 'blue'
        })
        .addTo(controller);

    var ourScene2 = new ScrollMagic.Scene({
        triggerElement: '.first-box .long-copy1',
        triggerHook: 0.4

    })
        .setClassToggle('#show-me-more-two', 'fade-in')
        .addIndicators({
            name: 'second box slide in',
            colorTrigger: 'black',
            colorStart: 'pink'
        })
        .addTo(controller);

    var ourScene3 = new ScrollMagic.Scene({
        triggerElement: '.second-box',
        triggerHook: 0.4

    })
        .setClassToggle('#show-me-more-three', 'fade-in')
        .addIndicators({
            name: 'third slide in',
            colorTrigger: 'black',
            colorStart: 'red'
        })
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
        duration: '11%'
    })
        .setPin('.third-box', {pushFollowers: false})
        .addTo(controller);

});
