import { Injectable } from '@angular/core';
import { Toast, ToastController } from 'ionic-angular';

@Injectable()
export class ToastService {

  toast: Toast;
  constructor(public toastCtrl: ToastController) { }

  create(message, position = 'bottom') {
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
}
