import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public picurl="https://gimg2.baidu.com/image_search/src=http%3A%2F%2Finews.gtimg.com%2Fnewsapp_match%2F0%2F14252120071%2F0&refer=http%3A%2F%2Finews.gtimg.com";


  public list:any[] = [
    {
      title:'标题1'
    },
    {
      title:'标题2'
    },
    {
      title:'标题3'
    }
  ];

  public flag:boolean=true;

  public orderStatus:number=5; /* 1:已支付 2：订单已确认 3：已发货 4：已收货 其他：无效订单 */

  public attr:string='green';

  public today:any=new Date();

  public title:string="我是一个标题";

  public keywords:string='默认值';

  constructor() { 
    console.log(this.today);
  }

  ngOnInit(): void {
  }

  run(){
    alert('自定义方法');
  }

  getData(){
    alert(this.title);
  }

  setData(){
    this.title="我是改变后的标题";
  }

  keyDown(e:any){
    if (e.keyCode == 13){
      console.log('按了一下回车')
    }else{
      console.log(e.target.value);
    }
  }

  keyUp(e:any){
    console.log(e)
  }

  runEvent(event:any){
    var dom:any=event.target;
    dom.style.color='red';
  }

  changekeywords(){
    this.keywords="改变后的keywords";
  }

  getkeywords(){
    console.log(this.keywords);
  }

}
