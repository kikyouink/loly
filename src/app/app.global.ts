import { Injectable } from '@angular/core';
@Injectable()
export class AppState {
  state = {};

  // already return a clone of the current state


  set(prop: string, value: any) {
    console.log(this.state);
    // internally mutate our state
    return this.state[prop] = value;
  }

}