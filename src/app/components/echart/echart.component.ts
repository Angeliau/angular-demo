import { Component, OnInit } from '@angular/core';
import * as echarts from "echarts";

@Component({
  selector: 'app-echart',
  templateUrl: './echart.component.html',
  styleUrls: ['./echart.component.css']
})
export class EchartComponent implements OnInit {

  public obj:any={};

  constructor() { }

  ngOnInit(): void {
    this.data();
  }

  data(){
    this.obj={
      title:{
        text:'echarts入门案例',
      },
      tooltip:{},
      legend:{
        data:['销量']
      },
      xAxis:{
        data:['衬衫','羊毛衫','裤子','短袖','皮鞋']
      },
      yAxis:{},
      series:[{
        name:'销量',
        type:'bar',
        data:[5,20,36,28,16]
      }]
    }
  }

  

}
