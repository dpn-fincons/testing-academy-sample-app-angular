import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatButtonModule} from '@angular/material/button';
import {MatDialogModule} from '@angular/material/dialog';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatToolbarModule} from '@angular/material/toolbar';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {RouterModule} from '@angular/router';
import {DropdownModule} from 'primeng/dropdown';
import {InputTextModule} from 'primeng/inputtext';
import {TableModule} from 'primeng/table';
import {AppRoutingModule} from './app-routing.module';

import {AppComponent} from './app.component';
import {AutoSignInComponent} from './components/auto-sign-in/auto-sign-in.component';
import {MainComponent} from './components/main/main.component';
import {ResultComponent} from './components/result/result.component';
import {SignInComponent} from './components/sign-in/sign-in.component';
import {SignUpComponent} from './components/sign-up/sign-up.component';
import {UserService} from './services/user-service';

@NgModule({
  declarations: [
    AppComponent,
    AutoSignInComponent,
    MainComponent,
    SignInComponent,
    SignUpComponent,
    ResultComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    DropdownModule,
    FormsModule,
    InputTextModule,
    MatButtonModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatToolbarModule,
    ReactiveFormsModule,
    RouterModule,
    TableModule
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
