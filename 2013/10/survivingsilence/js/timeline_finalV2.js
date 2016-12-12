
$(document).ready(function() {
    $('#mainMenu').hide();
    $('#year').hide();
    $('.date').hide();
    $('#mainMenu').slideDown();
    hi = $(window).height();
    wi = $(window).width();

    $(' .wrapper, #intro').css({'height': hi + 'px'});
    $('#end,#endM').css({'height': hi / 4 + 'px'});
    var scale= (hi/680);
    
    //should re-sizing be set for phone too?
    $('#skrollr-body2, #skrollr-body').css({'font-size':16*scale+'px'});

    $("#top,#topM").click(function() {
        setTimeout($(window).scrollTo('0%', 1000),100);
        $('#year').css({'top': 0 + '%'});
    });
    
    $('.menuD').click(function(){
        var date= $(this).attr('id');
        if(date<=2){$(window).scrollTo((hi*1)+'px',1000);}
        else if(date>2 && date<5){$(window).scrollTo((hi*2)+'px',1000);}
        else if(date>4 && date<6){$(window).scrollTo((hi*3)+'px',1000);}
        else if(date>5 && date<7){$(window).scrollTo((hi*4)+'px',1000);}
        else if(date>6 && date<9){$(window).scrollTo((hi*7)+'px',1000);}
        else if(date>8 && date<10){$(window).scrollTo((hi*8)+'px',1000);}
        else if(date>9){$(window).scrollTo((hi*9)+'px',1000);}
    });
    
    $(window).scroll(function() {
        var st = $(this).scrollTop();
        var pos=Math.round(st/hi);
        
        if ((st/hi) < 1)
        {
            $('#year').hide();
            $('.date').hide();
            $('#year').css({'top': 0 + '%'});

        }
        
        if ((st / hi) >= 1)
        {
            $('#year').show();
            $('.date').show();
        }
        
        if (pos === 1)
        {
            $('#year').css({'top': 6.7 + '%'}, 700);
        }

        else if (pos === 2)
        {
            $('#year').css({'top': 26.9 + '%'}, 700);
        }

        else if (pos === 3)
        {
            $('#year').css({'top': 39 + '%'}, 700);
           
        }

        else if (pos === 4)
        {
            $('#year').css({'top': 49.3 + '%'}, 700);
           
        }

        else if (pos === 5)
        {
            $('#year').css({'top': 52 + '%'}, 700);
        }

        else if (pos === 6)
        {
            $('#year').css({'top': 56.5 + '%'}, 700);
        }

        else if (pos === 7)
        {
            $('#year').css({'top': 67.1 + '%'}, 700);
        }

        else if (pos === 8)
        {
            $('#year').css({'top': 79.8 + '%'}, 700);
        }

        else if (pos === 9)
        {
            $('#year').css({'top': 93.3 + '%'}, 700);
        }        
        
        else if (pos>9)
            {
                        $('#year').css({'top': 93.3 + '%'}, 700);

            }
    });



   // $('#divs').snapscroll();

    skrollr.init({
        forceHeight: false
    });
});