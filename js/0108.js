$(document).ready(function(){
    $('.content-about').slideUp(800);
    $('.content-about').slideDown();(1000);


    $(".slider-start").owlCarousel(
        {
            items:1,
            margin:10,
            loop: true,
            autoplay: true,
            autoplayTimeout: 8000,
            nav: true,
            navText:['<i class="fa fa-angle-left"></i>','<i class="fa fa-angle-right"></i>'],
            // navSpeed: 6000,
            // items 3 : hien 3 hinh
        }
    );
    $(".slider-end").owlCarousel(
        {
            items:6,
            margin:10,
            loop: true,
            autoplay: true,
            autoplayTimeout: 3000,
            nav: true,
            navText:['<i class="fa fa-angle-left"></i>','<i class="fa fa-angle-right"></i>'],
            // navSpeed: 6000,
            // items 3 : hien 3 hinh
        }
    );
        $(window).scroll(function () { 
            var height = $(window).scrollTop();
            if(height > 200){
            $("header").css({"position": "fixed"});
            $(".arrow-up").css({"opacity":1});
        }
            else {
                $("header").css({"position": "relative","width":"1200px", "x-index":"10",
            });
            $(".arrow-up").css({"opacity":0});

            }
        });
        $(".abc").click(function (e) { 
            $(".language").toggle(1000);
             
         });
         $(".arrow-up").click(function (e) { 
            $('body,html').animate({
                scrollTop: 0
            }, 800);
            return false;             
         });

  });
 