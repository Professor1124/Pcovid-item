const ul = document.querySelector('.header')
ul.addEventListener('click', function (e) {
    const target = e.target
    if (target.tagName.toLowerCase() === 'a') {
        target.classList.add('active')
    }
})

//大图
var chart = Highcharts.chart('container', {
    chart: {
        type: 'spline'
    },
    title: {
        text: '国内境外输入新增趋势'
    },
    subtitle: {
        text: '非规律性时间内的变化'
    },
    xAxis: {
        type: 'datetime',
        title: {
            text: null
        }
    },
    colors: ["red"],
    //       colors: ['#6CF', '#39F', '#06C', '#036', '#000'],
    yAxis: {
        title: {
            text: '境外输入 新增 (人)'
        },
        min: 0
    },
    tooltip: {
        headerFormat: '<b>{series.name}</b><br>',
        pointFormat: '{point.x:%e. %b}: {point.y:.0f} 人'
    },
    plotOptions: {
        spline: {
            marker: {
                enabled: true
            }
        }
    },
    series: [{
        name: '2020-2021 ',
        // Define the data points. All series have a dummy year
        // of 1970/71 in order to be compared on the same x axis. Note
        // that in JavaScript, months start at 0 for January, 1 for February etc.
        data: [
            [Date.UTC(2020,  9, 27), 12 ],
            [Date.UTC(2020, 10, 10), 16 ],
            [Date.UTC(2020, 10, 18), 17 ],
            [Date.UTC(2020, 11,  2), 18 ],
            [Date.UTC(2020, 11,  9), 16 ],
            [Date.UTC(2020, 11, 16), 16 ],
            [Date.UTC(2020, 11, 28), 16 ],
            [Date.UTC(2021,  0,  1), 18 ],
            [Date.UTC(2021,  0,  8), 17 ],
            [Date.UTC(2021,  0, 12), 19 ],
            [Date.UTC(2021,  0, 27), 18 ],
            [Date.UTC(2021,  1, 10), 18 ],
            [Date.UTC(2021,  1, 18), 18 ],
            [Date.UTC(2021,  1, 24), 19 ],
            [Date.UTC(2021,  2,  4), 24 ],
            [Date.UTC(2021,  2, 11), 27 ],
            [Date.UTC(2021,  2, 15), 27 ],
            [Date.UTC(2021,  2, 25), 26 ],
            [Date.UTC(2021,  3,  2), 27 ],
            [Date.UTC(2021,  3,  6), 28 ],
            [Date.UTC(2021,  3, 13), 28 ],
            [Date.UTC(2021,  4,  3), 21 ],
            [Date.UTC(2021,  4, 26), 11 ],

        ]
    },/* {
            name: '2008-2009 冬',
            data: [
                [Date.UTC(1970,  9, 18), 0   ],
                [Date.UTC(1970,  9, 26), 0.2 ],
                [Date.UTC(1970, 11,  1), 0.47],
                [Date.UTC(1970, 11, 11), 0.55],
                [Date.UTC(1970, 11, 25), 1.38],
                [Date.UTC(1971,  0,  8), 1.38],
                [Date.UTC(1971,  0, 15), 1.38],
                [Date.UTC(1971,  1,  1), 1.38],
                [Date.UTC(1971,  1,  8), 1.48],
                [Date.UTC(1971,  1, 21), 1.5 ],
                [Date.UTC(1971,  2, 12), 1.89],
                [Date.UTC(1971,  2, 25), 2.0 ],
                [Date.UTC(1971,  3,  4), 1.94],
                [Date.UTC(1971,  3,  9), 1.91],
                [Date.UTC(1971,  3, 13), 1.75],
                [Date.UTC(1971,  3, 19), 1.6 ],
                [Date.UTC(1971,  4, 25), 0.6 ],
                [Date.UTC(1971,  4, 31), 0.35],
                [Date.UTC(1971,  5,  7), 0   ]
            ]
        }*//*, {
            name: '2009-2010 冬',
            data: [
                [Date.UTC(1970,  9,  9), 0   ],
                [Date.UTC(1970,  9, 14), 0.15],
                [Date.UTC(1970, 10, 28), 0.35],
                [Date.UTC(1970, 11, 12), 0.46],
                [Date.UTC(1971,  0,  1), 0.59],
                [Date.UTC(1971,  0, 24), 0.58],
                [Date.UTC(1971,  1,  1), 0.62],
                [Date.UTC(1971,  1,  7), 0.65],
                [Date.UTC(1971,  1, 23), 0.77],
                [Date.UTC(1971,  2,  8), 0.77],
                [Date.UTC(1971,  2, 14), 0.79],
                [Date.UTC(1971,  2, 24), 0.86],
                [Date.UTC(1971,  3,  4), 0.8 ],
                [Date.UTC(1971,  3, 18), 0.94],
                [Date.UTC(1971,  3, 24), 0.9 ],
                [Date.UTC(1971,  4, 16), 0.39],
                [Date.UTC(1971,  4, 21), 0   ]
            ]
        }*/]
});
