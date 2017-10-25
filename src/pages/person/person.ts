import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the PersonPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-person',
  templateUrl: 'person.html',
})
export class PersonPage {
  items:object[]=[
    {
      id:1,
      name:'张三',
    },
    {
      id:2,
      name:'李四',
    },
    {
      id:3,
      name:'王五',
    },
    {
      id:4,
      name:'赵六',
    }
  ]
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PersonPage');
  }
  trackById(index: number, item: any): number { return item['id']; }
  changeId(){
    this.items[0]['id']=100;
  }
}
