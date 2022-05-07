
AOS.init();


$( () => {



    $('.header ul a').on('click', function(e) {
        e.preventDefault();
        $(this).addClass('active').parent().siblings().find('a').removeClass('active');


        $('html , body').animate({
            scrollTop :$('#' + $(this).attr('data-section')).offset().top,
        });
    });




$(window).scroll( function() {
    $('.scroll').each( function() {
        if($(window).scrollTop() > $(this).offset().top) {

        let syncLink = $(this).attr('id');
        $('.navbar li a').removeClass('active')
        $(`.navbar li a[data-section = '${ syncLink }']`).addClass('active');

    };
    
});


// $('.stats .number').each(function() {

//     if($(window).scrollTop() >= $(this).offset().top - 250) {



        $('.stats .number').each(function() {

        let This = $(this);

        $({Counter : This.text() }).animate({   Counter : This.attr('data-number')    },
        {
            duration: '1000',
            easing: 'swing',
            step: function() {
                This.text(Math.ceil(this.Counter))
            }
        }
    )


    //     })


    // }


});



// function increase(el) {
//     let goal = el.attr('data-number'),
//         number = 1;

//     let counter = setInterval( () => {
//         el.html(number++);
//     },10)

// if(el.html() == goal) {
//     clearInterval(counter);
// }
// }


});


})