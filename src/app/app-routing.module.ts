import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {path: '',redirectTo: "pages",pathMatch:'full'},
  { path: "pages", loadChildren:()=>import("./pages/pages.module").then(m => m.PagesModule)},
  {path: "**",loadChildren: ()=>import('./pages/error/error.module').then(m=>m.ErrorModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
