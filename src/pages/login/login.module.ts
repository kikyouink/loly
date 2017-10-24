import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { LoginPage } from './login';
import { PipesModule } from '../../pipe/pipe.moudle';
@NgModule({
  declarations: [
    LoginPage,
  ],
  imports: [
    PipesModule,
    IonicPageModule.forChild(LoginPage),
  ],
})
export class LoginPageModule {}
