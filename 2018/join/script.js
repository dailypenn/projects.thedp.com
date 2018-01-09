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
  });
}
