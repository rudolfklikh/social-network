import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';


import { AppComponent } from './app.component';
import { NavBarComponent } from './shared-module/common-components/nav-bar/nav-bar.component';
import { FooterComponent } from './shared-module/common-components/footer/footer.component';
import { MainContentComponent } from './main-content/main-content.component';
import { LoginComponent } from './login/login.component';


const config = {
  apiKey: 'AIzaSyDv9ZlzYDwL5dKoV3fF-2r9RQCzHX1zhMg',
  authDomain: 'angularpractice-7b693.firebaseapp.com',
  databaseURL: 'https://angularpractice-7b693.firebaseio.com',
  projectId: 'angularpractice-7b693',
  storageBucket: 'angularpractice-7b693.appspot.com',
  messagingSenderId: '859016127883'
};

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    FooterComponent,
    MainContentComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
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
