//стр. 38
//Доля выручки АФК «Система» от ВВП Российской Федерации, млрд руб.
$(function () {
    // Create the chart
    $('#graphP38left').highcharts({
        chart: {
            type: 'column'
        },
        title: {
            text: 'Доля выручки АФК «Система» от ВВП Российской Федерации, млрд руб.'
            // text: ' '
        },
        xAxis: {
            type: 'category'
        },
        yAxis: {
            title: {
                // text: 'Total percent market share'
                text: ' '
            }

        },
        legend: {
            enabled: false
        },
        plotOptions: {
            series: {
                borderWidth: 0,
                dataLabels: {
                    enabled: true,
                    format: '{point.y:.1f}%'
                }
            }
        },

        tooltip: {
            headerFormat: '<span style="font-size:11px">{series.name}</span> <br/>',
            pointFormat: '<span style="color:{point.color}"></span><b>{point.profit}</b><br/> {point.label}: {point.y}<br/>'
        },

        series: [{
            name: 'Выручка, млрд. руб',
            colorByPoint: true,
            data: [{
                name: '2014',
                label: '% от ВВП',
                profit: 646.3,
                y: 0.83
            }, {
                name: '2015',
                label: '% от ВВП',
                profit: 708.6,  
                y:  0.88
             
            }]
        }],

    });
});


//стр. 38
//Налоговые отчисления в федеральный и региональный бюджеты в 2015 г., млрд руб.
$(function () {
    // Create the chart
    $('#graphP38right').highcharts({
        chart: {
            type: 'column'
        },
        title: {
            text: 'Налоговые отчисления в федеральный и региональный бюджеты в 2015 г., млрд руб.'
        },
        xAxis: {
            type: 'category'
        },
        yAxis: {
            title: {
                text: ' '
            }

        },
        legend: {
            enabled: false
        },
        plotOptions: {
            series: {
                borderWidth: 0,
                dataLabels: {
                    enabled: true,
                    format: '{point.y:.1f}%'
                }
            }
        },

        tooltip: {
            pointFormat: '<span style="color:{point.color}"></span><b></b><br/> {point.y} млрд. руб.<br/>'
        },

        series: [{
            name: 'Выручка, млрд. руб',
            colorByPoint: true,
            data: [{
                name: 'Дочерние независимые компании',
                label: '% от ВВП',
                y: 86.7
            }, {
                name: 'Корпоративный центр',
                label: '% от ВВП', 
                y:  1.4
             
            }]
        }],

    });
});

//стр. 39
//Налоговые платежи ДЗК АФК «Система» в 2015 г. в разбивке по бюджетам, млн руб.
$(function () {

    $(document).ready(function () {

        // Build the chart
        $('#graphP39').highcharts({
            chart: {
                plotBackgroundColor: null,
                plotBorderWidth: null,
                plotShadow: false,
                type: 'pie'
            },
            title: {
                text: 'Налоговые платежи ДЗК АФК «Система» в 2015 г. в разбивке по бюджетам, млн руб.'
            },
            tooltip: {
                // pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
                pointFormat: '{series.name} <b>{point.y} млн руб</b>'

            },
            plotOptions: {
                pie: {
                    allowPointSelect: true,
                    cursor: 'pointer',
                    dataLabels: {
                        enabled: false
                    },
                    showInLegend: true
                }
            },
            series: [{
                name: ' ',
                colorByPoint: true,
                data: [{
                    name: 'Федеральный бюджет',
                    y: 59950
                }, {
                    name: 'Бюджет субъектов РФ',
                    y: 26798,
                    sliced: true,
                    selected: true
                }, 
                // {
                //     name: 'Firefox',
                //     y: 10.38
                // }
                ]
            }]
        });
    });
});