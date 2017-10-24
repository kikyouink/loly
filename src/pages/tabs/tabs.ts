import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  templateUrl: 'tabs.html'
})

export class TabsPage {
  tabRoots: Object[];
  info:object={
    username:this.navParams.get('username')
  };
  constructor(public navParams: NavParams) {
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
  }
}