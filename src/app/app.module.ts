import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import {MatSidenavModule} from '@angular/material/sidenav';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PageGestionComponent } from './page-gestion/page-gestion.component';
import { PageListeComponent } from './page-liste/page-liste.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { ReactiveFormsModule } from '@angular/forms';

const appRoutes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'liste', component: PageListeComponent },
  { path: 'gestion', component: PageGestionComponent },
  { path: 'contact', component: ContactComponent },
  { path: '**', component:HomeComponent}

];



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    PageGestionComponent,
    PageListeComponent,
    ContactComponent,
    HomeComponent
  ],
  imports: [
    ReactiveFormsModule,
    BrowserModule,
    BrowserAnimationsModule,    
    RouterModule.forRoot(
      appRoutes,
    ),

  ],
 
  exports:[
    MatSidenavModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
