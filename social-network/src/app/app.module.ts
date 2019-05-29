import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireAuthModule } from '@angular/fire/auth';

import { HoverDirective } from './hover.directive';

import { SearchPipe } from './search.pipe';
import { CapitalizePipe } from './capitalize.pipe';

import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import { UserComponent } from './home-page/user/user.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { FooterComponent } from './footer/footer.component';
import { SetupComponent } from './setup/setup.component';
import { MainContentComponent } from './main-content/main-content.component';
import { LoginComponent } from './login/login.component';
import { ProfileComponentComponent } from './profile-component/profile-component.component';
import { UserProfileComponent } from './user-profile/user-profile.component';


const config = {
  apiKey: "AIzaSyDv9ZlzYDwL5dKoV3fF-2r9RQCzHX1zhMg",
  authDomain: "angularpractice-7b693.firebaseapp.com",
  databaseURL: "https://angularpractice-7b693.firebaseio.com",
  projectId: "angularpractice-7b693",
  storageBucket: "angularpractice-7b693.appspot.com",
  messagingSenderId: "859016127883"
};

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    HoverDirective,
    UserComponent,
    NavBarComponent,
    FooterComponent,
    SetupComponent,
    MainContentComponent,
    SearchPipe,
    LoginComponent,
    ProfileComponentComponent,
    CapitalizePipe,
    UserProfileComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    AngularFireModule.initializeApp(config),
    AngularFireAuthModule,
    AngularFirestoreModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
