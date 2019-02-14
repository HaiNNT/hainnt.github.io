/*
Author URI: http://webthemez.com/
Note: 
Licence under Creative Commons Attribution 3.0 
Do not remove the back-link in this web template 
-------------------------------------------------------*/

$(window).load(function() {
    jQuery('#all').click();
    return false;
});

$(document).ready(function() {
    var secondsTo = (new Date(2019, 3, 20, 7, 30, 0) - Date.now()) / 1000;
    var clock = $('.your-clock').FlipClock(secondsTo, {
        // ... your options here
        clockFace: 'DailyCounter',
        countdown: true
    });

    var img1 = document.getElementById("img1");
    var img2 = document.getElementById("img2");
    var img3 = document.getElementById("img3");

    setTimeout(function() {
        $(img1).fadeOut(900);
    }, 4000);
    setTimeout(function() {
        $(img1).fadeIn(900);
    }, 12000);

    setTimeout(function() {
        $(img2).fadeOut(900);
    }, 8000);
    setTimeout(function() {
        $(img2).fadeIn(900);
    }, 12000);

    setInterval(function() {
        setTimeout(function() {
            $(img1).fadeOut(900);
        }, 4000);
        setTimeout(function() {
            $(img1).fadeIn(900);
        }, 12000);
    }, 12000);

    setInterval(function() {
        setTimeout(function() {
            $(img2).fadeOut(900);
        }, 8000);
        setTimeout(function() {
            $(img2).fadeIn(900);
        }, 12000);
    }, 12000);

    // setInterval(function() {
    //     setTimeOut(function() {
    //         $(img3).fadeOut();
    //     }, 6000);
    //     setTimeOut(function() {
    //         $(img3).fadeIn();
    //     }, 6000);
    // }, 6000);

    $('#header_wrapper').scrollToFixed();
    $('.res-nav_click').click(function() {
        $('.main-nav').slideToggle();
        return false

    });

    function resizeText() {
        var preferredWidth = 767;
        var displayWidth = window.innerWidth;
        var percentage = displayWidth / preferredWidth;
        var fontsizetitle = 25;
        var newFontSizeTitle = Math.floor(fontsizetitle * percentage);
        $(".divclass").css("font-size", newFontSizeTitle)
    }
    if ($('#main-nav ul li:first-child').hasClass('active')) {
        $('#main-nav').css('background', 'none');
    }
    $('#mainNav').onePageNav({
        currentClass: 'active',
        changeHash: false,
        scrollSpeed: 950,
        scrollThreshold: 0.2,
        filter: '',
        easing: 'swing',
        begin: function() {},
        end: function() {
            if (!$('#main-nav ul li:first-child').hasClass('active')) {
                $('.header').addClass('addBg');
            } else {
                $('.header').removeClass('addBg');
            }

        },
        scrollChange: function($currentListItem) {
            if (!$('#main-nav ul li:first-child').hasClass('active')) {
                $('.header').addClass('addBg');
            } else {
                $('.header').removeClass('addBg');
            }
        }
    });

    var container = $('#portfolio_wrapper');


    container.isotope({
        animationEngine: 'best-available',
        animationOptions: {
            duration: 200,
            queue: false
        },
        layoutMode: 'fitRows'
    });

    $('#filters a').click(function() {
        $('#filters a').removeClass('active');
        $(this).addClass('active');
        var selector = $(this).attr('data-filter');
        container.isotope({
            filter: selector
        });
        setProjects();
        return false;
    });

    function splitColumns() {
        var winWidth = $(window).width(),
            columnNumb = 1;


        if (winWidth > 1024) {
            columnNumb = 4;
        } else if (winWidth > 900) {
            columnNumb = 2;
        } else if (winWidth > 479) {
            columnNumb = 2;
        } else if (winWidth < 479) {
            columnNumb = 1;
        }

        return columnNumb;
    }

    function setColumns() {
        var winWidth = $(window).width(),
            columnNumb = splitColumns(),
            postWidth = Math.floor(winWidth / columnNumb);

        container.find('.portfolio-item').each(function() {
            $(this).css({
                width: postWidth + 'px'
            });
        });
    }

    function setProjects() {
        setColumns();
        container.isotope('reLayout');
    }

    container.imagesLoaded(function() {
        setColumns();
    });


    $(window).bind('resize', function() {
        setProjects();
    });

    $(".fancybox").fancybox();
});

wow = new WOW({
    animateClass: 'animated',
    offset: 100
});
wow.init();
// document.getElementById('').onclick = function() {
//     var section = document.createElement('section');
//     section.className = 'wow fadeInDown';
//     section.className = 'wow shake';
//     section.className = 'wow zoomIn';
//     section.className = 'wow lightSpeedIn';
//     this.parentNode.insertBefore(section, this);
// };