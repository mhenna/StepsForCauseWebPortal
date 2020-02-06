import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HeaderComponent } from './header/header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgZorroAntdModule, NZ_I18N, en_US, zh_CN} from 'ng-zorro-antd';
import { registerLocaleData } from '@angular/common';
import { FooterComponent } from './footer/footer.component';
import { CommonModule } from '@angular/common';
import en from '@angular/common/locales/en';
import { HttpModule } from '@angular/http';
import { SignupFormComponent } from './signup-form/signup-form.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { environment } from '../environments/environment';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { LoginComponent } from './login/login.component';
import { AngularFireAuth } from '@angular/fire/auth';
import * as firebase from 'firebase/app';
import { UserComponent } from './user/user.component';
import { TestComponent } from './test/test.component';

registerLocaleData(en);

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    SignupFormComponent,
    LandingPageComponent,
    AdminLoginComponent,
    LoginComponent,
    UserComponent,
    TestComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    NgZorroAntdModule,
    ReactiveFormsModule,
    CommonModule,
    HttpModule,
    AngularFireModule.initializeApp(environment.firebase, 'steps-for-cause'),
    AngularFireDatabaseModule,
    // AngularFireAuth
  ],
  providers: [AngularFireAuth, , AngularFireDatabaseModule, AngularFireModule,{ provide: NZ_I18N, useValue: en_US }],
  bootstrap: [AppComponent]
})
export class AppModule { }
