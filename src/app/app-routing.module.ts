import { NgModule } from '@angular/core';
import { RouterModule, Routes } from "@angular/router";
import {ContentListComponent} from "./content-list/content-list.component";
import {ContentDetailComponent} from "./content-detail/content-detail.component";
import {PageNotFoundComponent} from "./page-not-found/page-not-found.component";


const routes : Routes = [
  {
    path: "",
    redirectTo: "/list",
    pathMatch: "full"
  },
  { path: 'list', loadChildren: () => import('./content/content.module').then(m => m.ContentModule) },
  {
    path: "**",
    component: PageNotFoundComponent
  }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
