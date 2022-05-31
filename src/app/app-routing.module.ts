import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditusersComponent } from './editusers/editusers.component';

const routes: Routes = [
  {path:"editusers", component:EditusersComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
