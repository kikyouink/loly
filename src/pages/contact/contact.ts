import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the ContactPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
declare var io;
@IonicPage()
@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html',
})
export class ContactPage {
  items: object={
  };
  isExist:boolean=false;
  url:string='http://10.11.163.178:3000/';
  socket:any=io(this.url);
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ContactPage');
  }


  getItems(ev: any) {
    // Reset items back to all of the items
    // set val to the value of the searchbar
    let val = ev.target.value;
    this.socket.emit('search', { username: val});
    this.socket.on('searchResult', (userdata) => {       
        if(userdata=='无结果'){
          this.isExist=false;
        }
        else{
          this.isExist=true;
          this.items={
            nickname:userdata.nickname,
            headimg:'http://q2.qlogo.cn/headimg_dl?bs=2578443177&dst_uin='+userdata.username+'&dst_uin='+userdata.username+'&;dst_uin='+userdata.username+'&spec=100&url_enc=0&referer=bu_interface&term_type=PC'
          }
        }
    });
  }
  starTalking(username){
    
  }
}
