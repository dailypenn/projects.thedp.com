// editorial tabs
var inactiveTeam = function() {
  var tabs = document.getElementsByClassName('team-tab');
  var text = document.getElementsByClassName('team-text');
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

var teamTabs = document.getElementsByClassName('team-tab');
for (var i = 0; i < teamTabs.length; i++) {
  teamTabs[i].addEventListener('click', function() {
    inactiveTeam();
    this.classList.add('active');
    document.getElementById(this.id + '-text').classList.add('active');

    // change department images
    switch (this.id) {
      case 'team':
        document.querySelector('section.team').style.background =
          "linear-gradient(rgba(170, 30, 34, 0.8), rgba(170, 30, 34, 0.8)), url('https://snworksceo.imgix.net/dpn/917417c6-2a39-487a-bd75-8913f3427445.sized-1000x1000.jpg')";
        break;
      case 'champ':
        document.querySelector('section.team').style.background =
          "linear-gradient(rgba(170, 30, 34, 0.9), rgba(170, 30, 34, 0.9)), url('https://snworksceo.imgix.net/dpn/01fd6964-dab3-4ec3-95e5-871ab1932e34.sized-1000x1000.jpg')";
        break;
      case 'coach':
        document.querySelector('section.team').style.background =
          "linear-gradient(rgba(170, 30, 34, 0.9), rgba(170, 30, 34, 0.9)), url('https://snworksceo.imgix.net/dpn/63f97845-7cb5-49eb-8322-bca5667583bc.sized-1000x1000.jpg')";
        break;
      default:
        document.querySelector('section.team').style.background = '#AA1E22';
    }

    // make sure image covers background
    document.querySelector('section.team').style.backgroundSize = 'cover';
    document.querySelector('section.team').style.backgroundPosition = 'center';
    document.querySelector('section.team').style.backgroundRepeat = 'no-repeat';
  });
}

// business tabs
var inactiveInd = function() {
  var tabs = document.getElementsByClassName('ind-tab');
  var text = document.getElementsByClassName('ind-text');
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

var indTabs = document.getElementsByClassName('ind-tab');
for (var i = 0; i < indTabs.length; i++) {
  indTabs[i].addEventListener('click', function() {
    inactiveInd();
    this.classList.add('active');
    document.getElementById(this.id + '-text').classList.add('active');

    // change department images
    switch (this.id) {
      case 'maleath':
        document.querySelector('section.individual').style.background =
          "linear-gradient(rgba(238, 238, 238, 0.9), rgba(238, 238, 238, 0.9)), url('https://snworksceo.imgix.net/dpn/5803b1e8-72a6-4810-9770-60123f4a066d.sized-1000x1000.jpg')";
        break;
      case 'malerook':
        document.querySelector('section.individual').style.background =
          "linear-gradient(rgba(238, 238, 238, 0.8), rgba(238, 238, 238, 0.8)), url('https://snworksceo.imgix.net/dpn/7f265244-68c1-4483-b138-8fc49c343444.sized-1000x1000.jpg')";
        break;
      case 'femrook':
        document.querySelector('section.individual').style.background =
          "linear-gradient(rgba(238, 238, 238, 0.9), rgba(238, 238, 238, 0.9)), url('https://snworksceo.imgix.net/dpn/85611786-a619-4496-9c5c-59ece6432fa5.sized-1000x1000.jpg')";
        break;
      case 'femath':
        document.querySelector('section.invidiual').style.background =
          "linear-gradient(rgba(238, 238, 238, 0.8), rgba(238, 238, 238, 0.8)), url('https://snworksceo.imgix.net/dpn/68726eb4-7df0-4e26-9d83-3ad542d33846.sized-1000x1000.jpg')";
        break;
      default:
        document.querySelector('section.individual').style.background = '#EEE';
    }

    // make sure image covers background
    document.querySelector('section.individual').style.backgroundSize = 'cover';
    document.querySelector('section.individual').style.backgroundPosition = 'center';
    document.querySelector('section.individual').style.backgroundRepeat = 'no-repeat';
  });
}

// moment tabs
var inactiveMom = function() {
  var tabs = document.getElementsByClassName('mom-tab');
  var text = document.getElementsByClassName('mom-text');
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

var momTabs = document.getElementsByClassName('mom-tab');
for (var i = 0; i < momTabs.length; i++) {
  momTabs[i].addEventListener('click', function() {
    inactiveMom();
    this.classList.add('active');
    document.getElementById(this.id + '-text').classList.add('active');

    // change department images
    switch (this.id) {
      case 'game':
        document.querySelector('section.moment').style.background =
          "linear-gradient(rgba(238, 238, 238, 0.9), rgba(238, 238, 238, 0.9)), url('https://snworksceo.imgix.net/dpn/5803b1e8-72a6-4810-9770-60123f4a066d.sized-1000x1000.jpg')";
        break;
      case 'play':
        document.querySelector('section.moment').style.background =
          "linear-gradient(rgba(238, 238, 238, 0.8), rgba(238, 238, 238, 0.8)), url('https://snworksceo.imgix.net/dpn/7f265244-68c1-4483-b138-8fc49c343444.sized-1000x1000.jpg')";
        break;
      case 'upset':
        document.querySelector('section.moment').style.background =
          "linear-gradient(rgba(238, 238, 238, 0.9), rgba(238, 238, 238, 0.9)), url('https://snworksceo.imgix.net/dpn/85611786-a619-4496-9c5c-59ece6432fa5.sized-1000x1000.jpg')";
        break;
      case 'moment':
        document.querySelector('section.moment').style.background =
          "linear-gradient(rgba(238, 238, 238, 0.8), rgba(238, 238, 238, 0.8)), url('https://snworksceo.imgix.net/dpn/68726eb4-7df0-4e26-9d83-3ad542d33846.sized-1000x1000.jpg')";
        break;
      default:
        document.querySelector('section.moment').style.background = '#CCC';
    }

    // make sure image covers background
    document.querySelector('section.moment').style.backgroundSize = 'cover';
    document.querySelector('section.moment').style.backgroundPosition = 'center';
    document.querySelector('section.moment').style.backgroundRepeat = 'no-repeat';
  });
}

