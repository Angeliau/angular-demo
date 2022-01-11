import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
// 使用双向数据绑定，必须先引入该模块
import { FormsModule } from '@angular/forms';
// echarts
import { NgxEchartsModule } from 'ngx-echarts';

import { AppComponent } from './app.component';
import { NewsComponent } from './components/news/news.component';
import { HomeComponent } from './components/home/home.component';
import { FormComponent } from './components/form/form.component';
import { SearchComponent } from './components/search/search.component';
import { EchartComponent } from './components/echart/echart.component';
import { TodoListComponent } from './components/todo-list/todo-list.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { IndexComponent } from './components/index/index.component';

//引入并配置服务
import { StorageService } from './services/storage.service';

@NgModule({
  //schemas:[NO_ERRORS_SCHEMA],
  declarations: [
    AppComponent,
    NewsComponent,
    HomeComponent,
    FormComponent,
    SearchComponent,
    EchartComponent,
    TodoListComponent,
    FooterComponent,
    HeaderComponent,
    IndexComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    NgxEchartsModule
  ],
  //声明服务
  providers: [StorageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
