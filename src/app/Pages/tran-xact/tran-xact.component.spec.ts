import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TranXactComponent } from './tran-xact.component';

describe('TranXactComponent', () => {
  let component: TranXactComponent;
  let fixture: ComponentFixture<TranXactComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TranXactComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TranXactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
