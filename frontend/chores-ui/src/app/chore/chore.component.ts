import { Component, Input } from '@angular/core';
import { Chore } from '../model/chores.service';
@Component({
  selector: 'app-chore',
  imports: [],
  templateUrl: './chore.component.html',
  styleUrl: './chore.component.css'
})
export class ChoreComponent {
  @Input() chore: Chore; 
  
  constructor() {
    this.chore = new Chore('dummy', 'dummy');
  }

  getIcon(): string {
    switch (this.chore.type) {
      case 'vacuum':
        return 'vacuum.jpg';
      case 'dishes':
        return 'dishes.jpg';
      case 'generic':
        return 'generic.jpg';
    }
    return 'generic.jpg';
  }
}
