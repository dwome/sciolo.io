import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {CategoriesComponent} from "./categories/categories.component";
import {BookdetailComponent} from "./bookdetail/bookdetail.component";

const routes: Routes = [
  {
    path:'',
    component: HomeComponent
  },
  {
    path:'categories',
    component: CategoriesComponent
  },
  {
    path:'bookdetail',
    component: BookdetailComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
