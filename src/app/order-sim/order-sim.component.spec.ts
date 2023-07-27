import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderSimComponent } from './order-sim.component';

describe('OrderSimComponent', () => {
  let component: OrderSimComponent;
  let fixture: ComponentFixture<OrderSimComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrderSimComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OrderSimComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
