import { Injectable } from '@angular/core';
declare const io;
@Injectable()
export class SocketService {
    url:string='http://10.11.163.178:3000/';
    socket:any=io(this.url);
    sign_result:boolean;
    login_result:boolean;
    nickname:string;
    sign(info){
        this.socket.emit('signRq',info);
        this.socket.on('signSuccess', () => {
            this.sign_result=true;
            console.log('注册成功!');
        });
        this.socket.on('isExits', () => {
            this.sign_result=false;
            console.log('用户名已存在!');
        })
    }
    login(info){
        this.socket.emit('loginRq',info);
        this.socket.on('loginSuccess', () => {
            //this.nickname=nickname;
            this.login_result=true;
            //console.log(nickname+'登录成功！')
        });
        this.socket.on('loginFailed', () => {
            this.login_result=false;
            console.log('登录失败...')
        });
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
    waitMsg(){
        this.socket.on('privateMsg',function(msg){
            console.log(msg);
        })
        this.socket.on('publicMsg',function(msg){
            console.log(msg);
        })
    }
}