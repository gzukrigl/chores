import { Component } from '@angular/core';
import { Chore } from '../model/chores.service';
import { ChoresService } from '../model/chores.service';

@Component({
  selector: 'app-chores-list',
  imports: [],

  templateUrl: './chores-list.component..html',
  styleUrl: './chores-list.component.css'
})
export class ChoresListComponent {
  chores: Chore[] = [];
  colors = ["Red", "Blue", "White"];

  constructor(private choresService: ChoresService) { 
    this.chores = this.choresService.getChores();
  }
}
