// editorial tabs
var inactiveEd = function() {
  var tabs = document.getElementsByClassName('ed-tab');
  var text = document.getElementsByClassName('ed-text');
  for (var i = 0; i < tabs.length; i++) {
    var classes = tabs[i].classList;
    if (classes.contains('active')) {
      classes.remove('active');
    }
    var textClasses = text[i].classList;
    if (textClasses.contains('active')) {
      textClasses.remove('active');
    }
  }
}

var edTabs = document.getElementsByClassName('ed-tab');
for (var i = 0; i < edTabs.length; i++) {
  edTabs[i].addEventListener('click', function() {
    inactiveEd();
    this.classList.add('active');
    document.getElementById(this.id + '-text').classList.add('active');

    // change department images
    switch (this.id) {
      case 'news':
        document.querySelector('section.editorial').style.background =
          "linear-gradient(rgba(170, 30, 34, 0.8), rgba(170, 30, 34, 0.8)), url('img/news.jpg')";
        break;
      case 'sports':
        document.querySelector('section.editorial').style.background =
          "linear-gradient(rgba(170, 30, 34, 0.9), rgba(170, 30, 34, 0.9)), url('img/sports.jpg')";
        break;
      case 'opinion':
        document.querySelector('section.editorial').style.background =
          "linear-gradient(rgba(170, 30, 34, 0.9), rgba(170, 30, 34, 0.9)), url('img/opinion.jpg')";
        break;
      case 'design':
        document.querySelector('section.editorial').style.background =
          "linear-gradient(rgba(170, 30, 34, 0.9), rgba(170, 30, 34, 0.9)), url('img/design.jpg')";
        break;
      case 'photo':
        document.querySelector('section.editorial').style.background =
          "linear-gradient(rgba(170, 30, 34, 0.8), rgba(170, 30, 34, 0.8)), url('img/photo.jpg')";
        break;
      case 'video':
        document.querySelector('section.editorial').style.background =
          "linear-gradient(rgba(170, 30, 34, 0.8), rgba(170, 30, 34, 0.8)), url('img/video.gif')";
        break;
      case 'copy':
        document.querySelector('section.editorial').style.background =
          "linear-gradient(rgba(170, 30, 34, 0.8), rgba(170, 30, 34, 0.8)), url('img/copy.jpg')";
        break;
      default:
        document.querySelector('section.editorial').style.background = '#AA1E22';
    }

    // make sure image covers background
    document.querySelector('section.editorial').style.backgroundSize = 'cover';
    document.querySelector('section.editorial').style.backgroundPosition = 'center';
    document.querySelector('section.editorial').style.backgroundRepeat = 'no-repeat';
  });
}

// business tabs
var inactiveBiz = function() {
  var tabs = document.getElementsByClassName('biz-tab');
  var text = document.getElementsByClassName('biz-text');
  for (var i = 0; i < tabs.length; i++) {
    var classes = tabs[i].classList;
    if (classes.contains('active')) {
      classes.remove('active');
    }
    var textClasses = text[i].classList;
    if (textClasses.contains('active')) {
      textClasses.remove('active');
    }
  }
}

var edTabs = document.getElementsByClassName('biz-tab');
for (var i = 0; i < edTabs.length; i++) {
  edTabs[i].addEventListener('click', function() {
    inactiveBiz();
    this.classList.add('active');
    document.getElementById(this.id + '-text').classList.add('active');

    // change department images
    switch (this.id) {
      case 'web':
        document.querySelector('section.business').style.background =
          "linear-gradient(rgba(238, 238, 238, 0.8), rgba(238, 238, 238, 0.8)), url('img/web.jpg')";
        break;
      default:
        document.querySelector('section.business').style.background = '#EEE';
    }

    // make sure image covers background
    document.querySelector('section.business').style.backgroundSize = 'cover';
    document.querySelector('section.business').style.backgroundPosition = 'center';
    document.querySelector('section.business').style.backgroundRepeat = 'no-repeat';
  });
}
