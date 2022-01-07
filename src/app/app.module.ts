import { NgModule } from '@angular/core';
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

@NgModule({
  declarations: [
    AppComponent,
    NewsComponent,
    HomeComponent,
    FormComponent,
    SearchComponent,
    EchartComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    NgxEchartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
