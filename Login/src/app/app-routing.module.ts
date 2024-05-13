import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';
import { LoginComponent } from './home/login/login.component';
import { RegistrationComponent } from './home/registration/registration.component';
import { TableComponent } from './home/table/table.component';
const routes: Routes = [
  {
    path:'login', component: LoginComponent
  },
  { path: 'signup', component: RegistrationComponent},
  { path: '', component: TableComponent, canActivate:[AuthGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
