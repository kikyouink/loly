import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AppState } from '../../app/app.global';
/**
 * Generated class for the ThemePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-theme',
  templateUrl: 'theme.html',
})
export class ThemePage {
  items:object[];
  constructor(public navCtrl: NavController, public navParams: NavParams,public global:AppState) {
    this.items=[
      {
        color:'blue',
        colorName:'新桥'
      },
      {
        color:'purple',
        colorName:'葡萄'
      },
      {
        color:'red',
        colorName:'热情'
      },
      {
        color:'gold',
        colorName:'黄金'
      },
      {
        color:'pink',
        colorName:'少女'
      },
      {
        color:'green',
        colorName:'原谅'
      },
    ]
  }
  setTheme(theme){
    this.global.set('theme', 'theme-dark');
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad ThemePage');
  }

}
