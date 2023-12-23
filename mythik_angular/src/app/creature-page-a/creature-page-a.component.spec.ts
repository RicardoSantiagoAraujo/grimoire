import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreaturePageAComponent } from './creature-page-a.component';

describe('CreaturePageAComponent', () => {
  let component: CreaturePageAComponent;
  let fixture: ComponentFixture<CreaturePageAComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CreaturePageAComponent]
    });
    fixture = TestBed.createComponent(CreaturePageAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
