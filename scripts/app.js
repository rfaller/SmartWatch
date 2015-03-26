$(document).ready(function() {

    //variables 
    var screenOne = $('.screen.one');
    var screenTwo = $('.screen.two');

    var imageOne = $('.image.one');
    var imageTwo = $('.image.two');
    var imageThree = $('.image.three');
    var imageFour = $('.image.four');
    var imageFive = $('.image.five');

    var videoBack = $('.video.back');

    var hotspotOne = $('.hotspot.one');
    var hotspotTwo = $('.hotspot.two');
    var hotspotThree = $('.hotspot.three');
    var hotspotFour = $('.hotspot.four');
    var hotspotFive = $('.hotspot.five');
    var hotspotSix = $('.hotspot.six');
    var hotspotSeven = $('.hotspot.seven');
    var hotspotEight = $('.hotspot.eight');

    var menuleft = $('.menu.left');
    var menuright = $('.menu.right');
    var menutop = $('.menu.top');
    var menubottom = $('.menu.bottom');
    var menu = $('.menu');

    var iconHeart = $('.icon.heart');
    var iconWeight = $('.icon.weight');

    var subscreenHeart = $('.subscreen.heart');
    var subscreenWeight = $('.subscreen.weight');

    var totalweight90 = $('.totalweight.A90');
    var totalweight95 = $('.totalweight.A95');
    var totalweight100 = $('.totalweight.A100');
    var totalweight105 = $('.totalweight.A105');
    var totalweight110 = $('.totalweight.A110');
    var totalweight115 = $('.totalweight.A115');
    var totalweight120 = $('.totalweight.A120');
    var totalweight125 = $('.totalweight.A125');
    var totalweight130 = $('.totalweight.A130');

    var count = 1;

    //set up
    TweenLite.set(menuleft, {x: -110});
    TweenLite.set(menuright, {x: 220});
    TweenLite.set(menutop, {y: -47});
    TweenLite.set(menubottom, {y: 264});
    TweenLite.set(imageTwo, {alpha: 0});
    TweenLite.set(hotspotTwo, {autoAlpha: 0});
    TweenLite.set(hotspotThree, {autoAlpha: 0});
    TweenLite.set(iconHeart, {y: 264,alpha: 0});
    TweenLite.set(iconWeight, {y: 264,alpha: 0});
    TweenLite.set(screenTwo, {x: 220});
    TweenLite.set(imageFour, {x: 220});
    TweenLite.set(imageFive, {x: 220});
    TweenLite.set(subscreenHeart, {y: 264});
    TweenLite.set(subscreenWeight, {y: 264});
    TweenLite.set(hotspotFour, {autoAlpha: 0});
    TweenLite.set(hotspotFive, {autoAlpha: 0});
    TweenLite.set(totalweight95, {alpha: 0});
    TweenLite.set(totalweight100, {alpha: 0});
    TweenLite.set(totalweight105, {alpha: 0});
    TweenLite.set(totalweight110, {alpha: 0});
    TweenLite.set(totalweight115, {alpha: 0});
    TweenLite.set(totalweight120, {alpha: 0});
    TweenLite.set(totalweight125, {alpha: 0});
    TweenLite.set(totalweight130, {alpha: 0});

    TweenLite.set(videoBack, {y: -264});

    //Do I need for touch interface?
    
    $(document).on('pointermove', function(event) {
            event.preventDefault();
    });

    //events

    hotspotOne.on("tap", function(e) {         
        TweenLite.to(menuleft, .3, {x: 0, ease:"easeOutQuart"});
        TweenLite.to(menuright, .3, {x: 110, ease:"easeOutQuart"});
        TweenLite.to(menutop, .7, {y: 0, ease:"easeOutQuart"});
        TweenLite.to(menubottom, .7, {y: 226, ease:"easeOutQuart",
            onComplete: function(e) { //reset hotspot for animation
                TweenLite.set(imageOne, {alpha: 0});
                TweenLite.set(imageTwo, {alpha: 1});
                TweenLite.set(hotspotTwo, {autoAlpha: 1});
                TweenLite.set(hotspotOne, {autoAlpha: 0});
            }
        });
    });


    hotspotTwo.on("tap", function(e) {
        TweenLite.to(menuleft, .3, {x: -110, ease:"easeInQuart"});
        TweenLite.to(menuright, .3, {x: 220, ease:"easeInQuart"});
        TweenLite.to(menutop, .7, {y: -47, ease:"easeOutQuart"});
        TweenLite.to(menubottom, .7, {y: 264, ease:"easeOutQuart"});
        TweenLite.set(hotspotThree, {autoAlpha: 1});
        TweenLite.set(hotspotTwo, {autoAlpha:0});
    });


    hotspotThree.on("swipeend", function(e) { //swipeleft
        e.preventDefault();
        if(e.angle > 150 && e.angle < 220){
            TweenLite.to(screenTwo, .5, {x: 0,});
            TweenLite.to(iconHeart, .7, {y: 210,alpha: 1});
            TweenLite.set(hotspotFour, {autoAlpha: 1});
            TweenLite.set(hotspotFive, {autoAlpha: 1});
            TweenLite.set(hotspotEight, {autoAlpha: 1});
            TweenLite.to(imageThree, .5, {x:0, ease:"easeOutQuart"}) ;
            TweenLite.to(iconWeight, .7, {y: 210,alpha: 1,
                onComplete: function(e) { //reset hotspot for animation
                    TweenLite.set(hotspotThree, {autoAlpha: 0});
                }
            });
        }
    });


    imageThree.on("swipeend", function(e) { //swipeleft
        e.preventDefault();
        if(e.angle > 150 && e.angle < 220){
            console.log('here');
            TweenLite.to(imageThree, .5, {x: -220,});
            TweenLite.to(imageFour, .5, {x: 0, ease:"easeOutQuart"});
        }    
    });

    //This resets everything back to the main screen
    imageThree.on("swipeend", function(e) { //swiperight
        e.preventDefault();
        if ((e.angle > 315 && e.angle <= 360) || (e.angle > 0 && e.angle < 45 )) {
            TweenLite.to(imageThree, .5, {x: 220,
                onComplete: function(){
                    TweenLite.set([imageThree, imageFour, imageFive], {x:220});              
                }
            }); 
            TweenLite.to(iconHeart, .7, {y: 264,alpha: 0});   
            TweenLite.to(iconWeight, .7, {y: 264,alpha: 0});   
            TweenLite.set(hotspotFour, {autoAlpha: 0});
            TweenLite.set(hotspotFive, {autoAlpha: 0});
            TweenLite.set(hotspotThree, {autoAlpha: 1});
            TweenLite.set(hotspotEight, {autoAlpha: 0});
        }    
    });


    hotspotEight.on("tap", function(e) {
        TweenLite.to(videoBack, .5, {y: 0, ease:"easeOutQuart"});
        TweenLite.set(iconHeart, {autoAlpha: 0});
        TweenLite.set(iconWeight, {autoAlpha: 0});
        TweenLite.set(iconHeart, {autoAlpha: 0});  
        TweenLite.set(iconWeight, {autoAlpha: 0});         
    });


    videoBack.on("swipeend", function(e) { //swipedown
        e.preventDefault();
        if(e.angle > 70 && e.angle < 120 ){
            TweenLite.to(videoBack, .5, {y: -264, ease:"easeOutQuart"});
            TweenLite.set(hotspotEight, {autoAlpha: 1});
            TweenLite.set(hotspotFour, {autoAlpha: 1});
            TweenLite.set(hotspotFive, {autoAlpha: 1});
            TweenLite.set(iconHeart, {autoAlpha: 1});  
            TweenLite.set(iconWeight, {autoAlpha: 1});             
        }
    });


    imageFour.on("swipeend", function(e) { //swipeleft
        e.preventDefault();
        if(e.angle > 150 && e.angle < 220){
            TweenLite.to(imageFour, .5, {x: -220,});
            TweenLite.to(imageFive, .5, {x: 0, ease:"easeOutQuart"});
        }    
    });

    imageFour.on("swipeend", function(e) { //swiperight
        e.preventDefault();
        if ((e.angle > 315 && e.angle <= 360) || (e.angle > 0 && e.angle < 45 )) {
            TweenLite.to(imageFour, .5, {x: 220,});
            TweenLite.to(imageThree, .5, {x: 0, ease:"easeOutQuart"});
        }    
    });


    imageFive.on("swipeend", function(e) { //swiperight
        e.preventDefault();
        if ((e.angle > 315 && e.angle <= 360) || (e.angle > 0 && e.angle < 45 )) {
            TweenLite.to(imageFive, .5, {x: 220,});
            TweenLite.to(imageFour, .5, {x: 0, ease:"easeOutQuart"});
        }    
    });

    //This resets back to the main screen
    imageFive.on("swipeend", function(e) { //swipeleft
        e.preventDefault();
        if(e.angle > 150 && e.angle < 220){
            TweenLite.to(imageFive, .5, {x: -220,
                onComplete: function(){
                    TweenLite.set([imageThree, imageFour, imageFive], {x:220});              
                }
            }); 
            TweenLite.to(iconHeart, .7, {y: 264,alpha: 0});   
            TweenLite.to(iconWeight, .7, {y: 264,alpha: 0});   
            TweenLite.set(hotspotFour, {autoAlpha: 0});
            TweenLite.set(hotspotFive, {autoAlpha: 0});
            TweenLite.set(hotspotThree, {autoAlpha: 1}); 
            TweenLite.set(hotspotEight, {autoAlpha: 0});
        } 
    });


    hotspotFour.on("tap", function(e) {
        TweenLite.to(subscreenHeart, .5, {y: 0, ease:"easeOutQuart"});
        TweenLite.set(hotspotFour, {autoAlpha: 0});
        TweenLite.set(hotspotFive, {autoAlpha: 0});
    });


    hotspotFive.on("tap", function (e){
        TweenLite.to(subscreenWeight, .5, {y: 0, ease:"easeOutQuart"});
        TweenLite.set(hotspotFour, {autoAlpha: 0});
        TweenLite.set(hotspotFive, {autoAlpha: 0});
    });  


    subscreenHeart.on("swipeend", function(e) { //swipedown
        e.preventDefault();
        if(e.angle > 245 && e.angle < 305 ){
            TweenLite.to(subscreenHeart, .5, {y: 264, ease:"easeOutQuart"});
            TweenLite.set(hotspotFour, {autoAlpha: 1});
            TweenLite.set(hotspotFive, {autoAlpha: 1});
        }
    });


    subscreenWeight.on("swipeend", function(e) { //swipedown
        e.preventDefault();
        if(e.angle > 245 && e.angle < 305 ){
            TweenLite.to(subscreenWeight, .5, {y: 264, ease:"easeOutQuart"});
            TweenLite.set(hotspotFour, {autoAlpha: 1});
            TweenLite.set(hotspotFive, {autoAlpha: 1});
        }
    });


    hotspotSix.on("tap", function(e) {
        if (count == 1) {
            TweenLite.set(totalweight90, {alpha: 0});
            TweenLite.set(totalweight95, {alpha: 1});
            count++;
        } else if (count == 2) {
            TweenLite.set(totalweight95, {alpha: 0});
            TweenLite.set(totalweight100, {alpha: 1});
            count++;
        } else if (count == 3) {
            TweenLite.set(totalweight100, {alpha: 0});
            TweenLite.set(totalweight105, {alpha: 1});
            count++;
        } else if (count == 4) {
            TweenLite.set(totalweight105, {alpha: 0});
            TweenLite.set(totalweight110, {alpha: 1});
            count++;
        } else if (count == 5) {
            TweenLite.set(totalweight110, {alpha: 0});
            TweenLite.set(totalweight115, {alpha: 1});
            count++;
        } else if (count == 6) {
            TweenLite.set(totalweight115, {alpha: 0});
            TweenLite.set(totalweight120, {alpha: 1});
            count++;
        } else if (count == 7) {
            TweenLite.set(totalweight120, {alpha: 0});
            TweenLite.set(totalweight125, {alpha: 1});
            count++;
        } else if (count == 8) {
            TweenLite.set(totalweight125, {alpha: 0});
            TweenLite.set(totalweight130, {alpha: 1});
            count++;
        }
        });

    hotspotSeven.on("tap", function(e) {
        if (count == 2) {
            TweenLite.set(totalweight95, {alpha: 0});
            TweenLite.set(totalweight90, {alpha: 1});
            count--;
        } else if (count == 3) {
            TweenLite.set(totalweight100, {alpha: 0});
            TweenLite.set(totalweight95, {alpha: 1});
            count--;
        } else if (count == 4) {
            TweenLite.set(totalweight105, {alpha: 0});
            TweenLite.set(totalweight100, {alpha: 1});
            count--;
        } else if (count == 5) {
            TweenLite.set(totalweight110, {alpha: 0});
            TweenLite.set(totalweight105, {alpha: 1});
            count--;
        } else if (count == 6) {
            TweenLite.set(totalweight115, {alpha: 0});
            TweenLite.set(totalweight110, {alpha: 1});
            count--;
        } else if (count == 7) {
            TweenLite.set(totalweight120, {alpha: 0});
            TweenLite.set(totalweight115, {alpha: 1});
            count--;
        } else if (count == 8) {
            TweenLite.set(totalweight125, {alpha: 0});
            TweenLite.set(totalweight120, {alpha: 1});
            count--;
        } else if (count == 9) {
            TweenLite.set(totalweight130, {alpha: 0});
            TweenLite.set(totalweight125, {alpha: 1});
            count--;
        }
        });

});