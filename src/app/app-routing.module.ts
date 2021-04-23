import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ListComponent} from './list/list.component';
import {LoginComponent} from './login/login.component';
import {CreateComponent} from './create/create.component';
import {UpdateComponent} from './update/update.component';
import {StopGuard} from './stop.guard';

const routes: Routes = [
  {
    path: 'list',
    component: ListComponent,
    canActivate: [StopGuard]
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'list/create',
    component: CreateComponent,
    canActivate: [StopGuard]
  },
  {
    path: 'list/update',
    component: UpdateComponent,
    canActivate: [StopGuard]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
