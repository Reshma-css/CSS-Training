import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DispalyPropertyComponent } from './dispaly-property.component';

describe('DispalyPropertyComponent', () => {
  let component: DispalyPropertyComponent;
  let fixture: ComponentFixture<DispalyPropertyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DispalyPropertyComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DispalyPropertyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
