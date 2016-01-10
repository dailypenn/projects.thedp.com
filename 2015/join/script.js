$(document).ready(function(){
	$("#demosMenu").change(function(){
	  window.location.href = $(this).find("option:selected").attr("id") + '.html';
	});
  $('#fullpage').fullpage({
    anchors: ['intro', 'editorial', 'news', 'copy', 'sports'],
    sectionsColor: ['#EAE9E9', '#EAE9E9', '#7E8F7C'],
    css3: true,
    scrollingSpeed: 500,
    scrollBar: true
  });
});