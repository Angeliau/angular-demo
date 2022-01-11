import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {

  public title:string='首页组件的标题';
  public msg:string='首页组件的msg';

  //获取子组件对象
  @ViewChild("footer") footer:any;

  constructor() { }

  ngOnInit(): void {
  }

  run(){
    console.log('父组件的run方法');
  }

  parentRun(e:any){
    console.log('父组件监听到子组件传送的数据');
    console.log(e);
  }

  getChildMsg(){
    console.log(this.footer.msg);
  }

  getChildRun(){
    this.footer.run();
  }

}
