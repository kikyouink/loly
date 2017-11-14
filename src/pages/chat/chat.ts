import { Component,ViewChild} from '@angular/core';
import { IonicPage, NavController, NavParams,Content } from 'ionic-angular';
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
  @ViewChild('content') content: Content;
  list=[];
  constructor(public navCtrl: NavController, public navParams: NavParams, public app :App,public ss:SocketService) {
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad ChatPage');
    var abc=this.ss.abc;
    console.log(abc);
    abc.then((s)=>{
      console.log(s);
    })
  }
  send(msg){
    this.ss.send(msg,this.to);
    this.input.value='';
    this.list.push({
      headImg:'assets/img/avatar/1.jpg',
      msg:msg,
    })
    this.scrollToBottom();
  }
  sendAll(msg){
    this.ss.sendAll(msg);
  }
  scrollToBottom() {
    setTimeout(() => {
      this.content.scrollToBottom();
    }, 100);
  }
}
