import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { AlertModule } from 'ngx-bootstrap';

import { AppComponent } from './app.component';
import { AuthService } from './services/auth.service';
import { SelfieService } from './services/selfie.service';
import { RouterModule } from '@angular/router';
import { IsLoggedInService } from './services/is-logged-in.canactivate.service';
import { QuizzControllerService } from './services/quizz-controller.service';
import { MessageService } from './services/message.service';
import { TodoService } from './services/todo.service';
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
import { NavbarComponent } from './navbar/navbar.component';
import { IndexComponent } from './index/index.component';
import { BrotherComponent } from './brother/brother.component';
import { MailComponent } from './mail/mail.component';
import { ProfileComponent } from './userprofile/profile/profile.component';
import { TodoComponent } from './userprofile/todo/todo.component';
import { PointsComponent } from './userprofile/points/points.component';

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
    SelfieComponent,
    NavbarComponent,
    IndexComponent,
    BrotherComponent,
    MailComponent,
    ProfileComponent,
    TodoComponent,
    PointsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routes),
    AlertModule.forRoot()
  ],
  providers: [AuthService, IsLoggedInService,QuizzControllerService,MessageService,SelfieService, TodoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
