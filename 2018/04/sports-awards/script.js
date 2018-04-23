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
        document.querySelector('section.team').style.backgroundImage =
          "url('https://s3.amazonaws.com/snwceomedia/dpn/f5360b8d-c2c2-4310-9d7c-46913b65ac2d.sized-1000x1000.jpg')";
        document.querySelector('section.team').style.backgroundColor = "#990000";
        document.querySelector('section.team').style.backgroundBlendMode = "soft-light";
        break;
      case 'champ':
        document.querySelector('section.team').style.backgroundImage =
          "url('https://s3.amazonaws.com/snwceomedia/dpn/043f5740-2763-42f0-99a2-9c74980d288f.sized-1000x1000.jpg')";
        document.querySelector('section.team').style.backgroundColor = "#990000";
        document.querySelector('section.team').style.backgroundBlendMode = "soft-light";
        break;
      case 'coach':
        document.querySelector('section.team').style.backgroundImage =
          "url('https://s3.amazonaws.com/snwceomedia/dpn/1e437403-02a8-47ce-90cb-c2226e45b603.sized-1000x1000.jpg')";
        document.querySelector('section.team').style.backgroundColor = "#990000";
        document.querySelector('section.team').style.backgroundBlendMode = "soft-light";
        break;
      default:
        document.querySelector('section.team').style.background = '#990000';
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
        document.querySelector('section.individual').style.backgroundImage =
          "url('https://s3.amazonaws.com/snwceomedia/dpn/3211d02f-bad8-499c-a3f3-d499c2f44732.sized-1000x1000.jpg')";
        document.querySelector('section.individual').style.backgroundColor = "#011F5B";  
        document.querySelector('section.individual').style.backgroundBlendMode = "soft-light";
        break;
      case 'malerook':
        document.querySelector('section.individual').style.backgroundImage =
          "url('https://snworksceo.imgix.net/dpn/7f265244-68c1-4483-b138-8fc49c343444.sized-1000x1000.jpg')";
        document.querySelector('section.individual').style.backgroundColor = "#011F5B"; 
        document.querySelector('section.individual').style.backgroundBlendMode = "soft-light";
        break;
      case 'femrook':
        document.querySelector('section.individual').style.backgroundImage =
          "url('http://snworksceo.imgix.net/dpn/a53e770a-db89-47bc-8074-0a1a32807eda.sized-1000x1000.jpg')";
        document.querySelector('section.individual').style.backgroundColor = "#011F5B"; 
        document.querySelector('section.individual').style.backgroundBlendMode = "soft-light";
        break;
      case 'femath':
        document.querySelector('section.invidiual').style.backgroundImage =
          "url('https://snworksceo.imgix.net/dpn/68726eb4-7df0-4e26-9d83-3ad542d33846.sized-1000x1000.jpg')";
        document.querySelector('section.individual').style.backgroundColor = "#011F5B";  
        document.querySelector('section.individual').style.backgroundBlendMode = "soft-light";
        break;
        case 'fbreak':
        document.querySelector('section.individual').style.backgroundImage =
          "url('https://s3.amazonaws.com/snwceomedia/dpn/b4c3f932-9d69-41a1-b693-9a2b66846b1f.sized-1000x1000.jpg')";
        document.querySelector('section.individual').style.backgroundColor = "#011F5B";  
        document.querySelector('section.individual').style.backgroundBlendMode = "soft-light";
        break;
      case 'come':
        document.querySelector('section.individual').style.backgroundImage =
          "url('https://s3.amazonaws.com/snwceomedia/dpn/011b6265-19df-4f39-8342-84225d3aa94c.sized-1000x1000.jpg')";
        document.querySelector('section.individual').style.backgroundColor = "#011F5B";  
        document.querySelector('section.individual').style.backgroundBlendMode = "soft-light";
        break;
      case 'mbreak':
        document.querySelector('section.individual').style.backgroundImage =
          "url('https://s3.amazonaws.com/snwceomedia/dpn/c442c5db-3a57-4da0-9d08-4a3903d12f38.sized-1000x1000.jpg')";
        document.querySelector('section.team').style.backgroundColor = "#011F5B";  
        document.querySelector('section.individual').style.backgroundBlendMode = "soft-light";
        break;
      case 'indchamp':
        document.querySelector('section.invidiual').style.backgroundImage =
          "url('https://s3.amazonaws.com/snwceomedia/dpn/533c5f22-0469-42f5-bb7a-7989f291faa6.sized-1000x1000.jpg')";
        document.querySelector('section.team').style.backgroundColor = "#011F5B";        
        document.querySelector('section.individual').style.backgroundBlendMode = "soft-light";
        break;
        case 'recbreak':
        document.querySelector('section.invidiual').style.backgroundImage =
          "url('https://snworksceo.imgix.net/dpn/68726eb4-7df0-4e26-9d83-3ad542d33846.sized-1000x1000.jpg')";
        document.querySelector('section.individual').style.backgroundColor = "#011F5B";
        document.querySelector('section.individual').style.backgroundBlendMode = "soft-light";
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
        document.querySelector('section.moment').style.backgroundImage =
          "url('https://s3.amazonaws.com/snwceomedia/dpn/aa67d926-729c-46f0-9667-859e11ca195e.sized-1000x1000.jpg')";
        document.querySelector('section.moment').style.backgroundColor = "#990000";
        document.querySelector('section.moment').style.backgroundBlendMode = "soft-light";
        break;
      case 'play':
        document.querySelector('section.moment').style.backgroundImage =
          "url('https://s3.amazonaws.com/snwceomedia/dpn/1f10ecfa-2405-4e9d-9fcf-fd5a96c74489.sized-1000x1000.jpg')";
        document.querySelector('section.moment').style.backgroundColor = "#990000";
        document.querySelector('section.moment').style.backgroundBlendMode = "soft-light";
        break;
      case 'upset':
        document.querySelector('section.moment').style.backgroundImage =
          "url('https://s3.amazonaws.com/snwceomedia/dpn/f15c5084-2dbc-4dc9-a8ae-f555ae2359eb.sized-1000x1000.jpg')";
        document.querySelector('section.moment').style.backgroundColor = "#990000";
        document.querySelector('section.moment').style.backgroundBlendMode = "soft-light";
        break;
      case 'moment':
        document.querySelector('section.moment').style.backgroundImage =
          "url('https://s3.amazonaws.com/snwceomedia/dpn/f8abbc34-6199-4205-8bf0-179c1e288e5f.sized-1000x1000.jpg')";
        document.querySelector('section.moment').style.backgroundColor = "#990000";
        document.querySelector('section.moment').style.backgroundBlendMode = "soft-light";
        break;
      default:
        document.querySelector('section.moment').style.background = '#990000';
    }

    // make sure image covers background
    document.querySelector('section.moment').style.backgroundSize = 'cover';
    document.querySelector('section.moment').style.backgroundPosition = 'center';
    document.querySelector('section.moment').style.backgroundRepeat = 'no-repeat';
  });
}

