// trigger nice scroll
 
let minLg = window.matchMedia("(min-width: 992px)");

if (minLg.matches) {

    $("body").niceScroll({

    cursorborder: 0,
    cursorborderradius: '25px',
    cursorwidth: '7px',
    cursorcolor: 'rgb(1, 211, 137)',
    cursorfixedheight: 120,
    zindex:'99999999'

    });
}


//trigger mixer

$(".container").mixItUp();