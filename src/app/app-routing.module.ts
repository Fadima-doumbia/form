import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// import { FeaturesComponent } from './features/features.component';
import { AuthGuardGuard } from './guards/auth-guard.guard';
import { HomeComponent } from './home/home.component';
import { LayoutComponent } from './layout/layout.component';
import { LoginComponent } from './login/login.component';
import { NotFoundComponent } from './not-found/not-found.component';
// import { OneFeatureComponent } from './one-feature/one-feature.component';
import { ProjetComponent } from './projet/projet.component';
import { SignupComponent } from './signup/signup.component';
import { UserComponent } from './user/user.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent},
  { path: 'signup', component: SignupComponent},
  { path: '', canActivate : [AuthGuardGuard] ,component: LayoutComponent, children : [
    { path: '', redirectTo: 'home', pathMatch: 'full'},
    { path: 'home',  component: HomeComponent},
    { path: 'user',  component: UserComponent},
    { path: 'projet',  component: ProjetComponent},
    // { path: 'features', component: FeaturesComponent},
    // { path: 'features/:id', component: OneFeatureComponent},
    { path: 'not-found', component: NotFoundComponent},
    { path:'**', redirectTo:'/not-found'}
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
