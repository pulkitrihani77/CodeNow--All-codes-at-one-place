import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CurrCodeService {

  currPlatform = ""
  constructor() {}

  updatePlatform(str:string){
    this.currPlatform = str;
  }

  getPlatform(){
    return this.currPlatform;
  }
}
