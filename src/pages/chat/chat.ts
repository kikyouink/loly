import { Component,ViewChild} from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {App } from 'ionic-angular'; 
import {SocketService} from '../../provider/socket.service';
/**
 * Generated class for the ChatPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-chat',
  templateUrl: 'chat.html',
})
export class ChatPage {
  to:string=this.navParams.get('to');
  from:string=this.navParams.get('from');
  @ViewChild('input') input: HTMLInputElement;
  constructor(public navCtrl: NavController, public navParams: NavParams, public app :App,public ss:SocketService) {
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad ChatPage');
  }
  send(msg){
    this.ss.send(msg,this.to);
    this.input.value='';
  }
  sendAll(msg){
    this.ss.sendAll(msg);
  }
}
