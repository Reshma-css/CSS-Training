import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BasicCSSComponent } from './basic-css.component';

describe('BasicCSSComponent', () => {
  let component: BasicCSSComponent;
  let fixture: ComponentFixture<BasicCSSComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BasicCSSComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BasicCSSComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
