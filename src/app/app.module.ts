import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutComponent } from './layout/layout.component';
import { NavBarComponent } from './layout/nav-bar/nav-bar.component';
import { FooterComponent } from './layout/footer/footer.component';
import { HomeComponent } from './home/home.component';
// import { FeaturesComponent } from './features/features.component';
import { LoginComponent } from './login/login.component';
// import { OhFourComponent } from './oh-four/oh-four.component';
import { OneFeatureComponent } from './one-feature/one-feature.component';
import { DetailFeatureComponent } from './detail-feature/detail-feature.component';
import { FeaturesService } from './services/features.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// import { SignupComponent } from './signup/signup.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterceptor } from './interceptor/auth.interceptor';
import { AddFeatureComponent } from './add-feature/add-feature.component';
import { ModalAlertComponent } from './layout/modal-alert/modal-alert.component';
// import { ListFeatureComponent } from './features/list-feature/list-feature.component';
// import { CardFeatureComponent } from './features/list-feature/card-feature/card-feature.component';
import { ProjetComponent } from './projet/projet.component';
import { UserComponent } from './user/user.component';
import { DetailProjectComponent } from './detail-project/detail-project.component';
import { AddProjectComponent } from './add-project/add-project.component';
import { EditProjectComponent } from './edit-project/edit-project.component';
import { ListProjetComponent } from './projet/list-projet/list-projet.component';
import { CardProjetComponent } from './projet/list-projet/card-projet/card-projet.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ListUserComponent } from './user/list-user/list-user.component';
import { CardUserComponent } from './user/list-user/card-user/card-user.component';
import { AddUserComponent } from './add-user/add-user.component';

@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    NavBarComponent,
    FooterComponent,
    HomeComponent,
    // FeaturesComponent,
    LoginComponent,
    // OhFourComponent,
    OneFeatureComponent,
    DetailFeatureComponent,
    // SignupComponent,
    AddFeatureComponent,
    ModalAlertComponent,
    // ListFeatureComponent,
    // CardFeatureComponent,
    ProjetComponent,
    UserComponent,
    DetailProjectComponent,
    AddProjectComponent,
    EditProjectComponent,
    ListProjetComponent,
    CardProjetComponent,
    NotFoundComponent,
    ListUserComponent,
    CardUserComponent,
    AddUserComponent  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [
    FeaturesService,
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
