import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StatesService {

  private _historial: any = [];

  constructor() { }
  
  get historial(){
    return [...this._historial];
 }

 postStates( term: any ){
  this._historial.unshift(term);
 }

}
