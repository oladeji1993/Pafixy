import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PayXComponent } from './pay-x.component';

describe('PayXComponent', () => {
  let component: PayXComponent;
  let fixture: ComponentFixture<PayXComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PayXComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PayXComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
