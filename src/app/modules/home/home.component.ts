import { Component, OnInit } from '@angular/core';
import { EChartsCoreOption } from 'echarts';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  chartOption: EChartsCoreOption  = {
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'shadow' // Use 'line' or 'shadow' based on your preference
      }
    },
    xAxis: {
      type: 'value'
    },
    yAxis: {
      type: 'category',
      data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
    },
    series: [
      {
        data: [120, 200, 150, 80, 70, 110, 130],
        type: 'bar',
        itemStyle: {
          color: '#05c091' // Change this to your desired color
        }
      }
    ],
   
  };

  constructor() { 
    console.log('Home constructor');
  }

  ngOnInit() {
  }

}
