import { Component, OnInit } from '@angular/core';
import { states } from './dataset';
import { StatesService } from '../services/states.service';

@Component({
  selector: 'linkedin-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {

  public newStates = states;

  constructor(
    private statesService : StatesService
  ) { }

  ngOnInit(): void {
  }

  get states (){
    return this.statesService.historial;
  }

}
