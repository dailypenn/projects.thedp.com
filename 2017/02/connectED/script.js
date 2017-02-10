$(document).ready(function() {
    // init
    var m = moment();
    var minutes = (m.hour() * 60) + m.minute();
    var progresshour = 0;
    var clockHeight = $('#clock').height();
    var viewportHeight = window.innerHeight;
    var scrollbarHeight = viewportHeight / $(document).height() * viewportHeight;

console.log(clockHeight);

    function posLayout(scrollbarHeight) {
        $('.schedule').css('margin-top', scrollbarHeight / 2);
        $('.schedule').css('margin-bottom', scrollbarHeight / 2);
    }

    function progressToText(progress, ratio, modulo, addZero) {
        const val = modulo ? Math.floor(progress * ratio) % modulo : Math.floor(progress * ratio);
        return (val > 9 && addZero) ? val.toString() : "0" + val.toString();
    }

    function rotateElement(id, val) {
        $(id).css({
            transform: 'rotate(' + val + 'deg)',
            '-webkit-transform': 'rotate(' + val + 'deg)',
            '-ms-transform': 'rotate(' + val + 'deg)'
        });
    }
    function translateElement(id, val) {
        $(id).css({
            transform: 'translateY(' + val + 'px)',
            '-webkit-transform': 'translateY(' + val + 'px)',
            '-ms-transform': 'translateY(' + val + 'px)'
        });
    }

    function updateUI(distanceCircle, progress) {

        $('.digital-time').text('' + progressToText(progress, (1440 / 60), null, true) + ':' + progressToText(progress, 1440, 60, true) + '');
        rotateElement('#hour', progressToText(progress, 720, null, false));
        rotateElement('#minute', progressToText(progress, (518400 / 60), null, false));
        translateElement('#clock', distanceCircle);
    }

    function scrollClock(e) {
        const documentHeight = $(document).height();

        var viewportHeight = window.innerHeight;
        var scrollbarHeight = viewportHeight / documentHeight * viewportHeight;
        var progress = $(window).scrollTop() / (documentHeight - viewportHeight);
        var distanceCircle = progress * (viewportHeight - scrollbarHeight) + scrollbarHeight / 2 - clockHeight/2;

        //functions block
        posLayout(scrollbarHeight);
        updateUI(distanceCircle, progress);

    };

    // main
    posLayout(scrollbarHeight);
    window.scrollTo(0, (minutes / 1440) * ($(document).height() - window.innerHeight));

    $(window).scroll(_.throttle(function() {
        scrollClock();
    }, 80));
});
