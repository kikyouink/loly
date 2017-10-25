import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {SocketService} from '../../provider/socket.service';

@IonicPage()
@Component({
  templateUrl: 'tabs.html'
})

export class TabsPage {
  tabRoots: Object[];
  info:object={
    username:this.navParams.get('username')
  };
  constructor(public navParams: NavParams,public ss:SocketService) {
    this.tabRoots = [
      {
        root: 'MainPage',
        tabTitle: '消息',
        tabIcon: 'chatbubbles'
      },
      {
        root: 'ContactPage',
        tabTitle: '好友',
        tabIcon: 'contacts'
      },
      {
        root: 'NewsPage',
        tabTitle: '动态',
        tabIcon: 'planet'
      }
    ];
  }
  ionViewDidLoad() {
    console.log(this.info);
    if(this.info['username']!=null) this.ss.sendName(this.info['username']);
    this.ss.waitMsg();
  }
}