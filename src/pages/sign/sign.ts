import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {ToastService} from '../../provider/toast.service';
import {SocketService} from '../../provider/socket.service';

@IonicPage()
@Component({
    selector: 'page-sign',
    templateUrl: 'sign.html',
})
export class SignPage {

    constructor(
        public navCtrl: NavController,
        public navParams: NavParams,
        public ss:SocketService,
        public toastCtrl: ToastService,
    ) {
    }

    ionViewDidLoad() {
        console.log('ionViewDidLoad SignPage');
    }
    Sign(username: HTMLInputElement, password: HTMLInputElement) {
        var ss=this.ss;
        var name=username.value;
        var info={username: name, password: password.value};
        ss.sign(info);
        console.log(ss.sign_result);
        var time=setInterval(()=>{
            if(ss.sign_result==undefined) return;
            if(ss.sign_result==true){
                this.navCtrl.push('TabsPage', {
                    username: name
                });
                this.toastCtrl.create('注册成功');
            }
            else{
                setTimeout(()=>{
                    this.navCtrl.pop();
                },2000);
                this.toastCtrl.create('此用户已存在');
            }
            clearInterval(time);
        },500);
        
    }
}
