import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CssTransformsComponent } from './css-transforms.component';

describe('CssTransformsComponent', () => {
  let component: CssTransformsComponent;
  let fixture: ComponentFixture<CssTransformsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CssTransformsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CssTransformsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
