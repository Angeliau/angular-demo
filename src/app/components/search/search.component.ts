import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  public keyword:string='';
  public historyList:any[]=[];

  constructor() { }

  ngOnInit(): void {
  }

  doSearch(){
    if (this.historyList.indexOf(this.keyword) == -1){
      if (this.historyList.indexOf(" ") != -1){
        this.keyword="";
      }else{
        this.historyList.push(this.keyword);
      }
    }
    
    this.keyword='';
    //console.log(this.keyword);
  }

  deleteHistory(key:any){
    // alert(key);
    this.historyList.splice(key,1);
  }

}
