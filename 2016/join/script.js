$(document).ready(function(){
	$("#demosMenu").change(function(){
	  window.location.href = $(this).find("option:selected").attr("id") + '.html';
	});
  $('#fullpage').fullpage({
    anchors: ['intro', 'edz', 'news', 'copy', 'sports', 'social', 'photo', 'design', 'video', 'web', 'ed-analytics', 'biz', 'advertising', 'marketing', 'dpict', 'circulation', 'biz-analytics', 'sponsored', '34st','utb', 'join'],
    css3: true,
    scrollingSpeed: 500,
    scrollBar: true,
		paddingTop: '70px',
		autoScrolling: false
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
