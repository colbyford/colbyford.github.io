/**
 * @Package: Caliber - Multi Purpose HTML Template
 * @Since: Caliber 1.0
 * This file is part of Caliber - Multi Purpose HTML package.
 */

jQuery(function($) {

    'use strict';

    var CALIBER_SETTINGS = window.CALIBER_SETTINGS || {};



    /*--------------------------------
        Gallery Filtering (MixItUp)
     --------------------------------*/

    CALIBER_SETTINGS.galleryFiltering = function() {

        if ($.isFunction($.fn.mixItUp)) {

            $('#gallery-mixitup').mixItUp({

                animation: {
                    duration: 480,
                    effects: 'fade translateX(10%) scale(0.25) stagger(58ms)',
                    easing: 'ease'
                },

                selectors: {
                    target: '.filter-item',
                    filter: '.filter-mixitup .filter'
                }

            });

        }
    }


    /*--------------------------------
        Gallery Filtering (MixItUp)
     --------------------------------*/

    CALIBER_SETTINGS.fancyBox = function() {
        if ($.isFunction($.fn.fancybox)) {
            $('.fancybox').fancybox();
        }
    }


    /*--------------------------------
        Parallax Scrolling
     --------------------------------*/
    CALIBER_SETTINGS.parallaxScrolling = function() {

        if ($.isFunction($.fn.localScroll)) {
            $('#parallax-nav-primary').localScroll(800);
            $('#parallax-nav-dark').localScroll(800);
            $('#parallax-mobile-menu').localScroll(800);

        }

        if ($.isFunction($.fn.parallax)) {

            $('#header').parallax("50%", 0.1);
            $('#about').parallax("50%", 0.1);
            $('#team').parallax("50%", 0.1);
            $('#services').parallax("50%", 0.1);
            $('#capabilities').parallax("50%", 0.1);
            $('#portfolio').parallax("50%", 0.1);
            $('#blog').parallax("50%", 0.1);
            $('#contact').parallax("50%", 0.1);

            //.parallax(xPosition, speedFactor, outerHeight) options:
            //xPosition - Horizontal position of the element
            //inertia - speed to move relative to vertical scroll. Example: 0.1 is one tenth the speed of scrolling, 2 is twice the speed of scrolling
            //outerHeight (true/false) - Whether or not jQuery should use it's outerHeight option to determine when a section is in the viewport


        }
    }


    /*--------------------------------
        Fixed Header Menu for Parallax
     --------------------------------*/

    CALIBER_SETTINGS.fixedParallaxHeader = function() {

        if ($.isFunction($.fn.parallax)) {
            //  alert($(window).scrollTop() +" "+$("#slides").height());
            if ($(window).scrollTop() >= 50) {
                $('.header-parallax').addClass("fixed-top");
            } else {
                $('.header-parallax').removeClass("fixed-top");
            }
        }

    }


    /*--------------------------------
        Twitter Carousel
     --------------------------------*/

    CALIBER_SETTINGS.twitterCarousel = function() {

        if ($.isFunction($.fn.owlCarousel)) {

            $("#twitter-carousel").owlCarousel({
                autoPlay: 3000,
                stopOnHover: true,
                navigation: true,
                pagination: false,
                navigationText: ["<i class='mdi mdi-chevron-left'>", "<i class='mdi mdi-chevron-right'>"],
                paginationSpeed: 1000,
                goToFirstSpeed: 2000,
                singleItem: true,
                autoHeight: true,
                transitionStyle: "fade"
            });

        }

    }

    /*--------------------------------
        Image Carousel (Made for you Section)
     --------------------------------*/

    CALIBER_SETTINGS.imageCarousel = function() {

        if ($.isFunction($.fn.owlCarousel)) {

            $("#image-slider").owlCarousel({
                autoPlay: 5000,
                stopOnHover: true,
                navigation: false,
                pagination: true,
                paginationSpeed: 1000,
                goToFirstSpeed: 2000,
                singleItem: true,
                autoHeight: true,
                lazyLoad : true,
                transitionStyle: "fade"
            });

        }

    }

    /*--------------------------------
        Slider Header Carousel
     --------------------------------*/

    CALIBER_SETTINGS.headerSliderCarousel = function() {

        if ($.isFunction($.fn.owlCarousel)) {

            $("#header-slider").owlCarousel({
                autoPlay: 5000,
                stopOnHover: true,
                navigation: true,
                navigationText: ["<i class='mdi mdi-chevron-left'>", "<i class='mdi mdi-chevron-right'>"],
                pagination: false,
                paginationSpeed: 1000,
                goToFirstSpeed: 2000,
                singleItem: true,
                lazyLoad : true,
                autoHeight: true,
                transitionStyle: "fade"
            });

        }

    }

    /*--------------------------------
        Slider Header Carousel
     --------------------------------*/

    CALIBER_SETTINGS.inViewPortAnimation = function() {

        if ($.isFunction($.fn.viewportChecker)) {

            $('.inviewport').addClass("hiddenthis").viewportChecker({
                classToAdd: 'visiblethis',
                offset: 0,
                callbackFunction: function(elem) {
                    var effect = $(elem).attr("data-effect");
                    $(elem).addClass(effect);
                }
            });

        }

    }



    /*--------------------------------
        Mobile Menu
     --------------------------------*/

    CALIBER_SETTINGS.mobileMenu = function() {

        var mobile_str = "";
        $(".menu-ul").each(function() {
            mobile_str += $(this).html();
        });

        $(".menu-mobile ul.menu").html(mobile_str);

        $(".menu-toggle").on('click', function() {
            $(".menu-mobile.cssmenu").toggleClass("open");
            $(this).toggleClass("mdi-menu mdi-close");
        });

        $('.menu-mobile.cssmenu li.has-sub a').on('click', function(e) {
            $(this).parent().children("ul").toggleClass("open");
            $(this).find("i").toggleClass("open");
            e.stopPropagation();
        });
    }



    /*--------------------------------
        Contact AJAX Form
     --------------------------------*/

    CALIBER_SETTINGS.validateContactForm = function() {

        $('#c_name').keyup(function() {
            var name = $("#c_name").val();
            if (name == null || name == "") {
                $("#c_name").removeClass("green");
                console.log(name + "name err");
            } else {
                $("#c_name").addClass("green");
                console.log("name done");
            }
            enable_form();
        });

        $('#c_email').keyup(function() {

            var email = $("#c_email").val();
            var atpos = email.indexOf("@");
            var dotpos = email.lastIndexOf(".");

            if (email == null || email == "" || atpos < 1 || dotpos < atpos + 2 || dotpos + 2 >= email.length) {
                $("#c_email").removeClass("green");
                console.log("email err");
            } else {
                $("#c_email").addClass("green");
                console.log("email done");
            }
            enable_form();
        });

        $('#c_phone').keyup(function() {

            var phone = $("#c_phone").val();
            var phoneRE = /^[\d\.\-]+$/;

            if (phone == null || phone == "" || phone.length < 10 || !phoneRE.test(phone)) {
                $("#c_phone").removeClass("green");
                console.log("phone err");
            } else {
                $("#c_phone").addClass("green");
                console.log("phone done");
            }
            enable_form();

        });

        $('#c_message').keyup(function() {

            var message = $("#c_message").val();
            if (message == null || message == "" || message.length < 9) {
                $("#c_message").removeClass("green");
                console.log("message err");
            } else {
                $("#c_message").addClass("green");
                console.log("message done");
            }

            enable_form();

        });

    }


    CALIBER_SETTINGS.sendMessageAJAX = function() {

        $("#c_send").on('click', function() {
            if ($(this).hasClass("disabled")) {
                        $("#response_email").html("Please Fill in your details correctly and try again");
            } else {

              var email = $('#c_email').val();
              var name = $('#c_name').val();
              var phone = $('#c_phone').val();
              var msg = $('#c_message').val();

                var xmlhttp;
                if (window.XMLHttpRequest) { // code for IE7+, Firefox, Chrome, Opera, Safari
                    xmlhttp = new XMLHttpRequest();
                } else { // code for IE6, IE5
                    xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
                }
                xmlhttp.onreadystatechange = function() {
                    if (xmlhttp.readyState == 1) {
                        $("#response_email").html("Sending...");
                    }
                    if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
                        $("#response_email").html(xmlhttp.responseText);
                    }
                }
                xmlhttp.open("POST", "maintainemail.php", true);
                xmlhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
                xmlhttp.send("email=" + encodeURIComponent(email) + "&name=" + encodeURIComponent(name) + "&phone=" + encodeURIComponent(phone) + "&msg=" + encodeURIComponent(msg));
                return false;

            }
        });

    }


    function enable_form() {
        if ($("#c_name").hasClass("green") &&
            $("#c_phone").hasClass("green") &&
            $("#c_email").hasClass("green") &&
            $("#c_message").hasClass("green")) {
            $("#c_send").removeClass("disabled");
            console.log("enabled");
        } else {
            $("#c_send").addClass("disabled");
            console.log("disabled");
        }

    }






    CALIBER_SETTINGS.isotopeMasonaryGallery = function() {


        if ($.isFunction($.fn.isotope)) {

            var $container = $('#gallery-isotope');
            $container.isotope({
                filter: '*',
                layoutMode: 'sloppyMasonry',
                animationOptions: {
                    duration: 750,
                    easing: 'linear',
                    queue: false
                }
            });
         
            $('.filter-isotope .filter').click(function(){
                $('.filter-isotope .filter.active').removeClass('active');
                $(this).addClass('active');
         
                var selector = $(this).attr('data-filter');
                $container.isotope({
                    filter: selector,
                    layoutMode: 'sloppyMasonry',
                    animationOptions: {
                        duration: 750,
                        easing: 'linear',
                        queue: false
                    }
                 });
                 return false;
            }); 
        }       
    }




    /*--------------------------------
        Settings Panel
     --------------------------------*/

    CALIBER_SETTINGS.settingsPanel = function() {

        $(".settings-panel .toggle").on('click', function() {
            $(".settings-panel").toggleClass("collapsed");
            $(this).toggleClass("mdi-settings mdi-close");
        });

        $(".settings-panel .style div").on('click', function() {
            var sections = $(this).attr("data-sections");
            $("#settings-response").load('settings.php', {"sections":sections} );
            window.location.reload();
        });

        $(".settings-panel .colors div").on('click', function() {
            var color = $(this).attr("data-color");
            var colorfile = "";

            if(color == "yellow"){
                colorfile = "";
            } else {
                colorfile = "."+color;
            }

            $("#main-style").attr("href", "css/style" + colorfile + ".css");
            $(".settings-panel .colors div").removeClass("active");
            $(this).addClass("active");

            $("#settings-response").load('settings.php', {"color":color} );

            $(".style-dependent").each(function() {
                var src = $(this).attr("src");
                var oldsrc = src;
                src = src.replace("yellow",color); 
                src = src.replace("red",color); 
                src = src.replace("orange",color); 
                src = src.replace("blue",color); 
                src = src.replace("green",color); 

                if(src != oldsrc){
                    $(this).attr("src",src);
                }

            });



        });


    }


    /******************************
     initialize respective scripts 
     *****************************/
    $(document).ready(function() {
        CALIBER_SETTINGS.galleryFiltering();
        CALIBER_SETTINGS.twitterCarousel();
        CALIBER_SETTINGS.imageCarousel();
        CALIBER_SETTINGS.headerSliderCarousel();
        CALIBER_SETTINGS.inViewPortAnimation();
        CALIBER_SETTINGS.mobileMenu();
        CALIBER_SETTINGS.validateContactForm();
        CALIBER_SETTINGS.sendMessageAJAX();
        CALIBER_SETTINGS.fancyBox();
        CALIBER_SETTINGS.parallaxScrolling();
        CALIBER_SETTINGS.settingsPanel();
       });

    $(window).scroll(function() {
        CALIBER_SETTINGS.fixedParallaxHeader();
    });

    $(window).resize(function() {});

    $(window).load(function() {
        CALIBER_SETTINGS.isotopeMasonaryGallery();
    });

});
