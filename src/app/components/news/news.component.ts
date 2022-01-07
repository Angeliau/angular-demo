import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {

  public content:any='<h2>我是一个html标签</h2>';

  title="this is a news title...";

  msg='我是新闻组件的msg';

  private uname:string='admin';

  public name:string='我是一个属性';

  //推荐写法
  public text:any = 123456;

  public addr:string="西安市";

  public userInfo:any={
    username:'李四',
    age:25
  }

  //定义数组
  arr=['1111','2222','3333'];
  //推荐
  public list:any[]=["橘子",50,"苹果"];

  public items:Array<any>=['1','2','3'];

  public userlist:any[]=[{
    username:'小王',
    age:20
  },{
    username:'小李',
    age:25
  },{
    username:'小兰',
    age:24
  }];

  public cars:any[]=[{
    category:'奥迪',
    list:[{
      series:'奥迪A4',
      price:'30w'
    },{
      series:'奥迪A6',
      price:'50w'
    },{
      series:'奥迪A8',
      price:'70w'
    }]
  },{
    category:'本田',
    list:[{
      series:'雅阁',
      price:'20w'
    },{
      series:'思域',
      price:'15w'
    },{
      series:'CRV',
      price:'20w'
    }]
  },{
    category:'奔驰',
    list:[{
      series:'奔驰A级',
      price:'25w'
    },{
      series:'奔驰C级',
      price:'35w'
    },{
      series:'奔驰E级',
      price:'45w'
    }]
  }];

  public aaa:any;
  
  constructor() {
    this.aaa='给属性赋值';
    //获取属性
    console.log(this.msg);
    //修改属性的值
    this.msg='改变后的msg的值';
  }

  ngOnInit(): void {
  }
                                         
}
