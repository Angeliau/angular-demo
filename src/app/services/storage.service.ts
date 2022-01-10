import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor() { }

  /**
   *
   * @param key -string
   * @param value -any
   */
  set(key:string,value:any){
    localStorage.setItem(key,JSON.stringify(value));
  }

  /**
   * 根据key获取value
   * @param key string
   * @returns any
   */
  get(key:string){
    // return 'this is a service';

    let str = localStorage.getItem(key);
    return JSON.parse((str != null ? str : ""));
  }

  /**
   * 根据key删除某个值
   * @param key string
   */
  remove(key:string){
    localStorage.removeItem(key);
  }
}
