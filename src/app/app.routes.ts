import { Routes } from '@angular/router';
import { LoginComponent } from './Components/login/login.component';
import { SignupComponent } from './Components/signup/signup.component';
import { CodeComponent } from './Components/code/code.component';
import { NotfoundComponent } from './Components/notfound/notfound.component';
import { authGuard } from './auth.guard';
import { AddCodesComponent } from './Components/add-codes/add-codes.component';
import { HomeComponent } from './Components/home/home.component';
import { GetCodesComponent } from './Components/get-codes/get-codes.component';
import { DisplayCodeComponent } from './Components/display-code/display-code.component';

export const routes: Routes = [
        {path:'',component:HomeComponent},
        {path:'login',component:LoginComponent},
        {path:'signup',component:SignupComponent},
        {path:'code',component:CodeComponent},
        {path:'addcodes',component:AddCodesComponent},
        {path:'getcodes',component:GetCodesComponent},
        {path:'displaycode/:id',component:DisplayCodeComponent},
        {path:'**',component:NotfoundComponent}

];
