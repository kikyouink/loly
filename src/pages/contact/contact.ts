import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {SocketService} from '../../provider/socket.service';

/**
 * Generated class for the ContactPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html',
})
export class ContactPage {
  items: object;
  isExist:boolean=false;
  n:number=100;
  constructor(public navCtrl: NavController, public navParams: NavParams,public ss:SocketService,) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ContactPage');
  }

  getItems(ev: any) {
    let val = ev.target.value;
    let ss=this.ss;
    ss.search(val);
    console.log(ss.search_result);
    if(ss.search_result=='none') this.items=null;
    else this.items=ss.search_result;
  }
  starTalking(username){
    
  }
}
