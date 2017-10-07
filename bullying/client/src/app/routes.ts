import { Routes } from '@angular/router';

import {HomeComponent} from './home/home.component';
import {UserprofileComponent} from './userprofile/userprofile.component';
import {LoginformComponent} from './loginform/loginform.component';
import {SignupformComponent} from './signupform/signupform.component';
import {QuizzComponent} from './quizz/quizz.component';
import {EditprofileComponent} from './editprofile/editprofile.component'
import {IsLoggedInService} from './services/is-logged-in.canactivate.service';
import {ChatComponent} from './chat/chat.component'
import {SelfieComponent} from './selfie/selfie.component'
import {IndexComponent} from './index/index.component'
import {BrotherComponent} from './brother/brother.component'
import {MailComponent} from './mail/mail.component'
import {ProfileComponent} from './userprofile/profile/profile.component'
import {TodoComponent} from './userprofile/todo/todo.component'
import {PointsComponent} from './userprofile/points/points.component'

export const routes: Routes = [
    { path: '', component: IndexComponent },
    { path: 'home', component: HomeComponent },
    { path: 'user',  component: UserprofileComponent,canActivate: [ IsLoggedInService ]  },
    { path: 'login',  component: LoginformComponent,  },
    { path: 'signup',  component: SignupformComponent,  },
    { path: 'quizz',  component: QuizzComponent,  },
    { path: 'edit/:id', component: EditprofileComponent},
    { path: 'chat/:id', component: ChatComponent},
    { path: 'selfie/:id', component: SelfieComponent },
    { path: 'brother', component: BrotherComponent },
    { path: 'mail', component: MailComponent },
    { path: 'profile', component: ProfileComponent },
    { path: 'todo', component: TodoComponent },
    { path: 'points', component: PointsComponent },
    { path: '**', redirectTo: '' }
];
