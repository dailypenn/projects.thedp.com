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
          "linear-gradient(rgba(170, 30, 34, 0.8), rgba(170, 30, 34, 0.8)), url('https://snworksceo.imgix.net/dpn/917417c6-2a39-487a-bd75-8913f3427445.sized-1000x1000.jpg')";
        break;
      case 'sports':
        document.querySelector('section.editorial').style.background =
          "linear-gradient(rgba(170, 30, 34, 0.9), rgba(170, 30, 34, 0.9)), url('https://snworksceo.imgix.net/dpn/01fd6964-dab3-4ec3-95e5-871ab1932e34.sized-1000x1000.jpg')";
        break;
      case 'opinion':
        document.querySelector('section.editorial').style.background =
          "linear-gradient(rgba(170, 30, 34, 0.9), rgba(170, 30, 34, 0.9)), url('https://snworksceo.imgix.net/dpn/63f97845-7cb5-49eb-8322-bca5667583bc.sized-1000x1000.jpg')";
        break;
      case 'design':
        document.querySelector('section.editorial').style.background =
          "linear-gradient(rgba(170, 30, 34, 0.9), rgba(170, 30, 34, 0.9)), url('https://snworksceo.imgix.net/dpn/90337c0f-5064-4457-917f-c728ffcf8e58.sized-1000x1000.jpg')";
        break;
      case 'photo':
        document.querySelector('section.editorial').style.background =
          "linear-gradient(rgba(170, 30, 34, 0.8), rgba(170, 30, 34, 0.8)), url('https://snworksceo.imgix.net/dpn/36723a03-7de6-446a-8289-34dbc15221e7.sized-1000x1000.jpg')";
        break;
      case 'multimedia':
        document.querySelector('section.editorial').style.background =
          "linear-gradient(rgba(170, 30, 34, 0.8), rgba(170, 30, 34, 0.8)), url('https://s3.amazonaws.com/snwceomedia/dpn/3f80932a-ffd6-4d0f-9b95-7713a67251ca.original.gif')";
        break;
      case 'social':
        document.querySelector('section.editorial').style.background =
          "linear-gradient(rgba(170, 30, 34, 0.8), rgba(170, 30, 34, 0.8)), url('https://snworksceo.imgix.net/dpn/4c31d16d-8363-41df-80a0-a5564b011215.sized-1000x1000.jpg')";
        break;
      case 'web':
        document.querySelector('section.editorial').style.background =
          "linear-gradient(rgba(170, 30, 34, 0.8), rgba(170, 30, 34, 0.8)), url('https://snworksceo.imgix.net/dpn/85611786-a619-4496-9c5c-59ece6432fa5.sized-1000x1000.jpg')";
        break;
      case 'podcasts':
        document.querySelector('section.editorial').style.background =
          "linear-gradient(rgba(170, 30, 34, 0.8), rgba(170, 30, 34, 0.8)), url('https://snworksceo.imgix.net/dpn/51d7e036-6b77-402a-9d6d-b1f7b8c3ab8c.sized-1000x1000.jpg')";
        break;
      case 'copy':
        document.querySelector('section.editorial').style.background =
          "linear-gradient(rgba(170, 30, 34, 0.8), rgba(170, 30, 34, 0.8)), url('https://snworksceo.imgix.net/dpn/9a678efe-73b0-4fed-9f63-2278da389db8.sized-1000x1000.jpg')";
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
      case 'marketing':
        document.querySelector('section.business').style.background =
          "linear-gradient(rgba(238, 238, 238, 0.9), rgba(238, 238, 238, 0.9)), url('https://snworksceo.imgix.net/dpn/5803b1e8-72a6-4810-9770-60123f4a066d.sized-1000x1000.jpg')";
        break;
      case 'ad':
        document.querySelector('section.business').style.background =
          "linear-gradient(rgba(238, 238, 238, 0.8), rgba(238, 238, 238, 0.8)), url('https://snworksceo.imgix.net/dpn/7f265244-68c1-4483-b138-8fc49c343444.sized-1000x1000.jpg')";
        break;
      case 'analytics':
        document.querySelector('section.business').style.background =
          "linear-gradient(rgba(238, 238, 238, 0.8), rgba(238, 238, 238, 0.8)), url('https://snworksceo.imgix.net/dpn/68726eb4-7df0-4e26-9d83-3ad542d33846.sized-1000x1000.jpg')";
        break;
      case 'innovation':
        document.querySelector('section.business').style.background =
          "linear-gradient(rgba(238, 238, 238, 0.8), rgba(238, 238, 238, 0.8)), url('https://snworksceo.imgix.net/dpn/af307706-8ed7-4389-bb37-283cdb2af2d0.sized-1000x1000.jpg')";
        break;
      case 'circulation':
        document.querySelector('section.business').style.background =
          "linear-gradient(rgba(238, 238, 238, 0.8), rgba(238, 238, 238, 0.8)), url('https://snworksceo.imgix.net/dpn/06837fc5-f166-414c-8785-9234e35205b0.sized-1000x1000.jpg')";
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
