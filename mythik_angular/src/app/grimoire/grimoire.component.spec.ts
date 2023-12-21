import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GrimoireComponent } from './grimoire.component';

describe('GrimoireComponent', () => {
  let component: GrimoireComponent;
  let fixture: ComponentFixture<GrimoireComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GrimoireComponent]
    });
    fixture = TestBed.createComponent(GrimoireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
