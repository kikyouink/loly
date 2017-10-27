import { Injectable } from '@angular/core';
@Injectable()
export class ThemeService {
  theme = {
    theme:'theme-indianred'
  };
  set(prop: string, value: any) {
    // internally mutate our state
    return this.theme[prop] = value;
  }

}