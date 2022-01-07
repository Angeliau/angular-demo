import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  public personInfo:any={
    username:'',
    sex:'1',
    cityList:['北京','上海','广州','深圳','杭州'],
    city:'北京',
    hobby:[{
      title:'旅游',
      checked:true
    },{
      title:'唱歌',
      checked:false
    },{
      title:'跑步',
      checked:false
    }],
    mark:''
  }

  constructor() { }

  ngOnInit(): void {
  }

  doSubmit(){
    // dom操作
    /*
    let username:any = document.getElementById("username");
    console.log(username.value);
    */

    //双向数据绑定
    console.log(this.personInfo);
  }

}
