$(window).load(function() {

    'use strict';
    $("#pageloader").delay(1200).fadeOut("slow");
    $(".loader-item").delay(700).fadeOut();

    smoothScroll.init();

});


/* ==============================================
Custom Javascript
=============================================== */
$(document).ready(function() {

    'use strict';
    
    if($(window).width()>767){	
                            
        function autosize_homepage_image(){
            var height = jQuery( window ).height();
            jQuery('#home .home-header').css('height', height + 'px');
        }
        jQuery( function(){
            autosize_homepage_image();
            jQuery( window ).resize( function(){
                autosize_homepage_image();
            })
        });
        
        
        $(function() {
            var header = $(".navbar "),
                yOffset = 0,
                triggerPoint = 150;
            $(window).scroll(function() {
                yOffset = $(window).scrollTop();
    
                if (yOffset >= triggerPoint) {
                    header.addClass("navbar-fixed-top animated fadeInDown");
                } else {
                    header.removeClass("navbar-fixed-top animated fadeInDown");
                }
    
            });
        });
    }
    else{
        jQuery(window).resize(function(){
            autosize_homepage_image();
        })
    }
    

    $('body').scrollspy({
        target: '.navbar',
        offest: 0
    });
    
    // Bootstrap Tooltip
    $('.social-icons a').tooltip({
        placement: 'bottom',
    });

    //Mobile Nav
    $('#navbar').on('click', function(e) {
        $('.navbar-collapse').removeClass('in').addClass("collapse");
    });
    

    //Shrink Header
    var shrinkHeader = 130;
    $(window).scroll(function() {
        var scroll = getCurrentScroll();
        if (scroll >= shrinkHeader) {
            $('header').addClass('colored');
        } else {
            $('header').removeClass('colored');
        }
    });

    function getCurrentScroll() {
        return window.pageYOffset || document.documentElement.scrollTop;
    }          
        
    // Contact Form    
    jQuery("#contact_form").validate({
        meta: "validate",
        submitHandler: function(form) {
            form.preventDefault();
            var s_name = $("#name").val();
            var s_lastname = $("#lastname").val();
            var s_email = $("#email").val();
            var s_phone = $("#phone").val();
            var s_suject = $("#subject").val();
            var s_comment = $("#comment").val();
            $.post('/Mailcontactcontroller/addMail_new/', {
                    Name: s_name,
                    Lastname: s_lastname,
                    Email: s_email,
                    Phone: s_phone,
                    Subject: s_suject,
                    Content: s_comment
                },
                function(result) {
                    $('#sucessmessage').append(result);
                });
            $('#contact_form').hide();
            return false;
        },
        /* */
        rules: {
            name: "required",

            lastname: "required",
            // simple rule, converted to {required:true}
            email: { // compound rule
                required: true,
                email: true
            },
            phone: {
                required: true,
            },
            comment: {
                required: true
            },
            subject: {
                required: true
            }
        },
        messages: {
            name: "Please enter your name.",
            lastname: "Please enter your last name.",
            email: {
                required: "Please enter email.",
                email: "Please enter valid email"
            },
            phone: "Please enter a phone.",
            subject: "Please enter a subject.",
            comment: "Please enter a comment."
        },
    }); 
        
    /* hide #back-top first */
    $("#back-top").hide();
    // fade in #back-top
    $(window).scroll(function() {
        if ($(this).scrollTop() > 100) {
            $('#back-top').fadeIn();
        } else {
            $('#back-top').fadeOut();
        }
    });
    // scroll body to 0px on click
    $('#back-top a').on('click', function(e) {
        $('body,html').animate({
            scrollTop: 0
        }, 800);
        return false;
    });

});