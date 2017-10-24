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
  constructor(public navCtrl: NavController, 
    public navParams: NavParams,
    public menuCtrl: MenuController,
    public app :App,
    private statusBar: StatusBar) {
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad MainPage');
    console.log(this.navParams.get('username'));
    this.username=this.navParams.get('username');
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
