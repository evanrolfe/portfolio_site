




/*
     FILE ARCHIVED ON 22:17:53 May 18, 2014 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 9:50:41 Jul 8, 2014.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
$(document).ready(function () {

    
    
    /* Theme Switcher */

    $('.open-switcher').click(function ()
    {

        if ($('.switcher').css('left') === '0px')
        {
            $('.switcher').css("left", "-60px");
        }
        else
        {
            $('.switcher').css("left", "0px");
        }
    });

    /* Theme Switcher */




    /*Smooth Scroll Function*/
    $(function () {
        $('#nav li a[href^=#]').click(function () {
            if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {

                var $target = $(this.hash);

                var linkto = $target.selector;
                $("#nav").find('a').removeClass('current');
                $("#nav").find('a[href="' + linkto + '"]').addClass('current');




                $target = $target.length && $target || $('[name=' + this.hash.slice(1) + ']');

                if ($target.length) {
                    var targetOffset = $target.offset().top;
                    $('html,body').animate({
                        scrollTop: targetOffset - 100
                    }, 1000);
                    return false;
                }
            }
        });
    });


    $(function ()
    {
        $('.p-arrow a[href^=#]').click(function ()
        {
            if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname)
            {

                var $target = $(this.hash);

                var linkto = $target.selector;
                $("#nav").find('a').removeClass('current');
                $("#nav").find('a[href="' + linkto + '"]').addClass('current');




                $target = $target.length && $target || $('[name=' + this.hash.slice(1) + ']');

                if ($target.length)
                {
                    var targetOffset = $target.offset().top;
                    $('html,body').animate({
                        scrollTop: targetOffset - 100
                    }, 1000);
                    return false;
                }
            }
        });
    });


    /*Smooth Scroll Function*/



    /*Work Process UL*/
    $(".div-workballs ul .li-item1").hover(

    function () {
        $(this).addClass("hovereffect");

        $(".div-workballs ul .li-item2").removeClass("hovereffect");
        $(".div-workballs ul .li-item3").removeClass("hovereffect");
        $(".div-workballs ul .li-item4").removeClass("hovereffect");
        $(".div-workballs ul .li-item5").removeClass("hovereffect");


        $(".div-workdesc.work-item1").show();

        $(".div-workdesc.work-item2").hide();
        $(".div-workdesc.work-item3").hide();
        $(".div-workdesc.work-item4").hide();
        $(".div-workdesc.work-item5").hide();
    });

    $(".div-workballs ul .li-item2").hover(

    function () {

        $(this).addClass("hovereffect");

        $(".div-workballs ul .li-item1").removeClass("hovereffect");
        $(".div-workballs ul .li-item3").removeClass("hovereffect");
        $(".div-workballs ul .li-item4").removeClass("hovereffect");
        $(".div-workballs ul .li-item5").removeClass("hovereffect");


        $(".div-workdesc.work-item2").show();

        $(".div-workdesc.work-item1").hide();
        $(".div-workdesc.work-item3").hide();
        $(".div-workdesc.work-item4").hide();
        $(".div-workdesc.work-item5").hide();

    });

    $(".div-workballs ul .li-item3").hover(

    function () {
        $(this).addClass("hovereffect");

        $(".div-workballs ul .li-item1").removeClass("hovereffect");
        $(".div-workballs ul .li-item2").removeClass("hovereffect");
        $(".div-workballs ul .li-item4").removeClass("hovereffect");
        $(".div-workballs ul .li-item5").removeClass("hovereffect");


        $(".div-workdesc.work-item3").show();

        $(".div-workdesc.work-item1").hide();
        $(".div-workdesc.work-item2").hide();
        $(".div-workdesc.work-item4").hide();
        $(".div-workdesc.work-item5").hide();

    });

    $(".div-workballs ul .li-item4").hover(

    function () {

        $(this).addClass("hovereffect");

        $(".div-workballs ul .li-item1").removeClass("hovereffect");
        $(".div-workballs ul .li-item2").removeClass("hovereffect");
        $(".div-workballs ul .li-item3").removeClass("hovereffect");
        $(".div-workballs ul .li-item5").removeClass("hovereffect");


        $(".div-workdesc.work-item4").show();

        $(".div-workdesc.work-item1").hide();
        $(".div-workdesc.work-item2").hide();
        $(".div-workdesc.work-item3").hide();
        $(".div-workdesc.work-item5").hide();

    });


    $(".div-workballs ul .li-item5").hover(

    function () {

        $(this).addClass("hovereffect");

        $(".div-workballs ul .li-item1").removeClass("hovereffect");
        $(".div-workballs ul .li-item2").removeClass("hovereffect");
        $(".div-workballs ul .li-item3").removeClass("hovereffect");
        $(".div-workballs ul .li-item4").removeClass("hovereffect");


        $(".div-workdesc.work-item5").show();

        $(".div-workdesc.work-item1").hide();
        $(".div-workdesc.work-item2").hide();
        $(".div-workdesc.work-item3").hide();
        $(".div-workdesc.work-item4").hide();

    });

    /*Work Process UL*/



    /*Portfoio filter*/

    $(document).ready(function () {

        // Blur images on mouse over
        $(".portfolio a").hover(function () {
            $(this).children("img").animate({
                opacity: 0.75
            }, "fast");
        }, function () {
            $(this).children("img").animate({
                opacity: 1.0
            }, "slow");
        });

        // Initialize prettyPhoto plugin
        $(".portfolio a[rel^='prettyPhoto']").prettyPhoto({
            theme: 'light_square',
            autoplay_slideshow: false,
            overlay_gallery: false,
            show_title: false
        });

        // Clone portfolio items to get a second collection for Quicksand plugin
        var $portfolioClone = $(".portfolio").clone();

        // Attempt to call Quicksand on every click event handler
        $(".filter a").click(function (e) {

            $(".filter li").removeClass("current");

            // Get the class attribute value of the clicked link
            var $filterClass = $(this).parent().attr("class");

            if ($filterClass == "all") {
                var $filteredPortfolio = $portfolioClone.find("li");
            } else {
                var $filteredPortfolio = $portfolioClone.find("li[data-type~=" + $filterClass + "]");
            }

            // Call quicksand
            $(".portfolio").quicksand($filteredPortfolio, {
                duration: 800,
                easing: 'easeInOutQuad'
            }, function () {

                // Blur newly cloned portfolio items on mouse over and apply prettyPhoto
                $(".portfolio a").hover(function () {
                    $(this).children("img").animate({
                        opacity: 0.75
                    }, "fast");
                }, function () {
                    $(this).children("img").animate({
                        opacity: 1.0
                    }, "slow");
                });

                $(".portfolio a[rel^='prettyPhoto']").prettyPhoto({
                    theme: 'light_square',
                    autoplay_slideshow: false,
                    overlay_gallery: false,
                    show_title: false
                });
            });


            $(this).parent().addClass("current");

            // Prevent the browser jump to the link anchor
            e.preventDefault();
        })
    });

    /*Portfoio filter*/


    /* Updated 3 Aug 2012 - Youtube Auto-stop on close overlay*/
    $(".close-video").click(function ()
    {
        var video = $(".lb-overlay-wrapper iframe").attr("src");
        $(".lb-overlay-wrapper iframe").attr("src", "");
        $(".lb-overlay-wrapper iframe").attr("src", video);
    });
    /* Updated 3 Aug 2012 - Youtube Auto-stop on close overlay*/




});