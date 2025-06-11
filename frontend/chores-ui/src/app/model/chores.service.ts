import { Injectable } from '@angular/core';

export class Chore {
  name: string;
  frequency: string;
  type: string;

  constructor(name: string, frequency: string, type: string = 'generic') {
    this.name = name;
    this.frequency = frequency;
    this.type = type;
  }
}

@Injectable({
  providedIn: 'root'
})
export class ChoresService {

  constructor() { }

  getChores(): Chore[] {
    return [
      new Chore('Vacuum', 'Weekly', 'vacuum'),
      new Chore('Dust', 'Monthly', 'generic'),
      new Chore('Mop', 'Weekly', 'generic'),
      new Chore('Laundry', 'Weekly', 'generic'),
      new Chore('Dishes', 'Daily', 'dishes')
    ];
  }
}