import { Component, AfterViewInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import * as elasticsearch from 'elasticsearch'

@Component({
  selector: 'log-axis-chart',
  templateUrl: 'dynamic.chart.component.html',
})
export class LineChartAjaxComponent implements AfterViewInit {
  dataPoints:any = [];
  chart:any;
 
  constructor(private http : HttpClient) {  
  }
 
  chartOptions = {
    theme: "light2",
    zoomEnabled: true,
    exportEnabled: true,
    title: {
      text:"Bitcoin Closing Price"
    },
    subtitles: [{
      text: "Loading Data...",
      fontSize: 24,
      horizontalAlign: "center",
      verticalAlign: "center",
      dockInsidePlotArea: true
    }],
    axisY: {
      title: "Closing Price (in USD)",
      prefix: "$"
    },
    data: [{
      type: "line",
      name: "Closing Price",
      yValueFormatString: "$#,###.00",
      xValueType: "dateTime",
      dataPoints: this.dataPoints
    }]
  }
 
  getChartInstance(chart: object) {
    this.chart = chart;
  }
  
  ngAfterViewInit() {
    //this.http.get<any>('https://canvasjs.com/data/gallery/angular/btcusd2021.json', 
    this.http.get('http://localhost:8080/api/accounts', 
    //this.http.get('http://raspi:9200/leo/_search?&terminate_after=50&_source=id,symbol,price,timestamp', 
    { responseType: 'text' })
    .subscribe((response: any) => {
      let data = response;
      console.log("response = ", response);

      // for(let i = 0; i < data.length; i++){
      //   this.dataPoints.push({x: new Date(data[i].date), y: Number(data[i].close) });
      // }
      // this.chart.subtitles[0].remove();
    });
  }	
}