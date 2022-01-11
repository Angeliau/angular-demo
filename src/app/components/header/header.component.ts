import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})

export class HeaderComponent implements OnInit {

  //接收父组件传入的数据
  @Input() title:any;
  @Input() msg:any;
  //接收父组件传入的方法
  @Input() run:any;
  //接收父组件对象
  @Input() index:any;

  constructor() { }

  ngOnInit(): void {
  }

  getParentData(){
    //获取父组件的数据
    console.log(this.title + '---' + this.msg);
  }

  getParentRun(){
    //执行父组件的run方法
    // this.run();
    
    console.log(this.index.msg);
    this.index.run();
  }

}
