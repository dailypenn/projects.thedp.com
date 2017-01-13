$(document).ready(function(){
	$("#demosMenu").change(function(){
	  window.location.href = $(this).find("option:selected").attr("id") + '.html';
	});
  $('#fullpage').fullpage({
    anchors: ['join-intro', 'join-news', 'join-copy', 'join-sports', 'join-social', 'join-photo', 'join-design', 'join-video', 'join-web', 'join-podcasts', 'join-ed-analytics', 'join-advertising', 'join-marketing', 'join-circulation', 'join-biz-analytics', 'join-34st', 'join-utb', 'join-join'],
    css3: true,
    scrollingSpeed: 500,
    scrollBar: true,
		autoScrolling: false//,
//		fitToSection: false
  });
});

$(function() {
  $('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });
});
