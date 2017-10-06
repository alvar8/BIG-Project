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

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'user',  component: UserprofileComponent,canActivate: [ IsLoggedInService ]  },
    { path: 'login',  component: LoginformComponent,  },
    { path: 'signup',  component: SignupformComponent,  },
    { path: 'quizz',  component: QuizzComponent,  },
    { path: 'edit/:id', component: EditprofileComponent},
    { path: 'chat/:id', component: ChatComponent},
    { path: 'selfie/:id', component: SelfieComponent },
    { path: '**', redirectTo: '' }
];
