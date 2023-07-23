import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccledgersComponent } from './accledgers.component';

describe('AccledgersComponent', () => {
  let component: AccledgersComponent;
  let fixture: ComponentFixture<AccledgersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AccledgersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AccledgersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
