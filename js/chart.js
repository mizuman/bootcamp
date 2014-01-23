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
            categories: ['日', '月', '火', '水', '木', '金', '土']
        }],
        yAxis: [
            { //Y軸 No.2
                gridLineWidth: 0,
                title: {
                    text: '回数',
                    style: { color: '#4572A7' } },
                labels: {
                    formatter: function() { return this.value +' mm'; },
                    style: { color: '#4572A7' } }
            },
            { //Y軸 No.3
                gridLineWidth: 0,
                title: {
                    text: '合計',
                    style: { color: '#AA4643' } },
                labels: {
                    formatter: function() { return this.value +' mb'; },
                    style: { color: '#AA4643' } },
                opposite: true
            }
        ],
        tooltip: {
            formatter: function() {
                var unit = {
                    '降水量1': 'mm',
                    '降水量2': 'mm',
                    '降水量3あああ': 'mm',
                    '気温あ': '°C'
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
            backgroundColor: '#FFFFFF'
        },
        series: [
            {name: 'ありがとうした回数',
             color: '#4572A7',
             type: 'column',
             yAxis: 0,
             data: [15, 4, 22, 10, 8, 7, 10],
             stack: 'group1'
            },
            {name: 'ありがとうされた回数',
             color: '#AA4643',
             type: 'column',
             yAxis: 0,
             data: [10, 15, 6, 8, 12, 14, 3],
             stack: 'group2'
            },
            {name: 'ありがとうした合計',
             type: 'spline',
             color: '#4572A7',
             yAxis: 1,
             data: [15, 19, 41, 51, 59, 66, 76],
             marker: { enabled: false },
             dashStyle: 'shortdot'                  
            },
            {name: 'ありがとうされた合計',
             type: 'spline',
             color: '#AA4643',
             yAxis: 1,
             data: [10, 25, 31, 39, 51, 65, 68],
             marker: { enabled: false },
             dashStyle: 'shortdot'                  
            }
        ]
    });
});