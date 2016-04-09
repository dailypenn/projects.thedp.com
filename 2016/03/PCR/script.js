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


/**
 *
 * INITIALIZATION FUNCTIONS
 *
**/
$( document ).ready(function(){
  avgSAS();
})
