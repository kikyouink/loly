import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'Check'})

export class CheckPipe implements PipeTransform {
  transform(username: string): boolean {
    var x = /^[a-zA-Z0-9_-]{6,10}$/;
    return x.test(username);
  }
}