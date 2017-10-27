import { Component, ViewChild } from '@angular/core';
import { Platform, NavController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { SocketService } from '../provider/socket.service';
import { ThemeService } from '../provider/theme.service';
import { StorageService } from '../provider/storage.service';
@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage: any = 'TabsPage';
  @ViewChild('content') nav: NavController;
  items: object[];
  constructor(platform: Platform,
    statusBar: StatusBar,
    splashScreen: SplashScreen,
    public global: ThemeService,
    public ss: SocketService,
    public sto: StorageService,
  ) {
    platform.ready().then(() => {
      console.log('设备就绪');
      statusBar.backgroundColorByHexString('#00ffffff');
      splashScreen.hide();
      //读取存储
      var sto = this.sto;
      sto.init();              //初始化
      this.setTheme();         //设置主题
      ss.onInit();             //socket.io就位
      this.items = [
        {
          icon: 'leaf',
          name: '个人主页',
          page: 'PersonPage',
        },
        {
          icon: 'shirt',
          name: '个性装扮',
          page: 'DressPage',
        },
        {
          icon: 'star',
          name: '我的收藏',
          page: 'StarPage',
        },
        {
          icon: 'photos',
          name: '我的相册',
          page: 'PhotoPage',
        },
        {
          icon: 'folder',
          name: '我的文件',
          page: 'FolderPage',
        },
      ]
    });
  }
  moveTo(page) {
    this.nav.push(page);
  }
  setTheme() {
    var theme = this.sto.get('theme');
    this.global.set('theme', theme);
  }
}
