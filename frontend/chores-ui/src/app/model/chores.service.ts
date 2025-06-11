import { Injectable } from '@angular/core';

export class Chore {
  name: string;
  frequency: string;

  constructor(name: string, frequency: string) {
    this.name = name;
    this.frequency = frequency;
  }
}

@Injectable({
  providedIn: 'root'
})
export class ChoresService {

  constructor() { }

  getChores(): Chore[] {
    return [
      new Chore('Vacuum', 'Weekly'),
      new Chore('Dust', 'Monthly'),
      new Chore('Mop', 'Weekly'),
      new Chore('Laundry', 'Weekly'),
      new Chore('Dishes', 'Daily')
    ];
  }
}
