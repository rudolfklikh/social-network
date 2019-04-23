import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { HoverDirective } from './hover.directive';

import { SearchPipe } from './search.pipe';

import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import { UserComponent } from './user/user.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { FooterComponent } from './footer/footer.component';
import { SetupComponent } from './setup/setup.component';
import { MainContentComponent } from './main-content/main-content.component';

const routes = [
  {path: '', component: HomePageComponent},
  {path: 'setup', component: SetupComponent}
];
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
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(routes),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
