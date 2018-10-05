import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatDialogModule} from '@angular/material/dialog';
import {FormsModule} from '@angular/forms'
import { UserLoginComponent,SignupComponent} from './login/login.signup.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {HttpClientModule} from '@angular/common/http';
import {RouterModule} from '@angular/router'

import {
  MatButtonModule,
  MatFormFieldModule,
  MatInputModule,
  MatRippleModule,
  MatSidenavModule,
  MatCheckboxModule
} from '@angular/material';

import { AppComponent } from './app.component';
import { LoginSignupComponent } from './login/login.signup.component';
import { ServicesComponent } from './services/services.component';
import { FooterComponent } from './footer/footer.component';
import { ClientsComponent } from './clients/clients.component';
import { ContactComponent } from './contact/contact.component';
 
var rout=[{path:"services",component:ServicesComponent},
          {path:"client",component:ClientsComponent},
          {path:"contact",component:ContactComponent}
        ]
var robj=RouterModule.forRoot(rout)

@NgModule({
  declarations: [
    AppComponent,
    LoginSignupComponent,
    UserLoginComponent,
    SignupComponent,
    ServicesComponent,
    FooterComponent,
    ClientsComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatDialogModule,
    FormsModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatRippleModule,MatToolbarModule,
    HttpClientModule,
    MatSidenavModule,
    MatCheckboxModule,
    RouterModule,robj
  ],
  entryComponents: [UserLoginComponent,SignupComponent],
  exports:
   [MatDialogModule, 
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatRippleModule,
    MatToolbarModule,
    MatSidenavModule,
    MatCheckboxModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
