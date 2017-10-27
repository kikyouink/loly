import { Injectable } from '@angular/core';
@Injectable()
export class StorageService {
    constructor(){}
    init(){
        if(this.get('inited')=='true'){
            console.log('已定义');
            return ;
        }
        console.log('未定义');
        var arg=['theme'];
        var value=['theme-deeppink'];
        for(var i=0;i<arg.length;i++){
            this.save(arg[0],value[0]);
        }
        this.save('inited',true);
    }
    save(key,value){
        localStorage.setItem(key, value);
    }
    get(key){
        return localStorage.getItem(key);
    }
    delete(key){
        localStorage.removeItem(key);
    }
}