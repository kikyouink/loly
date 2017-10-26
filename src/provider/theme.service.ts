import { Injectable } from '@angular/core';
@Injectable()
export class ThemeService {
  theme = {};
  set(prop: string, value: any) {
    console.log(this.theme);
    // internally mutate our state
    return this.theme[prop] = value;
  }

}