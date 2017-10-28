// reveal function
function reveal(direction) {
  var callbackTime = 750,
    callbackFn = function() {
      classie.remove(pages[currentPage], 'page--current');
      currentPage = currentPage === 0 ? 1 : 0;
      classie.add(pages[currentPage], 'page--current');
    };

  revealer.reveal(direction, callbackTime, callbackFn);
}


$(document).ready(function() {
  document.querySelector('a.nav-arrow.top-left').addEventListener('click', function() { reveal('cornertopleft'); });
  document.querySelector('a.nav-arrow.top-right').addEventListener('click', function() { reveal('cornertopright'); });
  document.querySelector('a.nav-arrow.bottom-left').addEventListener('click', function() { reveal('cornerbottomleft'); });
  document.querySelector('a.nav-arrow.bottom-right').addEventListener('click', function() { reveal('cornerbottomright'); });
});
