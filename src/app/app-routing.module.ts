import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SecureComponent } from './Pages/secure/secure.component';
import { LoginComponent } from './AuthComponent/login/login.component';
import { RegisterComponent } from './AuthComponent/register/register.component';
import { AuthGuard } from './auth.guard';
import {NotFoundComponent} from './Pages/not-found/not-found.component';

const routes: Routes = [
  { path: '', redirectTo: 'secure', pathMatch: 'full' },
  { path: 'secure', canActivate: [ AuthGuard ], component: SecureComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: '404', component: NotFoundComponent },
  { path: '**', redirectTo: '404' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
