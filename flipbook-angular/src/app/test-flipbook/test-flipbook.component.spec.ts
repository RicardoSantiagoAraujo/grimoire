import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestFlipbookComponent } from './test-flipbook.component';

describe('TestFlipbookComponent', () => {
  let component: TestFlipbookComponent;
  let fixture: ComponentFixture<TestFlipbookComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TestFlipbookComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TestFlipbookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
