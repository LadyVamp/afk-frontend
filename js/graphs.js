//стр 32
//Динамика объема инвестиционной программы корпорации в 2013-2015 гг., мллн руб.
$(function () {
    // Create the chart
    $('#graphP32Left').highcharts({
        chart: {
            type: 'column'
        },
        title: {
            text: ''
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
                    enabled: true
                    // ,
                    // format: '{point.y:.1f}%'
                }
            }
        },

        tooltip: {
            headerFormat: '<span style="font-size:11px">{series.name}</span> <br/>',
            pointFormat: '<span style="color:{point.color}"></span><b>{point.y}</b><br/><br/>'
        },

        series: [{
            name: 'Выручка, млрд. руб',
            colorByPoint: true,
            data: [{
                name: '2013',
                label: '% от ВВП',
                y: 95365
            },{
                name: '2014',
                label: '% от ВВП',
                y: 115778
            }, {
                name: '2015',
                label: '% от ВВП',
                y:  139223
             
            }]
        }],

    });
});



//стр 32
//Налоговые платежи компаний Группы АФК "Система" в 2015 г. в разбивке по ДЗК, %
$(function () {

    $(document).ready(function () {

        // Build the chart
        $('#graphP32Middle').highcharts({
            chart: {
                plotBackgroundColor: null,
                plotBorderWidth: null,
                plotShadow: false,
                type: 'pie'
            },
            title: {
                text: ''
            },
            tooltip: {
                // pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
                pointFormat: '{series.name} <b>{point.y} %</b>'

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
                    name: 'ПАО "МТС"',
                    y: 59
                }, {
                    name: 'ГК РТИ',
                    y: 10,
                    sliced: true,
                    selected: true
                }, 
                 {
                     name: 'АО "Таргин"',
                     y: 6
                 },
                 {
                     name: 'ОАО "БЭСК"',
                     y: 4
                 },
                 {
                     name: 'ГК "Детский мир"',
                     y: 3
                 },
                 {
                     name: 'Корпоративный центр',
                     y: 2
                 },
                 {
                     name: 'Прочие',
                     y: 16
                 }
                ]
            }]
        });
    });
});

//стр 32
//Портфель АФК "Система" на основе консолидированной выручки, %
$(function () {

    $(document).ready(function () {

        // Build the chart
        $('#graphP32Right').highcharts({
            chart: {
                plotBackgroundColor: null,
                plotBorderWidth: null,
                plotShadow: false,
                type: 'pie'
            },
            title: {
                text: ''
            },
            tooltip: {
                // pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
                pointFormat: '{series.name} <b>{point.y} %</b>'

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
                    name: 'Телекоммуникации"',
                    y: 61
                }, {
                    name: 'Высокие технологии',
                    y: 11,
                    sliced: true,
                    selected: true
                }, 
                 {
                     name: 'Детский ретейл',
                     y: 9
                 },
                 {
                     name: 'Лесная промышленность',
                     y: 5
                 },
                 {
                     name: 'Банковский бизнес',
                     y: 4
                 },
                 {
                     name: 'Нефтесервисы',
                     y: 4
                 },
                 {
                     name: 'Прочие',
                     y: 6
                 }
                ]
            }]
        });
    });
});

//стр. 38
//Доля выручки АФК «Система» от ВВП Российской Федерации, млрд руб.
$(function () {
    // Create the chart
    $('#graphP38left').highcharts({
        chart: {
            type: 'column'
        },
        title: {
            text: ''
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
            text: ''
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
        $('#graphP39topLeft').highcharts({
            chart: {
                plotBackgroundColor: null,
                plotBorderWidth: null,
                plotShadow: false,
                type: 'pie'
            },
            title: {
                text: ''
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

//Налоговые платежи компаний Группы АФК "Система" в 2015 г. в разбивке по ДЗК, %
$(function () {

    $(document).ready(function () {

        // Build the chart
        $('#graphP39leftLow').highcharts({
            chart: {
                plotBackgroundColor: null,
                plotBorderWidth: null,
                plotShadow: false,
                type: 'pie'
            },
            title: {
                text: ''
            },
            tooltip: {
                // pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
                pointFormat: '{series.name} <b>{point.y} %</b>'

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
                    name: 'ПАО "МТС"',
                    y: 59
                }, {
                    name: 'ГК РТИ',
                    y: 10,
                    sliced: true,
                    selected: true
                }, 
                 {
                     name: 'АО "Таргин"',
                     y: 6
                 },
                 {
                     name: 'ОАО "БЭСК"',
                     y: 4
                 },
                 {
                     name: 'ГК "Детский мир"',
                     y: 3
                 },
                 {
                     name: 'Корпоративный центр',
                     y: 2
                 },
                 {
                     name: 'Прочие',
                     y: 16
                 }
                ]
            }]
        });
    });
});

//Приложение 1 Стр 101
//стр. 39
//Налоговые платежи ДЗК АФК «Система» в 2015 г. в разбивке по бюджетам, млн руб.
$(function () {

    $(document).ready(function () {

        // Build the chart
        $('#graphP101').highcharts({
            chart: {
                plotBackgroundColor: null,
                plotBorderWidth: null,
                plotShadow: false,
                type: 'pie'
            },
            title: {
                text: ''
            },
            tooltip: {
                // pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
                pointFormat: '{series.name} <b>{point.y}</b>'

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
                    name: 'Внутренние',
                    y: 31
                }, {
                    name: 'Внешние',
                    y: 17
                }
                ]
            }]
        });
    });
});