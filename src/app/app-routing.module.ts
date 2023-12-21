import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InsertComponent } from './insert/insert.component';
import { ViewComponent } from './view/view.component';
import { ListComponent } from './list/list.component';
import { UpdateComponent } from './update/update.component';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {path:'insert',component:InsertComponent},
  {path:'view/:id', component:ViewComponent},
  {path:'list',component:ListComponent},
  {path:'list1',component:ListComponent},
  {path:'update/:id',component:UpdateComponent},
  {path:'',component:HomeComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
