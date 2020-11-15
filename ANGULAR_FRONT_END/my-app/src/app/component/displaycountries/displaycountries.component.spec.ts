import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplaycountriesComponent } from './displaycountries.component';

describe('DisplaycountriesComponent', () => {
  let component: DisplaycountriesComponent;
  let fixture: ComponentFixture<DisplaycountriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DisplaycountriesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplaycountriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
