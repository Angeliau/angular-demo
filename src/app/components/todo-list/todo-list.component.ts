import { Component, OnInit } from '@angular/core';
//引入服务
import { StorageService } from '../../services/storage.service';


//不推荐
// var storage=new StorageService();
// console.log(storage.get());


@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {
  public keyword:string='';
  public todoList:any[]=[];


  constructor(public storage:StorageService) {
    // let msg=this.storage.get();
    // console.log(msg);
   }

  ngOnInit(): void {
    var _todoList = this.storage.get('todoList');
    if (_todoList){
      this.todoList = _todoList;
    }
  }

  /**
   * 按下回车键添加数据
   * @param e 监听到的事件
   */
  doAdd(e:any){
    // 回车
    if (e.keyCode == 13){
      // 如果不存在
      if (!this.todoListHasKeyword(this.todoList,this.keyword)){
        this.todoList.push({
          title:this.keyword,
          status:false //false:待办 true：已完成
        });

        this.keyword='';
        this.storage.set('todoList',this.todoList);
      }else{
        alert('数据已存在');
        this.keyword='';
      }
    }
  }

  /**
   * 删除索引为key的值
   * @param key 
   */
  deleteData(key:any){
    this.todoList.splice(key,1);
    this.storage.set('todoList',this.todoList);
  }

  /**
   * 
   * @param todoList 
   * @param keyword 
   * @returns true:keyword存在; false:keyword不存在
   */
  todoListHasKeyword(todoList:any,keyword:any){
    // foreach 异步有问题
    // todoList.forEach(value => {
    //   if (value.title == keyword){
    //     return true;
    //   }
    // });

    if (!keyword){
      return false;
    }

    for (var i = 0; i < todoList.length; i++){
      if (todoList[i].title == keyword){
        return true;
      }
    }

    return false;
  }

  checkBoxChange(){
    this.storage.set('todoList',this.todoList);
  }

}
