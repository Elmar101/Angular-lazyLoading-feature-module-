import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { PagesComponent } from './pages.component';

const routes: Routes = [
  {
    path: "", component: PagesComponent,
    children: [
      {path: "home",loadChildren:()=>import('./master-pages/home/home.module').then(m => m.HomeModule) },
      {path: "about",loadChildren: ()=> import('./master-pages/about/about.module').then(m=>m.AboutModule)},
      {path: "contact", loadChildren:()=>import('./master-pages/contact/contact.module').then(m =>m.ContactModule)}
    ]
  }
];


@NgModule({
  declarations: [PagesComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class PagesModule { }
