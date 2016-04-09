/**
 *
 * CODE FOR SCHOOL COMPARISON CHART
 *
**/
var avgSAS  = function() {
  c3.generate({
      bindto: '#school-comp-chart',
      data: {
        url: 'data/schoolComp/avg-rank-by-school-sas.csv'
      },
      axis: {
          x: {
            label: 'Semester'
          },
          y: {
            label: 'Score',
            min: 0,
            max: 4
          }
  }});
}
var avgSEAS = function() {
  c3.generate({
      bindto: '#school-comp-chart',
      data: {
        url: 'data/schoolComp/avg-rank-by-school-seas.csv'
      },
      axis: {
          x: {
            label: 'Semester'
          },
          y: {
            label: 'Score',
            min: 0,
            max: 4
          }
  }});
}
var avgWhar = function() {
  c3.generate({
      bindto: '#school-comp-chart',
      data: {
        url: 'data/schoolComp/avg-rank-by-school-whar.csv'
      },
      axis: {
          x: {
            label: 'Semester'
          },
          y: {
            label: 'Score',
            min: 0,
            max: 4
          }
  }});
}
var avgNurs = function() {
  c3.generate({
      bindto: '#school-comp-chart',
      data: {
        url: 'data/schoolComp/avg-rank-by-school-nurs.csv'
      },
      axis: {
          x: {
            label: 'Semester'
          },
          y: {
            label: 'Score',
            min: 0,
            max: 4
          }
  }});
}

/**
 *
 * CODE FOR DEPARTMENT COMPARISON CHARAT
 *
**/
var diameter = 500, //max size of the bubbles
    color    = d3.scale.category20b(); //color category

var bubble = d3.layout.pack()
    .sort(null)
    .size([diameter, diameter])
    .padding(1.5);

var svg = d3.select("#dept-comp-chart")
    .append("svg")
    .attr("width", diameter)
    .attr("height", diameter)
    .attr("class", "bubble");



d3.csv("data/Department_Difficulty.csv", function(error, data){

    //convert numerical values from strings to numbers
    data = data.map(function(d){
      d.value = +Math.pow(d["Difficulty"], 6); //Raise to power to scale as difference is really small
      d.school = +d["School"];
      console.log(d.value);
      return d; });

    //bubbles needs very specific format, convert data to this.
    var nodes = bubble.nodes({children:data}).filter(function(d) { return !d.children; });

    //setup the chart
    var bubbles = svg.append("g")
        .attr("transform", "translate(0,0)")
        .selectAll(".bubble")
        .data(nodes)
        .enter();

    //create the bubbles and color them correctly
    bubbles.append("circle")
        .attr("r", function(d){ return d.r; })
        .attr("cx", function(d){ return d.x; })
        .attr("cy", function(d){ return d.y; })
        .style("fill", function(d) {
          if (d.School == "SAS") {
            return "red";
          } else if (d.school == "SEAS"){
            return "green";
          } else if (d.School == "Wharton") {
            return "blue"
          } else {
            return "pink"
          }
        });

    //format the text for each bubble, give it description
    bubbles.append("text")
        .attr("x", function(d){ return d.x; })
        .attr("y", function(d){ return d.y + 5; })
        .attr("text-anchor", "middle")
        .text(function(d){ return d["Department"]; })
        .style({
            "fill":"white",
            "font-family":"neuzeit-grotesk, Helvetica, Arial, san-serif",
            "font-size": "12px"
        });
})

/**
 *
 * INITIALIZATION FUNCTIONS
 *
**/
$( document ).ready(function(){
  avgSAS();
})
