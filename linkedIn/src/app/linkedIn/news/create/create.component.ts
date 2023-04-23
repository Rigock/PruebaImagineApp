import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { StatesService } from '../../services/states.service';

@Component({
  selector: 'news-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  @ViewChild('txtPost') txtPost!: ElementRef<HTMLInputElement>;
  
  constructor(
    private statesService: StatesService
  ) { }

  ngOnInit(): void {
  }

  buscar(){
    const state = this.txtPost.nativeElement.value;
    
    if(state.trim().length === 0) return;

    this.txtPost.nativeElement.value = '';
    this.statesService.postStates(state);
  }
}
