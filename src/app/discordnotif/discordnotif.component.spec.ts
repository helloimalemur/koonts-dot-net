import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiscordnotifComponent } from './discordnotif.component';

describe('DiscordnotifComponent', () => {
  let component: DiscordnotifComponent;
  let fixture: ComponentFixture<DiscordnotifComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DiscordnotifComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DiscordnotifComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
