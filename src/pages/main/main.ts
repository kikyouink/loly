import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MenuController } from 'ionic-angular';
import {App } from 'ionic-angular';  
import { StatusBar } from '@ionic-native/status-bar';
declare var io;
/**
 * Generated class for the MainPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-main',
  templateUrl: 'main.html',
})
export class MainPage {
  username:string='';
  items:object[];
  items2:object[];
  constructor(public navCtrl: NavController, 
    public navParams: NavParams,
    public menuCtrl: MenuController,
    public app :App,
    private statusBar: StatusBar,
  ) {
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad MainPage');
    console.log(this.navParams.get('username'));
    this.username=this.navParams.get('username');
    this.items=[
      {
        username:'2578443177',
        src:'assets/img/avatar/1.jpg',
        nickname:'William',
        lastWords:'Hello,nice to meet you。',
      },
      {
        username:'123456',
        src:'assets/img/avatar/2.jpg',
        nickname:'Lera',
        lastWords:'see you later!',
      },
      {
        username:'123456789',
        src:'assets/img/avatar/3.jpg',
        nickname:'Kristen',
        lastWords:'wait a monment...',
      },
    ];
    this.items2=[
      {
        groupname:'群聊',
        src:'assets/img/avatar/flower.png',
        nickname:'Job',
        lastWords:'Manager：send the report to me',
      }
    ]
  }
  toggleMenu() {
    this.menuCtrl.toggle();
    console.log('打开菜单')
  }
  chat(formname,toname){
    this.app.getRootNav().push('ChatPage',{
      from:formname,
      to:toname,
    });
  }
}
