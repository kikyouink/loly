import { Injectable } from '@angular/core';
import { InformService } from  './inform.service';
declare const io;
@Injectable()
export class SocketService {
    //url:string='10.11.163.178:3000';
    url:string='https://loly.club:3000/';
    socket:any=io(this.url,{secure: true});
    sign_result:boolean;
    login_result:boolean;
    search_result:any;
    nickname:string;
    n:number=0;
    //inited:boolean=false;
    constructor(public is: InformService){

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
    abc:Promise<Text>;
    onInit(){
        this.socket.on('signSuccess', () => {
            this.sign_result=true; 
            this.is.createT('注册成功');
        });
        this.socket.on('isExits', () => {
            this.sign_result=false;
            this.is.createT('此用户已存在');  
        })
        this.socket.on('loginSuccess', () => {
            this.login_result=true;
            this.is.createT('登录成功');          
        });
        this.socket.on('loginFailed', () => {
            this.login_result=false;
            this.is.createT('登录失败');  
        });
        this.socket.on('privateMsg',(msg)=>{
            this.abc=Promise.resolve(msg);
        });
        // this.socket.on('privateMsg',(msg)=>{
        //     this.is.createT('私人信息:'+msg);
        //     console.log(msg);           
        // })
        this.socket.on('publicMsg',(msg)=>{
            this.is.createT('公共信息:'+msg);
            console.log(msg);           
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