var AVERAGE = 2.457778658;
var STDEV   = 0.53130023;

function toTitleCase(str) {
  return str.replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});
}

var formBuilder = function(index) {
  d3.csv("data/course_difficulty.csv", function(error, data) {
  var select = d3.select("#classes")
    .append("div")
    .append("select")
      .attr("class", "form-control")

  select.selectAll("option")
    .data(data)
    .enter()
      .append("option")
      .attr("id", index)
      .attr("value", function (d) { return d.Difficulty; })
      .text(function (d) { return toTitleCase(d.CourseName); });

})};


$('#coursenum').change(function(){
  $('#classes').html("");
  var i = parseInt($('#coursenum').val())
  var block = "Which Courses? <br>";
  while (i > 0) {
    formBuilder(i);
    i--;
  }
  $('#classes').html(block);
})

var classDifAvg = function() {
  var name = 0.00;
  var e = document.getElementsByTagName("select");
  for (var i = 1; i < e.length; i++){
    name += parseFloat(e[i].value);
  }
  name /= parseInt($('#coursenum').val());
  console.log(name);
  return name;
}

var getResults = function() {
  var res = classDifAvg();

  if (res < 1.9) {
    // SUPER EASY
  } else if (res < 2.3) {
    // easy
  } else if (res < 2.5) {
    // below average
  } else if (res < 2.8) {
    // above average
  } else if (res < 3) {
    // hard
  } else if (res < 3.2) {
    // really hard
  } else {
    // SUPER HARD
  }
}
