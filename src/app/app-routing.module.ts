import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingPageComponent } from './landing-page/landing-page.component';

const routes: Routes = [
  { path: '', redirectTo: '/giffgaff.com', pathMatch: 'full' }, // redirect to `first-component`
  { path: 'giffgaff.com', component: LandingPageComponent }
  // {
  //   path: 'home', component: ContainerComponent, children: [
  //     { path: '', component: LandingPageComponent },
  //     { path: 'login', component: LoginComponent },
  //     { path: 'register', component: RegisterComponent },
  //   ]
  // },
  // { path: 'login', component: LoginComponent },
  // { path: '**', component: PageNotFoundComponent }, // Wildcard route for a 404 page
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
