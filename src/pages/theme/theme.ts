import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { StorageService } from '../../provider/storage.service';
import { ThemeService } from '../../provider/theme.service';
import { InformService } from '../../provider/inform.service';
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

  constructor(public navCtrl: NavController, 
    public navParams: NavParams,
    public sto: StorageService,
    public global:ThemeService,
    public is:InformService,
  ) {
  }
  list:object[];
  ionViewDidLoad() {
    console.log('ionViewDidLoad ThemePage');
    this.list=[
      {
        name:'新桥',
        color:'blue',
      },{
        name:'葡萄',
        color:'purple',
      }, {
        name:'原谅',
        color:'darkgray',
      }, {
        name:'纯白',
        color:'white',
        textColor:'#488aff',
      }, {
        name:'夜间',
        color:'black',
      }, {
        name:'少女',
        color:'indianred',
      },
    ]
  }
  changeTheme(color){
      var theme='theme-'+color;
      console.log('传入的主题是:'+theme);
      this.is.createL('设置中...',1000,()=>{
        this.navCtrl.pop();
      });
      this.global.set('theme', theme);
      this.sto.save('theme',theme);

  }

}
