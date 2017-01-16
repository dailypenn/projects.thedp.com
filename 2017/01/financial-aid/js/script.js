var aidAppsChart = c3.generate({
    bindto: '#aidApps',
    data: {
            x: 'x',
            columns: [
                ['x', '2010-01-01', '2011-01-01', '2012-01-01', '2013-01-01', '2014-01-01', '2015-01-01'],
                ['percent applied', 30, 200, 100, 400, 150, 250]
            ]
        },
        axis : {
            x : {
                type : 'timeseries',
                tick: {
                    format: function (x) { return x.getFullYear(); }
                  //format: '%Y' // format string is also available for timeseries data
                }
            }
        }
});


var aidRecieptsChart = c3.generate({
    bindto: '#aidReciepts',
    data: {
            x: 'x',
            columns: [
                ['x', '2010-01-01', '2011-01-01', '2012-01-01', '2013-01-01', '2014-01-01', '2015-01-01'],
                ['percent given aid', 30, 200, 100, 400, 150, 250]
            ]
        },
        axis : {
            x : {
                type : 'timeseries',
                tick: {
                    format: function (x) { return x.getFullYear(); }
                  //format: '%Y' // format string is also available for timeseries data
                }
            }
        }
});

var gradAid = c3.generate({
    bindto: '#gradAid',
    data: {
        columns: [
            ['Job',   845, 2372, 1787, 0, 1962, 1558, 0, 0, 2279, 0, 0, 0, 0, 0, 1393, 1132, 1476, 2178, 919, 1862],
            ['Loan',  46470,  38498,  39870,  66917,  37895,  26905,  50847,  28747,  35423,  20462,  20282,  14622,  15620,  29803,  75862,  34604,  53703,  53950,  17432,  33180],
            ['Grant',  30354,  9506,  10268,  14469,  9877,  7377,  23267,  13507,  3535,  29497,  27201,  34495,  31213,  31760,  24610,  35234,  17593,  8751,  30258,  26618]
        ],
        type: 'bar',
        groups: [
            ['Job', 'Loan', 'Grant']
        ]
    },
    axis: {
      x: {
        type: 'category',
        categories: ['Grad. Arts & Sci.', 'Grad. Ed.', 'Design', 'Wharton Grad.', 'Social Policy', 'Nursing Grad.', 'WEMBA', 'Social Policy-Doc.', 'Exec. Engineering', 'Education PhD', 'Design PhD', 'Wharton PhD', 'Annenberg PhD', 'Engineering PhD', 'Dental', 'Medical', 'Law', 'Veterinary', 'Nursing PhD', 'Bio-Med']
      },
      y: {
        
      }
    }
});
