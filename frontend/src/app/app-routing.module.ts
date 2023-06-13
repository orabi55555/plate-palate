import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginPageComponent } from './components/pages/login-page/login-page.component';
import { GoogleButtonComponent } from './components/pages/login-page/thirdPartyLoginButtons/google-button/google-button.component';

const routes: Routes = [
  { path: 'login', component: LoginPageComponent },
  { path: 'google', component: GoogleButtonComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
