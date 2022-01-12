import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { HttpserviceService } from '../../services/httpservice.service';

@Component({
  selector: 'app-data-interaction',
  templateUrl: './data-interaction.component.html',
  styleUrls: ['./data-interaction.component.css']
})
export class DataInteractionComponent implements OnInit {

  public list:any[]=[];

  constructor(public http:HttpClient, public httpService:HttpserviceService) { }

  ngOnInit(): void {
  }

  /**
   * get请求数据
   */
  getData(){
    let api = "http://a.itying.com/api/productlist";
    this.http.get(api).subscribe((response:any)=>{
      console.log(response);
      this.list = response.result;
    });
  }

  /**
   * post请求数据
   */
  doLogin(){
    //手动设置请求的类型
    const httpOptions = {headers:new HttpHeaders({'Content-Type':'application/json'})};
    //请求的服务地址
    let api = "http://127.0.0.1:3000/doLogin";
    this.http.post(api,{'username':'张三','age':20},httpOptions).subscribe((response)=>{
      console.log(response);
    });
  }

  /**
   * jsonp请求数据
   */
  getJsonpData(){
    //jsonp请求，服务器必须支持jsonp,如下：
    /*
    http://a.itying.com/api/productlist?callback=xxx
    http://a.itying.com/api/productlist?cb=xxx
    */
    let api = "http://a.itying.com/api/productlist";
    this.http.jsonp(api, 'callback').subscribe((response)=>{
      console.log(response);
    });
  }

  getAxiosData(){
    let api = "http://a.itying.com/api/productlist";
    this.httpService.axiosGet(api).then((data)=>{
      console.log(data);
    });
  }

}
