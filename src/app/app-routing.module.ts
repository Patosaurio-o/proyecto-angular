import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LogComponent } from './log/log.component';
import { ContentComponent } from './view/content/content.component';
import { DefaultMenuComponent } from './view/content/default-menu/default-menu.component';
import { Folder1Component } from './view/content/folder1/folder1.component';
import { Folder2Component } from './view/content/folder2/folder2.component';
import { NavComponent } from './view/content/nav/nav.component';
import { MenuComponent } from './view/menu/menu.component';
import { ViewComponent } from './view/view.component';

const routes: Routes = [
  {path: '', component: LogComponent},
  {path: 'main', component:  ViewComponent, children: [
    {path: 'mainPage', component: DefaultMenuComponent},
    {path: 'folders', component: Folder1Component},
    {path: 'folders/forms', component: Folder2Component}
  ]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
