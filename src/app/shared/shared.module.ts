import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { BreadcumsComponent } from './breadcums/breadcums.component';

@NgModule({
  declarations: [
    BreadcumsComponent,
    SidebarComponent,
    HeaderComponent
  ],
  exports: [
    BreadcumsComponent,
    SidebarComponent,
    HeaderComponent
  ],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
