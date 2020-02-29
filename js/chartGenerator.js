window.onload = function(){
    var chart = new CanvasJS.Chart("chartContainer",
    {
        animationEnabled: true,
        title:{
            text: "",
            fontFamily: "Sans Pro",
            fontAlign: "left",
            fontColor: "#4D4F5C",
            fontSize: 24            
        },
        dataPointWidth: 20,
        
        axisX:{
            intervalType: "day"
        },

        axisY:{
            valueFormatString:"#0k",
            intervalType: "number",
            interval: 5
        },

        toolTip: {
            shared: true,
            content: toolTipContent
        },

        data: [
            {
                type:"column",
                name: "Gross",
                  showInLegend : true,
                legendText: "Gross",
                color: "#289E45",
                dataPoints: [
                    { x: new Date(2019, 01, 12), y : 25.500},
                    { x: new Date(2019, 01, 13), y : 22.000},
                    { x: new Date(2019, 01, 14), y : 20.000},
                    { x: new Date(2019, 01, 15), y : 21.000},
                    { x: new Date(2019, 01, 16), y : 19.000},
                    { x: new Date(2019, 01, 17), y : 22.000},
                    { x: new Date(2019, 01, 18), y : 23.000}
                ]
            },
            {
                type: "column",
                name: "Nett",
                showInLegend: true,
                legendText: "Nett",
                color: "#37B04C",
                dataPoints: [
                    { x: new Date(2019, 01, 12), y : 24.500},
                    { x: new Date(2019, 01, 13), y : 21.500},
                    { x: new Date(2019, 01, 14), y : 19.500},
                    { x: new Date(2019, 01, 15), y : 19.000},
                    { x: new Date(2019, 01, 16), y : 18.500},
                    { x: new Date(2019, 01, 17), y : 21.500},
                    { x: new Date(2019, 01, 18), y : 22.500}
                ]
            },
            {
                type: "column",
                name: "APV",
                showInLegend: true,
                legendText: "Average Purchase Value",
                color: "#6BE681",
                dataPoints: [
                    { x: new Date(2019, 01, 12), y : 23.500},
                    { x: new Date(2019, 01, 13), y : 21.000},
                    { x: new Date(2019, 01, 14), y : 19.000},
                    { x: new Date(2019, 01, 15), y : 17.000},
                    { x: new Date(2019, 01, 16), y : 18.000},
                    { x: new Date(2019, 01, 17), y : 21.000},
                    { x: new Date(2019, 01, 18), y : 22.000}
                ]
            },
            {
            type: "column",
            name: "UPT",
          	showInLegend: true,
            legendText: "Unit per Transaction",
            color: "#707070",
            dataPoints: [
                { x: new Date(2019, 01, 12), y : 0.0118},
                { x: new Date(2019, 01, 13), y : 0.00828},
                { x: new Date(2019, 01, 14), y : 0.00780},
                { x: new Date(2019, 01, 15), y : 0.00798},
                { x: new Date(2019, 01, 16), y : 0.00788},
                { x: new Date(2019, 01, 17), y : 0.00828},
                { x: new Date(2019, 01, 18), y : 0.00838}
            ]},
            {
                type: "line",
                color: "#FFE854",
                showInLegend: false,
                dataPoints: [
                    { x: new Date(2019, 01, 12), y : 25.100},
                    { x: new Date(2019, 01, 13), y : 21.750},
                    { x: new Date(2019, 01, 14), y : 19.600},
                    { x: new Date(2019, 01, 15), y : 17.100},
                    { x: new Date(2019, 01, 16), y : 18.600},
                    { x: new Date(2019, 01, 17), y : 22.000},
                    { x: new Date(2019, 01, 18), y : 23.000}
                ]
            }
            ]
    });
    chart.render();
    function toolTipContent(e) {
        var str = "";
        for (var i = 0; i < e.entries.length-1; i++){
            var  str1 = "<span style= \"color:"+e.entries[i].dataSeries.color + "\"> "+e.entries[i].dataSeries.name+"</span>: <strong>"+(e.entries[i].dataPoint.y*1000)+"<br/>";
            str = str.concat(str1);
        }
        return (str);
    }    
};