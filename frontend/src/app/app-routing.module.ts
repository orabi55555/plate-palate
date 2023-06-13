import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignupPageComponent } from './components/pages/auth/signup-page/signup-page.component';

const routes: Routes = [{ path: 'signup', component: SignupPageComponent }, {}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
