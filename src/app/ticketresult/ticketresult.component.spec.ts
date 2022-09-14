import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TicketresultComponent } from './ticketresult.component';

describe('TicketresultComponent', () => {
  let component: TicketresultComponent;
  let fixture: ComponentFixture<TicketresultComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TicketresultComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TicketresultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
