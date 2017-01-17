var aidAppsChart = c3.generate({
    bindto: '#aidApps',
    data: {
            columns: [
                ['Percent recieving Grant', 88.5, 86.1, 87.2, 90.4, 90.5, 91.1, 91.6, 91.4, 92.3, 91.9],
            ]
        },
        axis : {
            x : {
              label: 'Percent recieving Grant',
              type: 'category',
              categories: ['2007-08', '2008-09', '2009-10', '2010-11', '2011-12', '2012-13', '2013-14', '2014-15', '2015-16', '2016-17']
            },
            y: {
              label: 'Percentage of Applicants'
            }
        }

});


var aidRecieptsChart = c3.generate({
    bindto: '#aidReciepts',
    data: {
            columns: [
                ['Aid Applicant Total', 4473, 4727, 5029, 5060, 5217, 5346, 5383, 5396, 5368, 5165],
                ['Aid Recipient Total', 3959, 4071, 4385, 4576, 4719, 4870, 4933, 4933, 4954, 4749]
            ]
        },
        axis : {
            x : {
              label: 'Years',
              type: 'category',
              categories: ['2007-08', '2008-09', '2009-10', '2010-11', '2011-12', '2012-13', '2013-14', '2014-15', '2015-16', '2016-17']
            },
            y: {
              label: 'Students'
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
        label: 'School',
        type: 'category',
        categories: ['Grad. Arts & Sci.', 'Grad. Ed.', 'Design', 'Wharton Grad.', 'Social Policy', 'Nursing Grad.', 'WEMBA', 'Social Policy-Doc.', 'Exec. Engineering', 'Education PhD', 'Design PhD', 'Wharton PhD', 'Annenberg PhD', 'Engineering PhD', 'Dental', 'Medical', 'Law', 'Veterinary', 'Nursing PhD', 'Bio-Med'],
        tick: {
          rotate: 75,
          multiline: false
        },
        height: 100
      },
      y: {
        label: 'Aid Recieved'
      }
    }
});
