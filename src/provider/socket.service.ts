import { Injectable } from '@angular/core';
import { ToastService } from  './toast.service';
declare const io;
@Injectable()
export class SocketService {
    //url:string='10.11.163.178:3000';
    url:string='http://111.231.216.168:3000/';
    socket:any=io(this.url,{secure: true});
    sign_result:boolean;
    login_result:boolean;
    search_result:any;
    nickname:string;
    n:number=0;
    //inited:boolean=false;
    constructor(public toastCtrl: ToastService){

    }
    sign(info){
        this.socket.emit('signRq',info);
    }
    login(info){
        this.socket.emit('loginRq',info);
    }
    sendName(name){
        this.socket.emit('sendName',name);
    }
    send(msg,to){
        this.socket.emit('privateMsg', {msg:msg,to:to });
    }
    sendAll(msg){
        this.socket.emit('publicMsg', msg);
    }
    search(val){
        this.socket.emit('search', { username: val});
    }
    onInit(){
        this.socket.on('signSuccess', () => {
            this.sign_result=true;
            console.log(this.n++);
            this.toastCtrl.create('注册成功');
        });
        this.socket.on('isExits', () => {
            this.sign_result=false;
            this.toastCtrl.create('此用户已存在');
            console.log(this.n++);
        })
        this.socket.on('loginSuccess', () => {
            this.login_result=true;
            this.toastCtrl.create('登录成功');
            console.log(this.n++);
        });
        this.socket.on('loginFailed', () => {
            this.login_result=false;
            this.toastCtrl.create('登录失败');
            console.log(this.n++);
        });
        this.socket.on('privateMsg',(msg)=>{
            this.toastCtrl.create('私人信息:'+msg);
            console.log(msg);
            console.log(this.n++);
        })
        this.socket.on('publicMsg',(msg)=>{
            this.toastCtrl.create('公共信息:'+msg);
            console.log(msg);
            console.log(this.n++);
        })
        this.socket.on('searchResult', (userdata) => {       
            if(userdata=='无结果'){
              this.search_result=null;
            }
            else{
                this.search_result={
                    nickname:userdata.nickname,
                    headimg:'http://q2.qlogo.cn/headimg_dl?bs=2578443177&dst_uin='+userdata.username+'&dst_uin='+userdata.username+'&;dst_uin='+userdata.username+'&spec=100&url_enc=0&referer=bu_interface&term_type=PC'
                }
            }
        });
    }
}