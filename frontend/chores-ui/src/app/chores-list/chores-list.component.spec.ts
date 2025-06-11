import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChoresListComponent } from './chores-list.component';

describe('ChoresListComponent', () => {
  let component: ChoresListComponent;
  let fixture: ComponentFixture<ChoresListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChoresListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChoresListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
