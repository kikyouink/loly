import {App } from 'ionic-angular';  
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {SocketService} from '../../provider/socket.service';
import {ToastService} from '../../provider/toast.service';
/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public app :App,
    public ss:SocketService,
    public toastCtrl: ToastService,
  ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
    console.log(this.navCtrl);
  }
  Login(username: HTMLInputElement, password: HTMLInputElement) {
      var ss=this.ss;
      var num=0;
      var name=username.value;
      var info={username: name, password: password.value};
      ss.login(info);
      console.log(ss.login_result);
      var time=setInterval(()=>{
          console.log(num++);
          if(ss.login_result==undefined) return;
          if(ss.login_result==true){
              this.navCtrl.push('TabsPage', {
                  username: name,
              });
              //this.app.getRootNav().setRoot('TabsPage');
              this.toastCtrl.create('登录成功');
          }
          else{
              this.toastCtrl.create('登录失败');
          }
          clearInterval(time);
      },500);
  }
  moveTo(page){
    this.navCtrl.push(page);
  }

}
