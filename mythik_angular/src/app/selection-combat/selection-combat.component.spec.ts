import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectionCombatComponent } from './selection-combat.component';

describe('SelectionCombatComponent', () => {
  let component: SelectionCombatComponent;
  let fixture: ComponentFixture<SelectionCombatComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SelectionCombatComponent]
    });
    fixture = TestBed.createComponent(SelectionCombatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
