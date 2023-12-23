import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreaturePageBComponent } from './creature-page-b.component';

describe('CreaturePageBComponent', () => {
  let component: CreaturePageBComponent;
  let fixture: ComponentFixture<CreaturePageBComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CreaturePageBComponent]
    });
    fixture = TestBed.createComponent(CreaturePageBComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
