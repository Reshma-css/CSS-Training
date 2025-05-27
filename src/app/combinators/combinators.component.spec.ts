import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CombinatorsComponent } from './combinators.component';

describe('CombinatorsComponent', () => {
  let component: CombinatorsComponent;
  let fixture: ComponentFixture<CombinatorsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CombinatorsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CombinatorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
