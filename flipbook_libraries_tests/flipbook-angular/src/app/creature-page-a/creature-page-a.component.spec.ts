import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreaturePageAComponent } from './creature-page-a.component';

describe('CreaturePageAComponent', () => {
  let component: CreaturePageAComponent;
  let fixture: ComponentFixture<CreaturePageAComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CreaturePageAComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CreaturePageAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
