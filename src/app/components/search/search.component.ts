import { Component, OnInit } from '@angular/core';
import { StorageService } from '../../services/storage.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  public keyword:string='';
  public historyList:any[]=[];

  constructor(public storage:StorageService) { 
    // console.log(this.storage.get());
  }

  ngOnInit(): void {
    //页面刷新会执行该函数
    var searchList = this.storage.get('searchList');
    if (searchList){
      this.historyList = searchList;
    }
  }

  doSearch(){
    if (this.historyList.indexOf(this.keyword) == -1){
      if (this.historyList.indexOf(" ") != -1){
        this.keyword="";
      }else{
        this.historyList.push(this.keyword);
        //添加到本地缓存
        this.storage.set('searchList',this.historyList);
      }
    }
    
    this.keyword='';
    //console.log(this.keyword);
  }

  deleteHistory(key:any){
    // alert(key);
    this.historyList.splice(key,1);
    this.storage.set('searchList',this.historyList);
  }

}
