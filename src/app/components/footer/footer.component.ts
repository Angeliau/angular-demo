import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  @Output() public outer = new EventEmitter();

  public msg:string='子组件footer的msg';

  constructor() { }

  ngOnInit(): void {
  }

  run(){
    console.log('子组件footer的run方法');
  }

  sendToParent(){
    //传数据给父组件
    this.outer.emit('我是子组件的数据');
  }

}
