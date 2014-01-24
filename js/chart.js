var chart;
$(document).ready(function() {
    chart = new Highcharts.Chart({
        chart: {
            renderTo: 'mygraph',
            defaultSeriesType: 'column',
            zoomType: 'xy'
        },
        title: { text: 'あなたのステータス' },
        subtitle: { text: '週間Thanks状況' },
        xAxis: [{
            categories: ['1/18(土)', '1/19(日)', '1/20(月)', '1/21(火)', '1/22(水)', '1/23(木)', '1/24(金)'],
            labels: {style: {fontSize: '12px'}}
        }],
        yAxis: [
            { //Y軸 No.2
                gridLineWidth: 1,
                lineWidth: 1,
                title: {
                    text: '回数',
                    rotation: 0,
                    style: { color: '#000001', fontSize: '12px' } },
                labels: {
                    formatter: function() { return this.value +' Thanks!'; },
                    style: { color: '#000001', fontSize: '12px' } }
            },
            { //Y軸 No.3
                gridLineWidth: 1,
                lineWidth: 1,
                title: {
                    text: '合計',
                    rotation: 0,
                    style: { color: '#000001', fontSize: '12px'} },
                labels: {
                    formatter: function() { return this.value +' Thanks!'; },
                    style: { color: '#000001', fontSize: '12px' } },
                opposite: true
            }
        ],
        tooltip: {
            formatter: function() {
                var unit = {
                    'ありがとうした回数': '回',
                    'ありがとうされた回数': '回',
                    'ありがとうした合計': '回',
                    'ありがとうされた合計': '回'
                }[this.series.name];
                return ''+ this.x +': '+ this.y +' '+ unit;
            }
        },
        plotOptions: {
            column: { stacking: 'normal' }
        },
        legend: { //凡例
            layout: 'vertical',
            align: 'left',
            x: 120,
            verticalAlign: 'top',
            y: 80,
            floating: true,
            backgroundColor: '#FFE4E1'
        },
        series: [
            {name: 'ありがとうした回数',
             color: '#FF8300',
             type: 'column',
             yAxis: 0,
             data: [15, 4, 22, 10, 8, 20, 10],
             stack: 'group1'
            },
            {name: 'ありがとうされた回数',
             color: '#FF0019',
             type: 'column',
             yAxis: 0,
             data: [10, 15, 6, 8, 12, 14, 3],
             stack: 'group2'
            },
            {name: 'ありがとうした合計',
             type: 'spline',
             color: '#FF8300',
             yAxis: 1,
             data: [15, 19, 41, 51, 59, 76, 86],
             marker: { enabled: false },
             dashStyle: 'shortdot'                  
            },
            {name: 'ありがとうされた合計',
             type: 'spline',
             color: '#FF0019',
             yAxis: 1,
             data: [10, 25, 31, 39, 51, 65, 68],
             marker: { enabled: false },
             dashStyle: 'shortdot'                  
            }
        ]
    });
});