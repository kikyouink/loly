import { AppState } from './app.global';
import { Component,ViewChild } from '@angular/core';
import { Platform,NavController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage: any = 'TabsPage';
  @ViewChild('content') nav: NavController;
  items:object[];
  constructor(platform: Platform, 
    statusBar: StatusBar,
     splashScreen: SplashScreen,
     public global: AppState,
    ) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.backgroundColorByHexString('#00ffffff');
      splashScreen.hide();
      this.items=[
        {
          icon:'leaf',
          name:'个人主页',
          page:'PersonPage',
        },
        {
          icon:'shirt',
          name:'个性装扮',
          page:'DressPage',
        },
        {
          icon:'star',
          name:'我的收藏',
          page:'StarPage',
        },
        {
          icon:'photos',
          name:'我的相册',
          page:'PhotoPage',
        },
        {
          icon:'folder',
          name:'我的文件',
          page:'FolderPage',
        },
      ]
    });
  }
  moveTo(page){
    this.nav.push(page);
  }
  setTheme(theme){
    this.global.set('theme', theme);
  }
}
