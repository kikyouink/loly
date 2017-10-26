import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { NavController} from 'ionic-angular';
import {SocketService} from '../provider/socket.service';
import {ToastService} from '../provider/toast.service';
import { ThemeService } from '../provider/theme.service';
import { StorageService } from '../provider/storage.service';
@NgModule({
  declarations: [
    MyApp,
  ],
  imports: [
    BrowserModule,
    FormsModule ,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp
  ],
  providers: [
    StatusBar,
    SplashScreen,
    SocketService,
    ToastService,
    ThemeService,
    StorageService,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
