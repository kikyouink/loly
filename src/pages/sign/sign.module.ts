import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SignPage } from './sign';
import { PipesModule } from '../../pipe/pipe.moudle';
@NgModule({
  declarations: [
    SignPage,
  ],
  imports: [
    PipesModule,
    IonicPageModule.forChild(SignPage),
  ],
})
export class SignPageModule {}
