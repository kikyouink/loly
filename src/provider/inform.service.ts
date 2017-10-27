import { Injectable } from '@angular/core';
import { Toast, ToastController } from 'ionic-angular';
import { LoadingController } from 'ionic-angular';
@Injectable()
export class InformService {

  toast: Toast;
  constructor(
    public toastCtrl: ToastController,
    public loadingCtrl: LoadingController,
  ) { }

  createT(message, position = 'bottom') {
    if (this.toast) {
      this.toast.dismiss();
    }

    this.toast = this.toastCtrl.create({
      message,
      position: position,
      duration: 2000
    });
    this.toast.present();
  }
  createL(content,duration = 2000,callback){
    let loader = this.loadingCtrl.create({
      content: content,
      duration: duration
    });
    loader.present();
    loader.onDidDismiss(()=>{
      console.log('loadding结束');
      callback.call();
    });
  }
}
