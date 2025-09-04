$(document).ready(function(){
    $(window).scroll(function(){
        // sticky navbar on scroll script
        if(this.scrollY > 20){
            $('.navbar').addClass("sticky");
        }else{
            $('.navbar').removeClass("sticky");
        }
        
        // scroll-up button show/hide script
        if(this.scrollY > 500){
            $('.scroll-up-btn').addClass("show");
        }else{
            $('.scroll-up-btn').removeClass("show");
        }
    });

    // slide-up script
    $('.scroll-up-btn').click(function(){
        $('html').animate({scrollTop: 0});
        // removing smooth scroll on slide-up button click
        $('html').css("scrollBehavior", "auto");
    });

    $('.navbar .menu li a').click(function(){
        // applying again smooth scroll on menu items click
        $('html').css("scrollBehavior", "smooth");
    });

    // toggle menu/navbar script
    $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });

    // typing text animation script
    var typed = new Typed(".typing", {
        strings: ["Data Scientist", "Research Enthusiast", "Web Developer", "System Engineer", "AI Enthusiast", "Blokchain Enthusiast"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    var typed = new Typed(".typing-2", {
        strings: ["Data Scientist", "Research Enthusiast", "Web Developer", "System Engineer", "AI Enthusiast", "Blokchain Enthusiast"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    // owl carousel script
    $('.carousel').owlCarousel({
        margin: 20,
        loop: true,
        autoplay: true,
        autoplayTimeOut: 2000,
        autoplayHoverPause: true,
        responsive: {
            0:{
                items: 1,
                nav: false
            },
            600:{
                items: 2,
                nav: false
            },
            1000:{
                items: 3,
                nav: false
            }
        }
    });
});


$(document).ready(function() {
    function showTimelineContent(year) {
        $('.timeline-year-content').removeClass('active-content').hide();
        $('#content-' + year).addClass('active-content').show();
    }
    function updateTimelineDot(year) {
        $('.timeline-line-with-dots .dot').removeClass('active-dot');
        $('.timeline-line-with-dots .dot[data-year="' + year + '"]').addClass('active-dot');
    }
    $('.timeline-button').on('click', function() {
        $('.timeline-button').removeClass('active');
        $(this).addClass('active');
        const selectedYear = $(this).data('year');
        showTimelineContent(selectedYear);
        updateTimelineDot(selectedYear);
    });
    const initialYear = $('.timeline-button.active').data('year');
    showTimelineContent(initialYear);
    updateTimelineDot(initialYear);
});
