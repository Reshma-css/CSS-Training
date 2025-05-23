import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CSSOutlineComponent } from './css-outline.component';

describe('CSSOutlineComponent', () => {
  let component: CSSOutlineComponent;
  let fixture: ComponentFixture<CSSOutlineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CSSOutlineComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CSSOutlineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
