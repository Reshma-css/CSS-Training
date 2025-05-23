import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CssTablesComponent } from './css-tables.component';

describe('CssTablesComponent', () => {
  let component: CssTablesComponent;
  let fixture: ComponentFixture<CssTablesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CssTablesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CssTablesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
