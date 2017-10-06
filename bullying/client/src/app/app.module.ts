import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AuthService } from './services/auth.service';
import { SelfieService } from './services/selfie.service';
import { RouterModule } from '@angular/router';
import { IsLoggedInService } from './services/is-logged-in.canactivate.service';
import { QuizzControllerService } from './services/quizz-controller.service';
import { MessageService } from './services/message.service';
import {routes} from './routes';
import { HomeComponent } from './home/home.component';
import { LoginformComponent } from './loginform/loginform.component';
import { SignupformComponent } from './signupform/signupform.component';
import { UserprofileComponent } from './userprofile/userprofile.component';
import { QuizzComponent } from './quizz/quizz.component';
import { EditprofileComponent } from './editprofile/editprofile.component';
import { FileSelectDirective } from "ng2-file-upload";
import { ChatComponent } from './chat/chat.component';
import { SelfieComponent } from './selfie/selfie.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginformComponent,
    SignupformComponent,
    UserprofileComponent,
    QuizzComponent,
    EditprofileComponent,
    FileSelectDirective,
    ChatComponent,
    SelfieComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routes)
  ],
  providers: [AuthService, IsLoggedInService,QuizzControllerService,MessageService,SelfieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
