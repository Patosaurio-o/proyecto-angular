import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LogComponent } from './log/log.component';
import { ViewComponent } from './view/view.component';
import { MenuComponent } from './view/menu/menu.component';
import { ContentComponent } from './view/content/content.component';
import { NavComponent } from './view/content/nav/nav.component';
import { HeadComponent } from './view/content/head/head.component';
import { Folder1Component } from './view/content/folder1/folder1.component';
import { Folder2Component } from './view/content/folder2/folder2.component';
import { DefaultMenuComponent } from './view/content/default-menu/default-menu.component';



@NgModule({
  declarations: [
    AppComponent,
    LogComponent,
    ViewComponent,
    MenuComponent,
    ContentComponent,
    NavComponent,
    HeadComponent,
    Folder1Component,
    Folder2Component,
    DefaultMenuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
